<script lang="ts">
	import larangan1 from '$lib/assets/tutorial-kamera-icon/larangan-1.png';
	import larangan2 from '$lib/assets/tutorial-kamera-icon/larangan-2.png';
	import larangan3 from '$lib/assets/tutorial-kamera-icon/larangan-3.png';
	import larangan4 from '$lib/assets/tutorial-kamera-icon/larangan-4.png';
	import larangan5 from '$lib/assets/tutorial-kamera-icon/larangan-5.png';
	import type { LaranganItem } from '$lib/tutorial-kamera-data';

	let { items }: { items: LaranganItem[] } = $props();

	const images: Record<string, string> = {
		'tab-lain': larangan1,
		'keluar-halaman': larangan2,
		'perangkat-lain': larangan3,
		komunikasi: larangan4,
		merekam: larangan5
	};
</script>

<div class="flex flex-col gap-4.5">
	<h2 class="text-[16px] font-bold text-[#0071DA]">C. Hal yang Tidak Diperbolehkan</h2>

	<div class="flex flex-col gap-3">
		{#each items as item (item.id)}
			<div
				class="flex items-center gap-4.5 rounded-[8px] border-[0.5px] border-[#FEE6E6] bg-[#FFFCFC] p-3"
			>
				<img src={images[item.id]} alt="" class="size-12.5 shrink-0 object-cover" />
				<div class="min-w-0 text-[12px] text-[#343434]">
					<p class="font-bold">{item.title}</p>
					<div class="mt-1.5 flex flex-col gap-0.5">
						{#each item.lines as line (line)}
							<p>{line}</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
