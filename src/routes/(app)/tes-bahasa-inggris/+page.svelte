<script lang="ts">
	import { resolve } from '$app/paths';
	import ButuhBantuanCard from '$lib/components/tes-bahasa/ButuhBantuanCard.svelte';
	import DaftarBagianTesCard from '$lib/components/tes-bahasa/DaftarBagianTesCard.svelte';
	import HeroWelcomeCard from '$lib/components/tes-bahasa/HeroWelcomeCard.svelte';
	import InfoPesertaCard from '$lib/components/tes-bahasa/InfoPesertaCard.svelte';
	import InformasiTesCard from '$lib/components/tes-bahasa/InformasiTesCard.svelte';
	import PetunjukKameraCard from '$lib/components/tes-bahasa/PetunjukKameraCard.svelte';
	import PetunjukSingkatCard from '$lib/components/tes-bahasa/PetunjukSingkatCard.svelte';
	import StatusPengajuanTimeline from '$lib/components/tes-bahasa/StatusPengajuanTimeline.svelte';
	import { iconPlayCircle, iconSend } from '$lib/components/tes-bahasa/icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		bantuanInfo,
		heroWelcome,
		kameraGuideBullets,
		kameraGuideIntro,
		mulaiTesNote,
		pesertaInfo,
		petunjukSingkat,
		statusPengajuan,
		testInfo,
		testSections
	} from '$lib/tes-bahasa-data';
</script>

<svelte:head><title>Layanan Disdikal — Tes Bahasa Inggris</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div
		class="grid grid-cols-1 items-start gap-4.5 min-[1600px]:grid-cols-[300px_minmax(0,1fr)_300px]"
	>
		<div class="flex min-w-0 flex-col gap-4.5">
			<InfoPesertaCard fields={pesertaInfo} />
			<StatusPengajuanTimeline steps={statusPengajuan} />
		</div>

		<div class="flex min-w-0 flex-col gap-4.5">
			<HeroWelcomeCard hero={heroWelcome} />
			<InformasiTesCard items={testInfo} />

			<div>
				<DaftarBagianTesCard sections={testSections} />

				<!-- Sesi tes belum tersedia (belum ada endpoint), jadi kedua tombol
				     sengaja tanpa href/onclick. -->
				<div class="mt-4.5 grid grid-cols-1 gap-3.5 min-[560px]:grid-cols-2">
					<Button
						href={resolve('/tes-bahasa-inggris/tutorial')}
						class="h-auto gap-2.5 rounded-[8px] border border-(--dash-border) bg-white py-3 text-[14px] font-bold text-[#343434] hover:bg-(--brand-50)"
					>
						Lihat Tutorial
						<MaskIcon src={iconPlayCircle} class="size-4.5 text-[#007CF0]" />
					</Button>
					<Button
						href={resolve('/tes-bahasa-inggris/tes')}
						class="h-auto gap-2.5 rounded-[8px] bg-[#01296E] py-3 text-[14px] font-bold text-white hover:bg-[#0058AA]"
					>
						Mulai Tes Sekarang
						<MaskIcon src={iconSend} class="size-4.5" />
					</Button>
				</div>
				<p class="mt-3 text-center text-[12px] text-[#007CF0]">{mulaiTesNote}</p>
			</div>
		</div>

		<div class="flex min-w-0 flex-col gap-4.5">
			<PetunjukKameraCard intro={kameraGuideIntro} bullets={kameraGuideBullets} />
			<PetunjukSingkatCard items={petunjukSingkat} />
			<ButuhBantuanCard data={bantuanInfo} />
		</div>
	</div>
</div>
