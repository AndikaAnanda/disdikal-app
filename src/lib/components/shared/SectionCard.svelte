<script lang="ts">
	import ChevronUpIcon from '@lucide/svelte/icons/chevron-up';
	import { Collapsible } from 'bits-ui';
	import type { Snippet } from 'svelte';

	let { number, title, children }: { number: number; title: string; children: Snippet } = $props();
</script>

<Collapsible.Root open class="overflow-hidden rounded-[10px] border border-(--dash-border)">
	<Collapsible.Trigger
		class="group flex w-full cursor-pointer items-center justify-between gap-3 bg-(--accent-blue-50) px-4 py-3"
	>
		<span class="flex items-center gap-2.5">
			<span
				class="flex size-5 shrink-0 items-center justify-center rounded-full bg-(--accent-blue) text-[10px] font-bold text-white"
			>
				{number}
			</span>
			<span class="text-[12.5px] font-semibold text-(--navy-950)">{title}</span>
		</span>
		<ChevronUpIcon
			class="size-4 shrink-0 text-(--dash-muted) transition-transform group-data-[state=closed]:rotate-180"
			strokeWidth={2}
		/>
	</Collapsible.Trigger>
	<Collapsible.Content class="bg-white px-4 py-4">
		{@render children()}
	</Collapsible.Content>
</Collapsible.Root>
