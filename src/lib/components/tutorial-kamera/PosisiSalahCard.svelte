<script lang="ts">
	import SpriteImage from './SpriteImage.svelte';
	import { iconCloseOne } from './icons';
	import spritePosisi from '$lib/assets/tutorial-kamera-icon/image-302.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import type { PosisiSalahItem } from '$lib/tutorial-kamera-data';

	let { items }: { items: PosisiSalahItem[] } = $props();
</script>

<div class="flex flex-col gap-4.5">
	<h2 class="text-[16px] font-bold text-[#0071DA]">D. Contoh Posisi yang Salah</h2>

	<div class="flex flex-col gap-3">
		{#each items as item (item.id)}
			<div class="flex items-center justify-between gap-3 rounded-[8px]">
				<div class="flex min-w-0 items-center gap-3">
					<MaskIcon src={iconCloseOne} class="size-5 text-[#F00000]" />
					<span class="text-[12px] text-[#343434]">{item.text}</span>
				</div>
				<SpriteImage src={spritePosisi} sprite={item.sprite} class="h-12.5 w-14.5 rounded-[4px]" />
			</div>
		{/each}
	</div>
</div>
