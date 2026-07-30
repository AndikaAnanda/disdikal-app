// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { session as sessionTable } from '$lib/server/db/schema';
import type { PublicUser } from '$lib/server/auth/session';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: PublicUser | null;
			session: typeof sessionTable.$inferSelect | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
