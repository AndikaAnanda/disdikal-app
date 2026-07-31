import { browser } from '$app/environment';

export interface User {
	id: string;
	name: string;
	email: string;
	role: string;
	avatarUrl?: string;
}

const TOKEN_KEY = 'auth:token';
const REFRESH_KEY = 'auth:refresh';
const USER_KEY = 'auth:user';

// Auth state, persisted to localStorage. The access token is read by the API
// client; the refresh token lets the client mint a fresh access token when the
// current one expires. `ready` is false until the browser rehydrates, so route
// guards don't redirect before the session is known.
class Auth {
	accessToken = $state<string | null>(null);
	refreshToken = $state<string | null>(null);
	user = $state<User | null>(null);
	ready = $state(false);

	constructor() {
		// Rehydrate synchronously so the API client's request interceptor already
		// has a token when verifySession() fires the /auth/me check.
		if (browser) this.#rehydrate();
	}

	get isAuthenticated(): boolean {
		return this.accessToken !== null;
	}

	// Verify the rehydrated session against the backend before route guards run.
	// The /me fetcher is injected so this store never imports $lib/api — that
	// would be a cycle, since axios-instance.ts imports this store.
	async verifySession(fetchMe: () => Promise<User>): Promise<void> {
		if (browser && this.accessToken) {
			try {
				this.setUser(await fetchMe());
			} catch {
				this.logout();
			}
		}
		this.ready = true;
	}

	setUser(user: User): void {
		this.user = user;
		if (browser) localStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	setSession(accessToken: string, refreshToken: string, user: User): void {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
		this.user = user;
		if (browser) {
			localStorage.setItem(TOKEN_KEY, accessToken);
			localStorage.setItem(REFRESH_KEY, refreshToken);
			localStorage.setItem(USER_KEY, JSON.stringify(user));
		}
	}

	// Update only the access token (used during login before /me, and on refresh).
	setAccessToken(accessToken: string): void {
		this.accessToken = accessToken;
		if (browser) localStorage.setItem(TOKEN_KEY, accessToken);
	}

	logout(): void {
		this.accessToken = null;
		this.refreshToken = null;
		this.user = null;
		if (browser) {
			localStorage.removeItem(TOKEN_KEY);
			localStorage.removeItem(REFRESH_KEY);
			localStorage.removeItem(USER_KEY);
		}
	}

	#rehydrate(): void {
		const token = localStorage.getItem(TOKEN_KEY);
		const refresh = localStorage.getItem(REFRESH_KEY);
		const rawUser = localStorage.getItem(USER_KEY);
		if (!token || !rawUser) return;
		try {
			this.accessToken = token;
			this.refreshToken = refresh;
			this.user = JSON.parse(rawUser) as User;
		} catch {
			this.logout();
		}
	}
}

export const AuthStore = new Auth();
