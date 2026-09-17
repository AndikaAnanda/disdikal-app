<script lang="ts">
	import UploadIcon from '@lucide/svelte/icons/upload';
	import { fileProxy, type SuperForm } from 'sveltekit-superforms';
	import type { RegisterInput } from '$lib/schemas/register';
	import { cn, formatBytes } from '$lib/utils';

	type DocField = 'ktp' | 'ijazah' | 'transkrip' | 'suratSehat';

	let {
		superform,
		field,
		title,
		hint
	}: { superform: SuperForm<RegisterInput>; field: DocField; title: string; hint: string } =
		$props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;
	// Proxy dibuat sekali per field, jadi `field` tidak boleh berubah setelah mount.
	// svelte-ignore state_referenced_locally
	const files = fileProxy(superform, field);

	let input = $state<HTMLInputElement | null>(null);

	const file = $derived($form[field]);
	const error = $derived($errors[field]?.[0]);
	const ok = $derived(file instanceof File && !error);
</script>

<div class="flex flex-col rounded-[10px] border border-(--auth-border) bg-white p-3.5">
	<div class="mb-1 flex items-start justify-between gap-2.5">
		<span class="text-[12.5px] leading-[1.35] font-semibold text-(--auth-text)">{title}</span>
		<span
			class={cn(
				'shrink-0 rounded-md px-2 py-1 text-[9.5px] font-bold tracking-[0.6px]',
				ok
					? 'bg-(--reg-doc-ok-bg) text-(--auth-success)'
					: 'bg-(--auth-tile-idle) text-(--auth-muted)'
			)}
		>
			{ok ? 'TERUNGGAH' : 'BELUM ADA'}
		</span>
	</div>
	<p class="mb-3 text-[11px] leading-[1.5] text-(--auth-muted)">{hint}</p>

	<button
		type="button"
		onclick={() => input?.click()}
		class={cn(
			'mt-auto flex w-full cursor-pointer flex-col items-center rounded-[10px] border-[1.5px] border-dashed px-2.5 py-3.5 text-center transition-colors',
			ok
				? 'border-(--auth-success)/40 bg-(--reg-doc-ok-bg)'
				: 'border-(--reg-foto-border) bg-(--auth-cta-bg) hover:bg-(--brand-50)'
		)}
	>
		<UploadIcon
			class="mb-1.5 size-4.5 {ok ? 'text-(--auth-success)' : 'text-(--brand-500)'}"
			strokeWidth={1.9}
		/>
		<span
			class="block text-[11.5px] font-semibold {ok
				? 'text-(--auth-success)'
				: 'text-(--brand-500)'}"
		>
			{ok ? 'Ganti berkas' : 'Pilih berkas untuk diunggah'}
		</span>
		<span class="mt-0.5 block max-w-full truncate text-[10.5px] text-(--auth-muted)">
			{file instanceof File
				? `${file.name} · ${formatBytes(file.size)}`
				: 'JPG, PNG, atau PDF, maksimal 2 MB'}
		</span>
	</button>
	<input
		bind:this={input}
		bind:files={$files}
		type="file"
		name={field}
		accept="image/png,image/jpeg,application/pdf"
		class="hidden"
	/>
	{#if error}
		<p class="mt-1.5 text-xs text-destructive">{error}</p>
	{/if}
</div>
