<script lang="ts">
	import DokumenPagination from '$lib/components/dokumen/DokumenPagination.svelte';
	import DokumenPenunjangCard from '$lib/components/dokumen/DokumenPenunjangCard.svelte';
	import DokumenTable from '$lib/components/dokumen/DokumenTable.svelte';
	import HelpdeskCard from '$lib/components/dokumen/HelpdeskCard.svelte';
	import PanduanCard from '$lib/components/dokumen/PanduanCard.svelte';
	import StatistikCard from '$lib/components/dokumen/StatistikCard.svelte';
	import ProfileSideMenu from '$lib/components/profil/ProfileSideMenu.svelte';
	import {
		dokumenPenunjang,
		dokumenPribadi,
		helpdesk,
		panduanBullets,
		panduanParagraf,
		panduanSteps,
		statistik
	} from '$lib/dokumen-data';

	const perPage = 8;
	let page = $state(1);
	const rows = $derived(dokumenPribadi.slice((page - 1) * perPage, page * perPage));
</script>

<svelte:head><title>Layanan Disdikal — Dokumen</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="grid grid-cols-1 items-start gap-4.5 md:grid-cols-[220px_1fr]">
		<ProfileSideMenu />

		<div class="grid min-w-0 grid-cols-1 items-start gap-4.5 min-[1600px]:grid-cols-[570px_1fr]">
			<div class="flex min-w-0 flex-col gap-4.5">
				<StatistikCard data={statistik} />
				<PanduanCard paragraf={panduanParagraf} steps={panduanSteps} bullets={panduanBullets} />
				<DokumenPenunjangCard items={dokumenPenunjang} />
				<HelpdeskCard data={helpdesk} />
			</div>

			<div class="min-w-0">
				<DokumenTable {rows} />
				<DokumenPagination bind:page count={dokumenPribadi.length} {perPage} />
			</div>
		</div>
	</div>
</div>
