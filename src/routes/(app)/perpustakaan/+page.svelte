<script lang="ts">
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import PengajuanBanner from '$lib/components/pengajuan/PengajuanBanner.svelte';
	import { bannerBg } from '$lib/components/perpustakaan/assets';
	import KoleksiCard from '$lib/components/perpustakaan/KoleksiCard.svelte';
	import KoleksiFilters from '$lib/components/perpustakaan/KoleksiFilters.svelte';
	import KoleksiRow from '$lib/components/perpustakaan/KoleksiRow.svelte';
	import KoleksiTabs from '$lib/components/perpustakaan/KoleksiTabs.svelte';
	import KoleksiToolbar, {
		type KoleksiView
	} from '$lib/components/perpustakaan/KoleksiToolbar.svelte';
	import {
		KOLEKSI_TABS,
		koleksiItems,
		perpustakaanBanner,
		type KoleksiTabId,
		type SortOption
	} from '$lib/perpustakaan-data';

	let judul = $state('');
	let penulis = $state('');
	let tahun = $state('');
	let jenis = $state('');
	let kategori = $state('');
	let applied = $state({ judul: '', penulis: '', tahun: '', jenis: '', kategori: '' });

	let tab = $state<KoleksiTabId>('semua');
	let sort = $state<SortOption>('Terbaru');
	let view = $state<KoleksiView>('grid');

	const counts = $derived(
		Object.fromEntries(
			KOLEKSI_TABS.map((id) => [
				id,
				id === 'semua'
					? koleksiItems.length
					: koleksiItems.filter((item) => item.status === id).length
			])
		) as Record<KoleksiTabId, number>
	);

	const byTab = $derived(
		tab === 'semua' ? koleksiItems : koleksiItems.filter((item) => item.status === tab)
	);

	const filtered = $derived(
		byTab
			.filter((item) => {
				const cocokJudul =
					!applied.judul || item.judul.toLowerCase().includes(applied.judul.trim().toLowerCase());
				const cocokPenulis =
					!applied.penulis ||
					item.penulis.toLowerCase().includes(applied.penulis.trim().toLowerCase());
				const cocokTahun = !applied.tahun || item.tahun === applied.tahun;
				const cocokJenis = !applied.jenis || item.jenis === applied.jenis;
				const cocokKategori = !applied.kategori || item.kategori === applied.kategori;
				return cocokJudul && cocokPenulis && cocokTahun && cocokJenis && cocokKategori;
			})
			.toSorted((a, b) => {
				if (sort === 'Judul A-Z') return a.judul.localeCompare(b.judul);
				if (sort === 'Terlama') return a.tahun.localeCompare(b.tahun);
				return b.tahun.localeCompare(a.tahun);
			})
	);

	function applyFilter() {
		applied = { judul, penulis, tahun, jenis, kategori };
	}

	function resetFilter() {
		applied = { judul: '', penulis: '', tahun: '', jenis: '', kategori: '' };
	}
</script>

<svelte:head><title>Layanan Disdikal — Perpustakaan</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="flex flex-col gap-3.5">
		<PengajuanBanner
			title={perpustakaanBanner.title}
			description={perpustakaanBanner.description}
			bg={bannerBg}
			iconTile={BookOpenIcon}
			tone="light"
			titleClass="text-(--accent-blue)"
		/>

		<section class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
			<KoleksiFilters
				bind:judul
				bind:penulis
				bind:tahun
				bind:jenis
				bind:kategori
				onFilter={applyFilter}
				onReset={resetFilter}
			/>
		</section>

		<section class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
			<div
				class="flex flex-wrap items-center justify-between gap-3 border-b border-(--dash-border) pb-0.5"
			>
				<KoleksiTabs {counts} bind:value={tab} />
				<KoleksiToolbar bind:sort bind:view class="pb-2.5" />
			</div>

			{#if filtered.length === 0}
				<p class="py-10 text-center text-[11.5px] text-(--dash-muted)">Koleksi tidak ditemukan</p>
			{:else if view === 'grid'}
				<div
					class="mt-4 grid grid-cols-1 items-stretch gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
				>
					{#each filtered as item (item.id)}
						<KoleksiCard {item} />
					{/each}
				</div>
			{:else}
				<div class="mt-4 flex flex-col gap-2.5">
					{#each filtered as item (item.id)}
						<KoleksiRow {item} />
					{/each}
				</div>
			{/if}
		</section>
	</div>
</div>
