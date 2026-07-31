<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import CircleHelpIcon from '@lucide/svelte/icons/circle-help';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import LockIcon from '@lucide/svelte/icons/lock';
	import LogInIcon from '@lucide/svelte/icons/log-in';
	import UserIcon from '@lucide/svelte/icons/user';
	import UserPlusIcon from '@lucide/svelte/icons/user-plus';
	import type { SuperForm } from 'sveltekit-superforms';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import type { LoginInput } from '$lib/schemas/login';

	let { superform }: { superform: SuperForm<LoginInput> } = $props();

	// Instance superform dibuat sekali di halaman dan tidak pernah diganti.
	// svelte-ignore state_referenced_locally
	const { form, errors, enhance } = superform;

	let showPassword = $state(false);

	const inputBase = 'h-auto font-medium rounded-lg border-[#55709E] py-2.75 pl-10 text-sm';
	const iconLeft =
		'pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#01296E]';
</script>

<div
	class="mx-auto mb-6 w-full max-w-162.5 rounded-[20px] border border-[#C0C0C0] bg-white p-6 sm:mb-10 sm:p-8 lg:mr-0 lg:ml-auto lg:p-10"
>
	<div
		class="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-(--brand-100) text-(--brand-600) sm:size-16"
	>
		<LockIcon class="size-6 sm:size-7" />
	</div>
	<h2 class="mb-1.5 text-center text-[24px] font-bold text-[#01296E]">Masuk ke Akun Anda</h2>
	<p class="mb-7 text-center font-medium text-[#01296E]">
		Silahkan masuk untuk melanjutkan ke dashboard
	</p>

	<form method="POST" use:enhance>
		<div class="mb-5 space-y-1.5">
			<Label for="email" class="text-base font-medium text-[#01296E]">Email</Label>
			<div class="relative">
				<UserIcon class={iconLeft} />
				<Input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					placeholder="Masukkan Email"
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					class={inputBase}
				/>
			</div>
			{#if $errors.email}
				<p class="text-xs text-destructive">{$errors.email[0]}</p>
			{/if}
		</div>

		<div class="mb-5 space-y-1.5">
			<div class="flex items-center justify-between">
				<Label for="password" class="text-base font-medium text-[#01296E]">Password</Label>
				<span class="text-sm font-bold text-[#01296E]" aria-disabled="true">Lupa password?</span>
			</div>
			<div class="relative">
				<LockIcon class={iconLeft} />
				<Input
					id="password"
					name="password"
					type={showPassword ? 'text' : 'password'}
					autocomplete="current-password"
					placeholder="Masukkan Password"
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

		<div class="mb-6 flex items-center justify-between text-sm">
			<div class="flex items-center gap-2">
				<Checkbox id="remember" name="remember" bind:checked={$form.remember} />
				<Label for="remember" class="font-normal text-[#4a5164]">Ingat saya</Label>
			</div>
			<span class="flex items-center gap-1.5 text-(--brand-600)" aria-disabled="true">
				<CircleHelpIcon class="size-4" />
				Butuh bantuan?
			</span>
		</div>

		<Button
			type="submit"
			class="h-auto w-full cursor-pointer gap-2 rounded-lg bg-[#01296E] py-3.25 text-[15px] font-semibold text-white hover:bg-[#0a1a40]"
		>
			<LogInIcon class="size-4" />
			Login
		</Button>

		<div class="my-5.5 flex items-center gap-4">
			<Separator class="flex-1" />
			<span class="text-xs whitespace-nowrap text-[#a9b0bd]">atau masuk dengan</span>
			<Separator class="flex-1" />
		</div>

		<div
			class="flex flex-col items-stretch gap-3 rounded-[14px] border border-[#01296E] bg-[#f8fafc] p-4 sm:flex-row sm:items-center sm:justify-between"
		>
			<div class="flex items-center gap-3">
				<span
					class="flex size-9 shrink-0 items-center justify-center rounded-full text-(--brand-600)"
				>
					<UserPlusIcon class="size-6" />
				</span>
				<div class="text-[#01296E]">
					<p class="text-sm font-bold">Belum punya akun?</p>
					<p class="mt-0.5 text-xs">Daftar akun baru untuk mengakses layanan Disdikal</p>
				</div>
			</div>
			<Button
				variant="outline"
				href={resolve('/register')}
				class="h-auto w-full shrink-0 justify-center gap-1.5 rounded-lg border-[#01296E] bg-white px-4 py-2.25 text-sm font-semibold text-(--auth-navy-900) hover:bg-(--brand-50) hover:text-(--auth-navy-900) sm:w-auto"
			>
				Daftar Akun
				<ArrowRightIcon class="size-3.5" />
			</Button>
		</div>
	</form>
</div>
