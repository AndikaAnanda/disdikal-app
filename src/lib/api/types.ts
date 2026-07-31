import type { User } from '$lib/stores/AuthStore.svelte';

// Uniform backend response envelope. All app routes live under /v1 and wrap their
// payload as { message, data, error, meta } (keys lowercase). Consume as
// `api.get<HttpResponse<T>>(url)` and read `res.data.data`.
export interface HttpResponse<T> {
	message?: string;
	data?: T;
	error?: string;
	meta?: unknown;
}

// Pagination meta uses snake_case (mirrors the backend).
export interface PaginationMeta {
	total_count: number;
	total_page: number;
	page: number;
	count: number;
}

// --- Auth ----------------------------------------------------------------

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	accessToken: string;
	refreshToken: string;
	user: User;
}

// Mirrors registerSchema minus the submit-time-only fields (confirmPassword,
// agreement). `foto` is sent as multipart when present.
export interface RegisterRequest {
	nomorPeserta: string;
	nik: string;
	namaLengkap: string;
	jenisKelamin: string;
	tanggalLahir: string;
	tempatLahir: string;
	agama: string;
	email: string;
	noHp: string;
	password: string;
	foto?: File;
}
