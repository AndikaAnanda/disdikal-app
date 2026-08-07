<script lang="ts">
	import { resolve } from '$app/paths';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import ButuhBantuanCard from '$lib/components/tes-bahasa/ButuhBantuanCard.svelte';
	import { iconArrowNext } from '$lib/components/tes-bahasa/icons';
	import DaftarTutorialCard from '$lib/components/tutorial-kamera/DaftarTutorialCard.svelte';
	import LaranganCard from '$lib/components/tutorial-kamera/LaranganCard.svelte';
	import MenyalakanKameraCard from '$lib/components/tutorial-kamera/MenyalakanKameraCard.svelte';
	import PetunjukBanner from '$lib/components/tutorial-kamera/PetunjukBanner.svelte';
	import PosisiBenarCard from '$lib/components/tutorial-kamera/PosisiBenarCard.svelte';
	import PosisiSalahCard from '$lib/components/tutorial-kamera/PosisiSalahCard.svelte';
	import RingkasanKetentuanCard from '$lib/components/tutorial-kamera/RingkasanKetentuanCard.svelte';
	import { iconArrowBack } from '$lib/components/tutorial-kamera/icons';
	import { Button } from '$lib/components/ui/button';
	import { bantuanInfo } from '$lib/tes-bahasa-data';
	import {
		bannerPetunjuk,
		bantuanIntro,
		daftarTutorial,
		langkahKamera,
		laranganTes,
		posisiBenarBullets,
		posisiSalah,
		ringkasanKetentuan
	} from '$lib/tutorial-kamera-data';
</script>

<svelte:head><title>Layanan Disdikal — Tutorial Persiapan Kamera</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div class="grid grid-cols-1 items-start gap-4.5 min-[1600px]:grid-cols-[minmax(0,1fr)_420px]">
		<div class="flex min-w-0 flex-col gap-4.5">
			<PetunjukBanner data={bannerPetunjuk} />

			<div
				class="grid grid-cols-1 items-start gap-4.5 min-[1200px]:grid-cols-[400px_minmax(0,1fr)]"
			>
				<div class="flex min-w-0 flex-col gap-4.5">
					<DaftarTutorialCard items={daftarTutorial} />
					<RingkasanKetentuanCard items={ringkasanKetentuan} />
					<ButuhBantuanCard
						data={bantuanInfo}
						intro={bantuanIntro}
						class="rounded-[8px] border-0 p-6 sm:p-6"
					/>
				</div>

				<div class="flex min-w-0 flex-col gap-4.5">
					<MenyalakanKameraCard steps={langkahKamera} />
					<PosisiBenarCard bullets={posisiBenarBullets} />

					<!-- Tutorial lanjutan belum dibuat, jadi tombol "Lanjut" sengaja
					     tanpa href/onclick. -->
					<div class="flex flex-col gap-3 min-[560px]:flex-row">
						<Button
							href={resolve('/tes-bahasa-inggris')}
							class="h-10 flex-1 gap-3 rounded-[8px] border border-[#01296E] bg-white text-[14px] font-bold text-[#01296E] hover:bg-[#E6F2FE]"
						>
							<MaskIcon src={iconArrowBack} class="size-4.5" />
							Kembali ke Daftar Soal
						</Button>
						<Button
							class="h-10 flex-1 gap-3 rounded-[8px] bg-[#01296E] text-[14px] font-bold text-[#E6EAF1] hover:bg-[#0058AA]"
						>
							Lanjut: Panduan Pengerjaan Soal
							<MaskIcon src={iconArrowNext} class="size-4.5" />
						</Button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex min-w-0 flex-col gap-6 rounded-[8px] bg-white p-6">
			<LaranganCard items={laranganTes} />
			<PosisiSalahCard items={posisiSalah} />
		</div>
	</div>
</div>
