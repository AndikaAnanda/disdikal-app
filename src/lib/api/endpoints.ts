import api from './axios-instance';
import { AuthStore, type User } from '$lib/stores/AuthStore.svelte';
import type { HttpResponse, LoginRequest, LoginResponse, RegisterRequest } from './types';

// --- Auth ----------------------------------------------------------------

export async function login(req: LoginRequest): Promise<LoginResponse> {
	// Login does not return the user, so fetch /me with the new token.
	const res = await api.post<HttpResponse<{ accessToken: string; refreshToken: string }>>(
		'/v1/auth/login',
		{ ...req, deviceName: 'web' },
		{ skipAuthRefresh: true } // never auto-refresh while logging in
	);
	const data = res.data.data!;
	AuthStore.setAccessToken(data.accessToken); // authorize the /me call below
	const user = await me();
	return { accessToken: data.accessToken, refreshToken: data.refreshToken, user };
}

export async function me(): Promise<User> {
	const res = await api.get<HttpResponse<User>>('/v1/auth/me');
	return res.data.data!;
}

export async function logout(): Promise<void> {
	try {
		if (AuthStore.refreshToken) {
			await api.post(
				'/v1/auth/logout',
				{ refreshToken: AuthStore.refreshToken },
				{ skipAuthRefresh: true }
			);
		}
	} finally {
		AuthStore.logout();
	}
}

// BELUM DIKONFIRMASI ke tim backend: path, apakah foto dikirim multipart, dan
// apakah respons langsung memberi token atau user harus login ulang. Sengaja
// diisolasi di satu fungsi supaya gampang disesuaikan saat kontraknya jadi.
export async function register(req: RegisterRequest): Promise<void> {
	const { foto, ...rest } = req;
	if (!foto) {
		await api.post('/v1/auth/register', rest, { skipAuthRefresh: true });
		return;
	}
	const body = new FormData();
	for (const [key, value] of Object.entries(rest)) body.append(key, value);
	body.append('foto', foto);
	await api.post('/v1/auth/register', body, {
		skipAuthRefresh: true,
		headers: { 'Content-Type': 'multipart/form-data' }
	});
}
