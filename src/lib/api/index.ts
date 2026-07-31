// The shared axios instance (Bearer auth + 401-refresh interceptors).
export { default, api } from './axios-instance';

// Typed endpoint helpers.
export { login, me, logout, register } from './endpoints';

// Error helper.
export { getErrorMessage } from './error';

export type {
	HttpResponse,
	LoginRequest,
	LoginResponse,
	PaginationMeta,
	RegisterRequest
} from './types';
