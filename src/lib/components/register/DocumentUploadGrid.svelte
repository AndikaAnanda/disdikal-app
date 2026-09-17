<script lang="ts">
	import CloudUploadIcon from '@lucide/svelte/icons/cloud-upload';
	import type { SuperForm } from 'sveltekit-superforms';
	import DocumentUploadCard from './DocumentUploadCard.svelte';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	const documents = [
		{ field: 'ktp', title: 'KTP', hint: 'Scan berwarna, sisi depan' },
		{ field: 'ijazah', title: 'Ijazah', hint: 'Pendidikan terakhir, scan berwarna' },
		{ field: 'transkrip', title: 'Transkrip Nilai', hint: 'Scan berwarna' },
		{ field: 'suratSehat', title: 'Surat Keterangan Sehat', hint: 'Scan berwarna' }
	] as const;
</script>

<div>
	<div class="mb-3.5 flex items-start gap-2.5">
		<CloudUploadIcon class="mt-0.5 size-4.5 shrink-0 text-(--brand-500)" strokeWidth={1.9} />
		<div>
			<h2 class="text-[13.5px] font-semibold text-(--navy-950)">Unggah Dokumen Persyaratan</h2>
			<p class="mt-0.5 text-[11px] leading-[1.6] text-(--auth-muted)">
				Format PDF atau JPG, maksimal 2 MB per dokumen. Dokumen asli dibawa saat verifikasi di Lanud
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
		{#each documents as doc (doc.field)}
			<DocumentUploadCard {superform} field={doc.field} title={doc.title} hint={doc.hint} />
		{/each}
	</div>
</div>
