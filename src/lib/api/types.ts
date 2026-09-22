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

export interface ChangePasswordRequest {
	currentPassword: string;
	newPassword: string;
}

// Mirrors registerSchema minus the submit-time-only field (confirmPassword).
// File fields are sent as multipart when any of them is present.
export interface RegisterRequest {
	namaLengkap: string;
	nik: string;
	tanggalLahir: string;
	jenisKelamin: string;
	pendidikanTerakhir: string;
	jurusan: string;
	provinsi: string;
	kabupatenKota: string;
	alamat: string;
	noHp: string;
	email: string;
	namaPengguna: string;
	password: string;
	kodeVerifikasi: string;
	foto?: File;
	ktp?: File;
	ijazah?: File;
	transkrip?: File;
	suratSehat?: File;
}
