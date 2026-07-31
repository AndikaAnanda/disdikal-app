import { env } from '$env/dynamic/public';

// Runtime config — the only place env is read. Always $env/dynamic (runtime),
// never $env/static, so one build runs in any environment.
export const config = {
	apiBaseUrl: (env.PUBLIC_BASE_API_URL ?? '').trim()
};

// Whether a backend URL is set. Used to warn when PUBLIC_BASE_API_URL is missing.
export const isBackendConfigured = config.apiBaseUrl.length > 0;
