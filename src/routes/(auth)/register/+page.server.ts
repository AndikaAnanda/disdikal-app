import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import postgres from 'postgres';
import { resolve } from '$app/paths';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { registerSchema } from '$lib/schemas/register';
import { hashPassword } from '$lib/server/auth/password';
import type { Actions } from './$types';

const UNIQUE_VIOLATION_CODE = '23505';

type UniqueField = 'email' | 'nik' | 'nomorPeserta';

const UNIQUE_CONSTRAINT_FIELDS: Record<string, UniqueField> = {
	user_email_unique: 'email',
	user_nik_unique: 'nik',
	user_nomor_peserta_unique: 'nomorPeserta'
};

const UNIQUE_ERROR_MESSAGES: Record<UniqueField, string> = {
	email: 'Email sudah terdaftar',
	nik: 'NIK sudah terdaftar',
	nomorPeserta: 'Nomor peserta sudah terdaftar'
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const values = {
			nomorPeserta: String(form.get('nomorPeserta') ?? ''),
			nik: String(form.get('nik') ?? ''),
			namaLengkap: String(form.get('namaLengkap') ?? ''),
			jenisKelamin: form.get('jenisKelamin'),
			tanggalLahir: form.get('tanggalLahir'),
			tempatLahir: String(form.get('tempatLahir') ?? ''),
			agama: form.get('agama'),
			email: String(form.get('email') ?? ''),
			noHp: String(form.get('noHp') ?? ''),
			password: form.get('password'),
			confirmPassword: form.get('confirmPassword'),
			agreement: form.get('agreement')
		};
		const parsed = registerSchema.safeParse(values);

		const fieldValues = {
			nomorPeserta: values.nomorPeserta,
			nik: values.nik,
			namaLengkap: values.namaLengkap,
			jenisKelamin: String(values.jenisKelamin ?? ''),
			tanggalLahir: String(values.tanggalLahir ?? ''),
			tempatLahir: values.tempatLahir,
			agama: String(values.agama ?? ''),
			email: values.email,
			noHp: values.noHp
		};

		if (!parsed.success) {
			return fail(400, { values: fieldValues, errors: z.flattenError(parsed.error).fieldErrors });
		}

		// confirmPassword dan agreement hanya gate submit-time, bukan kolom DB.
		const {
			nomorPeserta,
			nik,
			namaLengkap,
			jenisKelamin,
			tanggalLahir,
			tempatLahir,
			agama,
			email,
			noHp,
			password
		} = parsed.data;
		const passwordHash = await hashPassword(password);

		try {
			await db.insert(user).values({
				nomorPeserta,
				nik,
				namaLengkap,
				jenisKelamin,
				tanggalLahir,
				tempatLahir,
				agama,
				email,
				noHp,
				passwordHash
			});
		} catch (err) {
			// Unik dicek lewat constraint DB (bukan pre-query) supaya bebas race,
			// lalu dipetakan balik ke field lewat constraint_name.
			if (err instanceof postgres.PostgresError && err.code === UNIQUE_VIOLATION_CODE) {
				const field = err.constraint_name
					? UNIQUE_CONSTRAINT_FIELDS[err.constraint_name]
					: undefined;
				if (field) {
					return fail(400, {
						values: fieldValues,
						errors: { [field]: [UNIQUE_ERROR_MESSAGES[field]] }
					});
				}
			}
			throw err;
		}

		redirect(303, resolve('/login'));
	}
};
