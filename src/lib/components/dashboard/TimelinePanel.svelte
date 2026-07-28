<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import type { TimelineGroup } from '$lib/dashboard-data';

	let { groups }: { groups: TimelineGroup[] } = $props();
</script>

{#each groups as group, i (group.date)}
	<div class={i > 0 ? 'mt-4 border-t border-(--dash-border) pt-4' : ''}>
		<p class="mb-2.5 text-[12.5px] font-bold text-(--navy-950)">{group.date}</p>
		{#each group.entries as entry (entry.time + entry.text)}
			<div class="mb-2.5 flex items-start gap-2.5">
				<span
					class="mt-px flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--accent-green-50) text-(--accent-green)"
				>
					<CheckIcon class="size-2.5" />
				</span>
				<span class="min-w-10 shrink-0 text-xs font-bold text-(--navy-950)">{entry.time}</span>
				<span class="text-[12.5px] text-[#55607a]">{entry.text}</span>
			</div>
		{/each}
	</div>
{/each}
