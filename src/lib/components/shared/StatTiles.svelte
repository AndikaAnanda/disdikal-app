<script lang="ts" module>
	import type { LucideIcon } from '@lucide/svelte';

	export type StatTone = 'blue' | 'green' | 'orange' | 'red' | 'purple';

	export interface StatTile {
		id: string;
		label: string;
		value: string | number;
		sub?: string;
		icon: LucideIcon;
		tone: StatTone;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	let { items, class: className }: { items: StatTile[]; class?: string } = $props();

	const tile: Record<StatTone, string> = {
		blue: 'bg-(--accent-blue)',
		green: 'bg-(--accent-green)',
		orange: 'bg-(--accent-orange)',
		red: 'bg-(--accent-red)',
		purple: 'bg-(--accent-purple)'
	};
	const text: Record<StatTone, string> = {
		blue: 'text-(--accent-blue)',
		green: 'text-(--accent-green)',
		orange: 'text-(--accent-orange)',
		red: 'text-(--accent-red)',
		purple: 'text-(--accent-purple)'
	};
	const box: Record<StatTone, string> = {
		blue: 'bg-(--accent-blue-50)/60 border-(--accent-blue)/20',
		green: 'bg-(--accent-green-50)/60 border-(--accent-green)/20',
		orange: 'bg-(--accent-orange-50)/60 border-(--accent-orange)/20',
		red: 'bg-(--accent-red-50)/60 border-(--accent-red)/20',
		purple: 'bg-(--accent-purple-50)/60 border-(--accent-purple)/20'
	};
</script>

<div class={cn('grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4', className)}>
	{#each items as item (item.id)}
		{@const Icon = item.icon}
		<div class="flex items-center gap-3 rounded-[10px] border px-4 py-3.5 {box[item.tone]}">
			<span
				class="flex size-9 shrink-0 items-center justify-center rounded-lg text-white {tile[
					item.tone
				]}"
			>
				<Icon class="size-4.5" strokeWidth={2.2} />
			</span>
			<div class="min-w-0">
				<p class="text-[10.5px] font-semibold {text[item.tone]}">{item.label}</p>
				<p class="text-[15px] leading-tight font-bold text-(--dash-text)">{item.value}</p>
				{#if item.sub}
					<p class="text-[9.5px] text-(--dash-muted)">{item.sub}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>
