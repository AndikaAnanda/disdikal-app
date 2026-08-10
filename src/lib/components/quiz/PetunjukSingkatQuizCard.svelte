<script lang="ts">
	import { iconCheckOne, iconGlobeBook } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';

	let { items }: { items: string[] } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<div class="mb-4.5 flex items-center gap-3">
		<MaskIcon src={iconGlobeBook} class="size-5 text-[#01296E]" />
		<h2 class="text-[16px] font-bold text-[#01296E]">Petunjuk Singkat</h2>
	</div>

	<ul class="flex flex-col gap-4">
		{#each items as item (item)}
			<li class="flex items-start gap-3">
				<span
					class="flex size-6 shrink-0 items-center justify-center rounded-full bg-(--brand-50) text-[#007CF0]"
				>
					<MaskIcon src={iconCheckOne} class="size-4" />
				</span>
				<span class="min-w-0 text-[12px] leading-snug text-[#343434]">{item}</span>
			</li>
		{/each}
	</ul>
</div>
