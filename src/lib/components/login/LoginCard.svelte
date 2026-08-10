<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import CheckIcon from '@lucide/svelte/icons/check';
	import CircleQuestionMarkIcon from '@lucide/svelte/icons/circle-question-mark';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import LogInIcon from '@lucide/svelte/icons/log-in';
	import UserIcon from '@lucide/svelte/icons/user';
	import UserPlusIcon from '@lucide/svelte/icons/user-plus';
	import type { SuperForm } from 'sveltekit-superforms';
	import RoleSelector from './RoleSelector.svelte';
	import { resolve } from '$app/paths';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import type { LoginInput } from '$lib/schemas/login';

	let { superform }: { superform: SuperForm<LoginInput> } = $props();

	// Instance superform dibuat sekali di halaman dan tidak pernah diganti.
	// svelte-ignore state_referenced_locally
	const { form, errors, submitting, enhance } = superform;

	let showPassword = $state(false);

	// $errors baru terisi setelah blur (validationMethod 'auto'), jadi cek '@'
	// dipakai supaya centang hijau tidak muncul di field yang masih kosong.
	const emailValid = $derived($form.email.includes('@') && !$errors.email);
</script>

<div
	class="w-full max-w-130 rounded-2xl border border-(--auth-border) bg-white p-[clamp(20px,2vw,30px)] shadow-[0_18px_46px_rgba(10,44,107,0.08)]"
>
	<div
		class="mx-auto mb-2.5 flex size-13.5 items-center justify-center rounded-full bg-(--brand-100) text-(--brand-500)"
	>
		<LockIcon class="size-6.25" strokeWidth={1.7} />
	</div>
	<h2 class="mb-1 text-center text-[22px] font-bold text-(--navy-950)">Masuk ke Akun Anda</h2>
	<p class="mb-4.5 text-center text-[13.5px] text-(--brand-500)">
		Silahkan masuk untuk melanjutkan ke dashboard
	</p>

	<form method="POST" use:enhance>
		<AuthField
			id="email"
			label="Email"
			icon={UserIcon}
			type="email"
			autocomplete="email"
			placeholder="Masukkan Email"
			bind:value={$form.email}
			error={$errors.email?.[0]}
			valid={emailValid}
		>
			{#snippet trailing()}
				{#if emailValid}
					<span
						class="flex size-4.75 shrink-0 items-center justify-center rounded-full bg-(--auth-success)"
					>
						<CheckIcon class="size-3 text-white" strokeWidth={3.4} />
					</span>
				{/if}
			{/snippet}
		</AuthField>

		<AuthField
			id="password"
			label="Password"
			icon={LockIcon}
			type={showPassword ? 'text' : 'password'}
			autocomplete="current-password"
			placeholder="Masukkan Password"
			bind:value={$form.password}
			error={$errors.password?.[0]}
			class="mt-4"
		>
			{#snippet labelRight()}
				<span class="text-[13.5px] text-(--brand-500)" aria-disabled="true">Lupa password?</span>
			{/snippet}
			{#snippet trailing()}
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="flex shrink-0 cursor-pointer text-(--brand-500)"
				>
					{#if showPassword}
						<EyeOffIcon class="size-4.75" strokeWidth={1.8} />
					{:else}
						<EyeIcon class="size-4.75" strokeWidth={1.8} />
					{/if}
				</button>
			{/snippet}
		</AuthField>

		<div class="mt-2.5 mb-3 flex items-center justify-between gap-3.5 text-[13.5px]">
			<div class="flex items-center gap-2.5">
				<!-- size-3! wajib penting: indicator bawaan memasang [&>svg]:size-3.5 dengan
				     specificity sama, jadi pemenangnya bergantung urutan sumber utility. -->
				<Checkbox
					id="remember"
					name="remember"
					bind:checked={$form.remember}
					class="size-4.75 rounded-[5px] border-[1.5px] border-(--auth-outline-border) bg-white shadow-none data-checked:border-(--auth-success) data-checked:bg-(--auth-success) data-checked:text-white [&_svg]:size-3!"
				/>
				<Label for="remember" class="font-normal text-(--auth-text)">Ingat perangkat ini</Label>
			</div>
			<span class="flex items-center gap-1.5 text-(--auth-text)" aria-disabled="true">
				<CircleQuestionMarkIcon class="size-4 text-(--auth-muted)" strokeWidth={1.8} />
				Butuh bantuan?
			</span>
		</div>

		<Button
			type="submit"
			disabled={!$form.email || !$form.password || $submitting}
			class="h-auto w-full cursor-pointer gap-2.5 rounded-[12px] bg-(--navy-950) py-3.75 text-[15.5px] font-semibold text-white hover:bg-(--brand-600) disabled:cursor-not-allowed disabled:bg-(--auth-disabled-bg) disabled:text-(--auth-disabled-text) disabled:opacity-100"
		>
			<LogInIcon class="size-4.5" strokeWidth={1.9} />
			Login
		</Button>

		<div class="my-4 mb-3 flex items-center gap-3.5">
			<Separator class="flex-1 bg-(--auth-border)" />
			<span class="text-[12.5px] whitespace-nowrap text-(--auth-disabled-text)">
				atau masuk sebagai
			</span>
			<Separator class="flex-1 bg-(--auth-border)" />
		</div>

		<RoleSelector />

		<div
			class="flex flex-nowrap items-center justify-between gap-3.5 rounded-[12px] border border-(--auth-cta-border) bg-(--auth-cta-bg) px-3 py-2.5"
		>
			<div class="flex min-w-0 items-center gap-3">
				<UserPlusIcon class="size-5.25 shrink-0 text-(--brand-500)" strokeWidth={1.7} />
				<div class="min-w-0 text-(--navy-950)">
					<p class="text-[14.5px] font-semibold">Belum punya akun?</p>
					<p class="mt-0.5 text-[12.5px] text-(--auth-muted)">
						Daftar akun baru untuk mengakses layanan Disdikal
					</p>
				</div>
			</div>
			<Button
				variant="outline"
				href={resolve('/register')}
				class="h-auto shrink-0 gap-2.5 rounded-lg border-(--auth-outline-border) bg-white px-5 py-2.75 text-[13.5px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950)"
			>
				Daftar Akun
				<ArrowRightIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
			</Button>
		</div>
	</form>
</div>
