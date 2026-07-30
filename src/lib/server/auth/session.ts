import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { session, user } from '$lib/server/db/schema';

export const SESSION_COOKIE_NAME = 'session';

const DAY_MS = 1000 * 60 * 60 * 24;
export const SHORT_SESSION_DURATION_MS = DAY_MS; // "Ingat saya" tidak dicentang
export const LONG_SESSION_DURATION_MS = DAY_MS * 30; // "Ingat saya" dicentang

// Kolom yang aman diekspos ke event.locals.user — tanpa passwordHash.
const publicUserColumns = {
	id: user.id,
	nomorPeserta: user.nomorPeserta,
	nik: user.nik,
	namaLengkap: user.namaLengkap,
	jenisKelamin: user.jenisKelamin,
	tanggalLahir: user.tanggalLahir,
	tempatLahir: user.tempatLahir,
	agama: user.agama,
	email: user.email,
	noHp: user.noHp,
	status: user.status,
	createdAt: user.createdAt
};

function generateSessionToken(): string {
	const bytes = new Uint8Array(32);
	crypto.getRandomValues(bytes);
	return Buffer.from(bytes).toString('base64url');
}

export async function createSession(userId: number, durationMs: number) {
	const token = generateSessionToken();
	const expiresAt = new Date(Date.now() + durationMs);
	await db.insert(session).values({ id: token, userId, expiresAt });
	return { token, expiresAt };
}

export async function validateSessionToken(token: string) {
	const [row] = await db
		.select({ session, user: publicUserColumns })
		.from(session)
		.innerJoin(user, eq(session.userId, user.id))
		.where(eq(session.id, token))
		.limit(1);

	if (!row) return { session: null, user: null };

	if (row.session.expiresAt.getTime() < Date.now()) {
		await db.delete(session).where(eq(session.id, token));
		return { session: null, user: null };
	}

	return row;
}

export async function invalidateSession(token: string) {
	await db.delete(session).where(eq(session.id, token));
}

export type PublicUser = NonNullable<Awaited<ReturnType<typeof validateSessionToken>>['user']>;
