<script lang="ts">
	import { tabActive, tabBase, tabIdle } from '$lib/components/shared/PengajuanTabs.svelte';
	import { cn } from '$lib/utils';
	import { KOLEKSI_TABS, tabCountTone, tabLabel, type KoleksiTabId } from '$lib/perpustakaan-data';

	let {
		counts,
		value = $bindable('semua')
	}: { counts: Record<KoleksiTabId, number>; value?: KoleksiTabId } = $props();
</script>

<nav class="flex min-w-0 gap-5 overflow-x-auto">
	{#each KOLEKSI_TABS as id (id)}
		<button
			type="button"
			onclick={() => (value = id)}
			aria-current={value === id ? 'true' : undefined}
			class={cn(tabBase, 'cursor-pointer', value === id ? tabActive : tabIdle)}
		>
			{tabLabel[id]}
			<span class="rounded-md px-1.5 py-0.5 text-[10px] font-bold {tabCountTone[id]}">
				{counts[id]}
			</span>
		</button>
	{/each}
</nav>
