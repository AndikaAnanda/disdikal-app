import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { registerSchema } from '$lib/schemas/register';
import type { Actions } from './$types';

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

		if (!parsed.success) {
			return fail(400, {
				values: {
					nomorPeserta: values.nomorPeserta,
					nik: values.nik,
					namaLengkap: values.namaLengkap,
					jenisKelamin: String(values.jenisKelamin ?? ''),
					tanggalLahir: String(values.tanggalLahir ?? ''),
					tempatLahir: values.tempatLahir,
					agama: String(values.agama ?? ''),
					email: values.email,
					noHp: values.noHp
				},
				errors: z.flattenError(parsed.error).fieldErrors
			});
		}

		// Belum ada tabel user maupun sesi di project ini, jadi pendaftaran
		// hanya memvalidasi format lalu meneruskan ke halaman login.
		redirect(303, '/login');
	}
};
