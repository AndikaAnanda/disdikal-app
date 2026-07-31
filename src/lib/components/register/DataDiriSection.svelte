<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FlagIcon from '@lucide/svelte/icons/flag';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import LandmarkIcon from '@lucide/svelte/icons/landmark';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import UsersIcon from '@lucide/svelte/icons/users';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import type { SuperForm } from 'sveltekit-superforms';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { GENDERS, RELIGIONS, type RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const genderLabel = $derived(GENDERS.find((g) => g.value === $form.jenisKelamin)?.label);

	// Lapisan UX saja; validasi sebenarnya tetap di registerSchema.
	// type="number" dihindari: masih menerima e/+/-/. dan mengabaikan maxlength.
	function onlyDigits(event: Event) {
		const el = event.currentTarget as HTMLInputElement;
		el.value = el.value.replace(/\D/g, '');
	}

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
					inputmode="numeric"
					oninput={onlyDigits}
					placeholder="Masukkan nomor peserta Anda"
					bind:value={$form.nomorPeserta}
					aria-invalid={$errors.nomorPeserta ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.nomorPeserta}
				<p class="text-xs text-destructive">{$errors.nomorPeserta[0]}</p>
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
					maxlength={16}
					oninput={onlyDigits}
					placeholder="Masukkan NIK Anda"
					bind:value={$form.nik}
					aria-invalid={$errors.nik ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.nik}
				<p class="text-xs text-destructive">{$errors.nik[0]}</p>
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
					bind:value={$form.namaLengkap}
					aria-invalid={$errors.namaLengkap ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.namaLengkap}
				<p class="text-xs text-destructive">{$errors.namaLengkap[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="jenisKelamin">Jenis Kelamin<span class="text-destructive">*</span></Label>
			<Select.Root type="single" name="jenisKelamin" bind:value={$form.jenisKelamin}>
				<Select.Trigger
					id="jenisKelamin"
					class={triggerBase}
					aria-invalid={$errors.jenisKelamin ? 'true' : undefined}
				>
					<span class="flex flex-1 items-center gap-3.5 text-left text-[#01296E]">
						<VenusAndMarsIcon class="size-4 shrink-0 " />
						{genderLabel ?? 'Pilih jenis kelamin Anda'}
					</span>
				</Select.Trigger>
				<Select.Content>
					{#each GENDERS as gender (gender.value)}
						<Select.Item value={gender.value} label={gender.label}>{gender.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if $errors.jenisKelamin}
				<p class="text-xs text-destructive">{$errors.jenisKelamin[0]}</p>
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
					bind:value={$form.tanggalLahir}
					aria-invalid={$errors.tanggalLahir ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.tanggalLahir}
				<p class="text-xs text-destructive">{$errors.tanggalLahir[0]}</p>
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
					bind:value={$form.tempatLahir}
					aria-invalid={$errors.tempatLahir ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.tempatLahir}
				<p class="text-xs text-destructive">{$errors.tempatLahir[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="agama">Agama<span class="text-destructive">*</span></Label>
			<Select.Root type="single" name="agama" bind:value={$form.agama}>
				<Select.Trigger
					id="agama"
					class={triggerBase}
					aria-invalid={$errors.agama ? 'true' : undefined}
				>
					<span class="flex flex-1 items-center gap-3.5 text-left text-[#01296E]">
						<LandmarkIcon class="size-4 shrink-0 text-[#01296E]" />
						{$form.agama || 'Pilih agama Anda'}
					</span>
				</Select.Trigger>
				<Select.Content>
					{#each RELIGIONS as religion (religion)}
						<Select.Item value={religion} label={religion}>{religion}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if $errors.agama}
				<p class="text-xs text-destructive">{$errors.agama[0]}</p>
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
