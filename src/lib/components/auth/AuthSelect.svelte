<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { fieldBoxBase } from '$lib/components/auth/AuthField.svelte';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';

	type Option = string | { value: string; label: string };

	let {
		id,
		name = id,
		label,
		icon: Icon,
		placeholder,
		options,
		value = $bindable(''),
		error,
		valid = false,
		disabled = false,
		onValueChange,
		class: className
	}: {
		id: string;
		name?: string;
		label: string;
		icon: LucideIcon;
		placeholder: string;
		options: readonly Option[];
		value?: string;
		error?: string;
		valid?: boolean;
		disabled?: boolean;
		onValueChange?: (value: string) => void;
		class?: string;
	} = $props();

	const items = $derived(options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o)));
	const selectedLabel = $derived(items.find((o) => o.value === value)?.label);

	// h-auto! wajib penting: Select.Trigger memasang data-[size=default]:h-9 yang
	// tidak ikut ter-dedupe twMerge karena scope variant-nya berbeda.
	const triggerBase = 'h-auto! w-full justify-start py-2.5 text-sm font-normal shadow-none';
</script>

<div class={className}>
	<div class="mb-1.75 flex items-center justify-between gap-3">
		<Label for={id} class="text-[12px] font-medium text-(--auth-text)">{label}</Label>
	</div>

	<Select.Root type="single" {name} {disabled} bind:value {onValueChange}>
		<Select.Trigger
			{id}
			aria-invalid={error ? 'true' : undefined}
			class={cn(
				fieldBoxBase,
				triggerBase,
				'cursor-pointer disabled:cursor-not-allowed disabled:bg-(--auth-tile-idle) disabled:opacity-100',
				valid ? 'border-(--field-border-ok) bg-(--field-bg-ok)' : 'border-(--field-border) bg-white'
			)}
		>
			<Icon class="size-4.5 shrink-0 text-(--field-icon)" strokeWidth={1.8} />
			<span
				class="flex-1 truncate text-left {selectedLabel
					? 'text-(--auth-text)'
					: 'text-(--auth-muted)'}"
			>
				{selectedLabel ?? placeholder}
			</span>
			{#if valid}
				<span
					class="flex size-4.75 shrink-0 items-center justify-center rounded-full bg-(--auth-success)"
				>
					<CheckIcon class="size-3 text-white" strokeWidth={3.4} />
				</span>
			{/if}
		</Select.Trigger>
		<Select.Content>
			{#each items as item (item.value)}
				<Select.Item value={item.value} label={item.label}>{item.label}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	{#if error}
		<p class="mt-1 text-xs text-destructive">{error}</p>
	{/if}
</div>
