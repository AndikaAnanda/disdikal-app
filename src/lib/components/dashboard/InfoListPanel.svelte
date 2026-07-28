<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import type { InfoListItem } from '$lib/dashboard-data';

	let { items }: { items: InfoListItem[] } = $props();
</script>

{#each items as item (item.id)}
	{@const Icon = item.icon === 'calendar' ? CalendarIcon : FileTextIcon}
	<div
		class="flex items-start gap-2.5 border-b border-(--dash-border) py-2.5 leading-5 first:pt-0 last:border-b-0 last:pb-0"
	>
		<Icon class="mt-0.5 size-4 shrink-0 text-[#01296E]" />
		<div class="flex-1">
			<p class="text-[12.5px] font-bold text-black">{item.title}</p>
			<p class="mt-0.5 text-[11.5px] text-black">{item.subtitle}</p>
		</div>
		<span class="shrink-0 text-[10.5px] whitespace-nowrap text-black">{item.date}</span>
	</div>
{/each}
