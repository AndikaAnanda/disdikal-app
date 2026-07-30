import { fail, redirect } from '@sveltejs/kit';
import postgres from 'postgres';
import { setError, superValidate, withFiles } from 'sveltekit-superforms/server';
import { zod4 } from 'sveltekit-superforms/adapters';
import { resolve } from '$app/paths';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { registerSchema } from '$lib/schemas/register';
import { hashPassword } from '$lib/server/auth/password';
import type { Actions, PageServerLoad } from './$types';

const UNIQUE_VIOLATION_CODE = '23505';

type UniqueField = 'email' | 'nik' | 'nomorPeserta';

// Nama constraint mengikuti pola otomatis Drizzle: `${table}_${column}_unique`.
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

// unrepresentable: 'any' wajib — z.instanceof(File) tidak punya padanan
// di JSON Schema dan adapter akan melempar error tanpa opsi ini.
const adapter = zod4(registerSchema, { config: { unrepresentable: 'any' } });

export const load: PageServerLoad = async () => {
	return { form: await superValidate(adapter) };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, adapter, { allowFiles: true });
		if (!form.valid) return fail(400, withFiles({ form }));

		// confirmPassword, agreement, dan foto bukan kolom DB.
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
		} = form.data;
		const passwordHash = await hashPassword(password);

		try {
			await db.insert(user).values({
				nomorPeserta,
				nik,
				namaLengkap,
				jenisKelamin,
				tanggalLahir: new Date(tanggalLahir),
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
					return fail(400, withFiles({ form: setError(form, field, UNIQUE_ERROR_MESSAGES[field]) }));
				}
			}
			throw err;
		}

		redirect(303, resolve('/login'));
	}
};
