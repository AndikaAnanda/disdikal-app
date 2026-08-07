<script lang="ts">
	import { iconClock, iconMail, iconPhone, iconSupport } from './icons';
	import helpdeskAgent from '$lib/assets/tes-bahasa-icon/helpdesk-agent.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { cn } from '$lib/utils';
	import type { BantuanInfo } from '$lib/tes-bahasa-data';
	import type { BantuanIntro } from '$lib/tutorial-kamera-data';

	// `intro` dan `class` dipakai halaman Tutorial Kamera, yang memakai blok yang
	// sama tapi dengan kalimat pengantar dan gaya kartu berbeda.
	let {
		data,
		intro,
		class: className
	}: { data: BantuanInfo; intro?: BantuanIntro; class?: string } = $props();

	const rows = $derived([
		{ id: 'phone', icon: iconPhone, value: data.phone },
		{ id: 'email', icon: iconMail, value: data.email },
		{ id: 'jam', icon: iconClock, value: data.jam }
	]);
</script>

<div
	class={cn(
		'relative overflow-hidden rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5',
		className
	)}
>
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconSupport} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Butuh Bantuan?</h2>
	</div>

	{#if intro}
		<p class="relative z-2 mb-4.5 text-[12px] text-[#343434]">
			{intro.text}
			<span class="block font-bold text-[#0071DA]">{intro.linkLabel}</span>
		</p>
	{/if}

	<div class="relative z-2 flex flex-col gap-3.5">
		{#each rows as row (row.id)}
			<span class="flex min-w-0 items-center gap-3">
				<MaskIcon src={row.icon} class="size-4 text-[#007CF0]" />
				<span class="truncate text-[12px] text-[#343434]">{row.value}</span>
			</span>
		{/each}
	</div>

	<img
		src={helpdeskAgent}
		alt=""
		class="pointer-events-none absolute right-3 bottom-0 z-1 w-24 object-contain opacity-90"
	/>
</div>
