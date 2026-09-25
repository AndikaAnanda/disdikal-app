<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import RotateCwIcon from '@lucide/svelte/icons/rotate-cw';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';

	let {
		searchPlaceholder,
		statusOptions,
		statusLabel = 'Semua Status',
		secondOptions,
		secondLabel = '',
		withDate = true,
		withActions = true,
		dateLabel,
		filterFirst = false,
		search = $bindable(''),
		status = $bindable(''),
		second = $bindable(''),
		tanggal = $bindable(''),
		onFilter,
		onReset
	}: {
		searchPlaceholder: string;
		statusOptions: readonly string[];
		statusLabel?: string;
		secondOptions?: readonly string[];
		secondLabel?: string;
		withDate?: boolean;
		withActions?: boolean;
		dateLabel?: string;
		filterFirst?: boolean;
		search?: string;
		status?: string;
		second?: string;
		tanggal?: string;
		onFilter?: () => void;
		onReset?: () => void;
	} = $props();

	const box =
		'flex h-9 items-center gap-2 rounded-md border border-(--dash-border) bg-white px-3 text-[11.5px] text-(--dash-text)';
	const inputReset =
		'h-auto rounded-none border-0 bg-transparent p-0 text-[11.5px] shadow-none placeholder:text-(--dash-muted) focus-visible:ring-0 md:text-[11.5px]';
	const trigger = `${box} h-9! min-w-40 flex-1 cursor-pointer justify-between font-normal shadow-none sm:flex-none`;

	const tanggalText = $derived(
		tanggal
			? new Date(tanggal).toLocaleDateString('id-ID', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				})
			: (dateLabel ?? '')
	);

	function reset() {
		search = '';
		status = '';
		second = '';
		tanggal = '';
		onReset?.();
	}
</script>

{#snippet resetButton()}
	<Button
		type="button"
		variant="outline"
		onclick={onReset ? reset : undefined}
		aria-disabled={onReset ? undefined : 'true'}
		class="h-9 cursor-pointer gap-1.5 rounded-md border-(--accent-blue) bg-white px-4 text-[11.5px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)"
	>
		<RotateCwIcon class="size-3.5" strokeWidth={2} />
		Reset
	</Button>
{/snippet}

{#snippet filterButton()}
	<Button
		type="button"
		onclick={onFilter}
		aria-disabled={onFilter ? undefined : 'true'}
		class="h-9 cursor-pointer gap-1.5 rounded-md bg-(--navy-950) px-4 text-[11.5px] font-semibold text-white hover:bg-(--brand-600)"
	>
		<FilterIcon class="size-3.5" strokeWidth={2} />
		Filter
	</Button>
{/snippet}

{#snippet selectBox(
	value: string,
	label: string,
	options: readonly string[],
	onChange: (v: string) => void
)}
	<Select.Root type="single" {value} onValueChange={onChange}>
		<Select.Trigger class={trigger} aria-label={label}>
			<span class="truncate {value ? '' : 'text-(--dash-muted)'}">{value || label}</span>
		</Select.Trigger>
		<Select.Content>
			{#each options as item (item)}
				<Select.Item value={item} label={item}>{item}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
{/snippet}

<div class="flex flex-wrap items-center gap-2.5">
	<label class="{box} min-w-55 flex-1">
		<SearchIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
		<Input type="search" bind:value={search} placeholder={searchPlaceholder} class={inputReset} />
	</label>

	{@render selectBox(status, statusLabel, statusOptions, (v) => (status = v))}

	{#if secondOptions}
		{@render selectBox(second, secondLabel, secondOptions, (v) => (second = v))}
	{/if}

	{#if withDate}
		{#if dateLabel}
			<label class="{box} relative min-w-40 flex-1 sm:flex-none">
				<span class="flex-1 truncate {tanggal ? '' : 'text-(--dash-muted)'}">{tanggalText}</span>
				<CalendarIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
				<Input
					type="date"
					aria-label={dateLabel}
					bind:value={tanggal}
					class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-0 bg-transparent p-0 opacity-0 shadow-none focus-visible:ring-0"
				/>
			</label>
		{:else}
			<label class="{box} min-w-40 flex-1 sm:flex-none">
				<CalendarIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
				<Input type="date" aria-label="Tanggal Pengajuan" bind:value={tanggal} class={inputReset} />
			</label>
		{/if}
	{/if}

	{#if withActions}
		{#if filterFirst}
			{@render filterButton()}
			{@render resetButton()}
		{:else}
			{@render resetButton()}
			{@render filterButton()}
		{/if}
	{/if}
</div>
