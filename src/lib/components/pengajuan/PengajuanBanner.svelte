<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';

	let {
		title,
		description,
		bg,
		icon,
		iconTile: IconTile,
		tone = 'dark',
		titleClass
	}: {
		title: string;
		description: string | string[];
		bg?: string;
		icon?: string;
		iconTile?: LucideIcon;
		tone?: 'dark' | 'light';
		titleClass?: string;
	} = $props();

	const dark = $derived(tone === 'dark');
	const lines = $derived(Array.isArray(description) ? description : [description]);
</script>

<section
	class="flex items-center gap-4 overflow-hidden rounded-[10px] bg-cover bg-right bg-no-repeat px-5 py-5 sm:gap-5 sm:px-6 {dark
		? 'bg-(--navy-950) text-white'
		: 'border border-(--dash-border) bg-white text-(--navy-950)'}"
	style={bg ? `background-image: url(${bg})` : undefined}
>
	{#if icon}
		<img src={icon} alt="" class="size-11 shrink-0 sm:size-12" />
	{:else if IconTile}
		<span
			class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white sm:size-12"
		>
			<IconTile class="size-5.5" strokeWidth={2} />
		</span>
	{/if}
	<div class="min-w-0">
		<h2 class={cn('text-[16px] font-bold sm:text-[17px]', titleClass)}>{title}</h2>
		{#each lines as line (line)}
			<p
				class="mt-1 max-w-150 text-[11px] leading-[1.7] text-pretty {dark
					? 'text-white/85'
					: 'text-(--dash-muted)'}"
			>
				{line}
			</p>
		{/each}
	</div>
</section>
