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
		withActions = true
	}: {
		searchPlaceholder: string;
		statusOptions: readonly string[];
		statusLabel?: string;
		secondOptions?: readonly string[];
		secondLabel?: string;
		withDate?: boolean;
		withActions?: boolean;
	} = $props();

	let status = $state('');
	let second = $state('');
	let tanggal = $state('');

	const box =
		'flex h-9 items-center gap-2 rounded-md border border-(--dash-border) bg-white px-3 text-[11.5px] text-(--dash-text)';
	const inputReset =
		'h-auto rounded-none border-0 bg-transparent p-0 text-[11.5px] shadow-none placeholder:text-(--dash-muted) focus-visible:ring-0 md:text-[11.5px]';
	const trigger = `${box} h-9! min-w-40 flex-1 cursor-pointer justify-between font-normal shadow-none sm:flex-none`;
</script>

<div class="flex flex-wrap items-center gap-2.5">
	<label class="{box} min-w-55 flex-1">
		<SearchIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
		<Input type="search" placeholder={searchPlaceholder} class={inputReset} />
	</label>

	<Select.Root type="single" bind:value={status}>
		<Select.Trigger class={trigger} aria-label={statusLabel}>
			<span class="truncate {status ? '' : 'text-(--dash-muted)'}">{status || statusLabel}</span>
		</Select.Trigger>
		<Select.Content>
			{#each statusOptions as item (item)}
				<Select.Item value={item} label={item}>{item}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	{#if secondOptions}
		<Select.Root type="single" bind:value={second}>
			<Select.Trigger class={trigger} aria-label={secondLabel}>
				<span class="truncate {second ? '' : 'text-(--dash-muted)'}">{second || secondLabel}</span>
			</Select.Trigger>
			<Select.Content>
				{#each secondOptions as item (item)}
					<Select.Item value={item} label={item}>{item}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	{/if}

	{#if withDate}
		<label class="{box} min-w-40 flex-1 sm:flex-none">
			<CalendarIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
			<Input type="date" aria-label="Tanggal Pengajuan" bind:value={tanggal} class={inputReset} />
		</label>
	{/if}

	{#if withActions}
		<Button
			type="button"
			variant="outline"
			aria-disabled="true"
			class="h-9 cursor-pointer gap-1.5 rounded-md border-(--accent-blue) bg-white px-4 text-[11.5px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)"
		>
			<RotateCwIcon class="size-3.5" strokeWidth={2} />
			Reset
		</Button>
		<Button
			type="button"
			aria-disabled="true"
			class="h-9 cursor-pointer gap-1.5 rounded-md bg-(--navy-950) px-4 text-[11.5px] font-semibold text-white hover:bg-(--brand-600)"
		>
			<FilterIcon class="size-3.5" strokeWidth={2} />
			Filter
		</Button>
	{/if}
</div>
