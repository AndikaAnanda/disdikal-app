// Mock data untuk halaman pra-tes Listening Comprehension. Sama seperti file
// data lain: sengaja bebas dari import Svelte/SvelteKit.
//
// Daftar bagian tes dan angka Informasi Tes TIDAK didefinisikan di sini —
// sumbernya `tes-bahasa-data.ts` supaya tetap satu sumber kebenaran.

export interface SectionHeader {
	title: string;
	desc: string;
}

export const sectionHeader: SectionHeader = {
	title: 'Listening Comprehension',
	desc: 'Tes ini bertujuan untuk mengukur kemampuan Anda dalam memahami percakapan atau monolog berdasarkan audio yang diputar'
};

export const infoTesBox: SectionHeader = {
	title: 'Informasi Tes',
	desc: 'Pada bagian ini, Anda akan mendengarkan beberapa percakapan atau monolog, kemudian menjawab pertanyaan berdasarkan isi audio yang diputar.'
};

export type InfoStripId = 'audio' | 'waktu' | 'soal' | 'bagian';

export interface InfoStripItem {
	id: InfoStripId;
	label: string;
	value: string;
}

export const persiapanIntro: SectionHeader = {
	title: 'Persiapan Sebelum Memulai Tes',
	desc: 'Pastikan semua persiapan berikut telah dilakukan agar tes berjalan lancar dan tidak terganggu'
};

export type PersiapanId = 'kamera' | 'headset' | 'lingkungan' | 'tutupApp' | 'posisi' | 'fokus';

export interface PersiapanBullet {
	/** Lebih dari satu baris dipakai kalau desain memecah teksnya. */
	lines: string[];
}

export interface PersiapanCard {
	id: PersiapanId;
	no: number;
	title: string;
	badge?: string;
	bullets: PersiapanBullet[];
}

/**
 * Nomor badge di desain semuanya "1" (master component belum diubah per
 * instance); di sini diurutkan 1-6. Beberapa typo desain juga diperbaiki:
 * "kemera" → "kamera", "tegakdan" → "tegak dan", "telalu" → "terlalu".
 */
export const persiapanCards: PersiapanCard[] = [
	{
		id: 'kamera',
		no: 1,
		title: 'Nyalakan Kamera',
		badge: 'Wajib ON',
		bullets: [
			{ lines: ['Kamera harus menyala selama tes berlangsung'] },
			{ lines: ['Pastikan wajah terlihat jelas dan berada di tengah frame'] },
			{ lines: ['Jangan menutupi wajah dengan benda apa pun'] },
			{ lines: ['Jangan mematikan kamera selama tes'] }
		]
	},
	{
		id: 'headset',
		no: 2,
		title: 'Gunakan Headset / Earphone',
		bullets: [
			{ lines: ['Gunakan headset atau earphone agar audio terdengar jelas'] },
			{ lines: ['Pastikan suara komputer/ laptop tidak mute'] },
			{ lines: ['Cek volume sebelum memulai tes'] }
		]
	},
	{
		id: 'lingkungan',
		no: 3,
		title: 'Pastikan Lingkungan Kondusif',
		bullets: [
			{ lines: ['Kerjakan tes di tempat tenang'] },
			{ lines: ['Hindari suara bising'] },
			{ lines: ['Pastikan pencahayaan cukup'] },
			{ lines: ['Duduk menghadap kamera'] }
		]
	},
	{
		id: 'tutupApp',
		no: 4,
		title: 'Tutup Aplikasi dan Browser Lain',
		bullets: [
			{ lines: ['Jangan membuka tab di browser lain'] },
			{ lines: ['Jangan membuka aplikasi lain'] },
			{ lines: ['Jangan berpindah ke jendela lain'] },
			{ lines: ['Jika terdeteksi dari halaman tes, aktivitas akan tercatat'] }
		]
	},
	{
		id: 'posisi',
		no: 5,
		title: 'Posisi Duduk Tegak dan di Tengah Frame',
		bullets: [
			{ lines: ['Duduk tegak dan berada di tengah frame'] },
			{ lines: ['Pastikan wajah dan bahu terlihat jelas'] },
			{ lines: ['Jangan terlalu dekat atau terlalu jauh dari kamera'] }
		]
	},
	{
		id: 'fokus',
		no: 6,
		title: 'Siapkan Diri dan Fokus',
		bullets: [
			{ lines: ['Pastikan kondisi tubuh dalam keadaan prima'] },
			{ lines: ['Fokus dan kerjakan tes dengan jujur'] },
			{
				lines: [
					'Dilarang meminta bantuan atau berkomunikasi',
					'dengan orang lain dalam bentuk apa pun'
				]
			}
		]
	}
];

export const finalNotice =
	'Pastikan semua persiapan di atas sudah selesai sebelum menekan tombol “Mulai Tes”.';

export const audioPlayCount = '2 Kali';
