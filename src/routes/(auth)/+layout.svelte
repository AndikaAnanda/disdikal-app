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
	<div class="auth-shell flex min-h-screen flex-col bg-(--auth-bg) text-(--auth-text)">
		<div class="sticky top-0 z-40">
			<TopBar />
			<LogoBar />
		</div>

		<main class="flex flex-1 flex-col {isLoginPage ? '' : 'bg-(--auth-bg)'}">
			<div
				class={isLoginPage
					? 'flex flex-1 flex-col'
					: `mx-auto w-full px-4 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pt-14 ${
							isRegisterPage ? 'max-w-260' : 'max-w-360'
						}`}
			>
				{@render children()}
			</div>
		</main>

		<AuthFooter />
	</div>
{/if}

<style>
	/* Token khas halaman auth, sengaja scoped seperti .dashboard-shell
	   supaya tidak bocor ke tema shadcn global di layout.css.
	   Nilai mengikuti proto design system; aman meski --brand-600 berubah
	   makna (navy -> hover biru) karena .dashboard-shell mendeklarasikan
	   ulang token bernama sama untuk dirinya sendiri. */
	.auth-shell {
		--navy-950: #0a2c6b;
		--brand-50: #eaf2fe;
		--brand-100: #e8f1fe;
		--brand-500: #1671e8;
		--brand-600: #0f5cc4;
		--auth-border: #e7edf7;
		--auth-text: #17233a;
		--auth-muted: #6b7a93;
		--auth-subtext: #5a6b85;
		--auth-hero-text: #4a5a75;
		--auth-bg: #f5f8fd;
		--auth-band-bg: #e7effa;
		--auth-bar-text: #c8d8f2;
		--auth-bar-icon: #9cbbec;
		--field-border: #e1e8f4;
		--field-border-ok: #bfe6cd;
		--field-bg-ok: #fafefb;
		--auth-success: #16a34a;
		--auth-tile-idle: #f1f5f9;
		--auth-cta-border: #dce8fa;
		--auth-cta-bg: #fbfdff;
		--auth-outline-border: #cbd8ec;
		--auth-disabled-bg: #e9eef6;
		--auth-disabled-text: #9aa8be;
		--input-autofill-bg: #ffffff;
		--input-autofill-text: #17233a;

		/* Khusus wizard register */
		--reg-amber: #e8a317;
		--reg-idle: #c7d2e3;
		--reg-idle-text: #b6c2d6;
		--reg-panel-bg: #f5f9ff;
		--reg-doc-warn-border: #f3c77e;
		--reg-doc-warn-bg: #fef4e6;
		--reg-doc-warn-text: #b45309;
		--reg-doc-ok-bg: #e9f8ef;
		--reg-foto-border: #93baf0;
		--reg-agree-bg: #edf7f1;
	}
</style>
