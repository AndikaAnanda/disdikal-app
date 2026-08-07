<script lang="ts">
	import InfoIcon from '@lucide/svelte/icons/info';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconPlayCircle, iconTimeLine } from '$lib/components/tes-bahasa/icons';
	import DaftarBagianSidebar from '$lib/components/tes-listening/DaftarBagianSidebar.svelte';
	import InformasiTesStrip from '$lib/components/tes-listening/InformasiTesStrip.svelte';
	import PersiapanGrid from '$lib/components/tes-listening/PersiapanGrid.svelte';
	import SectionHeaderCard from '$lib/components/tes-listening/SectionHeaderCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { testInfo, testSections } from '$lib/tes-bahasa-data';
	import {
		audioPlayCount,
		finalNotice,
		infoTesBox,
		persiapanCards,
		persiapanIntro,
		sectionHeader
	} from '$lib/tes-listening-data';
	import type { InfoStripItem } from '$lib/tes-listening-data';

	// Bagian yang sedang dikerjakan; sisanya dirender terkunci.
	const activeSection = testSections[0];

	// Angka diambil dari tes-bahasa-data supaya tidak ada duplikasi sumber.
	const infoStrip: InfoStripItem[] = [
		{ id: 'audio', label: 'Audio hanya diputar', value: audioPlayCount },
		{ id: 'waktu', label: 'Waktu per bagian', value: activeSection.durasi },
		{ id: 'soal', label: 'Jumlah soal per bagian', value: activeSection.soal },
		{
			id: 'bagian',
			label: 'Total Bagian',
			value: testInfo.find((i) => i.id === 'bagian')?.value ?? ''
		}
	];
</script>

<svelte:head><title>Layanan Disdikal — Listening Comprehension</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="grid grid-cols-1 items-start gap-4.5 min-[1200px]:grid-cols-[465px_minmax(0,1fr)]">
		<DaftarBagianSidebar sections={testSections} activeId={activeSection.id} />

		<div class="flex min-w-0 flex-col gap-6 rounded-[8px] bg-white p-6">
			<SectionHeaderCard data={sectionHeader} />
			<InformasiTesStrip data={infoTesBox} items={infoStrip} />
			<PersiapanGrid intro={persiapanIntro} cards={persiapanCards} />

			<div class="flex items-center gap-2 rounded-[8px] bg-[#F7F9FE] px-3 py-2">
				<InfoIcon class="size-4.5 shrink-0 text-[#007CF0]" />
				<p class="text-[12px] text-[#007CF0]">{finalNotice}</p>
			</div>

			<!-- Halaman pengerjaan soal belum ada, jadi tombol sengaja tanpa
			     href/onclick. -->
			<div class="flex flex-col items-center gap-2">
				<Button
					class="h-12 w-full gap-3 rounded-[8px] bg-[#01296E] text-[16px] font-bold text-[#EBEBEB] hover:bg-[#0058AA]"
				>
					<MaskIcon src={iconPlayCircle} class="size-7" />
					Mulai Tes
				</Button>
				<p class="flex items-center gap-1.5 text-[12px] text-[#343434]">
					<MaskIcon src={iconTimeLine} class="size-3.5" />
					Waktu Pengerjaan: {activeSection.durasi}
				</p>
			</div>
		</div>
	</div>
</div>
