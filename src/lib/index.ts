// Public surface of the app library.

// API — the axios instance, typed endpoint helpers, and error utility
// (talks to the backend under /v1).
export { api, login, me, logout, register, getErrorMessage } from './api';
export type { HttpResponse, LoginRequest, LoginResponse, RegisterRequest } from './api';

// Global stores (PascalCaseStore).
export { AuthStore, type User } from './stores';

// Zod schemas shared by the forms.
export { loginSchema, registerSchema, type LoginInput, type RegisterInput } from './schemas';

// Runtime config — the only place env is read.
export { config, isBackendConfigured } from './config';

// Utilities.
export { cn } from './utils';
