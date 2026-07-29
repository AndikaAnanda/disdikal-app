<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FlagIcon from '@lucide/svelte/icons/flag';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import LandmarkIcon from '@lucide/svelte/icons/landmark';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import UsersIcon from '@lucide/svelte/icons/users';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';

	type DataDiriForm = {
		values?: {
			nomorPeserta?: string;
			nik?: string;
			namaLengkap?: string;
			jenisKelamin?: string;
			tanggalLahir?: string;
			tempatLahir?: string;
			agama?: string;
		};
		errors?: {
			nomorPeserta?: string[];
			nik?: string[];
			namaLengkap?: string[];
			jenisKelamin?: string[];
			tanggalLahir?: string[];
			tempatLahir?: string[];
			agama?: string[];
		};
	} | null;

	let { form }: { form: DataDiriForm } = $props();

	const genders = [
		{ value: 'laki-laki', label: 'Laki-laki' },
		{ value: 'perempuan', label: 'Perempuan' }
	];
	const religions = ['Islam', 'Kristen Protestan', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'];

	let jenisKelamin = $state('');
	let agama = $state('');

	$effect(() => {
		if (form?.values?.jenisKelamin) jenisKelamin = form.values.jenisKelamin;
		if (form?.values?.agama) agama = form.values.agama;
	});

	const genderLabel = $derived(genders.find((g) => g.value === jenisKelamin)?.label);

	const inputBase =
		'h-auto rounded-lg border-(--auth-border) py-2.75 pl-10 text-sm text-[#01296E] placeholder:text-[#01296E] focus:border-(--brand-600) focus:ring-(--brand-600)';
	const triggerBase = 'h-auto w-full gap-2 rounded-lg border-(--auth-border) py-2.75 text-sm';
	const iconLeft =
		'pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#01296E]';
</script>

<div class="rounded-2xl bg-white p-5 sm:p-7">
	<div class="mb-5 flex items-center gap-2.5">
		<span
			class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--brand-100) text-(--brand-600)"
		>
			<UsersIcon class="size-4" />
		</span>
		<h2 class="text-[16px] font-bold text-[#343434]">Data Diri</h2>
	</div>

	<div class="grid gap-x-7 gap-y-5 sm:grid-cols-2">
		<div class="space-y-1.5">
			<Label for="nomorPeserta"
				>Nomor Peserta / Pendaftaran<span class="text-destructive">*</span></Label
			>
			<div class="relative">
				<IdCardIcon class={iconLeft} />
				<Input
					id="nomorPeserta"
					name="nomorPeserta"
					placeholder="Masukkan nomor peserta Anda"
					value={form?.values?.nomorPeserta ?? ''}
					aria-invalid={form?.errors?.nomorPeserta ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if form?.errors?.nomorPeserta}
				<p class="text-xs text-destructive">{form.errors.nomorPeserta[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="nik">NIK (Nomor Induk Kependudukan)<span class="text-destructive">*</span></Label>
			<div class="relative">
				<IdCardIcon class={iconLeft} />
				<Input
					id="nik"
					name="nik"
					inputmode="numeric"
					placeholder="Masukkan NIK Anda"
					value={form?.values?.nik ?? ''}
					aria-invalid={form?.errors?.nik ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if form?.errors?.nik}
				<p class="text-xs text-destructive">{form.errors.nik[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="namaLengkap"
				>Nama Lengkap (Sesuai KTP)<span class="text-destructive">*</span></Label
			>
			<div class="relative">
				<UsersIcon class={iconLeft} />
				<Input
					id="namaLengkap"
					name="namaLengkap"
					placeholder="Masukkan nama lengkap Anda"
					value={form?.values?.namaLengkap ?? ''}
					aria-invalid={form?.errors?.namaLengkap ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if form?.errors?.namaLengkap}
				<p class="text-xs text-destructive">{form.errors.namaLengkap[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="jenisKelamin">Jenis Kelamin<span class="text-destructive">*</span></Label>
			<Select.Root type="single" name="jenisKelamin" bind:value={jenisKelamin}>
				<Select.Trigger
					id="jenisKelamin"
					class={triggerBase}
					aria-invalid={form?.errors?.jenisKelamin ? 'true' : undefined}
				>
					<span class="flex flex-1 items-center gap-3.5 text-left text-[#01296E]">
						<VenusAndMarsIcon class="size-4 shrink-0 " />
						{genderLabel ?? 'Pilih jenis kelamin Anda'}
					</span>
				</Select.Trigger>
				<Select.Content>
					{#each genders as gender (gender.value)}
						<Select.Item value={gender.value} label={gender.label}>{gender.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if form?.errors?.jenisKelamin}
				<p class="text-xs text-destructive">{form.errors.jenisKelamin[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="tanggalLahir">Tanggal Lahir<span class="text-destructive">*</span></Label>
			<div class="relative">
				<CalendarIcon class={iconLeft} />
				<Input
					id="tanggalLahir"
					name="tanggalLahir"
					type="date"
					value={form?.values?.tanggalLahir ?? ''}
					aria-invalid={form?.errors?.tanggalLahir ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if form?.errors?.tanggalLahir}
				<p class="text-xs text-destructive">{form.errors.tanggalLahir[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="tempatLahir">Tempat Lahir<span class="text-destructive">*</span></Label>
			<div class="relative">
				<MapPinIcon class={iconLeft} />
				<Input
					id="tempatLahir"
					name="tempatLahir"
					placeholder="Masukkan tempat lahir Anda"
					value={form?.values?.tempatLahir ?? ''}
					aria-invalid={form?.errors?.tempatLahir ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if form?.errors?.tempatLahir}
				<p class="text-xs text-destructive">{form.errors.tempatLahir[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="agama">Agama<span class="text-destructive">*</span></Label>
			<Select.Root type="single" name="agama" bind:value={agama}>
				<Select.Trigger
					id="agama"
					class={triggerBase}
					aria-invalid={form?.errors?.agama ? 'true' : undefined}
				>
					<span class="flex flex-1 items-center gap-3.5 text-left text-[#01296E]">
						<LandmarkIcon class="size-4 shrink-0 text-[#01296E]" />
						{agama || 'Pilih agama Anda'}
					</span>
				</Select.Trigger>
				<Select.Content>
					{#each religions as religion (religion)}
						<Select.Item value={religion} label={religion}>{religion}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if form?.errors?.agama}
				<p class="text-xs text-destructive">{form.errors.agama[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="kewarganegaraan">Kewarganegaraan</Label>
			<div class="relative">
				<FlagIcon class={iconLeft} />
				<Input
					id="kewarganegaraan"
					value="Warga Negara Indonesia"
					disabled
					readonly
					class={inputBase}
				/>
			</div>
		</div>
	</div>
</div>
