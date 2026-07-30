import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
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
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const form = await event.request.formData();
		const email = String(form.get('email') ?? '');
		const remember = form.get('remember') === 'on';

		const parsed = loginSchema.safeParse({ email, password: form.get('password') });
		if (!parsed.success) {
			return fail(400, { values: { email }, errors: z.flattenError(parsed.error).fieldErrors });
		}

		const invalidCredentials = () =>
			fail(400, { values: { email }, errors: { password: ['Email atau password salah'] } });

		const [existing] = await db
			.select()
			.from(user)
			.where(eq(user.email, parsed.data.email))
			.limit(1);
		if (!existing) return invalidCredentials();

		const validPassword = await verifyPassword(parsed.data.password, existing.passwordHash);
		if (!validPassword) return invalidCredentials();

		const durationMs = remember ? LONG_SESSION_DURATION_MS : SHORT_SESSION_DURATION_MS;
		const { token, expiresAt } = await createSession(existing.id, durationMs);
		setSessionCookie(event, token, expiresAt);

		redirect(303, resolve('/'));
	}
};
