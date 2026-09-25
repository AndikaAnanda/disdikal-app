<script lang="ts">
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import { cn } from '$lib/utils';
	import { coverImage } from './assets';
	import type { CoverTone, KoleksiItem } from '$lib/perpustakaan-data';

	let { item, class: className }: { item: KoleksiItem; class?: string } = $props();

	const gradient: Record<CoverTone, string> = {
		navy: 'from-[#0b1e4a] to-[#1e4fa0]',
		blue: 'from-[#1e6fe8] to-[#5aa2f5]',
		teal: 'from-[#0f766e] to-[#2fb3a6]',
		slate: 'from-[#475569] to-[#8fa3bd]',
		amber: 'from-[#b45309] to-[#f0932b]',
		green: 'from-[#15803d] to-[#4ec97f]'
	};

	const src = $derived(coverImage[item.id]);
</script>

<div class={cn('aspect-[3/4] overflow-hidden rounded-md', className)}>
	{#if src}
		<img {src} alt={item.judul} class="h-full w-full object-cover" />
	{:else}
		<div
			class={cn(
				'flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br px-3 py-4 text-center',
				gradient[item.cover]
			)}
		>
			<BookOpenIcon class="size-5 shrink-0 text-white/70" strokeWidth={1.8} />
			<p class="line-clamp-4 text-[10px] leading-snug font-bold tracking-wide text-white uppercase">
				{item.judul}
			</p>
			<span class="text-[8.5px] font-medium tracking-[0.5px] text-white/70 uppercase">
				{item.jenis}
			</span>
		</div>
	{/if}
</div>
