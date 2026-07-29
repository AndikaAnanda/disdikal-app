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
	<p class="mb-1 text-lg font-medium text-[#01296E] sm:text-xl lg:text-2xl">Selamat datang di</p>
	<h1
		class="mb-4 text-[32px] leading-[1.15] font-bold tracking-tight text-[#01296E] sm:mb-5 sm:text-[38px] lg:text-[50px] lg:leading-[1.1]"
	>
		Layanan Disdikal
	</h1>
	<p
		class="mb-6 max-w-140 text-sm leading-relaxed text-[#343434] sm:mb-8 sm:text-base lg:text-[18px]"
	>
		Platform digital terintegrasi untuk mendukung pengelolaan pendidikan, pengembangan kompetensi,
		dan manajemen data personel di lingkungan Dinas Pendidikan TNI Angkatan Laut
	</p>

	<div class="mb-6 flex flex-col gap-5 sm:mb-9 sm:gap-6">
		{#each features as feature (feature.id)}
			<div class="flex items-start gap-3 sm:gap-4">
				<span
					class="flex size-12 shrink-0 items-center justify-center rounded-sm bg-[#E6F2FE] sm:size-14 lg:size-16.25"
				>
					<img src={feature.icon} alt="" class="size-6.5 object-contain sm:size-7.5 lg:size-8.75" />
				</span>
				<div>
					<p class="mb-1 text-base font-bold text-[#0058AA] sm:text-[18px]">{feature.title}</p>
					<p class="max-w-80 text-sm leading-normal text-[#343434] sm:text-base">{feature.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
