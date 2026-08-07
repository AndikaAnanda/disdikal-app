<script lang="ts">
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import EditButton from './EditButton.svelte';
	import type { DocumentItem } from '$lib/profil-data';

	let { items }: { items: DocumentItem[] } = $props();
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<FolderIcon class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Dokumen</h2>
	</div>

	<!-- Separator antar dokumen dipasang sebagai border-left mulai item kedua;
	     elemen <hr> terpisah tidak ikut hilang saat item membungkus ke baris baru. -->
	<div class="mb-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-y-3">
		{#each items as item (item.id)}
			<div
				class="flex items-center gap-3 lg:border-l lg:border-(--dash-border) lg:px-6 lg:first:border-l-0 lg:first:pl-0"
			>
				<span
					class="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-(--brand-50) text-(--brand-600)"
				>
					<FileTextIcon class="size-4" />
				</span>
				<div class="min-w-0">
					<p class="mb-0.75 text-[13.5px] font-semibold text-(--navy-950)">{item.name}</p>
					<p
						class="text-[12px] font-bold {item.status === 'done'
							? 'text-(--accent-green)'
							: 'text-(--accent-red)'}"
					>
						{item.status === 'done' ? 'Sudah Upload' : 'Belum Upload'}
					</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="text-center"><EditButton /></div>
</div>
