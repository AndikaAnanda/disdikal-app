<script lang="ts">
	import bgBoat from '$lib/assets/bg-boat.png';
	import { pengajuanIcon } from '$lib/components/pengajuan/assets';
	import LayananCard from '$lib/components/pengajuan/LayananCard.svelte';
	import PengajuanBanner from '$lib/components/pengajuan/PengajuanBanner.svelte';
	import { layananItems, pengajuanBanner } from '$lib/pengajuan-data';
</script>

<svelte:head><title>Layanan Disdikal — Pengajuan Layanan</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<PengajuanBanner
		title={pengajuanBanner.title}
		description={pengajuanBanner.description}
		bg={bgBoat}
		icon={pengajuanIcon}
	/>

	<div class="grid grid-cols-1 items-stretch gap-3.5 min-[1100px]:grid-cols-3 sm:grid-cols-2">
		{#each layananItems as item (item.id)}
			<LayananCard {item} />
		{/each}
	</div>
</div>
