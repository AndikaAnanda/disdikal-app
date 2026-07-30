import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { zod4 } from 'sveltekit-superforms/adapters';
import { resolve } from '$app/paths';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { loginSchema } from '$lib/schemas/login';
import { verifyPassword } from '$lib/server/auth/password';
import {
	createSession,
	LONG_SESSION_DURATION_MS,
	SHORT_SESSION_DURATION_MS
} from '$lib/server/auth/session';
import { setSessionCookie } from '$lib/server/auth/cookies';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod4(loginSchema)) };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod4(loginSchema));
		if (!form.valid) return fail(400, { form });

		// Pesan generik di field password saja, supaya tidak membocorkan
		// apakah email-nya terdaftar.
		const invalidCredentials = () =>
			fail(400, { form: setError(form, 'password', 'Email atau password salah') });

		const [existing] = await db
			.select()
			.from(user)
			.where(eq(user.email, form.data.email))
			.limit(1);
		if (!existing) return invalidCredentials();

		const validPassword = await verifyPassword(form.data.password, existing.passwordHash);
		if (!validPassword) return invalidCredentials();

		const durationMs = form.data.remember ? LONG_SESSION_DURATION_MS : SHORT_SESSION_DURATION_MS;
		const { token, expiresAt } = await createSession(existing.id, durationMs);
		setSessionCookie(event, token, expiresAt);

		redirect(303, resolve('/'));
	}
};
