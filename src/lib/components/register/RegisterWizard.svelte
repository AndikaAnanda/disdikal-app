<script lang="ts" module>
	// Dipakai halaman untuk melompat ke step pertama yang errornya muncul saat
	// submit gagal; field yang tidak terdaftar di sini diabaikan.
	export const FIELD_STEP: Record<string, number> = {
		namaLengkap: 0,
		nik: 0,
		tanggalLahir: 0,
		jenisKelamin: 0,
		pendidikanTerakhir: 0,
		jurusan: 0,
		provinsi: 0,
		kabupatenKota: 0,
		alamat: 0,
		noHp: 0,
		foto: 1,
		ktp: 1,
		ijazah: 1,
		transkrip: 1,
		suratSehat: 1,
		email: 2,
		namaPengguna: 2,
		password: 2,
		confirmPassword: 2,
		kodeVerifikasi: 3
	};

	export const LAST_STEP = 3;
</script>

<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import type { SuperForm } from 'sveltekit-superforms';
	import DataDiriSection from './DataDiriSection.svelte';
	import DocumentUploadGrid from './DocumentUploadGrid.svelte';
	import FotoUploadCard from './FotoUploadCard.svelte';
	import InformasiAkunSection from './InformasiAkunSection.svelte';
	import RegisterBanner from './RegisterBanner.svelte';
	import RegisterStepper from './RegisterStepper.svelte';
	import VerifikasiSection from './VerifikasiSection.svelte';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform, step = $bindable(0) }: { superform: SuperForm<RegisterInput>; step?: number } =
		$props();

	const isLast = $derived(step === LAST_STEP);
</script>

<div class="overflow-hidden rounded-2xl bg-white shadow-(--reg-card-shadow)">
	<RegisterBanner />

	<div class="flex flex-col gap-5 px-5 py-5 sm:px-8 sm:py-6">
		<Separator class="bg-(--auth-border)" />
		<RegisterStepper {step} onJump={(index) => (step = index)} />

		{#if step === 0}
			<DataDiriSection {superform} />
		{:else if step === 1}
			<div class="flex flex-col gap-6">
				<DocumentUploadGrid {superform} />
				<FotoUploadCard {superform} />
			</div>
		{:else if step === 2}
			<InformasiAkunSection {superform} />
		{:else}
			<VerifikasiSection {superform} />
		{/if}

		<Separator class="bg-(--auth-border)" />

		<div class="flex flex-wrap items-center gap-3">
			<Button
				type="button"
				variant="outline"
				disabled={step === 0}
				onclick={() => (step = Math.max(0, step - 1))}
				class="h-auto cursor-pointer gap-2 rounded-lg border-(--auth-outline-border) bg-white px-4 py-2.75 text-[13.5px] font-semibold text-(--auth-hero-text) hover:bg-(--brand-50) hover:text-(--navy-950) disabled:cursor-not-allowed"
			>
				<ArrowLeftIcon class="size-4" strokeWidth={2} />
				Kembali
			</Button>

			{#if isLast}
				<Button
					type="submit"
					class="h-auto cursor-pointer gap-2.5 rounded-lg bg-(--navy-950) px-5 py-2.75 text-[13.5px] font-semibold text-white hover:bg-(--brand-600)"
				>
					Kirim Pendaftaran
					<ArrowRightIcon class="size-4" strokeWidth={2} />
				</Button>
			{:else}
				<Button
					type="button"
					onclick={() => (step = Math.min(LAST_STEP, step + 1))}
					class="h-auto cursor-pointer gap-2.5 rounded-lg bg-(--navy-950) px-5 py-2.75 text-[13.5px] font-semibold text-white hover:bg-(--brand-600)"
				>
					Lanjut ke langkah berikutnya
					<ArrowRightIcon class="size-4" strokeWidth={2} />
				</Button>
			{/if}

			<p class="text-[12.5px] text-(--auth-muted) sm:ml-auto">
				Sudah punya akun?
				<a href={resolve('/login')} class="font-bold text-(--navy-950) hover:text-(--brand-500)">
					Masuk di sini
				</a>
			</p>
		</div>
	</div>
</div>
