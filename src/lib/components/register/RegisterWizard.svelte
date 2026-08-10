<script lang="ts" module>
	// Dipakai halaman untuk melompat ke step pertama yang errornya muncul saat
	// submit gagal; field yang tidak terdaftar di sini diabaikan.
	export const FIELD_STEP: Record<string, number> = {
		nomorPeserta: 0,
		nik: 0,
		namaLengkap: 0,
		jenisKelamin: 0,
		tanggalLahir: 0,
		tempatLahir: 0,
		agama: 0,
		email: 1,
		noHp: 1,
		password: 1,
		confirmPassword: 1,
		foto: 2,
		agreement: 3
	};

	export const LAST_STEP = 3;
</script>

<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import DataDiriSection from './DataDiriSection.svelte';
	import DocumentUploadGrid from './DocumentUploadGrid.svelte';
	import FotoUploadCard from './FotoUploadCard.svelte';
	import InformasiAkunSection from './InformasiAkunSection.svelte';
	import RegisterBanner from './RegisterBanner.svelte';
	import RegisterStepper from './RegisterStepper.svelte';
	import VerifikasiSection from './VerifikasiSection.svelte';
	import { resolve } from '$app/paths';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform, step = $bindable(0) }: { superform: SuperForm<RegisterInput>; step?: number } =
		$props();
</script>

<div class="flex flex-col gap-4.5 pb-11">
	<RegisterBanner />
	<RegisterStepper {step} onJump={(index) => (step = index)} />

	{#if step === 0}
		<DataDiriSection {superform} />
	{:else if step === 1}
		<InformasiAkunSection {superform} />
	{:else if step === 2}
		<div class="flex flex-col gap-4.5">
			<DocumentUploadGrid />
			<FotoUploadCard {superform} />
		</div>
	{:else}
		<VerifikasiSection {superform} />
	{/if}

	<div class="grid grid-cols-2 gap-2.5">
		<button
			type="button"
			disabled={step === 0}
			onclick={() => (step = Math.max(0, step - 1))}
			class="cursor-pointer rounded-[11px] border border-(--auth-outline-border) bg-white py-3.25 text-[13.5px] font-semibold text-(--auth-hero-text) disabled:cursor-not-allowed disabled:opacity-50"
		>
			Tahap Sebelumnya
		</button>
		<button
			type="button"
			disabled={step === LAST_STEP}
			onclick={() => (step = Math.min(LAST_STEP, step + 1))}
			class="cursor-pointer rounded-[11px] bg-(--brand-50) py-3.25 text-[13.5px] font-semibold text-(--brand-500) disabled:cursor-not-allowed disabled:opacity-50"
		>
			Tahap Selanjutnya
		</button>
	</div>

	<p class="text-center text-[12.5px] leading-[1.6] text-(--auth-muted)">
		Sudah punya akun?
		<a href={resolve('/login')} class="font-semibold text-(--brand-500)">Masuk di sini</a>
	</p>
</div>
