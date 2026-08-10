<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	let showPassword = $state(false);
	let showConfirmPassword = $state(false);

	// Dihitung ulang tiap ketikan supaya tiap kriteria memantulkan password yang
	// sedang diisi; versi sebelumnya selalu hijau apa pun isinya.
	const rules = $derived([
		{ label: 'Minimal 8 karakter', ok: $form.password.length >= 8 },
		{ label: 'Mengandung angka', ok: /[0-9]/.test($form.password) },
		{
			label: 'Mengandung huruf besar dan kecil',
			ok: /[a-z]/.test($form.password) && /[A-Z]/.test($form.password)
		},
		{ label: 'Mengandung simbol (contoh: @ # $ % ^ & *)', ok: /[^A-Za-z0-9]/.test($form.password) }
	]);
</script>

{#snippet requiredMark()}
	<span class="text-destructive">*</span>
{/snippet}

<div class="rounded-2xl border border-(--auth-border) bg-white px-6 py-5.5">
	<div class="mb-5 flex items-center gap-2.75">
		<span class="flex size-7.5 shrink-0 items-center justify-center rounded-[9px] bg-(--brand-100)">
			<LockIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
		</span>
		<h2 class="text-[16px] font-semibold text-(--navy-950)">Informasi Akun</h2>
	</div>

	<div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
		<AuthField
			id="email"
			label="Email Aktif"
			icon={MailIcon}
			type="email"
			autocomplete="email"
			placeholder="Masukkan email aktif Anda"
			bind:value={$form.email}
			error={$errors.email?.[0]}
			valid={$form.email.includes('@') && !$errors.email}
			labelRight={requiredMark}
		/>

		<AuthField
			id="noHp"
			label="Nomor Handphone Aktif"
			icon={PhoneIcon}
			inputmode="tel"
			placeholder="Masukkan nomor handphone aktif"
			bind:value={$form.noHp}
			error={$errors.noHp?.[0]}
			valid={!!$form.noHp && !$errors.noHp}
			labelRight={requiredMark}
		/>

		<AuthField
			id="password"
			label="Password"
			icon={LockIcon}
			type={showPassword ? 'text' : 'password'}
			autocomplete="new-password"
			placeholder="Buat Password"
			bind:value={$form.password}
			error={$errors.password?.[0]}
			labelRight={requiredMark}
		>
			{#snippet trailing()}
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="flex shrink-0 cursor-pointer text-(--auth-muted)"
				>
					{#if showPassword}
						<EyeOffIcon class="size-4.5" strokeWidth={1.8} />
					{:else}
						<EyeIcon class="size-4.5" strokeWidth={1.8} />
					{/if}
				</button>
			{/snippet}
		</AuthField>

		<AuthField
			id="confirmPassword"
			label="Konfirmasi Password"
			icon={LockIcon}
			type={showConfirmPassword ? 'text' : 'password'}
			autocomplete="new-password"
			placeholder="Ulangi password Anda"
			bind:value={$form.confirmPassword}
			error={$errors.confirmPassword?.[0]}
			labelRight={requiredMark}
		>
			{#snippet trailing()}
				<button
					type="button"
					onclick={() => (showConfirmPassword = !showConfirmPassword)}
					aria-label={showConfirmPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="flex shrink-0 cursor-pointer text-(--auth-muted)"
				>
					{#if showConfirmPassword}
						<EyeOffIcon class="size-4.5" strokeWidth={1.8} />
					{:else}
						<EyeIcon class="size-4.5" strokeWidth={1.8} />
					{/if}
				</button>
			{/snippet}
		</AuthField>
	</div>

	<div class="mt-4.5 rounded-xl border border-(--auth-cta-border) bg-(--reg-panel-bg) px-4.5 py-4">
		<div class="mb-2.75 flex items-center gap-2.25 text-[13px] font-semibold text-(--brand-500)">
			<LockIcon class="size-4" strokeWidth={1.9} />
			Password harus memenuhi kriteria berikut:
		</div>
		<div class="grid grid-cols-1 gap-x-5.5 gap-y-2.25 sm:grid-cols-2">
			{#each rules as rule (rule.label)}
				<div
					class="flex items-center gap-2.25 text-[12.5px] {rule.ok
						? 'font-semibold text-(--auth-success)'
						: 'text-(--auth-muted)'}"
				>
					<CheckIcon
						class="size-3.5 shrink-0 {rule.ok ? 'text-(--auth-success)' : 'text-(--reg-idle)'}"
						strokeWidth={3}
					/>
					{rule.label}
				</div>
			{/each}
		</div>
	</div>
</div>
