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
	import { resolve } from '$app/paths';
	import AuthField from '$lib/components/auth/AuthField.svelte';
	import CaptchaField from '$lib/components/login/CaptchaField.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import type { LoginInput } from '$lib/schemas/login';

	let {
		superform,
		captchaCode,
		onRefreshCaptcha
	}: {
		superform: SuperForm<LoginInput>;
		captchaCode: string;
		onRefreshCaptcha: () => void;
	} = $props();

	// Instance superform dibuat sekali di halaman dan tidak pernah diganti.
	// svelte-ignore state_referenced_locally
	const { form, errors, submitting, enhance } = superform;

	let showPassword = $state(false);

	// $errors baru terisi setelah blur (validationMethod 'auto'), jadi cek '@'
	// dipakai supaya centang hijau tidak muncul di field yang masih kosong.
	const emailValid = $derived($form.email.includes('@') && !$errors.email);
</script>

<!-- --field-icon di-override di sini saja: register tetap memakai ikon biru
     dari default token di .auth-shell. -->
<div
	class="w-full max-w-120 overflow-hidden rounded-2xl border border-(--auth-border) bg-white shadow-[0_18px_46px_rgba(10,44,107,0.08)] [--field-icon:#55709e]"
>
	<div
		class="flex items-center gap-3.5 border-b-2 border-(--auth-accent) bg-(--navy-950) px-4 py-4 sm:px-5 sm:py-4.5"
	>
		<span
			class="flex size-8.5 shrink-0 items-center justify-center rounded-[10px] bg-white/12 text-white"
		>
			<LockIcon class="size-4.5" strokeWidth={1.8} />
		</span>
		<div class="min-w-0">
			<h2 class="text-[17px] leading-[1.25] font-bold text-white">Masuk ke Akun Anda</h2>
			<p class="mt-0.5 text-[11.5px] text-(--auth-bar-text)">
				Sistem Informasi Layanan Dinas Pendidikan TNI AL
			</p>
		</div>
	</div>

	<form method="POST" use:enhance class="p-4 sm:p-5">
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
			labelClass="text-[12.5px]"
			inputClass="py-2.5"
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
			labelClass="text-[12.5px]"
			inputClass="py-2.5"
			class="mt-3.5"
		>
			{#snippet labelRight()}
				<span class="text-[11.5px] text-(--brand-500)" aria-disabled="true">Lupa password?</span>
			{/snippet}
			{#snippet trailing()}
				<button
					type="button"
					onclick={() => (showPassword = !showPassword)}
					aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
					class="flex shrink-0 cursor-pointer text-(--field-icon)"
				>
					{#if showPassword}
						<EyeOffIcon class="size-4.75" strokeWidth={1.8} />
					{:else}
						<EyeIcon class="size-4.75" strokeWidth={1.8} />
					{/if}
				</button>
			{/snippet}
		</AuthField>

		<CaptchaField
			class="mt-3.5"
			bind:value={$form.captcha}
			code={captchaCode}
			error={$errors.captcha?.[0]}
			onRefresh={onRefreshCaptcha}
		/>

		<div
			class="mt-3 mb-3 flex flex-wrap items-center justify-between gap-x-3.5 gap-y-2 text-[11.5px]"
		>
			<div class="flex items-center gap-2.5">
				<!-- size-3! wajib penting: indicator bawaan memasang [&>svg]:size-3.5 dengan
				     specificity sama, jadi pemenangnya bergantung urutan sumber utility. -->
				<Checkbox
					id="remember"
					name="remember"
					bind:checked={$form.remember}
					class="size-4.5 cursor-pointer rounded-[5px] border-[1.5px] border-(--auth-outline-border) bg-white shadow-none data-checked:border-(--navy-950) data-checked:bg-(--navy-950) data-checked:text-white [&_svg]:size-3!"
				/>
				<Label for="remember" class="cursor-pointer text-[11.5px] font-normal text-(--auth-text)">
					Ingat perangkat ini
				</Label>
			</div>
			<span class="flex items-center gap-1.5 text-(--auth-text)" aria-disabled="true">
				<CircleQuestionMarkIcon class="size-4 text-(--auth-muted)" strokeWidth={1.8} />
				Butuh bantuan?
			</span>
		</div>

		<Button
			type="submit"
			disabled={!$form.email || !$form.password || !$form.captcha || $submitting}
			class="mb-4 h-auto w-full cursor-pointer gap-2.5 rounded-[10px] bg-(--navy-950) py-2.75 text-[14.5px] font-semibold text-white hover:bg-(--brand-600) disabled:cursor-not-allowed disabled:bg-(--auth-disabled-bg) disabled:text-(--auth-disabled-text) disabled:opacity-100"
		>
			<LogInIcon class="size-4.5" strokeWidth={1.9} />
			Login
		</Button>

		<div class="mb-3 flex items-center gap-3.5">
			<Separator class="flex-1 bg-(--auth-border)" />
			<span class="text-[11px] whitespace-nowrap text-(--auth-disabled-text)">
				atau masuk dengan
			</span>
			<Separator class="flex-1 bg-(--auth-border)" />
		</div>

		<div
			class="flex flex-col items-stretch gap-3 rounded-[12px] border border-(--auth-cta-border) bg-(--auth-cta-bg) px-3 py-2.5 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-3.5"
		>
			<div class="flex min-w-0 items-center gap-3">
				<UserPlusIcon class="size-5.25 shrink-0 text-(--brand-500)" strokeWidth={1.7} />
				<div class="min-w-0 text-(--navy-950)">
					<p class="text-[12.5px] font-semibold">Belum punya akun?</p>
					<p class="mt-0.5 text-[11px] text-(--auth-muted)">
						Daftar akun baru untuk mengakses layanan Disdikal
					</p>
				</div>
			</div>
			<Button
				variant="outline"
				href={resolve('/register')}
				class="h-auto w-full shrink-0 cursor-pointer justify-center gap-2 rounded-lg border-(--auth-outline-border) bg-white px-4 py-2 text-[12px] font-semibold whitespace-nowrap text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950) sm:w-auto"
			>
				Daftar Akun
				<ArrowRightIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
			</Button>
		</div>
	</form>
</div>
