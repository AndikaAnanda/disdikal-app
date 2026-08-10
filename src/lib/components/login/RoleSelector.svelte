<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import UserIcon from '@lucide/svelte/icons/user';
	import * as RadioGroup from '$lib/components/ui/radio-group';

	// Murni state tampilan: tidak masuk loginSchema dan tidak dikirim ke API.
	let role = $state('peserta');

	const roles = [
		{ value: 'peserta', label: 'Peserta', desc: 'Personel pengaju layanan', icon: UserIcon },
		{ value: 'admin', label: 'Administrator', desc: 'Verifikator Disdikal', icon: ShieldIcon }
	];
</script>

<RadioGroup.Root bind:value={role} aria-label="Masuk sebagai" class="mb-2.75 grid-cols-2 gap-2">
	{#each roles as item (item.value)}
		{@const isSelected = role === item.value}
		{@const Icon = item.icon}
		<!-- Seluruh kartu jadi target klik sekaligus radio yang keyboard-accessible,
		     jadi dipakai primitive bits-ui langsung (wrapper shadcn tidak menerima
		     children sehingga tidak bisa merender isi kartu). -->
		<RadioGroupPrimitive.Item
			value={item.value}
			class="flex w-full cursor-pointer items-center gap-2.5 rounded-[11px] border px-3 py-2.5 text-left outline-none focus-visible:ring-3 focus-visible:ring-(--brand-500)/40 {isSelected
				? 'border-(--brand-500) bg-(--brand-50)'
				: 'border-(--field-border) bg-white'}"
		>
			<span
				class="flex size-8 shrink-0 items-center justify-center rounded-[9px] {isSelected
					? 'bg-(--brand-500) text-white'
					: 'bg-(--auth-tile-idle) text-(--auth-subtext)'}"
			>
				<Icon class="size-4.25" strokeWidth={1.8} />
			</span>
			<span class="min-w-0">
				<span class="block text-[14.5px] leading-[1.3] font-semibold text-(--auth-text)">
					{item.label}
				</span>
				<span class="mt-0.5 block text-[12.5px] text-(--auth-muted)">{item.desc}</span>
			</span>
		</RadioGroupPrimitive.Item>
	{/each}
</RadioGroup.Root>
