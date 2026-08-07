<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		percent,
		fill = '#54a7f5',
		track = '#ffffff',
		class: className,
		innerClass,
		children
	}: {
		percent: number;
		fill?: string;
		track?: string;
		class?: string;
		innerClass?: string;
		children: Snippet;
	} = $props();
</script>

<div
	class={cn('completion-ring flex shrink-0 items-center justify-center rounded-full', className)}
	style="--pct: {percent}%; --completion-fill: {fill}; --completion-track: {track}"
>
	<div
		class={cn(
			'flex flex-col items-center justify-center rounded-full bg-[#12327a] text-white',
			innerClass
		)}
	>
		{@render children()}
	</div>
</div>

<style>
	/* conic-gradient digerakkan custom property --pct dari inline style.
	   Tidak ada utility Tailwind maupun komponen ring di shadcn/Bits UI.
	   Nama --completion-* dipakai supaya tidak rancu dengan token --ring shadcn. */
	.completion-ring {
		background: conic-gradient(
			var(--completion-fill) 0 var(--pct),
			var(--completion-track) var(--pct) 100%
		);
	}
</style>
