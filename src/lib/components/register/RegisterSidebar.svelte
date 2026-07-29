<script lang="ts">
	import CameraIcon from '@lucide/svelte/icons/camera';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';
	import SendIcon from '@lucide/svelte/icons/send';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import UserIcon from '@lucide/svelte/icons/user';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';

	type SidebarForm = {
		errors?: { agreement?: string[] };
	} | null;

	let { form }: { form: SidebarForm } = $props();

	let fileInput = $state<HTMLInputElement | null>(null);
	let fileName = $state('');

	function onFileChange(event: Event) {
		const input = event.currentTarget as HTMLInputElement;
		fileName = input.files?.[0]?.name ?? '';
	}

	const ketentuan = [
		'Foto terbaru dan jelas',
		'Wajah terlihat penuh dan tidak buram',
		'Tidak menggunakan kacamata, topi, atau penutup wajah',
		'Latar belakang polos',
		'Format JPG/PNG, maksimal 2 MB'
	];
</script>

<Card.Root class="rounded-2xl bg-white p-4 shadow-none ring-0 sm:p-6">
	<Card.Content class="px-0">
		<div class="mb-4.5 flex items-start gap-3">
			<span
				class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--brand-100) text-(--brand-600)"
			>
				<CameraIcon class="size-4.5" />
			</span>
			<div>
				<h2 class="mb-1 text-lg font-bold text-[#343434]">Unggah Foto Diri</h2>
				<p class="text-sm leading-relaxed text-[#343434]">
					Pastikan foto jelas, wajah terlihat penuh, dan tidak menggunakan kacamata atau penutup
					wajah
				</p>
			</div>
		</div>

		<button
			type="button"
			onclick={() => fileInput?.click()}
			class="mb-5 w-full rounded-[14px] border-2 border-dashed border-[#c3d1e8] bg-(--brand-50) px-4 py-6 text-center sm:px-5 sm:py-8"
		>
			<div class="relative mx-auto mb-4 size-20 sm:size-24">
				<div
					class="flex size-20 items-center justify-center overflow-hidden rounded-full bg-[#dbe2ee] sm:size-24"
				>
					<UserIcon class="size-11 text-[#aeb8ca] sm:size-13" />
				</div>
				<span
					class="absolute right-0 bottom-0 flex size-7.5 items-center justify-center rounded-full border-3 border-white bg-(--brand-500)"
				>
					<CameraIcon class="size-3.25 text-white" />
				</span>
			</div>
			<p class="mb-1.5 text-sm font-bold text-(--navy-950)">
				{fileName || 'Klik untuk ambil foto'}
			</p>
			<p class="text-xs leading-relaxed text-[#8b95a8]">
				atau seret dan lepas file di sini<br />Format: JPG/PNG, maksimal 2 MB
			</p>
		</button>
		<input
			bind:this={fileInput}
			onchange={onFileChange}
			type="file"
			accept="image/png,image/jpeg"
			name="foto"
			class="hidden"
		/>

		<div class="mb-4.5 rounded-xl border border-(--auth-border) bg-[#f8fafc] p-3.5 sm:p-4.5">
			<p class="mb-2.5 text-sm font-bold text-[#007CF0]">Ketentuan Foto:</p>
			<ul class="flex flex-col gap-2.25">
				{#each ketentuan as item (item)}
					<li class="flex items-start gap-2 text-[13px] text-[#47546b]">
						<CircleCheckIcon class="mt-0.5 size-3.5 shrink-0 text-[#2f9e5f]" />
						{item}
					</li>
				{/each}
			</ul>
		</div>

		<div class="mb-4.5 flex items-start gap-2.5">
			<Checkbox
				id="agreement"
				name="agreement"
				class="mt-1"
				aria-invalid={form?.errors?.agreement ? 'true' : undefined}
			/>
			<Label for="agreement" class="text-base leading-normal font-medium text-[#343434]">
				Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan
			</Label>
		</div>
		{#if form?.errors?.agreement}
			<p class="-mt-3 mb-4.5 text-xs text-destructive">{form.errors.agreement[0]}</p>
		{/if}

		<div
			class="mb-5 flex items-start gap-3 rounded-xl border border-[#d8e5f8] bg-(--brand-50) p-3 sm:p-4"
		>
			<span
				class="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0071DA] text-white"
			>
				<ShieldCheckIcon class="size-4" />
			</span>
			<div>
				<p class="mb-1 text-[13.5px] font-bold text-(--navy-950)">Verifikasi Admin</p>
				<p class="text-xs leading-relaxed text-[#56617a]">
					Setelah Anda mengirimkan pendaftaran, data akan diverifikasi oleh admin. Akun Anda akan
					aktif jika data dinyatakan sesuai dan valid
				</p>
			</div>
		</div>

		<Button
			type="submit"
			class="h-auto w-full gap-2.5 rounded-[10px] bg-[#0071DA] py-3 text-sm font-bold text-white hover:bg-(--brand-600) sm:py-3.75 sm:text-[15px]"
		>
			<SendIcon class="size-4.25" />
			Kirim Pendaftaran
		</Button>
	</Card.Content>
</Card.Root>
