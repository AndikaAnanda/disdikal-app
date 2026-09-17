<script lang="ts">
	import CameraIcon from '@lucide/svelte/icons/camera';
	import ImageIcon from '@lucide/svelte/icons/image';
	import UserIcon from '@lucide/svelte/icons/user';
	import { fileProxy, type SuperForm } from 'sveltekit-superforms';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors } = superform;
	// svelte-ignore state_referenced_locally
	const foto = fileProxy(superform, 'foto');

	let fileInput = $state<HTMLInputElement | null>(null);
	let previewUrl = $state<string | null>(null);

	$effect(() => {
		const file = $form.foto;
		if (!(file instanceof File)) {
			previewUrl = null;
			return;
		}
		const url = URL.createObjectURL(file);
		previewUrl = url;
		return () => URL.revokeObjectURL(url);
	});
</script>

<div>
	<div class="mb-3.5 flex items-start gap-2.5">
		<ImageIcon class="mt-0.5 size-4.5 shrink-0 text-(--brand-500)" strokeWidth={1.9} />
		<div>
			<h2 class="text-[13.5px] font-semibold text-(--navy-950)">Unggah Foto Diri</h2>
			<p class="mt-0.5 text-[11px] leading-[1.6] text-(--auth-muted)">
				Pastikan foto jelas dan terbaru, wajah terlihat penuh, tidak buram, tidak menggunakan
				kacamata atau penutup wajah, dan latar belakang polos
			</p>
		</div>
	</div>

	<button
		type="button"
		onclick={() => fileInput?.click()}
		class="w-full cursor-pointer rounded-[12px] border-[1.5px] border-dashed border-(--reg-foto-border) bg-(--auth-cta-bg) px-4 py-6 text-center transition-colors hover:bg-(--brand-50)"
	>
		<div class="relative mx-auto mb-3 size-24">
			<div
				class="flex size-24 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-(--auth-tile-idle) shadow-[0_6px_20px_rgba(10,44,107,0.12)]"
			>
				{#if previewUrl}
					<img src={previewUrl} alt="Pratinjau foto diri" class="size-full object-cover" />
				{:else}
					<UserIcon class="size-11 text-(--auth-disabled-text)" strokeWidth={1.5} />
				{/if}
			</div>
			<span
				class="absolute right-0 bottom-0 flex size-7 items-center justify-center rounded-full border-2 border-white bg-(--brand-500)"
			>
				<CameraIcon class="size-3.5 text-white" strokeWidth={1.9} />
			</span>
		</div>
		<p class="mb-1 text-[12px] font-semibold text-(--brand-500)">
			{$form.foto instanceof File ? $form.foto.name : 'Klik untuk mengambil foto'}
		</p>
		<p class="text-[11px] leading-[1.6] text-(--auth-muted)">
			seret atau lepas file disini<br />JPG atau PNG, maksimal 2 MB
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
		<p class="mt-1.5 text-xs text-destructive">{$errors.foto}</p>
	{/if}
</div>
