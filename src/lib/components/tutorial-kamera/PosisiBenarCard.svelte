<script lang="ts">
	import diagramPosisi from '$lib/assets/tutorial-kamera-icon/image-304.png';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import { iconCheckOne } from '$lib/components/tes-bahasa/icons';

	let { bullets }: { bullets: string[] } = $props();
</script>

<div class="rounded-[8px] bg-white p-6">
	<h2 class="text-[16px] font-bold text-[#0071DA]">B. Posisi yang Benar</h2>
	<p class="mt-3 text-[12px] text-[#343434]">
		Posisikan diri Anda sesuai panduan agar proses tes berjalan lancar.
	</p>

	<div
		class="mt-3 flex flex-col items-center gap-8 min-[1000px]:flex-row min-[1000px]:justify-center min-[1000px]:gap-20"
	>
		<img
			src={diagramPosisi}
			alt="Diagram posisi peserta yang benar di depan kamera"
			class="w-full max-w-117.5 shrink-0 object-contain"
		/>
		<ul class="flex flex-col gap-4.5">
			{#each bullets as bullet (bullet)}
				<li class="flex items-center gap-3">
					<MaskIcon src={iconCheckOne} class="size-4.5 text-[#5AE95A]" />
					<span class="text-[14px] text-[#343434]">{bullet}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
