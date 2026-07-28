<script lang="ts">
	import { resolve } from '$app/paths';
	import iconDetail from '$lib/assets/subnav-logo/mdi_file-eye-outline.png';
	import iconDownload from '$lib/assets/subnav-logo/material-symbols_file-save-outline-rounded.png';
	import iconHome from '$lib/assets/subnav-logo/majesticons_home-analytics.png';
	import iconPengajuan from '$lib/assets/subnav-logo/fluent_form-new-20-regular.png';
	import iconPerpustakaan from '$lib/assets/subnav-logo/material-symbols_local-library-outline.png';
	import iconProfil from '$lib/assets/subnav-logo/material-symbols_person.png';
	import iconRiwayat from '$lib/assets/subnav-logo/mdi_file-sync-outline.png';
	import iconTesBahasa from '$lib/assets/subnav-logo/healthicons_i-exam-multiple-choice-outline.png';
	import { cn } from '$lib/utils';
	import type { NavTab, NavTabId } from '$lib/dashboard-data';

	let { tabs, title }: { tabs: NavTab[]; title: string } = $props();

	const icons: Record<NavTabId, string> = {
		home: iconHome,
		profil: iconProfil,
		pengajuan: iconPengajuan,
		'tes-bahasa': iconTesBahasa,
		riwayat: iconRiwayat,
		detail: iconDetail,
		download: iconDownload,
		perpustakaan: iconPerpustakaan
	};

	const tabBase =
		'flex items-center gap-1.75 border-b-2 border-transparent pb-1 text-[16px] whitespace-nowrap no-underline';
	const tabActive = 'border-(--brand-600) font-bold text-(--brand-600)';
	const tabIdle = 'text-[#55709E]';

	// PNG monokrom dipakai sebagai mask agar warnanya ikut currentColor.
	const iconMask = 'size-4 shrink-0 bg-current mask-contain mask-center mask-no-repeat';
</script>

<div class="border-b border-(--dash-border) bg-white px-12.5 py-5">
	<div class="mx-auto flex max-w-[1880px] flex-wrap items-center justify-between gap-4 px-5">
		<h1 class="text-[20px] font-bold text-(--navy-950)">{title}</h1>
		<nav class="flex flex-wrap items-center gap-6.5">
			{#each tabs as tab (tab.id)}
				{#if tab.id === 'home'}
					<a
						href={resolve('/')}
						class={cn(tabBase, tab.active ? tabActive : `${tabIdle} hover:text-(--brand-600)`)}
					>
						<span
							class={cn(iconMask, tab.active ? 'text-(--brand-600)' : 'text-[#9aa2b1]')}
							style="mask-image: url({icons[tab.id]})"
						></span>
						{tab.label}
					</a>
				{:else}
					<!-- Route tujuan belum dibuat, jadi non-navigable. -->
					<span class={cn(tabBase, tabIdle, 'cursor-default')} aria-disabled="true">
						<span
							class={cn(iconMask, 'text-[#9aa2b1]')}
							style="mask-image: url({icons[tab.id]})"
						></span>
						{tab.label}
					</span>
				{/if}
			{/each}
		</nav>
	</div>
</div>
