import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { loginSchema } from '$lib/schemas/login';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const email = String(form.get('email') ?? '');
		const parsed = loginSchema.safeParse({ email, password: form.get('password') });

		if (!parsed.success) {
			return fail(400, { values: { email }, errors: z.flattenError(parsed.error).fieldErrors });
		}

		// Belum ada tabel user maupun sesi di project ini, jadi login hanya
		// memvalidasi format lalu meneruskan ke dashboard.
		redirect(303, '/');
	}
};
