<script lang="ts">
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { resolve } from '$app/paths';
	import iconDownload from '$lib/assets/subnav-logo/material-symbols_file-save-outline-rounded.png';
	import iconHome from '$lib/assets/subnav-logo/majesticons_home-analytics.png';
	import iconPengajuan from '$lib/assets/subnav-logo/fluent_form-new-20-regular.png';
	import iconPerpustakaan from '$lib/assets/subnav-logo/material-symbols_local-library-outline.png';
	import iconProfil from '$lib/assets/subnav-logo/material-symbols_person.png';
	import iconRiwayat from '$lib/assets/subnav-logo/mdi_file-sync-outline.png';
	import iconTesBahasa from '$lib/assets/subnav-logo/healthicons_i-exam-multiple-choice-outline.png';
	import { cn } from '$lib/utils';
	import type { NavTab, NavTabId } from '$lib/dashboard-data';

	let { tabs, title }: { tabs: NavTab[]; title: string | string[] } = $props();

	const segments = $derived(Array.isArray(title) ? title : [title]);

	const icons: Record<NavTabId, string> = {
		home: iconHome,
		profil: iconProfil,
		pengajuan: iconPengajuan,
		'tes-bahasa': iconTesBahasa,
		riwayat: iconRiwayat,
		download: iconDownload,
		perpustakaan: iconPerpustakaan
	};

	const tabBase =
		'flex shrink-0 items-center gap-1.5 border-b-2 border-transparent pb-1.5 text-[12.5px] whitespace-nowrap no-underline';
	const tabActive = 'border-(--navy-950) font-semibold text-(--navy-950)';
	const tabIdle = 'text-[#55709E]';

	// PNG monokrom dipakai sebagai mask agar warnanya ikut currentColor.
	const iconMask = 'size-3.75 shrink-0 bg-current mask-contain mask-center mask-no-repeat';
</script>

{#snippet tabInner(tab: NavTab)}
	<span
		class={cn(iconMask, tab.active ? 'text-(--navy-950)' : 'text-[#9aa2b1]')}
		style="mask-image: url({icons[tab.id]})"
	></span>
	{tab.label}
{/snippet}

<div class="border-b border-(--dash-border) bg-white px-4 py-2.5 sm:px-6 lg:px-12.5 lg:py-3">
	<div
		class="mx-auto flex max-w-[1880px] flex-wrap items-center justify-between gap-3 sm:gap-4 lg:px-5"
	>
		<h1 class="flex items-center gap-1.5 text-[15px] font-bold">
			{#each segments as segment, index (segment)}
				{#if index > 0}
					<ChevronRightIcon class="size-3.5 shrink-0 text-[#9aa2b1]" strokeWidth={2.4} />
				{/if}
				<span class={index === segments.length - 1 ? 'text-(--navy-950)' : 'text-[#55709E]'}>
					{segment}
				</span>
			{/each}
		</h1>
		<!-- Di bawah lg tab di-scroll horizontal, bukan di-wrap: 7 tab nowrap akan
		     menumpuk jadi beberapa baris dan chrome ini sticky, jadi memakan layar. -->
		<nav
			class="flex w-full min-w-0 scrollbar-none items-center gap-5 overflow-x-auto pb-1 lg:w-auto lg:flex-wrap lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
		>
			{#each tabs as tab (tab.id)}
				{@const linkClass = cn(
					tabBase,
					tab.active ? tabActive : `${tabIdle} hover:text-(--navy-950)`
				)}
				<!-- resolve() harus muncul langsung di href (lint
				     svelte/no-navigation-without-resolve), jadi tiap route dicabangkan
				     eksplisit; isi tab dibagi lewat snippet supaya tidak terduplikasi. -->
				{#if tab.id === 'home'}
					<a href={resolve('/')} class={linkClass}>{@render tabInner(tab)}</a>
				{:else if tab.id === 'profil'}
					<a href={resolve('/profil')} class={linkClass}>{@render tabInner(tab)}</a>
				{:else if tab.id === 'pengajuan'}
					<a href={resolve('/pengajuan-layanan')} class={linkClass}>{@render tabInner(tab)}</a>
				{:else if tab.id === 'tes-bahasa'}
					<a href={resolve('/tes-bahasa-inggris')} class={linkClass}>{@render tabInner(tab)}</a>
				{:else}
					<!-- Route tujuan belum dibuat, jadi non-navigable. -->
					<span class={cn(tabBase, tabIdle, 'cursor-default')} aria-disabled="true">
						{@render tabInner(tab)}
					</span>
				{/if}
			{/each}
		</nav>
	</div>
</div>
