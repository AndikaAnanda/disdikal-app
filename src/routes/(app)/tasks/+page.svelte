<script lang="ts">
	import { enhance } from '$app/forms';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { Separator } from '$lib/components/ui/separator';
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
	<h1 class="text-2xl font-semibold tracking-tight">Daftar Tugas</h1>
	<p class="mt-1 text-sm text-muted-foreground">
		Contoh alur SvelteKit form action dengan validasi Zod dan penyimpanan Drizzle.
	</p>

	<Card.Root class="mt-8">
		<Card.Header>
			<Card.Title>Tugas baru</Card.Title>
			<Card.Description>Isi judul dan pilih tingkat prioritas.</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST" action="?/create" use:enhance class="space-y-5">
				<div class="space-y-2">
					<Label for="title">Judul</Label>
					<Input
						id="title"
						name="title"
						value={form?.values?.title ?? ''}
						placeholder="Misal: susun laporan bulanan"
						aria-invalid={form?.errors?.title ? 'true' : undefined}
					/>
					{#if form?.errors?.title}
						<p class="text-xs text-destructive">{form.errors.title[0]}</p>
					{/if}
				</div>

				<div class="space-y-2">
					<Label for="priority">Prioritas</Label>
					<Select.Root type="single" name="priority" bind:value={priority}>
						<Select.Trigger id="priority" class="w-full">{priorityLabel}</Select.Trigger>
						<Select.Content>
							{#each priorities as option (option.value)}
								<Select.Item value={option.value} label={option.label}>
									{option.label}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
					{#if form?.errors?.priority}
						<p class="text-xs text-destructive">{form.errors.priority[0]}</p>
					{/if}
				</div>

				<Button type="submit">Tambah tugas</Button>
			</form>
		</Card.Content>
	</Card.Root>

	<Separator class="my-10" />

	{#if data.tasks.length === 0}
		<p class="text-sm text-muted-foreground">Belum ada tugas.</p>
	{:else}
		<ul class="divide-y divide-border rounded-md border">
			{#each data.tasks as item (item.id)}
				<li class="flex items-center justify-between px-4 py-3">
					<span class="text-sm">{item.title}</span>
					<Badge variant="secondary">P{item.priority}</Badge>
				</li>
			{/each}
		</ul>
	{/if}
</div>
