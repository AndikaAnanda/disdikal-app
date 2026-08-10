<script lang="ts">
	import { iconRibbonSolid } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';

	const swatches = [
		{ id: 'belum', label: 'Belum Dijawab', color: 'bg-[#EBEBEB]' },
		{ id: 'proses', label: 'Sedang Dikerjakan', color: 'bg-[#007CF0]' },
		{ id: 'selesai', label: 'Sudah Dijawab', color: 'bg-[#5AE95A]' }
	];
</script>

<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
	{#each swatches as item (item.id)}
		<span class="flex items-center gap-3 text-[14px] text-[#343434]">
			<span class="size-4.5 shrink-0 rounded-[2px] {item.color}"></span>
			{item.label}
		</span>
	{/each}
	<span class="flex items-center gap-3 text-[14px] text-[#343434]">
		<MaskIcon src={iconRibbonSolid} class="size-6 text-[#0058AA]" />
		Ditandai
	</span>
</div>
