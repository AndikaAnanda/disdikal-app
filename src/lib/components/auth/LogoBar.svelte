<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import logoDisdikal from '$lib/assets/logo-disdikal.png';

	const isLoginPage = $derived(page.url.pathname === resolve('/login'));
	const backHref = $derived(isLoginPage ? resolve('/') : resolve('/login'));
	const backLabel = $derived(isLoginPage ? 'Back to Home' : 'Login Page');
</script>

<div class="border-b border-(--auth-border) bg-white">
	<div
		class="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-10"
	>
		<div class="flex items-center gap-3">
			<img
				src={logoDisdikal}
				alt="Logo Dinas Pendidikan TNI AL"
				class="size-9 object-contain sm:size-12.5"
			/>
			<div>
				<p class="hidden text-[14px] font-medium tracking-[0.03em] text-[#01296E] sm:block">
					MARKAS BESAR ANGKATAN LAUT
				</p>
				<p class="text-base font-bold tracking-tight text-[#01296E] sm:text-xl lg:text-2xl">
					DINAS PENDIDIKAN
				</p>
			</div>
		</div>

		<Button
			variant="outline"
			href={backHref}
			class="h-auto gap-1.5 rounded-full border-[#0071DA] bg-white px-3.5 py-2 text-xs font-bold text-[#0071DA] hover:bg-(--brand-50) hover:text-(--brand-600) sm:gap-2 sm:px-5.5 sm:py-2.5 sm:text-[15px]"
		>
			{backLabel}
			<ArrowRightIcon class="size-4 sm:size-6" />
		</Button>
	</div>
</div>
