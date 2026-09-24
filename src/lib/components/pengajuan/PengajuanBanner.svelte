<script lang="ts">
	let {
		title,
		description,
		bg,
		icon,
		tone = 'dark'
	}: {
		title: string;
		description: string;
		bg: string;
		icon?: string;
		tone?: 'dark' | 'light';
	} = $props();

	const dark = $derived(tone === 'dark');
</script>

<section
	class="flex items-center gap-4 overflow-hidden rounded-[10px] bg-cover bg-right bg-no-repeat px-5 py-5 sm:gap-5 sm:px-6 {dark
		? 'bg-(--navy-950) text-white'
		: 'border border-(--dash-border) bg-white text-(--navy-950)'}"
	style="background-image: url({bg})"
>
	{#if icon}
		<img src={icon} alt="" class="size-11 shrink-0 sm:size-12" />
	{/if}
	<div class="min-w-0">
		<h2 class="text-[16px] font-bold sm:text-[17px]">{title}</h2>
		<p
			class="mt-1 max-w-150 text-[11px] leading-[1.7] text-pretty {dark
				? 'text-white/85'
				: 'text-(--dash-muted)'}"
		>
			{description}
		</p>
	</div>
</section>
