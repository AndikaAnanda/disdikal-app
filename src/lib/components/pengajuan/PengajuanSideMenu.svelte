<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils';
	import { layananItems } from '$lib/pengajuan-data';
	import { layananIcon } from './assets';

	const semua = resolve('/pengajuan-layanan');
	const isSemua = $derived(page.url.pathname === semua);

	const item =
		'flex shrink-0 items-center gap-2.5 rounded-lg border-l-2 border-transparent px-3 py-2.5 text-[11.5px] font-medium whitespace-nowrap transition-colors';
	const itemActive = 'border-(--accent-blue) bg-(--accent-blue-50) text-(--navy-950)';
	const itemIdle = 'text-[#9aa2b1] hover:bg-(--brand-50) hover:text-(--navy-950)';
</script>

<nav
	class="flex gap-1 overflow-x-auto rounded-[10px] border border-(--dash-border) bg-white p-2.5 md:flex-col md:overflow-visible"
>
	<a
		href={semua}
		class={cn(item, 'cursor-pointer', isSemua ? itemActive : itemIdle)}
		aria-current={isSemua ? 'page' : undefined}
	>
		<img
			src={layananIcon.all}
			alt=""
			class={cn('size-3.5 shrink-0', isSemua ? 'opacity-100' : 'opacity-45')}
		/>
		Semua layanan
	</a>

	{#each layananItems as layanan (layanan.id)}
		<span class={cn(item, itemIdle, 'cursor-default')} aria-disabled="true">
			<img src={layananIcon[layanan.id]} alt="" class="size-3.5 shrink-0 opacity-45" />
			{layanan.menuLabel}
		</span>
	{/each}
</nav>
