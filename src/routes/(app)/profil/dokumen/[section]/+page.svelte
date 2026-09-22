<script lang="ts">
	import DokumenCard from '$lib/components/profil/DokumenCard.svelte';
	import DokumenHeader from '$lib/components/profil/DokumenHeader.svelte';
	import { dokumenSections } from '$lib/profil-data';

	let { data } = $props();

	const section = $derived(dokumenSections[data.section]);
	const verified = $derived(section.items.filter((i) => i.status === 'terverifikasi').length);
	const summary = $derived(
		`${section.items.length} Dokumen · ${verified} Selesai · ${section.items.length - verified} Perlu Tindak Lanjut`
	);
</script>

<svelte:head><title>Layanan Disdikal — {section.title}</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<DokumenHeader title={section.title} subtitle={section.subtitle} {summary} withAction />

	<div
		class={section.columns === 4
			? 'grid grid-cols-1 gap-3.5 min-[1300px]:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3'
			: 'grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3'}
	>
		{#each section.items as item (item.id)}
			<DokumenCard {item} />
		{/each}
	</div>
</div>
