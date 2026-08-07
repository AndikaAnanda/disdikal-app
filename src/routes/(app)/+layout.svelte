<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AppHeader from '$lib/components/dashboard/AppHeader.svelte';
	import SubNav from '$lib/components/dashboard/SubNav.svelte';
	import { isBackendConfigured } from '$lib/config';
	import { AuthStore } from '$lib/stores';
	import { currentUser, subNavTabs, type NavTabId } from '$lib/dashboard-data';

	let { children } = $props();

	// Gerbang dev: selama PUBLIC_BASE_API_URL kosong (backend belum ada) login
	// mustahil, jadi dashboard dibiarkan terbuka supaya tetap bisa dikembangkan.
	// Begitu env-nya diisi, guard asli aktif sendiri tanpa mengubah kode.
	const allowed = $derived(!isBackendConfigured || AuthStore.isAuthenticated);

	function redirectToLogin(): string {
		goto(resolve('/login'));
		return '';
	}

	const home = resolve('/');
	const profil = resolve('/profil');
	const dokumen = resolve('/dokumen');
	const tesBahasa = resolve('/tes-bahasa-inggris');
	const tutorialKamera = resolve('/tes-bahasa-inggris/tutorial');
	const tesListening = resolve('/tes-bahasa-inggris/tes');
	// /dokumen adalah sub-halaman Profil: tidak punya tab sendiri, tapi ikut
	// menyalakan tab "Profil Saya" dan memakai judul yang sama.
	const routedTabs: Partial<Record<NavTabId, string[]>> = {
		home: [home],
		profil: [profil, dokumen],
		'tes-bahasa': [tesBahasa, tutorialKamera, tesListening]
	};
	const tabs = $derived(
		subNavTabs.map((tab) =>
			routedTabs[tab.id] ? { ...tab, active: routedTabs[tab.id]!.includes(page.url.pathname) } : tab
		)
	);
	const pageTitles: Record<string, string> = {
		[home]: 'Dashboard',
		[profil]: 'Profil Saya',
		[dokumen]: 'Profil Saya',
		[tesBahasa]: 'Tes Bahasa Inggris',
		[tutorialKamera]: 'Tes Bahasa Inggris',
		[tesListening]: 'Listening Comprehension'
	};
	const title = $derived(pageTitles[page.url.pathname] ?? 'Layanan');
</script>

{#if !AuthStore.ready}
	<div class="grid min-h-screen place-items-center bg-[#f2f4f8]">
		<div
			class="size-6 animate-spin rounded-full border-2 border-[#c3d1e8] border-t-[#0071DA]"
		></div>
	</div>
{:else if allowed}
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
{:else}
	{redirectToLogin()}
{/if}

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
