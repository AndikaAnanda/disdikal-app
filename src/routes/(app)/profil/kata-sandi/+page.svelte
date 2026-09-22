<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import { defaults, setError, superForm } from 'sveltekit-superforms';
	import { zod4, zod4Client } from 'sveltekit-superforms/adapters';
	import { changePassword, getErrorMessage } from '$lib/api';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import DokumenHeader from '$lib/components/profil/DokumenHeader.svelte';
	import PasswordTipsCard from '$lib/components/profil/PasswordTipsCard.svelte';
	import { Button } from '$lib/components/ui/button';
	import { passwordTips } from '$lib/profil-data';
	import { changePasswordSchema } from '$lib/schemas/password';

	const { form, errors, submitting, enhance, reset } = superForm(
		defaults(zod4(changePasswordSchema)),
		{
			SPA: true,
			validators: zod4Client(changePasswordSchema),
			onUpdate: async ({ form }) => {
				if (!form.valid) return;
				try {
					await changePassword({
						currentPassword: form.data.currentPassword,
						newPassword: form.data.newPassword
					});
					reset();
				} catch (err) {
					setError(form, 'currentPassword', getErrorMessage(err, 'Gagal mengubah kata sandi'));
				}
			}
		}
	);

	let show = $state({ current: false, next: false, confirm: false });
</script>

{#snippet eyeToggle(key: keyof typeof show)}
	<button
		type="button"
		onclick={() => (show[key] = !show[key])}
		aria-label={show[key] ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
		class="flex shrink-0 cursor-pointer text-(--field-icon)"
	>
		{#if show[key]}
			<EyeOffIcon class="size-4" strokeWidth={1.8} />
		{:else}
			<EyeIcon class="size-4" strokeWidth={1.8} />
		{/if}
	</button>
{/snippet}

<svelte:head><title>Layanan Disdikal — Ubah Kata Sandi</title></svelte:head>

<div class="flex flex-col gap-3.5">
	<DokumenHeader
		icon={ShieldCheckIcon}
		title="Ubah Kata Sandi"
		subtitle="Perbarui kata sandi Anda secara berkala untuk menjaga keamanan akun."
	/>

	<div class="grid grid-cols-1 items-start gap-3.5 lg:grid-cols-[minmax(0,1fr)_300px]">
		<form
			method="POST"
			use:enhance
			class="rounded-[10px] border border-(--dash-border) bg-white px-5 py-4"
		>
			<h2 class="text-[13px] font-bold text-(--navy-950)">Kata Sandi Saat Ini</h2>

			<AuthField
				id="currentPassword"
				label="Kata Sandi Saat Ini"
				icon={LockIcon}
				type={show.current ? 'text' : 'password'}
				autocomplete="current-password"
				placeholder="Masukkan kata sandi saat ini"
				bind:value={$form.currentPassword}
				error={$errors.currentPassword?.[0]}
				labelClass="text-[11.5px]"
				class="mt-4"
			>
				{#snippet trailing()}{@render eyeToggle('current')}{/snippet}
			</AuthField>

			<AuthField
				id="newPassword"
				label="Kata Sandi Baru"
				icon={LockIcon}
				type={show.next ? 'text' : 'password'}
				autocomplete="new-password"
				placeholder="Minimal 8 karakter"
				bind:value={$form.newPassword}
				error={$errors.newPassword?.[0]}
				labelClass="text-[11.5px]"
				class="mt-4"
			>
				{#snippet trailing()}{@render eyeToggle('next')}{/snippet}
			</AuthField>

			<AuthField
				id="confirmPassword"
				label="Konfirmasi Kata Sandi Baru"
				icon={LockIcon}
				type={show.confirm ? 'text' : 'password'}
				autocomplete="new-password"
				placeholder="Ulangi kata sandi baru"
				bind:value={$form.confirmPassword}
				error={$errors.confirmPassword?.[0]}
				labelClass="text-[11.5px]"
				class="mt-4"
			>
				{#snippet trailing()}{@render eyeToggle('confirm')}{/snippet}
			</AuthField>

			<div class="mt-5 flex flex-wrap gap-2.5">
				<Button
					type="button"
					variant="outline"
					onclick={() => reset()}
					class="h-auto cursor-pointer gap-2 rounded-md border-(--dash-border) bg-white px-4 py-2.5 text-[12px] font-semibold text-(--dash-muted) hover:bg-(--brand-50) hover:text-(--navy-950)"
				>
					<ArrowLeftIcon class="size-3.5" strokeWidth={2} />
					Batal
				</Button>
				<Button
					type="submit"
					disabled={$submitting}
					class="h-auto cursor-pointer gap-2 rounded-md bg-(--accent-blue) px-4 py-2.5 text-[12px] font-semibold text-white hover:bg-(--brand-600) disabled:cursor-not-allowed"
				>
					Simpan Perubahan
					<ArrowRightIcon class="size-3.5" strokeWidth={2} />
				</Button>
			</div>
		</form>

		<PasswordTipsCard tips={passwordTips} />
	</div>
</div>
