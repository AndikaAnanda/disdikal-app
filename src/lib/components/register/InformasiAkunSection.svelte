<script lang="ts">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import UserIcon from '@lucide/svelte/icons/user';
	import type { SuperForm } from 'sveltekit-superforms';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	let showPassword = $state(false);
	let showConfirmPassword = $state(false);
</script>

{#snippet eyeToggle(shown: boolean, toggle: () => void)}
	<button
		type="button"
		onclick={toggle}
		aria-label={shown ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
		class="flex shrink-0 cursor-pointer text-(--field-icon)"
	>
		{#if shown}
			<EyeOffIcon class="size-4.5" strokeWidth={1.8} />
		{:else}
			<EyeIcon class="size-4.5" strokeWidth={1.8} />
		{/if}
	</button>
{/snippet}

<div>
	<div class="mb-4 flex items-center gap-2.5">
		<LockIcon class="size-4.5 shrink-0 text-(--brand-500)" strokeWidth={1.9} />
		<h2 class="text-[14px] font-semibold text-(--navy-950)">Buat Akun</h2>
	</div>

	<div class="grid grid-cols-1 gap-x-4 gap-y-3.5 sm:grid-cols-2">
		<AuthField
			id="email"
			label="Email"
			icon={MailIcon}
			type="email"
			autocomplete="email"
			placeholder="nama@gmail.com"
			bind:value={$form.email}
			error={$errors.email?.[0]}
			valid={$form.email.includes('@') && !$errors.email}
		/>

		<AuthField
			id="namaPengguna"
			label="Nama Pengguna"
			icon={UserIcon}
			autocomplete="username"
			placeholder="Masukkan nama pengguna"
			bind:value={$form.namaPengguna}
			error={$errors.namaPengguna?.[0]}
			valid={!!$form.namaPengguna && !$errors.namaPengguna}
		/>

		<AuthField
			id="password"
			label="Kata Sandi"
			icon={LockIcon}
			type={showPassword ? 'text' : 'password'}
			autocomplete="new-password"
			placeholder="Minimal 8 karakter"
			bind:value={$form.password}
			error={$errors.password?.[0]}
		>
			{#snippet trailing()}
				{@render eyeToggle(showPassword, () => (showPassword = !showPassword))}
			{/snippet}
		</AuthField>

		<AuthField
			id="confirmPassword"
			label="Ulangi Kata Sandi"
			icon={LockIcon}
			type={showConfirmPassword ? 'text' : 'password'}
			autocomplete="new-password"
			placeholder="Ulangi kata sandi"
			bind:value={$form.confirmPassword}
			error={$errors.confirmPassword?.[0]}
		>
			{#snippet trailing()}
				{@render eyeToggle(showConfirmPassword, () => (showConfirmPassword = !showConfirmPassword))}
			{/snippet}
		</AuthField>
	</div>
</div>
