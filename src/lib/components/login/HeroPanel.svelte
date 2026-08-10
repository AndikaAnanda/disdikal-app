<script lang="ts">
	import ChartNoAxesColumnIcon from '@lucide/svelte/icons/chart-no-axes-column';
	import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';
	import ZapIcon from '@lucide/svelte/icons/zap';

	const features = [
		{
			id: 'aman',
			icon: ShieldCheckIcon,
			title: 'Aman & Terpercaya',
			text: 'Sistem terjamin keamanannya dengan standar perlindungan data tinggi'
		},
		{
			id: 'transparan',
			icon: ChartNoAxesColumnIcon,
			title: 'Transparan & Akurat',
			text: 'Data akurat dan proses transparan untuk mendukung pengambilan keputusan'
		},
		{
			id: 'efisien',
			icon: ZapIcon,
			title: 'Efisien & Terintegrasi',
			text: 'Semua layanan dalam satu platform terintegrasi, mudah dan cepat diakses'
		}
	];
</script>

<div>
	<p class="mb-0.5 text-[19px] text-(--navy-950)">Selamat datang di</p>
	<h1 class="mb-2.5 text-[clamp(26px,3vw,38px)] leading-[1.15] font-bold text-(--navy-950)">
		Layanan Disdikal
	</h1>
	<p class="mb-5 max-w-145 text-[15px] leading-[1.7] text-pretty text-(--auth-hero-text)">
		Platform digital terintegrasi untuk mendukung pengelolaan pendidikan, pengembangan kompetensi,
		dan manajemen data personel di lingkungan Dinas Pendidikan TNI Angkatan Laut
	</p>

	<div class="flex flex-col gap-3.25">
		{#each features as feature (feature.id)}
			{@const Icon = feature.icon}
			<div class="flex items-start gap-4">
				<span
					class="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-(--brand-100) shadow-[0_2px_10px_rgba(10,44,107,0.06)]"
				>
					<Icon class="size-5.5 text-(--brand-500)" strokeWidth={1.8} />
				</span>
				<div>
					<p class="mb-0.75 text-base font-semibold text-(--brand-500)">{feature.title}</p>
					<p class="max-w-105 text-[13.5px] leading-[1.55] text-(--auth-subtext)">
						{feature.text}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
