<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AppHeader from '$lib/components/dashboard/AppHeader.svelte';
	import SubNav from '$lib/components/dashboard/SubNav.svelte';
	import { currentUser, subNavTabs } from '$lib/dashboard-data';

	let { children } = $props();

	const home = resolve('/');
	const tabs = $derived(
		subNavTabs.map((tab) =>
			tab.id === 'home' ? { ...tab, active: page.url.pathname === home } : tab
		)
	);
	const title = $derived(page.url.pathname === home ? 'Dashboard' : 'Layanan');
</script>

<div class="dashboard-shell min-h-screen bg-[#f2f4f8] text-(--dash-text)">
	<!-- AppHeader + SubNav menempel sebagai satu unit; keduanya punya background
	     solid, jadi konten tidak menembus saat di-scroll. z-40 sengaja di bawah
	     overlay shadcn (z-50) supaya dropdown Select dan Dialog tetap di atasnya. -->
	<div class="sticky top-0 z-40">
		<AppHeader user={currentUser} />
		<SubNav {tabs} {title} />
	</div>
	<main class="py-5 pb-10">{@render children()}</main>
</div>

<style>
	/* Definisi token warna khas dashboard. Sengaja scoped ke .dashboard-shell,
	   bukan :root, supaya tidak bocor ke tema shadcn global di layout.css. */
	.dashboard-shell {
		--navy-950: #0b1e4a;
		--navy-900: #10285e;
		--brand-50: #eaf1fb;
		--brand-100: #dce9fa;
		--brand-500: #1e4fa0;
		--brand-600: #173f86;
		--dash-border: #e6e9f0;
		--dash-text: #1e2433;
		--dash-muted: #6b7688;
		--accent-green: #2f9e5f;
		--accent-green-50: #e9f9ef;
		--accent-yellow: #e0a11f;
		--accent-teal: #1aab97;
		--accent-orange: #e08a1f;
		--accent-orange-50: #fdf1e4;
		--accent-red: #d43a3a;
	}
</style>
