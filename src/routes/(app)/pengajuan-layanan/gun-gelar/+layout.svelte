<script lang="ts">
	import { resolve } from '$app/paths';
	import bannerBg from '$lib/assets/gun-gelar-asset/maincard.png';
	import PengajuanBanner from '$lib/components/pengajuan/PengajuanBanner.svelte';
	import PengajuanTabs from '$lib/components/shared/PengajuanTabs.svelte';
	import { gunGelarBanner } from '$lib/gun-gelar-data';

	let { children } = $props();
</script>

<div class="flex flex-col gap-3.5">
	<PengajuanBanner
		title={gunGelarBanner.title}
		description={gunGelarBanner.description}
		bg={bannerBg}
		tone="light"
	/>

	<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
		<PengajuanTabs
			formHref={resolve('/pengajuan-layanan/gun-gelar')}
			riwayatHref={resolve('/pengajuan-layanan/gun-gelar/riwayat')}
		/>
		<div class="pt-4">{@render children()}</div>
	</div>
</div>
