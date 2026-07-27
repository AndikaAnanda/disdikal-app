<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label, Select, Separator } from 'bits-ui';
	import { cn } from '$lib/utils';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	const priorities = [
		{ value: '1', label: 'Sangat tinggi' },
		{ value: '2', label: 'Tinggi' },
		{ value: '3', label: 'Sedang' },
		{ value: '4', label: 'Rendah' },
		{ value: '5', label: 'Sangat rendah' }
	];

	let priority = $state('3');
	const priorityLabel = $derived(priorities.find((p) => p.value === priority)?.label);
</script>

<div class="mx-auto max-w-2xl px-6 py-12">
	<h1 class="text-2xl font-semibold tracking-tight text-slate-900">Daftar Tugas</h1>
	<p class="mt-1 text-sm text-slate-500">
		Contoh alur SvelteKit form action dengan validasi Zod dan penyimpanan Drizzle.
	</p>

	<form method="POST" action="?/create" use:enhance class="mt-8 space-y-5">
		<div class="space-y-2">
			<Label.Root for="title" class="block text-sm font-medium text-slate-700">Judul</Label.Root>
			<input
				id="title"
				name="title"
				value={form?.values?.title ?? ''}
				placeholder="Misal: susun laporan bulanan"
				class={cn(
					'w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900',
					'focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none',
					form?.errors?.title && 'border-red-500 focus:border-red-500 focus:ring-red-500'
				)}
			/>
			{#if form?.errors?.title}
				<p class="text-xs text-red-600">{form.errors.title[0]}</p>
			{/if}
		</div>

		<div class="space-y-2">
			<Label.Root class="block text-sm font-medium text-slate-700">Prioritas</Label.Root>
			<Select.Root type="single" name="priority" bind:value={priority}>
				<Select.Trigger
					class="flex w-full items-center justify-between rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none"
				>
					{priorityLabel}
					<span aria-hidden="true" class="text-slate-400">▾</span>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content
						class="z-50 w-[var(--bits-select-anchor-width)] rounded-md border border-slate-200 bg-white p-1 shadow-lg"
						sideOffset={4}
					>
						<Select.Viewport>
							{#each priorities as option (option.value)}
								<Select.Item
									value={option.value}
									label={option.label}
									class="cursor-pointer rounded px-2 py-1.5 text-sm text-slate-700 data-highlighted:bg-slate-100 data-selected:font-medium"
								>
									{option.label}
								</Select.Item>
							{/each}
						</Select.Viewport>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
			{#if form?.errors?.priority}
				<p class="text-xs text-red-600">{form.errors.priority[0]}</p>
			{/if}
		</div>

		<button
			type="submit"
			class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:outline-none"
		>
			Tambah tugas
		</button>
	</form>

	<Separator.Root class="my-10 h-px bg-slate-200" />

	{#if data.tasks.length === 0}
		<p class="text-sm text-slate-500">Belum ada tugas.</p>
	{:else}
		<ul class="divide-y divide-slate-200 rounded-md border border-slate-200">
			{#each data.tasks as item (item.id)}
				<li class="flex items-center justify-between px-4 py-3">
					<span class="text-sm text-slate-900">{item.title}</span>
					<span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
						P{item.priority}
					</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
