<script lang="ts">
	import ClockIcon from '@lucide/svelte/icons/clock';
	import type { SuperForm } from 'sveltekit-superforms';
	import OtpInput from './OtpInput.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	const RESEND_MS = 60_000;

	// Berbasis deadline, bukan decrement per tick, supaya tetap akurat saat tab
	// di-throttle browser. Komponen hanya dirender saat step ini aktif, jadi
	// mount == "kode dikirim" dan unmount membersihkan interval.
	let expiresAt = $state(Date.now() + RESEND_MS);
	let now = $state(Date.now());
	const seconds = $derived(Math.max(0, Math.ceil((expiresAt - now) / 1000)));

	$effect(() => {
		const id = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(id);
	});

	function resend() {
		// TODO: panggil endpoint kirim-ulang OTP (belum tersedia di backend).
		expiresAt = Date.now() + RESEND_MS;
		now = Date.now();
	}
</script>

<div>
	<Label class="mb-2 block text-[12px] font-medium text-(--auth-text)">Kode Verifikasi</Label>
	<OtpInput
		bind:value={$form.kodeVerifikasi}
		name="kodeVerifikasi"
		invalid={!!$errors.kodeVerifikasi}
	/>
	{#if $errors.kodeVerifikasi}
		<p class="mt-1.5 text-xs text-destructive">{$errors.kodeVerifikasi[0]}</p>
	{/if}
	<p class="mt-2 text-[11.5px] text-(--auth-muted)">
		6 digit dikirim ke
		<span class="font-medium text-(--brand-500)">{$form.email || 'email Anda'}</span>. Belum masuk?
		periksa folder spam
	</p>

	<div
		class="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-(--auth-cta-border) bg-(--reg-panel-bg) px-4 py-3.5"
	>
		<span
			class="flex size-8.5 shrink-0 items-center justify-center rounded-full bg-(--brand-100) text-(--brand-500)"
		>
			<ClockIcon class="size-4" strokeWidth={1.9} />
		</span>
		<div class="min-w-0 flex-1">
			<p class="text-[13px] font-semibold text-(--navy-950)">
				{seconds > 0 ? `Kode berlaku ${seconds} detik lagi` : 'Kode kedaluwarsa'}
			</p>
			<p class="mt-0.5 text-[11px] text-(--auth-muted)">Masukkan 6 digit sebelum waktunya habis.</p>
		</div>
		<Button
			type="button"
			variant="outline"
			disabled={seconds > 0}
			onclick={resend}
			class="h-auto cursor-pointer rounded-lg border-(--auth-outline-border) bg-white px-4 py-2.25 text-[12.5px] font-semibold text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950) disabled:cursor-not-allowed disabled:bg-(--auth-disabled-bg) disabled:text-(--auth-disabled-text) disabled:opacity-100"
		>
			Kirim ulang kode
		</Button>
	</div>
</div>
