<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import { cn } from '$lib/utils';
	import type { DetailStep } from '$lib/gun-gelar-data';

	let { steps, currentStep }: { steps: DetailStep[]; currentStep: number } = $props();

	type Status = 'done' | 'current' | 'todo';

	function statusOf(index: number): Status {
		if (index < currentStep - 1) return 'done';
		if (index === currentStep - 1) return 'current';
		return 'todo';
	}

	const circle: Record<Status, string> = {
		done: 'bg-(--accent-green) text-white',
		current: 'bg-(--navy-950) text-white',
		todo: 'bg-(--dash-placeholder) text-(--dash-muted)'
	};
	const line: Record<Status, string> = {
		done: 'bg-(--accent-green)',
		current: 'bg-(--navy-950)',
		todo: 'bg-(--dash-border)'
	};
	const title: Record<Status, string> = {
		done: 'text-(--navy-950)',
		current: 'text-(--accent-blue)',
		todo: 'text-(--dash-muted)'
	};
</script>

<div class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4">
	<div class="flex flex-col gap-4 md:flex-row md:items-start md:gap-0">
		{#each steps as item, index (item.title)}
			{@const status = statusOf(index)}
			<div class="flex min-w-0 gap-3 md:flex-1 md:flex-col md:gap-0">
				<div class="flex flex-col items-center md:w-full md:flex-row">
					<span
						class={cn(
							'flex size-8 shrink-0 items-center justify-center rounded-full',
							circle[status]
						)}
					>
						{#if status === 'done'}
							<CheckIcon class="size-4" strokeWidth={2.6} />
						{:else}
							<ClockIcon class="size-4" strokeWidth={2.2} />
						{/if}
					</span>
					{#if index < steps.length - 1}
						<div
							class={cn('w-0.5 flex-1 rounded-full md:h-0.5 md:w-auto', line[statusOf(index + 1)])}
						></div>
					{/if}
				</div>

				<div class="min-w-0 pb-1 md:mt-2.5 md:pr-6">
					<p class={cn('text-[11.5px] font-semibold', title[status])}>
						{index + 1}. {item.title}
					</p>
					{#if status !== 'todo'}
						<p class="mt-0.5 text-[10px] text-(--dash-muted)">{item.date}</p>
					{/if}
					<p
						class={cn(
							'mt-1 text-[10px] leading-[1.6]',
							status === 'todo' ? 'text-(--dash-muted)' : 'text-(--accent-blue)'
						)}
					>
						{item.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
