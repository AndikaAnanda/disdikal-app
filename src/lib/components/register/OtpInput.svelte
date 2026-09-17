<script lang="ts">
	import { PinInput, REGEXP_ONLY_DIGITS } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		value = $bindable(''),
		name,
		invalid = false,
		disabled = false
	}: { value?: string; name: string; invalid?: boolean; disabled?: boolean } = $props();
</script>

<!-- Rest props (name, aria-invalid) jatuh ke hidden input bits-ui; class ke container.
     maxlength wajib dipass walau default-nya 6 — tipenya required. -->
<PinInput.Root
	bind:value
	{name}
	{disabled}
	maxlength={6}
	pattern={REGEXP_ONLY_DIGITS}
	inputmode="numeric"
	textalign="center"
	aria-invalid={invalid ? 'true' : undefined}
	class="flex items-center gap-2.5 sm:gap-3"
>
	{#snippet children({ cells })}
		{#each cells as cell, index (index)}
			<PinInput.Cell
				{cell}
				class={cn(
					'relative flex size-11 items-center justify-center rounded-lg border bg-white text-lg font-semibold text-(--navy-950) transition-colors sm:size-12',
					invalid ? 'border-destructive' : 'border-(--reg-otp-border)',
					'data-active:border-(--brand-500) data-active:ring-2 data-active:ring-(--brand-500)/25'
				)}
			>
				{#if cell.char !== null}
					{cell.char}
				{/if}
				{#if cell.hasFakeCaret}
					<span class="h-5 w-px animate-pulse bg-(--navy-950)"></span>
				{/if}
			</PinInput.Cell>
		{/each}
	{/snippet}
</PinInput.Root>
