<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';

	let { items }: { items: { id: string; icon: LucideIcon; label: string; value: string }[] } =
		$props();
</script>

<div
	class="relative grid grid-cols-2 gap-x-4 gap-y-2.5 rounded-lg bg-white/10 px-3 py-2.5 backdrop-blur-sm lg:flex lg:gap-0 lg:divide-x lg:divide-white/15"
>
	{#each items as item (item.id)}
		{@const Icon = item.icon}
		<div class="flex min-w-0 items-start gap-2 lg:flex-1 lg:px-4 lg:first:pl-1 lg:last:pr-1">
			<Icon class="mt-0.5 size-3.5 shrink-0 text-white/80" strokeWidth={1.9} />
			<div class="min-w-0">
				<p class="text-[10.5px] text-white/80">{item.label}</p>
				<p class="truncate text-[12px] font-bold">{item.value}</p>
			</div>
		</div>
	{/each}
</div>
