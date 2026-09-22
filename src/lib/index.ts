// Public surface of the app library.

// API — the axios instance, typed endpoint helpers, and error utility
// (talks to the backend under /v1).
export { api, login, me, logout, register, changePassword, getErrorMessage } from './api';
export type {
	ChangePasswordRequest,
	HttpResponse,
	LoginRequest,
	LoginResponse,
	RegisterRequest
} from './api';

// Global stores (PascalCaseStore).
export { AuthStore, type User } from './stores';

// Zod schemas shared by the forms.
export {
	loginSchema,
	registerSchema,
	changePasswordSchema,
	type LoginInput,
	type RegisterInput,
	type ChangePasswordInput
} from './schemas';

// Runtime config — the only place env is read.
export { config, isBackendConfigured } from './config';

// Utilities.
export { cn } from './utils';
