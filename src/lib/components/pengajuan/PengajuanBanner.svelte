<script lang="ts">
	import bgBoat from '$lib/assets/bg-boat.png';
	import { pengajuanIcon } from './assets';

	let { title, description }: { title: string; description: string } = $props();
</script>

<section
	class="flex items-center gap-4 overflow-hidden rounded-[10px] bg-(--navy-950) bg-cover bg-right bg-no-repeat px-5 py-5 text-white sm:gap-5 sm:px-6"
	style="background-image: url({bgBoat})"
>
	<img src={pengajuanIcon} alt="" class="size-11 shrink-0 sm:size-12" />
	<div class="min-w-0">
		<h1 class="text-[16px] font-bold sm:text-[17px]">{title}</h1>
		<p class="mt-1 max-w-150 text-[11px] leading-[1.7] text-pretty text-white/85">
			{description}
		</p>
	</div>
</section>
