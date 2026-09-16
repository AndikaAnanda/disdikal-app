<script lang="ts" module>
	// Karakter ambigu (0/O/1/I/l) dibuang supaya kode masih terbaca saat difoto/di-zoom.
	const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

	export function generateCaptcha(length = 6): string {
		let code = '';
		for (let i = 0; i < length; i++) {
			code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
		}
		return code;
	}
</script>

<script lang="ts">
	import RotateCwIcon from '@lucide/svelte/icons/rotate-cw';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import { fieldBoxBase } from '$lib/components/auth/AuthField.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';

	let {
		value = $bindable(''),
		code,
		error,
		onRefresh,
		class: className
	}: {
		value?: string;
		code: string;
		error?: string;
		onRefresh: () => void;
		class?: string;
	} = $props();
</script>

<div class={className}>
	<div class="mb-1.75">
		<Label for="captcha" class="text-[12.5px] font-medium text-(--auth-text)">Kode Keamanan</Label>
	</div>

	<div class="flex items-stretch gap-2">
		<div class={cn(fieldBoxBase, 'min-w-0 flex-1 border-(--field-border) bg-white')}>
			<ShieldIcon class="size-4.5 shrink-0 text-(--field-icon)" strokeWidth={1.8} />
			<Input
				id="captcha"
				name="captcha"
				type="text"
				bind:value
				autocomplete="off"
				autocapitalize="characters"
				spellcheck={false}
				placeholder="Ketik Kode"
				aria-invalid={error ? 'true' : undefined}
				class="h-auto rounded-none border-0 bg-transparent p-0 py-2.5 text-sm shadow-none placeholder:text-(--auth-muted) focus-visible:border-0 focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 md:text-sm"
			/>
		</div>

		<span
			aria-label="Kode keamanan: {code.split('').join(' ')}"
			class="flex shrink-0 items-center justify-center rounded-lg bg-(--auth-captcha-bg) px-3.5 text-[13px] font-bold tracking-[1.5px] text-white italic select-none"
		>
			{code}
		</span>

		<button
			type="button"
			onclick={onRefresh}
			aria-label="Ganti kode keamanan"
			class="flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-(--field-border) bg-white px-2.5 text-(--field-icon) transition-colors hover:bg-(--brand-50)"
		>
			<RotateCwIcon class="size-4.5" strokeWidth={1.8} />
		</button>
	</div>

	{#if error}
		<p class="mt-1 text-xs text-destructive">{error}</p>
	{/if}
</div>
