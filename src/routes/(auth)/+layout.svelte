<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AuthFooter from '$lib/components/auth/AuthFooter.svelte';
	import LogoBar from '$lib/components/auth/LogoBar.svelte';
	import TopBar from '$lib/components/auth/TopBar.svelte';
	import { AuthStore } from '$lib/stores';

	let { children } = $props();

	const isRegisterPage = $derived(page.url.pathname === resolve('/register'));
	const isLoginPage = $derived(page.url.pathname === resolve('/login'));

	// Yang sudah login tidak perlu melihat form login/register.
	function redirectToDashboard(): string {
		goto(resolve('/'));
		return '';
	}
</script>

{#if AuthStore.ready && AuthStore.isAuthenticated}
	{redirectToDashboard()}
{:else}
	<div class="auth-shell flex min-h-screen flex-col bg-white text-(--auth-text)">
		<div class="sticky top-0 z-40">
			<TopBar />
			<LogoBar />
		</div>

		<main
			class="flex-1 bg-linear-to-b from-(--brand-50) to-[#f5f8fd] {isLoginPage ? 'login-bg' : ''}"
		>
			<div
				class="mx-auto px-4 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pt-14 {isRegisterPage
					? 'max-w-420'
					: 'max-w-360'}"
			>
				{@render children()}
			</div>
		</main>

		<AuthFooter />
	</div>
{/if}

<style>
	/* Token khas halaman auth, sengaja scoped seperti .dashboard-shell
	   supaya tidak bocor ke tema shadcn global di layout.css. */
	.auth-shell {
		--navy-950: #0b1e4a;
		--auth-navy-900: #0e2559;
		--brand-50: #eaf1fb;
		--brand-100: #dce9fa;
		--brand-500: #1e4fa0;
		--brand-600: #173f86;
		--auth-border: #e2e6ee;
		--auth-text: #1e2433;
		--auth-muted: #6b7688;
	}

	/* Gradient ditulis ulang di sini karena background-image dari
	   bg-linear-to-b tertimpa oleh rule ini (style scoped Svelte tidak
	   ber-@layer, jadi mengalahkan utilities Tailwind).
	   100% auto + anchor bawah dipilih, bukan cover: isi ilustrasinya
	   menumpuk di bawah dan atasnya kosong, jadi cover akan meng-crop
	   figurnya secara horizontal di viewport yang tinggi. */
	.login-bg {
		background-image:
			url('../../lib/assets/bg/login-bg.png'), linear-gradient(to bottom, var(--brand-50), #f5f8fd);
		background-repeat: no-repeat;
		background-position:
			bottom center,
			center;
		background-size:
			100% auto,
			cover;
	}
</style>
