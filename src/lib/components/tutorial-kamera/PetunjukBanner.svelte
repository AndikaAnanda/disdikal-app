<script lang="ts">
	import { iconCameraFilled } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { BannerPetunjuk } from '$lib/tutorial-kamera-data';

	let { data }: { data: BannerPetunjuk } = $props();
</script>

<div class="flex items-center gap-4.5 rounded-[8px] bg-white p-4.5">
	<span
		class="flex size-10.5 shrink-0 items-center justify-center rounded-full bg-[#E6F2FE] text-[#007CF0]"
	>
		<MaskIcon src={iconCameraFilled} class="size-6" />
	</span>
	<div class="min-w-0">
		<p class="text-[16px] font-bold text-[#0058AA]">{data.title}</p>
		<p class="mt-1 text-[12px] text-[#343434]">{data.desc}</p>
	</div>
</div>
