<script lang="ts">
	import FileCheckIcon from '@lucide/svelte/icons/file-check';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import { tabActive, tabBar, tabBase, tabIdle } from '$lib/components/shared/PengajuanTabs.svelte';
	import { cn } from '$lib/utils';

	let {
		hasilCount,
		pengajuanCount,
		value = $bindable('hasil')
	}: { hasilCount: number; pengajuanCount: number; value?: string } = $props();

	const tabs = $derived([
		{ id: 'hasil', label: `Dokumen Hasil (${hasilCount})`, icon: FileCheckIcon },
		{ id: 'pengajuan', label: `Dokumen Pengajuan (${pengajuanCount})`, icon: FileTextIcon }
	]);
</script>

<nav class={tabBar}>
	{#each tabs as tab (tab.id)}
		{@const Icon = tab.icon}
		<button
			type="button"
			onclick={() => (value = tab.id)}
			aria-current={value === tab.id ? 'true' : undefined}
			class={cn(tabBase, 'cursor-pointer', value === tab.id ? tabActive : tabIdle)}
		>
			<Icon class="size-3.5" strokeWidth={2} />
			{tab.label}
		</button>
	{/each}
</nav>
