<script lang="ts">
	import type { ActivityItem, ActivityTone } from '$lib/dashboard-data';

	let { items }: { items: ActivityItem[] } = $props();

	const dot: Record<ActivityTone, string> = {
		green: 'bg-(--accent-green)',
		orange: 'bg-(--accent-orange)',
		blue: 'bg-(--accent-blue)'
	};
</script>

<div class="divide-y divide-(--dash-border)">
	{#each items as item (item.id)}
		<div class="flex items-start gap-2.5 py-2.5 first:pt-0 last:pb-0">
			<span class="mt-1.5 size-2 shrink-0 rounded-full {dot[item.tone]}"></span>
			<div class="min-w-0">
				<p class="text-[11.5px] leading-snug font-semibold text-(--dash-text)">{item.text}</p>
				<p class="mt-0.5 text-[10.5px] text-(--dash-muted)">{item.time}</p>
			</div>
		</div>
	{/each}
</div>
