<script lang="ts">
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import DownloadHeader from '$lib/components/download-hasil/DownloadHeader.svelte';
	import DownloadTable from '$lib/components/download-hasil/DownloadTable.svelte';
	import TableFilters from '$lib/components/shared/TableFilters.svelte';
	import * as Pagination from '$lib/components/ui/pagination';
	import { downloadRows } from '$lib/download-hasil-data';
	import { layananItems } from '$lib/pengajuan-data';

	const PER_PAGE = 7;

	const layananLabels = layananItems.map((item) => item.menuLabel);
	const labelOf = (id: string) => layananItems.find((item) => item.id === id)?.menuLabel ?? '';

	let search = $state('');
	let layanan = $state('');
	let tanggal = $state('');
	let applied = $state({ search: '', layanan: '', tanggal: '' });
	let page = $state(1);

	const filtered = $derived(
		downloadRows.filter((row) => {
			const term = applied.search.trim().toLowerCase();
			const cocokTeks =
				!term ||
				row.nama.toLowerCase().includes(term) ||
				row.nomor.toLowerCase().includes(term) ||
				labelOf(row.layanan).toLowerCase().includes(term);
			const cocokLayanan = !applied.layanan || labelOf(row.layanan) === applied.layanan;
			const cocokTanggal = !applied.tanggal || row.terbitIso === applied.tanggal;
			return cocokTeks && cocokLayanan && cocokTanggal;
		})
	);

	const paged = $derived(filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE));

	function applyFilter() {
		applied = { search, layanan, tanggal };
		page = 1;
	}

	function resetFilter() {
		applied = { search: '', layanan: '', tanggal: '' };
		page = 1;
	}

	const pagerLink =
		'size-8 cursor-pointer rounded-md text-[11.5px] font-semibold data-[active=true]:border-transparent data-[active=true]:bg-(--navy-950) data-[active=true]:text-white';
	const pagerNav = 'size-8 cursor-pointer rounded-md px-0! text-(--dash-muted)';
</script>

<svelte:head><title>Layanan Disdikal — Download Hasil</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<DownloadHeader rows={downloadRows} />

	<section class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<TableFilters
			searchPlaceholder="Cari judul pengumuman ..."
			statusOptions={layananLabels}
			statusLabel="Semua Layanan"
			dateLabel="Tanggal Terbit"
			filterFirst
			bind:search
			bind:status={layanan}
			bind:tanggal
			onFilter={applyFilter}
			onReset={resetFilter}
		/>

		<div class="mt-3.5">
			<DownloadTable rows={paged} />
		</div>

		<Pagination.Root count={filtered.length} perPage={PER_PAGE} bind:page>
			{#snippet children({ pages, currentPage, range })}
				<div class="flex w-full flex-wrap items-center justify-between gap-3 pt-3.5">
					<p class="text-[11px] text-(--accent-blue)">
						Menampilkan {filtered.length ? range.start : 0} - {range.end} dari {filtered.length} dokumen
						persyaratan
					</p>
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton class={pagerNav} aria-label="Halaman sebelumnya">
								<ChevronLeftIcon class="size-4" strokeWidth={2.2} />
							</Pagination.PrevButton>
						</Pagination.Item>
						{#each pages as item (item.key)}
							{#if item.type === 'ellipsis'}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item>
									<Pagination.Link
										page={item}
										isActive={currentPage === item.value}
										class={pagerLink}
									/>
								</Pagination.Item>
							{/if}
						{/each}
						<Pagination.Item>
							<Pagination.NextButton class={pagerNav} aria-label="Halaman berikutnya">
								<ChevronRightIcon class="size-4" strokeWidth={2.2} />
							</Pagination.NextButton>
						</Pagination.Item>
					</Pagination.Content>
				</div>
			{/snippet}
		</Pagination.Root>
	</section>
</div>
