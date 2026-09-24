<script lang="ts" module>
	// Diekspor supaya Select.Trigger di DataDiriSection memakai kotak yang sama
	// tanpa menduplikasi string kelasnya.
	export const fieldBoxBase =
		'flex items-center gap-2.5 rounded-lg border px-3.25 transition-colors';
</script>

<script lang="ts">
	import type { LucideIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { cn } from '$lib/utils';

	let {
		id,
		name = id,
		label,
		icon: Icon,
		type = 'text',
		value = $bindable(''),
		error,
		valid = false,
		labelRight,
		trailing,
		class: className,
		labelClass,
		inputClass,
		...restProps
	}: {
		id: string;
		name?: string;
		label: string;
		icon?: LucideIcon;
		type?: Exclude<HTMLInputTypeAttribute, 'file'>;
		value?: string;
		error?: string;
		valid?: boolean;
		labelRight?: Snippet;
		trailing?: Snippet;
		class?: string;
		labelClass?: string;
		inputClass?: string;
	} & Omit<HTMLInputAttributes, 'id' | 'name' | 'type' | 'value' | 'class' | 'files'> = $props();
</script>

<div class={className}>
	<div class="mb-1.75 flex items-center justify-between gap-3">
		<Label for={id} class={cn('text-[12px] font-medium text-(--auth-text)', labelClass)}>
			{label}
		</Label>
		{@render labelRight?.()}
	</div>

	<!-- --input-autofill-bg diikutkan ke state valid supaya cat autofill Chrome
	     (yang mengisi kotak input, bukan wrapper) tidak menyisakan persegi putih
	     di dalam field box yang hijau. -->
	<div
		class={cn(
			fieldBoxBase,
			valid
				? 'border-(--field-border-ok) bg-(--field-bg-ok) [--input-autofill-bg:#fafefb]'
				: 'border-(--field-border) bg-white'
		)}
	>
		{#if Icon}
			<Icon class="size-4.5 shrink-0 text-(--field-icon)" strokeWidth={1.8} />
		{/if}
		<Input
			{id}
			{name}
			{type}
			bind:value
			aria-invalid={error ? 'true' : undefined}
			class={cn(
				'h-auto rounded-none border-0 bg-transparent p-0 py-2.5 text-sm shadow-none placeholder:text-(--auth-muted) focus-visible:border-0 focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0 md:text-sm',
				inputClass
			)}
			{...restProps}
		/>
		{@render trailing?.()}
	</div>

	{#if error}
		<p class="mt-1 text-xs text-destructive">{error}</p>
	{/if}
</div>
