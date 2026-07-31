// Client-rendered SPA: auth is verified in the browser (GET /v1/auth/me) and the
// route-group layouts redirect with goto() inside their render gate, which is
// only safe without SSR.
export const ssr = false;
export const prerender = false;
