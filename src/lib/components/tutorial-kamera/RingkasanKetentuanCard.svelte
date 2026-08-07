<script lang="ts">
	import AppWindowIcon from '@lucide/svelte/icons/app-window';
	import { ketentuanIcon } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconGlobeBook } from '$lib/components/tes-bahasa/icons';
	import type { KetentuanItem } from '$lib/tutorial-kamera-data';

	let { items }: { items: KetentuanItem[] } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-6 flex items-center gap-3">
		<MaskIcon src={iconGlobeBook} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Ringkasan Ketentuan Tes</h2>
	</div>

	<div class="flex flex-col gap-4.5">
		{#each items as item (item.id)}
			<div class="flex items-center gap-3">
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E6F2FE] text-[#007CF0]"
				>
					{#if item.id === 'appWeb'}
						<AppWindowIcon class="size-4" />
					{:else}
						<MaskIcon src={ketentuanIcon[item.id] ?? ''} class="size-4" />
					{/if}
				</span>
				<span class="min-w-0 text-[12px] text-[#343434]">{item.text}</span>
			</div>
		{/each}
	</div>
</div>
