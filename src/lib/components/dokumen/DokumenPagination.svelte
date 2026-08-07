<script lang="ts">
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import * as Pagination from '$lib/components/ui/pagination';

	let {
		page = $bindable(1),
		count,
		perPage
	}: { page: number; count: number; perPage: number } = $props();

	const from = $derived((page - 1) * perPage + 1);
	const to = $derived(Math.min(page * perPage, count));

	const navBtn =
		'size-9 rounded-[8px] border border-(--dash-border) bg-white p-0 text-[#01296E] hover:bg-[#E6F2FE] disabled:opacity-40';
</script>

<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
	<p class="text-[14px] font-medium text-[#0058AA]">
		Menampilkan {from} - {to} dari {count} dokumen
	</p>

	<Pagination.Root {count} {perPage} bind:page class="mx-0 w-auto justify-end">
		{#snippet children({ pages, currentPage })}
			<Pagination.Content class="gap-2">
				<Pagination.Item>
					<Pagination.PrevButton class={navBtn}>
						<ChevronLeftIcon class="size-4" />
					</Pagination.PrevButton>
				</Pagination.Item>

				{#each pages as p (p.key)}
					{#if p.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis class="text-[#01296E]" />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link
								page={p}
								isActive={currentPage === p.value}
								class="size-9 rounded-[8px] border border-(--dash-border) text-[14px] font-bold text-[#01296E] hover:bg-[#E6F2FE] data-[active=true]:border-[#01296E] data-[active=true]:bg-[#01296E] data-[active=true]:text-white"
							>
								{p.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton class={navBtn}>
						<ChevronRightIcon class="size-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>
