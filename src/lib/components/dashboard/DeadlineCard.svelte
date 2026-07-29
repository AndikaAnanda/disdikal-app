<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import HourglassIcon from '@lucide/svelte/icons/hourglass';
	import * as Card from '$lib/components/ui/card';
	import type { DeadlineInfo } from '$lib/dashboard-data';

	let { deadline }: { deadline: DeadlineInfo } = $props();

	const boxes = $derived([
		{ id: 'hari', num: deadline.days, label: 'Hari' },
		{ id: 'jam', num: deadline.hours, label: 'Jam' },
		{ id: 'menit', num: deadline.minutes, label: 'Menit' }
	]);
</script>

<Card.Root
	class="flex-row gap-4 rounded-[14px] border border-[#FE7605] bg-[#FFF8F2] px-5 py-5 shadow-none ring-0 sm:px-7 sm:py-6.5"
>
	<HourglassIcon class="size-8.75 shrink-0 self-start" />
	<div class="flex min-w-0 flex-1 flex-col gap-3">
		<Card.Title class="text-base font-bold text-[#FE7605] sm:text-[18px]">Deadline</Card.Title>
		<Card.Content class="p-0">
			<p class="text-[14px] leading-snug font-bold text-black">{deadline.title}</p>
			<p class="mt-2.5 text-[14px] text-black">{deadline.subLabel}</p>
			<div class="mt-2.5 flex flex-wrap items-center gap-2">
				{#each boxes as box, i (box.id)}
					{#if i > 0}
						<span class="font-extrabold text-(--accent-orange)">:</span>
					{/if}
					<div
						class="rounded-lg bg-white px-3 py-2 text-center shadow-[0_2px_6px_rgb(224_138_31/12%)]"
					>
						<div class="text-[17px] leading-none font-extrabold text-[#FE7605]">
							{box.num}
						</div>
						<div class="mt-0.5 text-[10px] text-black">{box.label}</div>
					</div>
				{/each}
			</div>
		</Card.Content>

		<Card.Footer
			class="mt-auto gap-1.5 self-end text-[11px] font-bold text-[#FE7605]"
			aria-disabled="true"
		>
			Lihat Pengumuman
			<ArrowRightIcon class="size-4.5" />
		</Card.Footer>
	</div>
</Card.Root>
