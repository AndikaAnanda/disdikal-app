<script lang="ts">
	import { resolve } from '$app/paths';
	import bannerBg from '$lib/assets/datadik-assets/maincard.png';
	import PengajuanBanner from '$lib/components/pengajuan/PengajuanBanner.svelte';
	import PengajuanTabs from '$lib/components/shared/PengajuanTabs.svelte';
	import { dataDikBanner } from '$lib/data-dik-data';

	let { children } = $props();
</script>

<div class="flex flex-col gap-3.5">
	<PengajuanBanner
		title={dataDikBanner.title}
		description={dataDikBanner.description}
		bg={bannerBg}
		tone="light"
	/>

	<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<PengajuanTabs
			formHref={resolve('/pengajuan-layanan/update-data-dik')}
			riwayatHref={resolve('/pengajuan-layanan/update-data-dik/riwayat')}
		/>
		<div class="pt-4">{@render children()}</div>
	</div>
</div>
