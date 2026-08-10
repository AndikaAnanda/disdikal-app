<script lang="ts">
	import UploadIcon from '@lucide/svelte/icons/upload';
	import { cn } from '$lib/utils';

	const documents = [
		['KTP / Kartu Keluarga', 'Scan berwarna, sisi depan'],
		['Ijazah & Transkrip Nilai', 'SMA/SMK sederajat atau pendidikan terakhir'],
		['Akta Kelahiran', 'Dikeluarkan Dukcapil'],
		['SKCK', 'Polres domisili, masa berlaku aktif'],
		['Foto 3×4 Latar Merah', 'Format JPG, wajah tampak jelas'],
		['Surat Keterangan Sehat', 'Puskesmas atau rumah sakit']
	] as const;

	// Bagian tampilan saja: tidak masuk registerSchema dan tidak dikirim ke API,
	// jadi klik cukup menoggle state lokal tanpa membuka file picker sungguhan.
	let uploaded = $state<boolean[]>(Array(documents.length).fill(false));
</script>

<div class="rounded-2xl border border-(--auth-border) bg-white px-6 py-5.5">
	<div class="mb-1 flex items-center gap-2.75">
		<span class="flex size-7.5 shrink-0 items-center justify-center rounded-[9px] bg-(--brand-100)">
			<UploadIcon class="size-4 text-(--brand-500)" strokeWidth={1.9} />
		</span>
		<h2 class="text-[16px] font-semibold text-(--navy-950)">Unggah Dokumen Persyaratan</h2>
	</div>
	<p class="mb-4 ml-10.25 text-[12.5px] leading-[1.6] text-(--auth-muted)">
		Format PDF atau JPG, maksimal 2 MB per dokumen. Dokumen asli dibawa saat verifikasi di Lanud.
	</p>

	<div class="grid grid-cols-1 items-stretch gap-x-5 gap-y-3.5 sm:grid-cols-2">
		{#each documents as [name, hint], index (name)}
			{@const ok = uploaded[index]}
			<button
				type="button"
				onclick={() => (uploaded[index] = !ok)}
				aria-pressed={ok}
				class={cn(
					'flex h-full cursor-pointer flex-col rounded-[13px] border bg-white px-4 py-3.75 text-left',
					ok ? 'border-(--field-border)' : 'border-(--reg-doc-warn-border)'
				)}
			>
				<div class="mb-1 flex items-start justify-between gap-2.5">
					<span class="text-[13.5px] leading-[1.35] font-semibold text-(--auth-text)">{name}</span>
					<span
						class={cn(
							'shrink-0 rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.6px]',
							ok
								? 'bg-(--reg-doc-ok-bg) text-(--auth-success)'
								: 'bg-(--reg-doc-warn-bg) text-(--reg-doc-warn-text)'
						)}
					>
						{ok ? 'TERUNGGAH' : 'BELUM ADA'}
					</span>
				</div>
				<p class="mb-2.75 text-[11.5px] leading-[1.5] text-(--auth-muted)">{hint}</p>
				<div
					class={cn(
						'mt-auto rounded-[11px] border-[1.5px] border-dashed px-2.5 py-3.5 text-center',
						ok
							? 'border-(--auth-outline-border) bg-(--auth-cta-bg)'
							: 'border-(--reg-doc-warn-border) bg-(--reg-doc-warn-bg)'
					)}
				>
					<span
						class={cn(
							'block text-[12.5px] font-semibold',
							ok ? 'text-(--brand-500)' : 'text-(--reg-doc-warn-text)'
						)}
					>
						{ok ? 'Ganti berkas' : 'Pilih berkas untuk diunggah'}
					</span>
					<span class="mt-0.75 block text-[11px] text-(--auth-disabled-text)">
						{ok ? `berkas_${index + 1}_pendaftaran.pdf · 412 KB` : 'PDF atau JPG, maksimal 2 MB'}
					</span>
				</div>
			</button>
		{/each}
	</div>
</div>
