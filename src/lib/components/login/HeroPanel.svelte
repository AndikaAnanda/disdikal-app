<script lang="ts">
	import iconChart from '$lib/assets/login-hero-icon/tdesign_chart-combo-filled.png';
	import iconRocket from '$lib/assets/login-hero-icon/fluent-emoji-high-contrast_rocket.png';
	import iconShield from '$lib/assets/login-hero-icon/mingcute_safety-certificate-line.png';

	const features = [
		{
			id: 'aman',
			icon: iconShield,
			title: 'Aman & Terpercaya',
			text: 'Sistem terjamin keamanannya dengan standar perlindungan data tinggi'
		},
		{
			id: 'transparan',
			icon: iconChart,
			title: 'Transparan & Akurat',
			text: 'Data akurat dan proses transparan untuk mendukung pengambilan keputusan'
		},
		{
			id: 'efisien',
			icon: iconRocket,
			title: 'Efisien & Terintegrasi',
			text: 'Semua layanan dalam satu platform terintegrasi, mudah dan cepat diakses'
		}
	];
</script>

<div>
	<p class="mb-1 text-2xl font-medium text-[#01296E]">Selamat datang di</p>
	<h1 class="mb-5 text-[50px] leading-[1.1] font-bold tracking-tight text-[#01296E]">
		Layanan Disdikal
	</h1>
	<p class="mb-8 max-w-140 text-[18px] leading-relaxed text-[#343434]">
		Platform digital terintegrasi untuk mendukung pengelolaan pendidikan, pengembangan kompetensi,
		dan manajemen data personel di lingkungan Dinas Pendidikan TNI Angkatan Laut
	</p>

	<div class="mb-9 flex flex-col gap-6">
		{#each features as feature (feature.id)}
			<div class="flex items-start gap-4">
				<span class="flex size-16.25 shrink-0 items-center justify-center rounded-sm bg-[#E6F2FE]">
					<img src={feature.icon} alt="" class="size-8.75 object-contain" />
				</span>
				<div>
					<p class="mb-1 text-[18px] font-bold text-[#0058AA]">{feature.title}</p>
					<p class="max-w-80 text-base leading-normal text-[#343434]">{feature.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
