<script lang="ts" generics="T extends Record<string, unknown>">
	import EyeIcon from '@lucide/svelte/icons/eye';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import RefreshCwIcon from '@lucide/svelte/icons/refresh-cw';
	import UploadIcon from '@lucide/svelte/icons/upload';
	import XIcon from '@lucide/svelte/icons/x';
	import { fileProxy, type FormPathLeaves, type SuperForm } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn, formatBytes } from '$lib/utils';

	let {
		superform,
		field,
		title,
		hint,
		hintText = 'PDF, maksimal 5 MB',
		accept = 'application/pdf',
		withName = false,
		name = $bindable(''),
		error,
		onRemove
	}: {
		superform: SuperForm<T>;
		field: FormPathLeaves<T, File>;
		title: string;
		hint: string;
		hintText?: string;
		accept?: string;
		withName?: boolean;
		name?: string;
		error?: string;
		onRemove?: () => void;
	} = $props();

	// svelte-ignore state_referenced_locally
	const files = fileProxy(superform, field);

	let input = $state<HTMLInputElement | null>(null);

	const file = $derived($files?.[0] ?? null);

	const badge = cn(
		'shrink-0 rounded-md px-2 py-1 text-[9.5px] font-bold tracking-[0.5px] whitespace-nowrap'
	);
	const action =
		'h-auto cursor-pointer gap-1.5 rounded-md border-(--accent-blue)/40 bg-white px-3 py-1.5 text-[10.5px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)';
</script>

<div class="flex flex-col rounded-[10px] border border-(--dash-border) bg-white p-3.5">
	<div class="flex items-start justify-between gap-2">
		<div class="min-w-0">
			<p class="text-[12px] leading-snug font-semibold text-(--dash-text)">{title}</p>
			<p class="mt-0.5 text-[10px] text-(--dash-muted)">{hint}</p>
		</div>
		<div class="flex shrink-0 items-center gap-2">
			<span
				class={cn(
					badge,
					file ? 'bg-(--accent-green-50) text-(--accent-green)' : 'bg-[#f1f5f9] text-(--dash-muted)'
				)}
			>
				{file ? 'TERUNGGAH' : 'BELUM ADA'}
			</span>
			{#if onRemove}
				<button
					type="button"
					onclick={onRemove}
					aria-label="Hapus dokumen {title}"
					class="flex cursor-pointer text-(--dash-muted) hover:text-(--accent-red)"
				>
					<XIcon class="size-3.5" strokeWidth={2.2} />
				</button>
			{/if}
		</div>
	</div>

	{#if withName}
		<div class="mt-3">
			<Label for="{field}-nama" class="sr-only">Nama Dokumen</Label>
			<Input
				id="{field}-nama"
				bind:value={name}
				placeholder="Masukkan nama dokumen"
				class="h-8 rounded-md border-(--dash-border) text-[11px] shadow-none placeholder:text-(--dash-muted) md:text-[11px]"
			/>
		</div>
	{/if}

	{#if file}
		<div
			class="mt-3 flex flex-wrap items-center gap-3 rounded-md border-[1.5px] border-dashed border-(--accent-blue)/40 bg-[#fbfdff] px-3 py-2.5"
		>
			<FileTextIcon class="size-5 shrink-0 text-(--accent-red)" strokeWidth={2} />
			<div class="min-w-0 flex-1">
				<p class="truncate text-[11px] font-semibold text-(--dash-text)">{file.name}</p>
				<p class="text-[9.5px] text-(--dash-muted)">{formatBytes(file.size)}</p>
			</div>
			<div class="flex shrink-0 gap-2">
				<Button type="button" variant="outline" aria-disabled="true" class={action}>
					<EyeIcon class="size-3.5" strokeWidth={2} />
					Lihat
				</Button>
				<Button type="button" variant="outline" onclick={() => input?.click()} class={action}>
					<RefreshCwIcon class="size-3.5" strokeWidth={2} />
					Ubah Dokumen
				</Button>
			</div>
		</div>
	{:else}
		<button
			type="button"
			onclick={() => input?.click()}
			class="mt-3 flex min-h-24 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-[1.5px] border-dashed border-(--accent-blue)/40 bg-[#fbfdff] px-3 text-center transition-colors hover:bg-(--accent-blue-50)"
		>
			<UploadIcon class="mb-1 size-4 text-(--accent-blue)" strokeWidth={2} />
			<span class="text-[10.5px] font-semibold text-(--accent-blue)">
				Pilih berkas untuk diunggah
			</span>
			<span class="text-[9.5px] text-(--dash-muted)">{hintText}</span>
		</button>
	{/if}

	<input bind:this={input} bind:files={$files} type="file" {accept} class="hidden" />

	{#if error}
		<p class="mt-1.5 text-xs text-destructive">{error}</p>
	{/if}
</div>
