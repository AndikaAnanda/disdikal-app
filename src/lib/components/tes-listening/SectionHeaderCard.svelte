<script lang="ts">
	import { resolve } from '$app/paths';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconHeadset } from '$lib/components/tes-bahasa/icons';
	import { iconArrowBack } from '$lib/components/tutorial-kamera/icons';
	import { Button } from '$lib/components/ui/button';
	import type { SectionHeader } from '$lib/tes-listening-data';

	let { data }: { data: SectionHeader } = $props();
</script>

<div class="flex flex-col items-center gap-4 min-[900px]:flex-row min-[900px]:items-start">
	<Button
		href={resolve('/tes-bahasa-inggris')}
		class="h-10 shrink-0 gap-3 rounded-[8px] border border-[#0071DA] bg-white px-4.5 text-[14px] font-bold text-[#0071DA] hover:bg-[#E6F2FE]"
	>
		<MaskIcon src={iconArrowBack} class="size-4.5" />
		Kembali
	</Button>

	<div class="flex min-w-0 flex-1 flex-col items-center gap-2 text-center">
		<div class="flex items-center gap-3">
			<span
				class="flex size-8.75 shrink-0 items-center justify-center rounded-full bg-[#E6F2FE] text-[#007CF0]"
			>
				<MaskIcon src={iconHeadset} class="size-6" />
			</span>
			<h1 class="text-[20px] font-bold text-[#0058AA] lg:text-[24px]">{data.title}</h1>
		</div>
		<p class="text-[14px] text-[#343434]">{data.desc}</p>
	</div>
</div>
