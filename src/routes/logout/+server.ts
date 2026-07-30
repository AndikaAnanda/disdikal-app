import { redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';
import { SESSION_COOKIE_NAME, invalidateSession } from '$lib/server/auth/session';
import { clearSessionCookie } from '$lib/server/auth/cookies';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
	const token = event.cookies.get(SESSION_COOKIE_NAME);
	if (token) {
		await invalidateSession(token);
	}
	clearSessionCookie(event);
	redirect(303, resolve('/login'));
};
