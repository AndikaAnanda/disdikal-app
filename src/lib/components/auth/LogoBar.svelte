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
	<div class="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-10 py-4">
		<div class="flex items-center gap-3">
			<img src={logoDisdikal} alt="Logo Dinas Pendidikan TNI AL" class="size-12.5 object-contain" />
			<div>
				<p class="text-[14px] font-medium tracking-[0.03em] text-[#01296E]">
					MARKAS BESAR ANGKATAN LAUT
				</p>
				<p class="text-2xl font-bold tracking-tight text-[#01296E]">DINAS PENDIDIKAN</p>
			</div>
		</div>

		<Button
			variant="outline"
			href={backHref}
			class="h-auto gap-2 rounded-full border-[#0071DA] bg-white px-5.5 py-2.5 text-[15px] font-bold text-[#0071DA] hover:bg-(--brand-50) hover:text-(--brand-600)"
		>
			{backLabel}
			<ArrowRightIcon class="size-6" />
		</Button>
	</div>
</div>
