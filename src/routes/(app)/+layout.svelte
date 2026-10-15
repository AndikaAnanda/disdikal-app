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

	const allowed = $derived(!isBackendConfigured || AuthStore.isAuthenticated);

	function redirectToLogin(): string {
		goto(resolve('/login'));
		return '';
	}

	const home = resolve('/');
	const profil = resolve('/profil');
	const pengajuan = resolve('/pengajuan-layanan');
	const gunGelar = resolve('/pengajuan-layanan/gun-gelar');
	const gunGelarDetail = `${gunGelar}/detail`;
	const dataDik = resolve('/pengajuan-layanan/update-data-dik');
	const tesBahasa = resolve('/tes-bahasa-inggris');
	const tutorialKamera = resolve('/tes-bahasa-inggris/tutorial');
	const tesListening = resolve('/tes-bahasa-inggris/tes');
	const listeningQuiz = resolve('/tes-bahasa-inggris/tes/listening');
	const structureQuiz = resolve('/tes-bahasa-inggris/tes/structure');
	const readingQuiz = resolve('/tes-bahasa-inggris/tes/reading');
	const downloadHasil = resolve('/download-hasil');
	const perpustakaan = resolve('/perpustakaan');
	const routedTabs: Partial<Record<NavTabId, string[]>> = {
		perpustakaan: [perpustakaan],
		home: [home],
		profil: [profil],
		pengajuan: [pengajuan],
		download: [downloadHasil],
		'tes-bahasa': [
			tesBahasa,
			tutorialKamera,
			tesListening,
			listeningQuiz,
			structureQuiz,
			readingQuiz
		]
	};
	const matches = (pathname: string, p: string) => pathname === p || pathname.startsWith(p + '/');
	const tabs = $derived(
		subNavTabs.map((tab) =>
			routedTabs[tab.id]
				? { ...tab, active: routedTabs[tab.id]!.some((p) => matches(page.url.pathname, p)) }
				: tab
		)
	);
	const pageTitles: Record<string, string | string[]> = {
		[home]: 'Dashboard',
		[profil]: 'Profil Saya',
		[pengajuan]: 'Pengajuan Layanan',
		[gunGelar]: ['Pengajuan Layanan', 'Gun Gelar'],
		[gunGelarDetail]: 'Detail Pengajuan',
		[dataDik]: ['Pengajuan Layanan', 'Update Data Dik'],
		[tesBahasa]: 'Tes Bahasa Inggris',
		[tutorialKamera]: 'Tes Bahasa Inggris',
		[tesListening]: 'Listening Comprehension',
		[listeningQuiz]: 'Listening Comprehension',
		[structureQuiz]: 'Structure & Written Expression',
		[readingQuiz]: 'Reading Comprehension',
		[downloadHasil]: 'Download Hasil',
		[perpustakaan]: 'Perpustakaan'
	};
	const titleEntries = Object.entries(pageTitles).sort(([a], [b]) => b.length - a.length);
	const title = $derived(
		titleEntries.find(([p]) => matches(page.url.pathname, p))?.[1] ?? 'Layanan'
	);
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
	:global(.dashboard-shell) {
		--navy-950: #0b1e4a;
		--navy-900: #10285e;
		--brand-50: #eaf1fb;
		--brand-100: #dce9fa;
		--brand-500: #1e4fa0;
		--brand-600: #173f86;
		--dash-border: #e6e9f0;
		--dash-text: #1e2433;
		--dash-muted: #6b7688;
		--dash-track: #e9edf4;
		--dash-accent: #ffa554;
		--accent-blue: #1e6fe8;
		--accent-blue-50: #e8f1fd;
		--accent-green: #22b36b;
		--accent-green-50: #e9f9ef;
		--accent-yellow: #e0a11f;
		--accent-orange: #f0932b;
		--accent-orange-50: #fdf1e4;
		--accent-purple: #7c5ce6;
		--accent-purple-50: #efeafc;
		--accent-pink: #e04f9a;
		--accent-red: #d43a3a;
		--accent-red-50: #fde8e8;
		--schedule-bg: #fff8f0;
		--schedule-border: #f6ddc2;
		--dash-placeholder: #eef2f7;
		--field-border: var(--dash-border);
		--field-icon: var(--dash-muted);
		--field-border-ok: #bfe6cd;
		--field-bg-ok: #fafefb;
		--auth-text: var(--dash-text);
		--auth-muted: var(--dash-muted);
		--auth-success: var(--accent-green);
		--input-autofill-bg: #ffffff;
		--input-autofill-text: var(--dash-text);
	}
</style>
