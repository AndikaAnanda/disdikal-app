<script lang="ts">
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import {
		fileTypeIcon,
		iconExam,
		iconEye,
		iconUpload,
		statusIcon,
		statusIconColor,
		statusPill
	} from './icons';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import type { DokumenRow } from '$lib/dokumen-data';

	let { rows }: { rows: DokumenRow[] } = $props();

	const headers = [
		{ id: 'status-icon', label: '', width: 'w-9' },
		{ id: 'tanggal', label: 'Tanggal Upload', width: 'w-27.5' },
		{ id: 'dokumen', label: 'Dokumen Persyaratan', width: 'w-56.25' },
		{ id: 'file', label: 'File Terunggah', width: 'w-50.5' },
		{ id: 'status', label: 'Status', width: 'w-24.5' },
		{ id: 'aksi', label: 'Aksi', width: 'w-63.25' }
	];

	// Baris selesai/gagal diberi tint sangat muda sesuai desain.
	const rowTint: Partial<Record<DokumenRow['status'], string>> = {
		selesai: 'bg-[#FCFFFC]',
		gagal: 'bg-[#FFFCFC]'
	};

	const cell = 'border-b border-(--dash-border) px-3 py-3.5 align-middle';
</script>

<div class="rounded-[14px] border border-(--dash-border) bg-white px-5 py-5 sm:px-6.5 sm:py-5.5">
	<div class="mb-5 flex items-center gap-2.5">
		<MaskIcon src={iconExam} class="size-4.5 text-(--brand-600)" />
		<h2 class="text-[15.5px] font-bold text-(--navy-950)">Dokumen Pribadi</h2>
	</div>

	<div class="overflow-x-auto rounded-[8px] border border-(--dash-border)">
		<!-- min-w menjaga kolom tetap terbaca: tanpa itu browser memampatkan sel jadi
		     satu kata per baris alih-alih memunculkan scrollbar. -->
		<table class="w-full min-w-230 border-collapse text-left">
			<thead>
				<tr class="bg-[#F7F9FE]">
					{#each headers as header (header.id)}
						<th
							class="{header.width} px-3 py-3.5 text-[14px] font-medium whitespace-nowrap text-[#343434]"
						>
							{header.label}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as row (row.id)}
					{@const pill = statusPill[row.status]}
					<tr class="{rowTint[row.status] ?? 'bg-white'} last:[&>td]:border-b-0">
						<td class={cell}>
							<MaskIcon
								src={statusIcon[row.status]}
								class="size-4.5 {statusIconColor[row.status]}"
							/>
						</td>

						<td class={cell}>
							<p class="text-[14px] whitespace-nowrap text-[#343434]">{row.tanggal}</p>
							{#if row.jam}
								<p class="mt-0.5 text-[12px] whitespace-nowrap text-[#777777]">{row.jam}</p>
							{/if}
						</td>

						<td class={cell}>
							<p class="text-[14px] text-[#343434]">{row.nama}</p>
							<p class="mt-0.5 text-[12px] text-[#777777]">{row.format}</p>
							<p class="text-[12px] text-[#777777]">{row.maks}</p>
						</td>

						<td class={cell}>
							{#if row.fileName}
								<div class="flex items-start gap-2.5">
									<MaskIcon
										src={fileTypeIcon[row.fileType]}
										class="mt-0.5 size-5 {row.fileType === 'pdf'
											? 'text-[#F00000]'
											: 'text-[#007CF0]'}"
									/>
									<div class="min-w-0">
										<p class="truncate text-[14px] text-[#343434]" title={row.fileName}>
											{row.fileName}
										</p>
										<p class="mt-0.5 text-[12px] text-[#777777]">{row.fileSize}</p>
									</div>
								</div>
							{:else}
								<div class="flex items-start gap-2.5">
									<MaskIcon src={iconUpload} class="mt-0.5 size-4.5 text-[#777777]" />
									<div class="min-w-0">
										<p class="text-[14px] text-[#777777]">Belum ada file diunggah</p>
										<p class="mt-0.5 text-[12px] text-[#777777]">Upload file untuk melanjutkan</p>
									</div>
								</div>
							{/if}
						</td>

						<td class={cell}>
							<Badge
								class="w-full justify-center rounded-[8px] border-transparent py-1.5 text-[13px] font-medium {pill.class}"
							>
								{pill.label}
							</Badge>
						</td>

						<td class={cell}>
							<!-- Belum ada endpoint dokumen, jadi tombol sengaja tanpa href/onclick. -->
							<div class="flex items-center justify-end gap-2.5">
								{#if row.status !== 'belum'}
									<Button
										class="h-auto w-27.5 gap-2 rounded-[8px] bg-[#01296E] py-2.5 text-[13px] font-bold text-white hover:bg-[#0058AA]"
									>
										Lihat
										<MaskIcon src={iconEye} class="size-4" />
									</Button>
								{/if}
								<Button
									class="h-auto w-37.5 gap-2 rounded-[8px] border border-[#0058AA] bg-white py-2.5 text-[13px] font-bold text-[#01296E] hover:bg-[#E6F2FE]"
								>
									{row.status === 'belum' ? 'Upload' : 'Upload Ulang'}
									<MaskIcon src={iconUpload} class="size-4" />
								</Button>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
