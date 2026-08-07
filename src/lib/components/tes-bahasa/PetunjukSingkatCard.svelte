<script lang="ts">
	import { iconCheckOne, iconGlobeBook } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';

	let { items }: { items: string[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconGlobeBook} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Petunjuk Singkat</h2>
	</div>

	<ul class="flex flex-col gap-4">
		{#each items as item (item)}
			<li class="flex items-start gap-3">
				<span
					class="flex size-6 shrink-0 items-center justify-center rounded-full bg-(--brand-50) text-[#007CF0]"
				>
					<MaskIcon src={iconCheckOne} class="size-4" />
				</span>
				<span class="text-[12px] leading-snug text-[#5D5D5D]">{item}</span>
			</li>
		{/each}
	</ul>
</div>
