<script lang="ts">
	import { Progress } from 'bits-ui';
	import type { AlcptSection } from '$lib/dashboard-data';

	let { items, max = 100 }: { items: AlcptSection[]; max?: number } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each items as item (item.id)}
		{@const pct = Math.min(100, Math.max(0, (item.score / max) * 100))}
		<div>
			<div class="flex items-center justify-between gap-3 text-[11.5px]">
				<span class="text-(--dash-text)">{item.label}</span>
				<span class="font-bold text-(--dash-text)">{item.score}</span>
			</div>
			<Progress.Root
				value={item.score}
				{max}
				aria-label={item.label}
				class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-(--dash-track)"
			>
				<span class="block h-full rounded-full bg-(--accent-blue)" style="width: {pct}%"></span>
			</Progress.Root>
		</div>
	{/each}
</div>
