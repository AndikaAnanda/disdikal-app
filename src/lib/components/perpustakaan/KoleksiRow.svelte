<script lang="ts">
	import MoreVerticalIcon from '@lucide/svelte/icons/more-vertical';
	import KoleksiActions, { koleksiBadge, koleksiKebab } from './KoleksiActions.svelte';
	import KoleksiCover from './KoleksiCover.svelte';
	import { statusDot, statusLabel, type KoleksiItem } from '$lib/perpustakaan-data';

	let { item }: { item: KoleksiItem } = $props();
</script>

<article
	class="flex items-center gap-3.5 rounded-[10px] border border-(--dash-border) bg-white p-3.5"
>
	<KoleksiCover {item} class="w-14 shrink-0" />

	<div class="min-w-0 flex-1">
		<div class="flex flex-wrap items-center gap-2">
			<span class={koleksiBadge}>{item.jenis}</span>
			<h3 class="min-w-0 text-[12.5px] leading-snug font-bold text-(--navy-950)">{item.judul}</h3>
		</div>
		<p class="mt-1 text-[10px] text-(--dash-muted)">{item.penulis} · Tahun: {item.tahun}</p>
		<p class="mt-1 flex items-center gap-1.5 text-[10px] text-(--dash-muted)">
			<span class="size-1.5 shrink-0 rounded-full {statusDot(item)}"></span>
			{statusLabel(item)}
		</p>
	</div>

	<KoleksiActions class="shrink-0" />

	<button
		type="button"
		aria-disabled="true"
		aria-label="Menu koleksi {item.judul}"
		class={koleksiKebab}
	>
		<MoreVerticalIcon class="size-4" strokeWidth={2} />
	</button>
</article>
