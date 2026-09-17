<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';

	let { step, onJump }: { step: number; onJump: (index: number) => void } = $props();

	const steps = [
		{ title: 'Data Diri', sub: 'Identitas diri' },
		{ title: 'Foto Profil & Dokumen', sub: 'Unggah pas foto dan dokumen' },
		{ title: 'Buat Akun', sub: 'Email dan kata sandi' },
		{ title: 'Verifikasi', sub: 'Kode dari email Anda' }
	];

	type Status = 'done' | 'current' | 'todo';

	// Pewarnaan murni dekoratif dan tidak mengunci navigasi, jadi status cukup
	// diturunkan dari index — bukan dari kelengkapan field.
	function statusOf(index: number): Status {
		if (index < step) return 'done';
		if (index === step) return 'current';
		return 'todo';
	}

	const circle: Record<Status, string> = {
		done: 'bg-(--auth-success) text-white',
		current: 'bg-(--navy-950) text-white',
		todo: 'bg-(--auth-tile-idle) text-(--auth-disabled-text)'
	};
	// Konektor diwarnai mengikuti step yang dituju, bukan yang ditinggalkan.
	const line: Record<Status, string> = {
		done: 'bg-(--auth-success)',
		current: 'bg-(--brand-500)',
		todo: 'bg-(--reg-idle)'
	};
	const title: Record<Status, string> = {
		done: 'text-(--auth-success)',
		current: 'text-(--navy-950)',
		todo: 'text-(--auth-disabled-text)'
	};
	const sub: Record<Status, string> = {
		done: 'text-(--auth-success)',
		current: 'text-(--brand-500)',
		todo: 'text-(--auth-muted)'
	};
</script>

<div>
	<div class="grid grid-cols-[1fr_1fr_1fr_auto] items-start">
		{#each steps as item, index (item.title)}
			{@const status = statusOf(index)}
			<div class="flex flex-col items-start">
				<div class="flex w-full items-center">
					<button
						type="button"
						onclick={() => onJump(index)}
						aria-current={status === 'current' ? 'step' : undefined}
						aria-label="Langkah {index + 1}: {item.title}"
						class="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[12.5px] font-semibold {circle[
							status
						]}"
					>
						{#if status === 'done'}
							<CheckIcon class="size-3.5" strokeWidth={3} />
						{:else}
							{index + 1}
						{/if}
					</button>
					{#if index < steps.length - 1}
						<div class="mx-2 h-0.5 flex-1 rounded-full {line[statusOf(index + 1)]}"></div>
					{/if}
				</div>
				<p class="mt-2 hidden text-[13px] leading-tight font-semibold sm:block {title[status]}">
					{item.title}
				</p>
				<p class="mt-0.5 hidden text-[11px] sm:block {sub[status]}">{item.sub}</p>
			</div>
		{/each}
	</div>

	<p class="mt-2.5 text-[12.5px] text-(--auth-muted) sm:hidden">
		Langkah {step + 1} dari {steps.length} ·
		<span class="font-semibold text-(--navy-950)">{steps[step].title}</span>
	</p>
</div>
