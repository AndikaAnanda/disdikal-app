<script lang="ts">
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import MailIcon from '@lucide/svelte/icons/mail';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import type { SuperForm } from 'sveltekit-superforms';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	const { form, errors } = superform;

	let showPassword = $state(false);
	let showConfirmPassword = $state(false);

	const passwordHints = [
		'Minimal 8 karakter',
		'Mengandung angka',
		'Mengandung huruf besar dan kecil',
		'Mengandung simbol (contoh: @ # $ % ^ & *)'
	];

	const inputBase =
		'h-auto rounded-lg border-(--auth-border) py-2.75 pl-10 text-[#01296E] placeholder:text-[#01296E] focus:border-(--brand-600) focus:ring-(--brand-600)';
	const iconLeft =
		'pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#01296E]';
</script>

<div class="rounded-2xl bg-white p-5 sm:p-7">
	<div class="mb-5 flex items-center gap-2.5">
		<span
			class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-(--brand-100) text-(--brand-600)"
		>
			<MailIcon class="size-4" />
		</span>
		<h2 class="text-[17px] font-bold text-(--navy-950)">Informasi Akun</h2>
	</div>

	<div class="grid gap-x-7 gap-y-5 sm:grid-cols-2">
		<div class="space-y-1.5">
			<Label for="email">Email Aktif<span class="ml-0.5 text-destructive">*</span></Label>
			<div class="relative">
				<MailIcon class={iconLeft} />
				<Input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					placeholder="Masukkan email aktif Anda"
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.email}
				<p class="text-xs text-destructive">{$errors.email[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="noHp">Nomor Handphone Aktif<span class="ml-0.5 text-destructive">*</span></Label>
			<div class="relative">
				<PhoneIcon class={iconLeft} />
				<Input
					id="noHp"
					name="noHp"
					inputmode="tel"
					placeholder="Masukkan nomor handphone aktif"
					bind:value={$form.noHp}
					aria-invalid={$errors.noHp ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.noHp}
				<p class="text-xs text-destructive">{$errors.noHp[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="password">Password<span class="ml-0.5 text-destructive">*</span></Label>
			<div class="relative">
				<LockIcon class={iconLeft} />
				<Input
					id="password"
					name="password"
					type={showPassword ? 'text' : 'password'}
					autocomplete="new-password"
					placeholder="Buat Password"
					bind:value={$form.password}
					aria-invalid={$errors.password ? 'true' : undefined}
					class="{inputBase} pr-10"
				/>
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="absolute top-1/2 right-3 -translate-y-1/2 text-[#9aa2b1] hover:text-(--brand-600)"
				>
					{#if showPassword}
						<EyeOffIcon class="size-4" />
					{:else}
						<EyeIcon class="size-4" />
					{/if}
				</button>
			</div>
			{#if $errors.password}
				<p class="text-xs text-destructive">{$errors.password[0]}</p>
			{/if}
		</div>

		<div class="space-y-1.5">
			<Label for="confirmPassword"
				>Konfirmasi Password<span class="ml-0.5 text-destructive">*</span></Label
			>
			<div class="relative">
				<LockIcon class={iconLeft} />
				<Input
					id="confirmPassword"
					name="confirmPassword"
					type={showConfirmPassword ? 'text' : 'password'}
					autocomplete="new-password"
					placeholder="Ulangi password Anda"
					bind:value={$form.confirmPassword}
					aria-invalid={$errors.confirmPassword ? 'true' : undefined}
					class="{inputBase} pr-10"
				/>
				<button
					type="button"
					onclick={() => (showConfirmPassword = !showConfirmPassword)}
					aria-label={showConfirmPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="absolute top-1/2 right-3 -translate-y-1/2 text-[#9aa2b1] hover:text-(--brand-600)"
				>
					{#if showConfirmPassword}
						<EyeOffIcon class="size-4" />
					{:else}
						<EyeIcon class="size-4" />
					{/if}
				</button>
			</div>
			{#if $errors.confirmPassword}
				<p class="text-xs text-destructive">{$errors.confirmPassword[0]}</p>
			{/if}
		</div>
	</div>

	<div class="mt-4 rounded-[10px] bg-[#F7F9FE] p-3.5 sm:p-4.5">
		<div class="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#007CF0]">
			<ShieldCheckIcon class="size-4" />
			Password harus memenuhi kriteria berikut:
		</div>
		<div class="grid gap-x-6 gap-y-2 sm:grid-cols-2">
			{#each passwordHints as hint (hint)}
				<div class="flex items-center gap-2 text-[13px] text-[#47546b]">
					<CircleCheckIcon class="size-3.5 shrink-0 text-[#2f9e5f]" />
					{hint}
				</div>
			{/each}
		</div>
	</div>
</div>
