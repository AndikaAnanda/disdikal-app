<script lang="ts" module>
	export const FIELD_STEP: Record<string, number> = {
		jenisPengajuan: 0,
		jenjangPendidikan: 0,
		programStudi: 0,
		namaGelar: 0,
		namaPerguruanTinggi: 0,
		nomorIjazah: 0,
		tahunMasuk: 0,
		tanggalLulus: 0,
		ijazah: 1,
		transkrip: 1,
		suratKeteranganLulus: 1,
		dokumenLainnya: 1,
		dokumenTambahan: 1,
		pernyataan: 2
	};

	export const LAST_STEP = 2;
</script>

<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import SaveIcon from '@lucide/svelte/icons/save';
	import SendIcon from '@lucide/svelte/icons/send';
	import type { SuperForm } from 'sveltekit-superforms';
	import DataGelarSection from './DataGelarSection.svelte';
	import DokumenSection from './DokumenSection.svelte';
	import PreviewSection from './PreviewSection.svelte';
	import SectionCard from '$lib/components/shared/SectionCard.svelte';
	import StepProgress from '$lib/components/shared/StepProgress.svelte';
	import { Button } from '$lib/components/ui/button';
	import { formSteps } from '$lib/gun-gelar-data';
	import type { GunGelarInput } from '$lib/schemas/gun-gelar';

	let { superform, step = $bindable(0) }: { superform: SuperForm<GunGelarInput>; step?: number } =
		$props();

	const isLast = $derived(step === LAST_STEP);
	const nextLabel = $derived(step === 0 ? 'Lanjut ke Dokumen' : 'Lanjut ke Preview');
	const heading = $derived(isLast ? 'Preview Pengajuan Gun Gelar' : 'Form Pengajuan Gun Gelar');
	const subheading = $derived(
		isLast
			? 'Periksa kembali seluruh data dan dokumen yang telah Anda unggah sebelum disimpan secara permanen.'
			: 'Lengkapi data berikut untuk mengajukan layanan Gun Gelar.'
	);
</script>

<div class="flex flex-col gap-4">
	<div class="rounded-[10px] bg-[#f7f9fd] px-5 py-5">
		<StepProgress steps={formSteps} {step} onJump={(index) => (step = index)} />
	</div>

	<div class="flex flex-wrap items-center gap-3">
		<span
			class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-blue) text-white"
		>
			<FileTextIcon class="size-4.5" strokeWidth={2} />
		</span>
		<div class="min-w-0 flex-1">
			<h2 class="text-[14px] font-bold text-(--navy-950)">{heading}</h2>
			<p class="text-[11px] text-(--dash-muted)">{subheading}</p>
		</div>
		<Button
			type="button"
			variant="outline"
			aria-disabled="true"
			class="h-auto cursor-pointer gap-2 rounded-md border-(--accent-blue)/40 bg-white px-3.5 py-2 text-[11.5px] font-semibold text-(--navy-950) hover:bg-(--accent-blue-50)"
		>
			Simpan Draf
			<SaveIcon class="size-3.5 text-(--accent-blue)" strokeWidth={2} />
		</Button>
	</div>

	{#if step === 0}
		<SectionCard number={1} title="Data Gelar yang Diajukan">
			<DataGelarSection {superform} />
		</SectionCard>
	{:else if step === 1}
		<SectionCard number={2} title="Dokumen Pendukung">
			<DokumenSection {superform} />
		</SectionCard>
	{:else}
		<PreviewSection {superform} />
	{/if}

	<div class="flex flex-wrap items-center justify-end gap-2.5">
		<Button
			type="button"
			variant="outline"
			disabled={step === 0}
			onclick={() => (step = Math.max(0, step - 1))}
			class="h-auto cursor-pointer gap-2 rounded-md border-(--dash-border) bg-white px-4 py-2.5 text-[12px] font-semibold text-(--dash-muted) hover:bg-(--brand-50) hover:text-(--navy-950) disabled:cursor-not-allowed"
		>
			<ArrowLeftIcon class="size-3.5" strokeWidth={2} />
			Kembali
		</Button>

		{#if isLast}
			<Button
				type="submit"
				class="h-auto cursor-pointer gap-2 rounded-md bg-(--navy-950) px-4 py-2.5 text-[12px] font-semibold text-white hover:bg-(--brand-600)"
			>
				Simpan dan Ajukan Permanen
				<SendIcon class="size-3.5" strokeWidth={2} />
			</Button>
		{:else}
			<Button
				type="button"
				onclick={() => (step = Math.min(LAST_STEP, step + 1))}
				class="h-auto cursor-pointer gap-2 rounded-md bg-(--navy-950) px-4 py-2.5 text-[12px] font-semibold text-white hover:bg-(--brand-600)"
			>
				{nextLabel}
				<ArrowRightIcon class="size-3.5" strokeWidth={2} />
			</Button>
		{/if}
	</div>
</div>
