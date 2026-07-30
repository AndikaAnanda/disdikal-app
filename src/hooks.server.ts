import type { Handle } from '@sveltejs/kit';
import { SESSION_COOKIE_NAME, validateSessionToken } from '$lib/server/auth/session';
import { clearSessionCookie } from '$lib/server/auth/cookies';

// Hanya mengisi locals dari cookie sesi; redirect jadi urusan
// +layout.server.ts per route group.
export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get(SESSION_COOKIE_NAME);

	if (!token) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await validateSessionToken(token);

	if (!session) {
		clearSessionCookie(event);
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};
