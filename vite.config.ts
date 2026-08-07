import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-node: hasil build berupa server Node standalone di `build/`
			// (`bun run build/index.js`). App ini SPA (`ssr = false`), jadi server-nya
			// hanya menyajikan aset statis + fallback SPA, tanpa SSR.
			adapter: adapter({ out: 'build' })
		})
	]
});
