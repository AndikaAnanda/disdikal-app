<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		steps,
		step,
		onJump
	}: {
		steps: { title: string; sub: string }[];
		step: number;
		onJump?: (index: number) => void;
	} = $props();

	type Status = 'done' | 'current' | 'todo';

	function statusOf(index: number): Status {
		if (index < step) return 'done';
		if (index === step) return 'current';
		return 'todo';
	}

	const circle: Record<Status, string> = {
		done: 'bg-(--accent-blue) text-white',
		current: 'bg-(--accent-blue) text-white',
		todo: 'bg-(--dash-placeholder) text-(--dash-muted)'
	};
	const line: Record<Status, string> = {
		done: 'bg-(--accent-blue)',
		current: 'bg-(--accent-blue)',
		todo: 'bg-(--dash-border)'
	};
</script>

<div>
	<div class="flex items-start">
		{#each steps as item, index (item.title)}
			{@const status = statusOf(index)}
			<div class="flex min-w-0 flex-1 flex-col items-center text-center">
				<div class="flex w-full items-center">
					<div
						class={cn('h-0.5 flex-1 rounded-full', index === 0 ? 'opacity-0' : line[status])}
					></div>
					<button
						type="button"
						onclick={() => onJump?.(index)}
						aria-current={status === 'current' ? 'step' : undefined}
						class={cn(
							'flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[12px] font-semibold',
							circle[status]
						)}
					>
						{index + 1}
					</button>
					<div
						class={cn(
							'h-0.5 flex-1 rounded-full',
							index === steps.length - 1 ? 'opacity-0' : line[statusOf(index + 1)]
						)}
					></div>
				</div>
				<p
					class="mt-2 hidden text-[11.5px] font-semibold sm:block {status === 'todo'
						? 'text-(--dash-muted)'
						: 'text-(--navy-950)'}"
				>
					{item.title}
				</p>
				<p
					class="hidden text-[10px] sm:block {status === 'todo'
						? 'text-(--dash-muted)'
						: 'text-(--accent-blue)'}"
				>
					{item.sub}
				</p>
			</div>
		{/each}
	</div>

	<p class="mt-2.5 text-center text-[11.5px] text-(--dash-muted) sm:hidden">
		Langkah {step + 1} dari {steps.length} ·
		<span class="font-semibold text-(--navy-950)">{steps[step].title}</span>
	</p>
</div>
