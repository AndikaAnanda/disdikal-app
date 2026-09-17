<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FilterIcon from '@lucide/svelte/icons/filter';
	import RotateCwIcon from '@lucide/svelte/icons/rotate-cw';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { HISTORY_STATUSES, historyRows } from '$lib/dashboard-data';

	// Filter masih visual: nilai tidak dipakai menyaring tabel sampai endpoint
	// riwayat tersedia.
	let status = $state('');
	let layanan = $state('');
	let tanggal = $state('');

	const layananOptions = [...new Set(historyRows.map((r) => r.jenisLayanan))];

	const box =
		'flex h-9 items-center gap-2 rounded-md border border-(--dash-border) bg-white px-3 text-[11.5px] text-(--dash-text)';
	const inputReset =
		'h-auto rounded-none border-0 bg-transparent p-0 text-[11.5px] shadow-none placeholder:text-(--dash-muted) focus-visible:ring-0 md:text-[11.5px]';
	const trigger = `${box} h-9! min-w-40 flex-1 cursor-pointer justify-between font-normal shadow-none sm:flex-none`;
</script>

<div class="flex flex-wrap items-center gap-2.5">
	<label class="{box} min-w-55 flex-1">
		<SearchIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
		<Input type="search" placeholder="Cari nama pengajuan nomor pengajuan ..." class={inputReset} />
	</label>

	<Select.Root type="single" bind:value={status}>
		<Select.Trigger class={trigger} aria-label="Filter status">
			<span class="truncate {status ? '' : 'text-(--dash-muted)'}">{status || 'Semua Status'}</span>
		</Select.Trigger>
		<Select.Content>
			{#each HISTORY_STATUSES as item (item)}
				<Select.Item value={item} label={item}>{item}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<Select.Root type="single" bind:value={layanan}>
		<Select.Trigger class={trigger} aria-label="Filter jenis layanan">
			<span class="truncate {layanan ? '' : 'text-(--dash-muted)'}">
				{layanan || 'Semua Layanan'}
			</span>
		</Select.Trigger>
		<Select.Content>
			{#each layananOptions as item (item)}
				<Select.Item value={item} label={item}>{item}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<label class="{box} min-w-40 flex-1 sm:flex-none">
		<CalendarIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
		<Input type="date" aria-label="Tanggal Pengajuan" bind:value={tanggal} class={inputReset} />
	</label>

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
</div>
