<script lang="ts">
	import SearchIcon from '@lucide/svelte/icons/search';
	import UserIcon from '@lucide/svelte/icons/user';
	import { Input } from '$lib/components/ui/input';
	import { personelRecords, type PersonelRecord } from '$lib/data-dik-data';
	import { cn } from '$lib/utils';

	let { value = $bindable(''), error }: { value?: string; error?: string } = $props();

	let query = $state('');

	const term = $derived(query.trim().toLowerCase());

	const results = $derived(
		term
			? personelRecords
					.filter((p) => p.nama.toLowerCase().includes(term) || p.nrp.includes(term))
					.slice(0, 5)
			: []
	);

	function pilih(personel: PersonelRecord) {
		value = personel.id;
		query = '';
	}

	const box =
		'flex h-9 items-center gap-2 rounded-md border border-(--dash-border) bg-white px-3 text-[11.5px] text-(--dash-text)';
	const inputReset =
		'h-auto rounded-none border-0 bg-transparent p-0 text-[11.5px] shadow-none placeholder:text-(--dash-muted) focus-visible:ring-0 md:text-[11.5px]';
</script>

<div>
	<label class={box}>
		<SearchIcon class="size-4 shrink-0 text-(--dash-muted)" strokeWidth={1.9} />
		<Input
			type="search"
			bind:value={query}
			placeholder="Masukkan NRP atau nama personel ..."
			aria-label="Cari personel"
			class={inputReset}
		/>
	</label>

	{#if term}
		<div class="mt-2 overflow-hidden rounded-md border border-(--dash-border) bg-white">
			{#each results as personel (personel.id)}
				<button
					type="button"
					onclick={() => pilih(personel)}
					aria-current={personel.id === value ? 'true' : undefined}
					class={cn(
						'flex w-full cursor-pointer items-center gap-2.5 border-b border-(--dash-border) px-3 py-2.5 text-left last:border-b-0 hover:bg-(--accent-blue-50)',
						personel.id === value && 'bg-(--accent-blue-50)'
					)}
				>
					<span
						class="flex size-7 shrink-0 items-center justify-center rounded-full bg-(--accent-blue-50) text-(--accent-blue)"
					>
						<UserIcon class="size-3.5" strokeWidth={2} />
					</span>
					<span class="min-w-0 flex-1">
						<span class="block truncate text-[11.5px] font-semibold text-(--navy-950)">
							{personel.nama}
						</span>
						<span class="block truncate text-[10px] text-(--dash-muted)">
							{personel.nrp} · {personel.pangkat}
						</span>
					</span>
				</button>
			{:else}
				<p class="px-3 py-2.5 text-[11px] text-(--dash-muted)">Personel tidak ditemukan</p>
			{/each}
		</div>
	{/if}

	{#if error}
		<p class="mt-1 text-xs text-destructive">{error}</p>
	{/if}
</div>
