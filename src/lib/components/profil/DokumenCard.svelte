<script lang="ts">
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import ImageIcon from '@lucide/svelte/icons/image';
	import UploadIcon from '@lucide/svelte/icons/upload';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { cn, formatBytes } from '$lib/utils';
	import type { DokumenItem, DokumenStatus } from '$lib/profil-data';

	let { item }: { item: DokumenItem } = $props();

	let fileInput = $state<HTMLInputElement | null>(null);
	let selected = $state<File | null>(null);

	const fileName = $derived(selected?.name ?? item.fileName);
	const fileMeta = $derived(selected ? formatBytes(selected.size) : item.meta);
	const isImage = $derived(selected ? selected.type.startsWith('image/') : item.fileType === 'jpg');

	const badge: Record<DokumenStatus, { label: string; class: string }> = {
		terverifikasi: {
			label: 'Terverifikasi',
			class: 'bg-(--accent-green-50) text-(--accent-green)'
		},
		menunggu: {
			label: 'Menunggu Verifikasi',
			class: 'bg-(--accent-orange-50) text-(--accent-orange)'
		},
		belum: { label: 'Belum Ada', class: 'bg-[#f1f5f9] text-(--dash-muted)' }
	};

	const action =
		'h-auto flex-1 cursor-pointer gap-1.5 rounded-md border-(--accent-blue-50) bg-white px-2 py-1.5 text-[10.5px] font-semibold text-(--accent-blue) hover:bg-(--accent-blue-50) hover:text-(--accent-blue)';

	function pickFile() {
		fileInput?.click();
	}

	function onFileChange(event: Event) {
		selected = (event.currentTarget as HTMLInputElement).files?.[0] ?? null;
	}
</script>

<div class="flex flex-col rounded-[10px] border border-(--dash-border) bg-white p-3.5">
	<div class="flex items-start justify-between gap-2">
		<div class="min-w-0">
			<p class="text-[12px] leading-snug font-semibold text-(--dash-text)">{item.title}</p>
			<p class="mt-0.5 text-[10px] text-(--dash-muted)">{item.kind}</p>
		</div>
		<span
			class={cn(
				'flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold whitespace-nowrap',
				badge[item.status].class
			)}
		>
			{#if item.status === 'terverifikasi'}
				<CircleCheckIcon class="size-3" strokeWidth={2.2} />
			{:else if item.status === 'menunggu'}
				<ClockIcon class="size-3" strokeWidth={2.2} />
			{/if}
			{badge[item.status].label}
		</span>
	</div>

	{#if item.status === 'belum'}
		{#if item.withNameInput}
			<div class="mt-3">
				<Label for="{item.id}-nama" class="mb-1.5 text-[10.5px] text-(--dash-text)">
					Nama Dokumen
				</Label>
				<Input
					id="{item.id}-nama"
					placeholder="Contoh: Surat Keterangan Domisili"
					class="h-8 rounded-md border-(--dash-border) text-[11px] shadow-none placeholder:text-(--dash-muted) md:text-[11px]"
				/>
			</div>
		{/if}
		<button
			type="button"
			onclick={pickFile}
			class="mt-3 flex min-h-40 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-[1.5px] border-dashed border-(--accent-blue)/40 bg-[#fbfdff] px-3 text-center transition-colors hover:bg-(--accent-blue-50)"
		>
			<UploadIcon class="mb-1 size-4 text-(--accent-blue)" strokeWidth={2} />
			<span class="text-[10.5px] font-semibold text-(--accent-blue)">
				{selected ? 'Ganti berkas' : 'Pilih berkas untuk diunggah'}
			</span>
			<span class="max-w-full truncate text-[9.5px] text-(--dash-muted)">
				{selected
					? `${selected.name} · ${formatBytes(selected.size)}`
					: 'PDF/DOC/PNG/JPG, maksimal 5 MB'}
			</span>
		</button>
	{:else}
		<div
			class="mt-3 flex h-28 items-center justify-center overflow-hidden rounded-md bg-(--dash-placeholder)"
		>
			{#if item.preview}
				<img src={item.preview} alt={item.title} class="max-h-full max-w-full object-contain" />
			{:else}
				<FileTextIcon class="size-8 text-[#b8c3d3]" strokeWidth={1.6} />
			{/if}
		</div>

		<div class="mt-3 flex items-start gap-2">
			{#if isImage}
				<ImageIcon class="mt-0.5 size-4 shrink-0 text-(--accent-blue)" strokeWidth={2} />
			{:else}
				<FileTextIcon class="mt-0.5 size-4 shrink-0 text-(--accent-red)" strokeWidth={2} />
			{/if}
			<div class="min-w-0">
				<p class="truncate text-[11px] font-semibold text-(--dash-text)">{fileName}</p>
				<p class="text-[9.5px] text-(--dash-muted)">{fileMeta}</p>
			</div>
		</div>

		<Separator class="my-3 bg-(--dash-border)" />

		<div class="flex gap-2">
			<Button type="button" variant="outline" aria-disabled="true" class={action}>
				<EyeIcon class="size-3.5" strokeWidth={2} />
				Lihat
			</Button>
			<Button type="button" variant="outline" onclick={pickFile} class={action}>
				<UploadIcon class="size-3.5" strokeWidth={2} />
				Update
			</Button>
			<Button type="button" variant="outline" aria-disabled="true" class={action}>
				<DownloadIcon class="size-3.5" strokeWidth={2} />
				Download
			</Button>
		</div>
	{/if}

	<input
		bind:this={fileInput}
		onchange={onFileChange}
		type="file"
		accept=".pdf,.doc,.docx,image/png,image/jpeg"
		class="hidden"
	/>
</div>
