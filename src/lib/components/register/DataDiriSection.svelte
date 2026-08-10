<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import CheckIcon from '@lucide/svelte/icons/check';
	import FlagIcon from '@lucide/svelte/icons/flag';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import LandmarkIcon from '@lucide/svelte/icons/landmark';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import UsersIcon from '@lucide/svelte/icons/users';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField, { fieldBoxBase } from '$lib/components/auth/AuthField.svelte';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import { GENDERS, RELIGIONS, type RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const genderLabel = $derived(GENDERS.find((g) => g.value === $form.jenisKelamin)?.label);
	const genderValid = $derived(!!$form.jenisKelamin && !$errors.jenisKelamin);
	const agamaValid = $derived(!!$form.agama && !$errors.agama);

	// Lapisan UX saja; validasi sebenarnya tetap di registerSchema.
	// type="number" dihindari: masih menerima e/+/-/. dan mengabaikan maxlength.
	function onlyDigits(event: Event) {
		const el = event.currentTarget as HTMLInputElement;
		el.value = el.value.replace(/\D/g, '');
	}

	// h-auto! wajib penting: Select.Trigger memasang data-[size=default]:h-9 yang
	// tidak ikut ter-dedupe twMerge karena scope variant-nya berbeda.
	const triggerBase = 'h-auto! w-full justify-start py-3 text-sm font-normal shadow-none';
</script>

{#snippet requiredMark()}
	<span class="text-destructive">*</span>
{/snippet}

{#snippet validCheck()}
	<span
		class="flex size-4.75 shrink-0 items-center justify-center rounded-full bg-(--auth-success)"
	>
		<CheckIcon class="size-3 text-white" strokeWidth={3.4} />
	</span>
{/snippet}

<div class="rounded-2xl border border-(--auth-border) bg-white px-6 py-5.5">
	<div class="mb-5 flex items-center gap-2.75">
		<span class="flex size-7.5 shrink-0 items-center justify-center rounded-[9px] bg-(--brand-100)">
			<UsersIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
		</span>
		<h2 class="text-[16px] font-semibold text-(--navy-950)">Data Diri</h2>
	</div>

	<div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
		<AuthField
			id="nomorPeserta"
			label="Nomor Peserta / Pendaftaran"
			icon={IdCardIcon}
			inputmode="numeric"
			oninput={onlyDigits}
			placeholder="Masukkan nomor peserta Anda"
			bind:value={$form.nomorPeserta}
			error={$errors.nomorPeserta?.[0]}
			valid={!!$form.nomorPeserta && !$errors.nomorPeserta}
			labelRight={requiredMark}
		/>

		<AuthField
			id="nik"
			label="NIK (Nomor Induk Kependudukan)"
			icon={IdCardIcon}
			inputmode="numeric"
			maxlength={16}
			oninput={onlyDigits}
			placeholder="Masukkan NIK Anda"
			bind:value={$form.nik}
			error={$errors.nik?.[0]}
			valid={!!$form.nik && !$errors.nik}
			labelRight={requiredMark}
		/>

		<AuthField
			id="namaLengkap"
			label="Nama Lengkap (Sesuai KTP)"
			icon={UsersIcon}
			placeholder="Masukkan nama lengkap Anda"
			bind:value={$form.namaLengkap}
			error={$errors.namaLengkap?.[0]}
			valid={!!$form.namaLengkap && !$errors.namaLengkap}
			labelRight={requiredMark}
		/>

		<div>
			<div class="mb-1.75 flex items-center justify-between gap-3">
				<Label for="jenisKelamin" class="text-sm font-medium text-(--auth-text)">
					Jenis Kelamin
				</Label>
				{@render requiredMark()}
			</div>
			<Select.Root type="single" name="jenisKelamin" bind:value={$form.jenisKelamin}>
				<Select.Trigger
					id="jenisKelamin"
					aria-invalid={$errors.jenisKelamin ? 'true' : undefined}
					class={cn(
						fieldBoxBase,
						triggerBase,
						genderValid
							? 'border-(--field-border-ok) bg-(--field-bg-ok)'
							: 'border-(--field-border) bg-white'
					)}
				>
					<VenusAndMarsIcon class="size-4.25 shrink-0 text-(--auth-muted)" strokeWidth={1.8} />
					<span class="flex-1 text-left text-(--auth-text)">
						{genderLabel ?? 'Pilih jenis kelamin Anda'}
					</span>
					{#if genderValid}{@render validCheck()}{/if}
				</Select.Trigger>
				<Select.Content>
					{#each GENDERS as gender (gender.value)}
						<Select.Item value={gender.value} label={gender.label}>{gender.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if $errors.jenisKelamin}
				<p class="mt-1 text-xs text-destructive">{$errors.jenisKelamin[0]}</p>
			{/if}
		</div>

		<AuthField
			id="tanggalLahir"
			label="Tanggal Lahir"
			icon={CalendarIcon}
			type="date"
			bind:value={$form.tanggalLahir}
			error={$errors.tanggalLahir?.[0]}
			valid={!!$form.tanggalLahir && !$errors.tanggalLahir}
			labelRight={requiredMark}
		/>

		<AuthField
			id="tempatLahir"
			label="Tempat Lahir"
			icon={MapPinIcon}
			placeholder="Masukkan tempat lahir Anda"
			bind:value={$form.tempatLahir}
			error={$errors.tempatLahir?.[0]}
			valid={!!$form.tempatLahir && !$errors.tempatLahir}
			labelRight={requiredMark}
		/>

		<div>
			<div class="mb-1.75 flex items-center justify-between gap-3">
				<Label for="agama" class="text-sm font-medium text-(--auth-text)">Agama</Label>
				{@render requiredMark()}
			</div>
			<Select.Root type="single" name="agama" bind:value={$form.agama}>
				<Select.Trigger
					id="agama"
					aria-invalid={$errors.agama ? 'true' : undefined}
					class={cn(
						fieldBoxBase,
						triggerBase,
						agamaValid
							? 'border-(--field-border-ok) bg-(--field-bg-ok)'
							: 'border-(--field-border) bg-white'
					)}
				>
					<LandmarkIcon class="size-4.25 shrink-0 text-(--auth-muted)" strokeWidth={1.8} />
					<span class="flex-1 text-left text-(--auth-text)">
						{$form.agama || 'Pilih agama Anda'}
					</span>
					{#if agamaValid}{@render validCheck()}{/if}
				</Select.Trigger>
				<Select.Content>
					{#each RELIGIONS as religion (religion)}
						<Select.Item value={religion} label={religion}>{religion}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			{#if $errors.agama}
				<p class="mt-1 text-xs text-destructive">{$errors.agama[0]}</p>
			{/if}
		</div>

		<!-- Dekoratif: tidak ada field kewarganegaraan di registerSchema. -->
		<AuthField
			id="kewarganegaraan"
			label="Kewarganegaraan"
			icon={FlagIcon}
			value="Warga Negara Indonesia"
			disabled
			readonly
		/>
	</div>
</div>
