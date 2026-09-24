<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import type { DetailField } from '$lib/gun-gelar-data';

	let {
		items,
		class: className,
		labelWidth = 'w-40',
		trailing
	}: {
		items: DetailField[];
		class?: string;
		labelWidth?: string;
		trailing?: Snippet<[DetailField]>;
	} = $props();
</script>

<div class={cn('grid gap-x-10 gap-y-2.5', className)}>
	{#each items as item (item.label)}
		<div class="flex items-start gap-2 text-[11px]">
			<span class={cn('shrink-0 text-(--dash-muted)', labelWidth)}>{item.label}</span>
			<span class="shrink-0 text-(--dash-muted)">:</span>
			<span class="min-w-0 font-medium break-words text-(--dash-text)">
				{item.value}
				{#if trailing}{@render trailing(item)}{/if}
			</span>
		</div>
	{/each}
</div>
