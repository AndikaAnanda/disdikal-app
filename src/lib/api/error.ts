import axios from 'axios';
import type { HttpResponse } from './types';

// Extract a human-readable message from an unknown error thrown by an axios call.
// Prefers the backend envelope's `error`/`message`, falls back to the axios error
// message, then to the caller-supplied fallback for non-axios/unknown failures.
export function getErrorMessage(err: unknown, fallback: string): string {
	if (axios.isAxiosError(err)) {
		const body = err.response?.data as HttpResponse<unknown> | undefined;
		return body?.error || body?.message || err.message || fallback;
	}
	if (err instanceof Error && err.message) return err.message;
	return fallback;
}
