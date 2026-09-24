<script lang="ts" module>
	export const tableCell =
		'border-b border-(--dash-border) px-3 py-3 align-middle text-(--dash-text)';
</script>

<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		headers,
		rows,
		row,
		tone = 'navy',
		minWidth = 'min-w-260'
	}: {
		headers: readonly string[];
		rows: T[];
		row: Snippet<[T]>;
		tone?: 'navy' | 'light';
		minWidth?: string;
	} = $props();

	const navy = $derived(tone === 'navy');
</script>

<div class="overflow-x-auto">
	<table class={cn('w-full border-collapse text-[11.5px]', minWidth)}>
		<thead>
			<tr
				class={navy
					? 'bg-(--navy-950) text-white'
					: 'border-b border-(--dash-border) bg-[#f5f7fa] text-(--dash-text)'}
			>
				{#each headers as header (header)}
					<th
						class={cn(
							'px-3 py-3 text-left text-[11.5px] font-semibold whitespace-nowrap',
							navy && 'first:rounded-l-md last:rounded-r-md'
						)}
					>
						{header}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as item, index (index)}
				<tr class="last:[&>td]:border-b-0">
					{@render row(item)}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
