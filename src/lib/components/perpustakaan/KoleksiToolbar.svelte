<script lang="ts">
	import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
	import ListIcon from '@lucide/svelte/icons/list';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import { Button } from '$lib/components/ui/button';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import { SORT_OPTIONS, type SortOption } from '$lib/perpustakaan-data';

	export type KoleksiView = 'grid' | 'list';

	let {
		sort = $bindable('Terbaru'),
		view = $bindable('grid'),
		class: className
	}: { sort?: SortOption; view?: KoleksiView; class?: string } = $props();

	const trigger =
		'flex h-9! min-w-44 cursor-pointer items-center justify-between gap-2 rounded-md border border-(--dash-border) bg-white px-3 text-[11.5px] font-normal text-(--dash-text) shadow-none';

	const toggle =
		'flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border';
	const toggleOn = 'border-transparent bg-(--navy-950) text-white';
	const toggleOff = 'border-(--dash-border) bg-white text-(--dash-muted) hover:bg-(--brand-50)';

	const views: { id: KoleksiView; label: string; icon: typeof LayoutGridIcon }[] = [
		{ id: 'grid', label: 'Tampilan grid', icon: LayoutGridIcon },
		{ id: 'list', label: 'Tampilan daftar', icon: ListIcon }
	];
</script>

<div class={cn('flex shrink-0 flex-wrap items-center gap-2.5', className)}>
	<Select.Root
		type="single"
		value={sort}
		onValueChange={(v) => (sort = v as SortOption)}
		allowDeselect={false}
	>
		<Select.Trigger class={trigger} aria-label="Urutkan koleksi">
			<span class="truncate">Urutkan: {sort}</span>
		</Select.Trigger>
		<Select.Content>
			{#each SORT_OPTIONS as item (item)}
				<Select.Item value={item} label={item}>{item}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<div class="flex items-center gap-1.5">
		{#each views as item (item.id)}
			{@const Icon = item.icon}
			<button
				type="button"
				onclick={() => (view = item.id)}
				aria-label={item.label}
				aria-pressed={view === item.id}
				class={cn(toggle, view === item.id ? toggleOn : toggleOff)}
			>
				<Icon class="size-4" strokeWidth={2} />
			</button>
		{/each}
	</div>

	<Button
		type="button"
		aria-disabled="true"
		class="h-9 cursor-pointer gap-1.5 rounded-md bg-(--navy-950) px-4 text-[11.5px] font-semibold text-white hover:bg-(--brand-600)"
	>
		<PlusIcon class="size-3.5" strokeWidth={2.4} />
		Publish
	</Button>
</div>
