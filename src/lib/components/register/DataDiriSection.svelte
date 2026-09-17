<script lang="ts">
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import Building2Icon from '@lucide/svelte/icons/building-2';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import HouseIcon from '@lucide/svelte/icons/house';
	import IdCardIcon from '@lucide/svelte/icons/id-card';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import UserIcon from '@lucide/svelte/icons/user';
	import UsersIcon from '@lucide/svelte/icons/users';
	import VenusAndMarsIcon from '@lucide/svelte/icons/venus-and-mars';
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import AuthSelect from '$lib/components/auth/AuthSelect.svelte';
	import { GENDERS, PENDIDIKAN, type RegisterInput } from '$lib/schemas/register';
	import { KABUPATEN, PROVINSI } from '$lib/wilayah-data';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const kabupatenOptions = $derived(KABUPATEN[$form.provinsi] ?? []);

	// Dipasang di onValueChange, bukan $effect, supaya tidak menyapu nilai
	// saat mount/reset — hanya saat user benar-benar mengganti provinsi.
	function onProvinsiChange(provinsi: string) {
		if (!KABUPATEN[provinsi]?.includes($form.kabupatenKota)) $form.kabupatenKota = '';
	}

	// Lapisan UX saja; validasi sebenarnya tetap di registerSchema.
	// type="number" dihindari: masih menerima e/+/-/. dan mengabaikan maxlength.
	function onlyDigits(event: Event) {
		const el = event.currentTarget as HTMLInputElement;
		el.value = el.value.replace(/\D/g, '');
	}
</script>

<div>
	<div class="mb-4 flex items-center gap-2.5">
		<UsersIcon class="size-4.5 shrink-0 text-(--brand-500)" strokeWidth={1.9} />
		<h2 class="text-[14px] font-semibold text-(--navy-950)">Data Diri</h2>
	</div>

	<div class="grid grid-cols-1 gap-x-4 gap-y-3.5 sm:grid-cols-2">
		<AuthField
			id="namaLengkap"
			label="Nama Lengkap (Sesuai KTP)"
			icon={UserIcon}
			autocomplete="name"
			placeholder="Masukkan nama lengkap Anda"
			bind:value={$form.namaLengkap}
			error={$errors.namaLengkap?.[0]}
			valid={!!$form.namaLengkap && !$errors.namaLengkap}
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
		/>

		<AuthField
			id="tanggalLahir"
			label="Tanggal Lahir"
			icon={CalendarIcon}
			type="date"
			autocomplete="bday"
			bind:value={$form.tanggalLahir}
			error={$errors.tanggalLahir?.[0]}
			valid={!!$form.tanggalLahir && !$errors.tanggalLahir}
		/>

		<AuthSelect
			id="jenisKelamin"
			label="Jenis Kelamin"
			icon={VenusAndMarsIcon}
			placeholder="Pilih jenis kelamin Anda"
			options={GENDERS}
			bind:value={$form.jenisKelamin}
			error={$errors.jenisKelamin?.[0]}
			valid={!!$form.jenisKelamin && !$errors.jenisKelamin}
		/>

		<AuthSelect
			id="pendidikanTerakhir"
			label="Pendidikan Terakhir"
			icon={GraduationCapIcon}
			placeholder="Pilih pendidikan terakhir Anda"
			options={PENDIDIKAN}
			bind:value={$form.pendidikanTerakhir}
			error={$errors.pendidikanTerakhir?.[0]}
			valid={!!$form.pendidikanTerakhir && !$errors.pendidikanTerakhir}
		/>

		<AuthField
			id="jurusan"
			label="Jurusan"
			icon={BookOpenIcon}
			placeholder="Masukkan jurusan Anda"
			bind:value={$form.jurusan}
			error={$errors.jurusan?.[0]}
			valid={!!$form.jurusan && !$errors.jurusan}
		/>

		<AuthSelect
			id="provinsi"
			label="Provinsi"
			icon={MapPinIcon}
			placeholder="Pilih provinsi"
			options={PROVINSI}
			bind:value={$form.provinsi}
			onValueChange={onProvinsiChange}
			error={$errors.provinsi?.[0]}
			valid={!!$form.provinsi && !$errors.provinsi}
		/>

		<AuthSelect
			id="kabupatenKota"
			label="Kabupaten / Kota"
			icon={Building2Icon}
			placeholder={$form.provinsi ? 'Pilih kabupaten/kota' : 'Pilih provinsi dulu'}
			options={kabupatenOptions}
			disabled={!$form.provinsi}
			bind:value={$form.kabupatenKota}
			error={$errors.kabupatenKota?.[0]}
			valid={!!$form.kabupatenKota && !$errors.kabupatenKota}
		/>

		<AuthField
			id="alamat"
			label="Alamat Lengkap"
			icon={HouseIcon}
			autocomplete="street-address"
			placeholder="Masukkan alamat lengkap Anda"
			bind:value={$form.alamat}
			error={$errors.alamat?.[0]}
			valid={!!$form.alamat && !$errors.alamat}
		/>

		<AuthField
			id="noHp"
			label="Nomor Telepon / WhatsApp"
			icon={PhoneIcon}
			inputmode="tel"
			autocomplete="tel"
			placeholder="08xx xxxx xxxx"
			bind:value={$form.noHp}
			error={$errors.noHp?.[0]}
			valid={!!$form.noHp && !$errors.noHp}
		/>
	</div>
</div>
