<script lang="ts">
	import SendIcon from '@lucide/svelte/icons/send';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import type { SuperForm } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { cn } from '$lib/utils';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;

	function toggleAgreement() {
		$form.agreement = !$form.agreement;
	}

	function onAgreementKeydown(event: KeyboardEvent) {
		if (event.key !== 'Enter' && event.key !== ' ') return;
		event.preventDefault();
		toggleAgreement();
	}
</script>

<div class="rounded-2xl border border-(--auth-border) bg-white px-6 py-5.5">
	<div class="mb-1 flex items-center gap-2.75">
		<span class="flex size-7.5 shrink-0 items-center justify-center rounded-[9px] bg-(--brand-100)">
			<ShieldIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
		</span>
		<h2 class="text-[16px] font-semibold text-(--navy-950)">Pernyataan &amp; Verifikasi Lanud</h2>
	</div>

	<!-- Seluruh kartu jadi target klik; Checkbox di dalamnya murni visual
	     (tabindex -1) supaya tidak ada dua stop tab untuk satu kontrol. -->
	<div
		role="button"
		tabindex="0"
		aria-pressed={$form.agreement}
		onclick={toggleAgreement}
		onkeydown={onAgreementKeydown}
		class={cn(
			'mt-4 flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.75',
			$form.agreement
				? 'border-(--field-border-ok) bg-(--reg-agree-bg)'
				: 'border-(--field-border) bg-white'
		)}
	>
		<!-- size-3! wajib penting: indicator bawaan memasang [&>svg]:size-3.5 dengan
		     specificity sama, jadi pemenangnya bergantung urutan sumber utility. -->
		<Checkbox
			checked={$form.agreement}
			tabindex={-1}
			aria-hidden="true"
			class="mt-0.5 size-4.75 rounded-[5px] border-[1.5px] border-(--auth-outline-border) bg-white shadow-none data-checked:border-(--auth-success) data-checked:bg-(--auth-success) data-checked:text-white [&_svg]:size-3!"
		/>
		<span class="text-[13px] leading-[1.6] text-(--auth-text)">
			Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan
		</span>
	</div>
	{#if $errors.agreement}
		<p class="mt-1.5 text-xs text-destructive">{$errors.agreement}</p>
	{/if}

	<div
		class="mt-4 flex items-start gap-3.25 rounded-xl border border-(--auth-cta-border) bg-(--reg-panel-bg) px-4.5 py-4"
	>
		<span class="flex size-8.5 shrink-0 items-center justify-center rounded-full bg-(--brand-500)">
			<ShieldCheckIcon class="size-4.5 text-white" strokeWidth={1.8} />
		</span>
		<div>
			<p class="mb-1 text-[13.5px] font-semibold text-(--navy-950)">Verifikasi Admin</p>
			<p class="text-[12.5px] leading-[1.6] text-(--auth-subtext)">
				Setelah Anda mengirimkan pendaftaran, data akan diverifikasi oleh admin. Akun Anda akan
				aktif jika data dinyatakan sesuai dan valid
			</p>
		</div>
	</div>

	<Button
		type="submit"
		class="mt-4.5 h-auto w-full cursor-pointer gap-2.5 rounded-[11px] bg-(--brand-500) py-3.25 text-[14px] font-semibold text-white hover:bg-(--brand-600)"
	>
		<SendIcon class="size-4.25" strokeWidth={1.9} />
		Kirim Pendaftaran
	</Button>
</div>
