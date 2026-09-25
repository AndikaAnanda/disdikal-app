<script lang="ts">
	import MoreVerticalIcon from '@lucide/svelte/icons/more-vertical';
	import KoleksiActions, { koleksiBadge, koleksiKebab } from './KoleksiActions.svelte';
	import KoleksiCover from './KoleksiCover.svelte';
	import { statusDot, statusLabel, type KoleksiItem } from '$lib/perpustakaan-data';

	let { item }: { item: KoleksiItem } = $props();
</script>

<article class="flex h-full flex-col rounded-[10px] border border-(--dash-border) bg-white p-3.5">
	<div class="flex items-start justify-between gap-2">
		<span class={koleksiBadge}>{item.jenis}</span>
		<button
			type="button"
			aria-disabled="true"
			aria-label="Menu koleksi {item.judul}"
			class={koleksiKebab}
		>
			<MoreVerticalIcon class="size-4" strokeWidth={2} />
		</button>
	</div>

	<KoleksiCover {item} class="mt-2.5" />

	<h3 class="mt-3 line-clamp-2 text-[12.5px] leading-snug font-bold text-(--navy-950)">
		{item.judul}
	</h3>
	<p class="mt-1 line-clamp-1 text-[10px] text-(--dash-muted)">{item.penulis}</p>
	<p class="mt-0.5 text-[10px] text-(--dash-muted)">Tahun: {item.tahun}</p>

	<p class="mt-2 flex items-center gap-1.5 text-[10px] text-(--dash-muted)">
		<span class="size-1.5 shrink-0 rounded-full {statusDot(item)}"></span>
		{statusLabel(item)}
	</p>

	<KoleksiActions class="mt-3 pt-0.5" />
</article>
