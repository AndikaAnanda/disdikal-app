<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import FileIcon from '@lucide/svelte/icons/file';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import UploadIcon from '@lucide/svelte/icons/upload';

	let { step, onJump }: { step: number; onJump: (index: number) => void } = $props();

	const steps = [
		{ label: 'BIODATA', icon: FileIcon },
		{ label: 'BUAT AKUN', icon: CheckIcon },
		{ label: 'DOKUMEN', icon: UploadIcon },
		{ label: 'VERIFIKASI LANUD', icon: ShieldIcon }
	];

	// Pewarnaan murni dekoratif dan tidak mengunci navigasi, jadi status cukup
	// diturunkan dari index — bukan dari kelengkapan field seperti di proto.
	function colorOf(index: number) {
		if (index < step) return 'var(--brand-500)';
		if (index === step) return 'var(--reg-amber)';
		return 'var(--reg-idle)';
	}

	function noteOf(index: number) {
		if (index < step) return 'Selesai';
		if (index === step) return 'Sedang diisi';
		return 'Belum';
	}
</script>

<div class="rounded-2xl border border-(--auth-border) bg-white px-[clamp(20px,3vw,40px)] py-5.5">
	<div class="flex items-start">
		{#each steps as item, index (item.label)}
			{@const Icon = item.icon}
			{@const color = colorOf(index)}
			<div class="relative flex flex-1 flex-col items-center text-center">
				{#if index > 0}
					<div
						class="absolute top-5.25 right-1/2 h-[2.5px] w-full"
						style="background: {colorOf(index - 1)}"
					></div>
				{/if}
				<button
					type="button"
					onclick={() => onJump(index)}
					aria-current={index === step ? 'step' : undefined}
					class="relative z-1 flex size-11 cursor-pointer items-center justify-center rounded-full border-[2.5px] bg-white"
					style="color: {color}; border-color: {color}"
				>
					<Icon class="size-4.25" />
				</button>
				<p
					class="mt-2.5 text-[13px] font-bold tracking-[0.8px] {index > step
						? 'text-(--reg-idle-text)'
						: 'text-(--navy-950)'}"
				>
					{item.label}
				</p>
				<p class="mt-0.5 text-xs" style="color: {color}">{noteOf(index)}</p>
			</div>
		{/each}
	</div>
</div>
