<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { fileTypeIcon, iconFileText } from './icons';
	import type { PenunjangItem } from '$lib/dokumen-data';

	let { items }: { items: PenunjangItem[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconFileText} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Dokumen Penunjang &amp; News</h2>
	</div>

	<div class="grid max-h-32 grid-cols-1 gap-x-6 gap-y-3 overflow-y-auto pr-1 sm:grid-cols-2">
		{#each items as item (item.id)}
			<div class="flex items-start gap-2.5">
				<MaskIcon
					src={fileTypeIcon[item.fileType]}
					class="mt-0.5 size-5 {item.fileType === 'pdf' ? 'text-[#F00000]' : 'text-[#007CF0]'}"
				/>
				<div class="min-w-0">
					<p class="truncate text-[12px] text-[#343434]" title={item.name}>{item.name}</p>
					<p class="text-[10px] text-[#777777]">{item.size}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
