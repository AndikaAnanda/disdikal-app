<script lang="ts">
	import { iconCheckRounded, iconTips } from './icons';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';

	let { items }: { items: string[] } = $props();
</script>

<div class="rounded-[8px] bg-[#F7F9FE] p-4.5">
	<div class="mb-3 flex items-center gap-3">
		<MaskIcon src={iconTips} class="size-5 text-[#0071DA]" />
		<h2 class="text-[14px] font-bold text-[#0071DA]">Tips Mengerjakan</h2>
	</div>

	<ul class="flex flex-col gap-2">
		{#each items as item (item)}
			<li class="flex items-start gap-3">
				<MaskIcon src={iconCheckRounded} class="mt-0.5 size-4.5 text-[#5AE95A]" />
				<span class="min-w-0 text-[12px] text-[#343434]">{item}</span>
			</li>
		{/each}
	</ul>
</div>
