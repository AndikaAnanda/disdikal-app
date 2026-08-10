<script lang="ts">
	import CameraIcon from '@lucide/svelte/icons/camera';
	import CheckIcon from '@lucide/svelte/icons/check';
	import UserIcon from '@lucide/svelte/icons/user';
	import { fileProxy, type SuperForm } from 'sveltekit-superforms';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;
	// svelte-ignore state_referenced_locally
	const foto = fileProxy(superform, 'foto');

	let fileInput = $state<HTMLInputElement | null>(null);
	const fileName = $derived($form.foto?.name ?? '');

	const ketentuan = [
		'Foto terbaru dan jelas',
		'Wajah terlihat penuh dan tidak buram',
		'Tidak menggunakan kacamata, topi, atau penutup wajah',
		'Latar belakang polos',
		'Format JPG/PNG, maksimal 2 MB'
	];
</script>

<div class="rounded-2xl border border-(--auth-border) bg-white px-6 py-5.5">
	<div class="mb-4.5 flex items-start gap-3">
		<span
			class="flex size-8.5 shrink-0 items-center justify-center rounded-[10px] bg-(--brand-500)"
		>
			<CameraIcon class="size-4.5 text-white" strokeWidth={1.8} />
		</span>
		<div>
			<h2 class="text-[17px] font-semibold text-(--navy-950)">Unggah Foto Diri</h2>
			<p class="mt-1 text-[12.5px] leading-[1.6] text-(--auth-subtext)">
				Pastikan foto jelas, wajah terlihat penuh, dan tidak menggunakan kacamata atau penutup wajah
			</p>
		</div>
	</div>

	<button
		type="button"
		onclick={() => fileInput?.click()}
		class="w-full cursor-pointer rounded-[14px] border-2 border-dashed border-(--reg-foto-border) bg-(--auth-cta-bg) px-4 py-5.5 text-center"
	>
		<div class="relative mx-auto mb-3.5 size-38">
			<div
				class="flex size-38 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-(--auth-tile-idle) shadow-[0_6px_20px_rgba(10,44,107,0.12)]"
			>
				<UserIcon class="size-18 text-(--auth-disabled-text)" strokeWidth={1.5} />
			</div>
			<span
				class="absolute right-1.5 bottom-1.5 flex size-9.5 items-center justify-center rounded-full border-3 border-white bg-(--brand-500)"
			>
				<CameraIcon class="size-4.25 text-white" strokeWidth={1.9} />
			</span>
		</div>
		<p class="mb-1.5 text-[15px] font-semibold text-(--navy-950)">
			{fileName || 'Klik untuk ambil foto'}
		</p>
		<p class="text-[12.5px] leading-[1.6] text-(--auth-muted)">
			atau seret dan lepas file di sini<br />Format: JPG/PNG, maksimal 2 MB
		</p>
	</button>
	<input
		bind:this={fileInput}
		bind:files={$foto}
		type="file"
		accept="image/png,image/jpeg"
		name="foto"
		class="hidden"
	/>
	{#if $errors.foto}
		<p class="mt-2 text-xs text-destructive">{$errors.foto}</p>
	{/if}

	<div class="mt-4.5 rounded-xl border border-(--auth-cta-border) bg-(--reg-panel-bg) px-4.5 py-4">
		<p class="mb-2.75 text-[13px] font-semibold text-(--brand-500)">Ketentuan Foto:</p>
		<ul class="flex flex-col gap-2">
			{#each ketentuan as item (item)}
				<li class="flex items-start gap-2.25 text-[12.5px] leading-[1.55] text-(--auth-hero-text)">
					<CheckIcon class="mt-0.75 size-3.5 shrink-0 text-(--brand-500)" strokeWidth={3} />
					{item}
				</li>
			{/each}
		</ul>
	</div>
</div>
