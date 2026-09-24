<script lang="ts">
	import PlusIcon from '@lucide/svelte/icons/plus';
	import type { SuperForm } from 'sveltekit-superforms';
	import DokumenUploadCard from '$lib/components/shared/DokumenUploadCard.svelte';
	import { dokumenWajib } from '$lib/gun-gelar-data';
	import type { GunGelarInput } from '$lib/schemas/gun-gelar';

	let { superform }: { superform: SuperForm<GunGelarInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const optionalHint = 'PDF/DOC/PNG/JPG, maksimal 5 MB';
	const optionalAccept = '.pdf,.doc,.docx,image/png,image/jpeg';

	function tambahDokumen() {
		$form.dokumenTambahan = [...$form.dokumenTambahan, { nama: '', file: undefined }];
	}

	function hapusDokumen(index: number) {
		$form.dokumenTambahan = $form.dokumenTambahan.filter((_, i) => i !== index);
	}
</script>

<div class="flex flex-col gap-4">
	<div class="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
		{#each dokumenWajib as doc (doc.field)}
			<DokumenUploadCard
				{superform}
				field={doc.field}
				title={doc.title}
				hint={doc.hint}
				error={$errors[doc.field]?.[0]}
			/>
		{/each}

		<DokumenUploadCard
			{superform}
			field="dokumenLainnya"
			title="Dokumen Lainnya (Optional)"
			hint="Dokumen pendukung lainnya yang relevan"
			hintText={optionalHint}
			accept={optionalAccept}
			withName
			bind:name={$form.dokumenLainnyaNama}
			error={$errors.dokumenLainnya?.[0]}
		/>

		{#each $form.dokumenTambahan as _entry, index (index)}
			<DokumenUploadCard
				{superform}
				field={`dokumenTambahan[${index}].file`}
				title="Dokumen Lainnya (Optional)"
				hint="Dokumen pendukung lainnya yang relevan"
				hintText={optionalHint}
				accept={optionalAccept}
				withName
				bind:name={$form.dokumenTambahan[index].nama}
				error={$errors.dokumenTambahan?.[index]?.file?.[0]}
				onRemove={() => hapusDokumen(index)}
			/>
		{/each}
	</div>

	<button
		type="button"
		onclick={tambahDokumen}
		class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-dashed border-(--accent-blue)/40 bg-[#fbfdff] px-4 py-3.5 text-[11px] font-semibold text-(--accent-blue) transition-colors hover:bg-(--accent-blue-50)"
	>
		<PlusIcon class="size-3.5" strokeWidth={2.4} />
		Tambah Dokumen Lainnya (Optional)
	</button>
</div>
