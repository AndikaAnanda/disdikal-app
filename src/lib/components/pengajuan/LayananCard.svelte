<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '$lib/components/ui/button';
	import { layananBg, layananIcon } from './assets';
	import type { LayananItem } from '$lib/pengajuan-data';

	let { item }: { item: LayananItem } = $props();

	const background = $derived(
		`linear-gradient(rgba(255,255,255,0.68), rgba(255,255,255,0.68)), url(${layananBg[item.id]})`
	);
</script>

<article
	class="flex h-full flex-col rounded-[10px] border border-(--dash-border) bg-white bg-cover bg-top bg-no-repeat p-4"
	style="background-image: {background}"
>
	<div class="flex items-center gap-2.5">
		<span
			class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-[0_2px_8px_rgba(10,44,107,0.1)]"
		>
			<img src={layananIcon[item.id]} alt="" class="size-5" />
		</span>
		<p class="text-[12px] font-bold tracking-[0.5px] text-(--accent-blue)">{item.code}</p>
	</div>

	<h2 class="mt-3.5 text-[12.5px] leading-snug font-bold text-(--navy-950)">{item.title}</h2>
	<p class="mt-1.5 max-w-75 text-[11px] leading-[1.7] text-pretty text-(--dash-muted)">
		{item.description}
	</p>

	<Button
		type="button"
		variant="outline"
		aria-disabled="true"
		class="mt-4 h-auto w-fit cursor-pointer gap-2 rounded-md border-(--accent-blue)/30 bg-white/80 px-3.5 py-1.5 text-[10.5px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)"
	>
		Lanjutkan Pengajuan
		<ArrowRightIcon class="size-3.5" strokeWidth={2.2} />
	</Button>
</article>
