// Mock data untuk halaman Tutorial Persiapan Kamera. Sama seperti
// tes-bahasa-data.ts: sengaja bebas dari import Svelte/SvelteKit.

export interface BannerPetunjuk {
	title: string;
	desc: string;
}

export const bannerPetunjuk: BannerPetunjuk = {
	title: 'Petunjuk Kamera (WAJIB ON)',
	desc: 'Pastikan kamera menyala selama tes berlangsung. Posisi Anda saat mengerjakan tes harus sesuai dengan panduan berikut:'
};

export interface TutorialMenuItem {
	id: string;
	no: number;
	title: string;
	desc: string;
	active: boolean;
}

export const daftarTutorial: TutorialMenuItem[] = [
	{
		id: 'persiapan-kamera',
		no: 1,
		title: 'Persiapan Kamera',
		desc: 'Menyalakan kamera dan posisi yang benar',
		active: true
	},
	{
		id: 'panduan-tes',
		no: 2,
		title: 'Panduan Mengerjakan Tes',
		desc: 'Navigasi soal, audio, waktu, dan ketentuan lainnya',
		active: false
	}
];

export type KetentuanIconId = 'faceId' | 'appWeb' | 'fullscreen' | 'timer' | 'wifi';

export interface KetentuanItem {
	id: KetentuanIconId;
	text: string;
}

export const ringkasanKetentuan: KetentuanItem[] = [
	{ id: 'faceId', text: 'Kamera depan wajib menyala selama tes berlangsung' },
	{ id: 'appWeb', text: 'Dilarang membuka aplikasi/tab lain selama tes' },
	{ id: 'fullscreen', text: 'Tes berjalan dalam mode fullscreen' },
	{ id: 'timer', text: 'Waktu tes tidak dapat dijeda atau diulang' },
	{ id: 'wifi', text: 'Pastikan koneksi internet stabil' }
];

/**
 * `image-300.png` adalah satu sprite sheet berisi ketiga ilustrasi. Nilai crop
 * diambil persis dari Figma dan dipakai sebagai inline style pada <img> di
 * dalam wrapper `overflow-hidden` berukuran tetap.
 */
export interface SpriteCrop {
	left: string;
	top: string;
	width: string;
	height: string;
}

export interface LangkahKamera {
	id: string;
	no: number;
	title: string;
	lines: string[];
	sprite: SpriteCrop;
}

const langkahLines = [
	'Saat diminta akses kamera,',
	'klik “Allow” atau “Izinkan”',
	'Pastikan Anda menggunakan',
	'Browser yang direkomendasikan'
];

export const langkahKamera: LangkahKamera[] = [
	{
		id: 'izinkan',
		no: 1,
		title: 'Izinkan Akses Kamera',
		lines: langkahLines,
		sprite: { left: '-29.48%', top: '-16.44%', width: '594.46%', height: '141.42%' }
	},
	{
		id: 'periksa',
		no: 2,
		title: 'Izinkan Akses Kamera',
		lines: langkahLines,
		sprite: { left: '-198.46%', top: '-14.11%', width: '507.41%', height: '120.71%' }
	},
	{
		id: 'posisikan',
		no: 3,
		title: 'Izinkan Akses Kamera',
		lines: langkahLines,
		sprite: { left: '-377.04%', top: '-10.24%', width: '485.43%', height: '115.48%' }
	}
];

export const posisiBenarBullets: string[] = [
	'Wajah terlihat jelas dan menghadap kamera',
	'Posisi duduk tegak dan berada di tengah frame',
	'Pencahayaan cukup dan tidak backlight',
	'Kamera dalam kondisi baik dan tidak buram',
	'Wajah tidak tertutup (topi, masker, atau objek lain)',
	'Area wajah dalam frame (seperti contoh di layar)'
];

export interface LaranganItem {
	id: string;
	title: string;
	lines: string[];
}

/** Judul item terakhir diselaraskan dengan deskripsinya (desain menduplikasi judul item pertama). */
export const laranganTes: LaranganItem[] = [
	{
		id: 'tab-lain',
		title: 'Membuka Browser atau Tab Lain',
		lines: [
			'Selama tes berlangsung, jangan membuka',
			'browser atau tab lain selain halaman tes ini'
		]
	},
	{
		id: 'keluar-halaman',
		title: 'Keluar dari Halaman Tes',
		lines: ['Jangan keluar atau berpindah dari halaman tes', 'Tes akan otomatis berakhir']
	},
	{
		id: 'perangkat-lain',
		title: 'Menggunakan Perangkat Lain',
		lines: ['Dilarang menggunakan HP, Tablet, atau', 'komputer lain selama tes berlangsung']
	},
	{
		id: 'komunikasi',
		title: 'Meminta Bantuan atau Berkomunikasi',
		lines: ['Dilarang meminta bantuan atau berkomunikasi', 'dengan orang lain dalam bentuk apapun']
	},
	{
		id: 'merekam',
		title: 'Merekam Layar atau Suara',
		lines: [
			'Dilarang merekam layar, suara, atau menggunakan',
			'aplikasi perekam dalam bentuk apapun'
		]
	}
];

export interface PosisiSalahItem {
	id: string;
	text: string;
	sprite: SpriteCrop;
}

/** `image-302.png` adalah sprite vertikal berisi kelima thumbnail. */
export const posisiSalah: PosisiSalahItem[] = [
	{
		id: 'jauh',
		text: 'Wajah tidak terlihat jelas (terlalu jauh/burem)',
		sprite: { left: '-2.96%', top: '-9.89%', width: '109.73%', height: '618.15%' }
	},
	{
		id: 'tidak-tengah',
		text: 'Wajah tidak berada di tengah frame',
		sprite: { left: '-4.86%', top: '-131.64%', width: '109.73%', height: '618.15%' }
	},
	{
		id: 'tertutup',
		text: 'Wajah tertutup (topi, masker, atau objek lain)',
		sprite: { left: '-2.93%', top: '-259.07%', width: '109.73%', height: '618.15%' }
	},
	{
		id: 'gelap',
		text: 'Pencahayaan terlalu gelap atau backlight',
		sprite: { left: '-1.93%', top: '-382.25%', width: '109.73%', height: '618.15%' }
	},
	{
		id: 'terhalang',
		text: 'Kamera tidak menyala atau terhalang',
		sprite: { left: '-1.93%', top: '-505.35%', width: '109.73%', height: '618.15%' }
	}
];

export interface BantuanIntro {
	text: string;
	linkLabel: string;
}

export const bantuanIntro: BantuanIntro = {
	text: 'Jika mengalami kendala selama proses tes, silahkan hubungi',
	linkLabel: 'Tim Support'
};
