<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import type { InfoListItem } from '$lib/dashboard-data';

	let { items }: { items: InfoListItem[] } = $props();
</script>

{#each items as item (item.id)}
	<div
		class="flex items-start gap-2.5 border-b border-(--dash-border) py-2.5 first:pt-0 last:border-b-0 last:pb-0"
	>
		<span
			class="flex size-6.5 shrink-0 items-center justify-center rounded-md bg-(--brand-50) text-(--brand-600)"
		>
			{#if item.icon === 'calendar'}
				<CalendarIcon class="size-3.25" />
			{:else}
				<FileTextIcon class="size-3.25" />
			{/if}
		</span>
		<div class="flex-1">
			<p class="text-[12.5px] font-bold text-(--navy-950)">{item.title}</p>
			<p class="mt-0.5 text-[11.5px] text-[#8b95a8]">{item.subtitle}</p>
		</div>
		<span class="shrink-0 text-[10.5px] whitespace-nowrap text-[#a9b0bd]">{item.date}</span>
	</div>
{/each}
