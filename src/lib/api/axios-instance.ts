import axios from 'axios';
import { config } from '$lib/config';
import { AuthStore } from '$lib/stores/AuthStore.svelte';
import type { HttpResponse } from './types';

// Per-request flags read by the interceptors.
declare module 'axios' {
	export interface AxiosRequestConfig {
		// Skip the 401 → refresh → retry flow (login/logout/refresh calls set this).
		skipAuthRefresh?: boolean;
		// Internal: marks a request already retried once after a refresh.
		_retry?: boolean;
	}
}

// The shared axios instance. baseURL is the backend host only — the API version
// is written inline on each endpoint path (/v1/...) so an individual endpoint can
// be moved to /v2 independently. Import this directly and call
// `api.get<HttpResponse<T>>('/v1/...')`, or use the typed helpers in api/endpoints.ts.
export const api = axios.create({
	baseURL: config.apiBaseUrl,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

// Request interceptor: attach the AuthStore bearer token.
api.interceptors.request.use((cfg) => {
	if (AuthStore.accessToken) cfg.headers.set('Authorization', `Bearer ${AuthStore.accessToken}`);
	return cfg;
});

// Response interceptor: on 401, refresh the access token once and retry the
// original request. The refresh call uses the bare `axios` (not this instance) so
// it bypasses these interceptors and cannot recurse.
api.interceptors.response.use(
	(res) => res,
	async (error) => {
		const cfg = error.config;
		if (
			axios.isAxiosError(error) &&
			error.response?.status === 401 &&
			cfg &&
			!cfg._retry &&
			!cfg.skipAuthRefresh &&
			AuthStore.refreshToken
		) {
			cfg._retry = true;
			try {
				const res = await axios.post<HttpResponse<{ accessToken: string }>>(
					`${config.apiBaseUrl}/v1/auth/refresh`,
					{ refreshToken: AuthStore.refreshToken },
					{ headers: { Accept: 'application/json' } }
				);
				const token = res.data?.data?.accessToken;
				if (token) {
					AuthStore.setAccessToken(token);
					return api(cfg); // request interceptor re-sets the fresh token
				}
			} catch {
				// fall through and reject with the original error below
			}
		}
		return Promise.reject(error);
	}
);

export default api;
