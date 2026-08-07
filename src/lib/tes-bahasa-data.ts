// Mock data untuk halaman Tes Bahasa Inggris. Sama seperti dokumen-data.ts:
// sengaja bebas dari import Svelte/SvelteKit supaya bisa dipakai layout maupun page.

import type { StepStatus } from './dashboard-data';

export interface PesertaField {
	id: string;
	label: string;
	value: string;
}

export const pesertaInfo: PesertaField[] = [
	{ id: 'nama', label: 'Nama Lengkap', value: 'Pangidoan Nugroho Syahputra Harahap' },
	{ id: 'nrp', label: 'NRP / Pangkat / Korps', value: '017XXXX / Letda / KH' },
	{ id: 'satker', label: 'Satuan Kerja', value: 'Koarmada II' },
	{ id: 'prodi', label: 'Program Studi', value: 'Magister Pertahanan' },
	{ id: 'kampus', label: 'Perguruan Tinggi', value: 'Universitas Pertahanan' },
	{ id: 'email', label: 'Email', value: 'pangidoan@tni.mil.id' }
];

export type PengajuanStepId = 'pengajuan' | 'verifikasi' | 'tes' | 'hasil';

export interface PengajuanStep {
	id: PengajuanStepId;
	no: number;
	title: string;
	desc: string;
	badgeLabel: string;
	tanggal: string;
	status: StepStatus;
}

export const statusPengajuan: PengajuanStep[] = [
	{
		id: 'pengajuan',
		no: 1,
		title: 'Tahap Pengajuan dan Pelengkapan Berkas',
		desc: 'Lengkapi seluruh berkas persyaratan Pengajuan',
		badgeLabel: 'Selesai',
		tanggal: '20 Mei 2025 10:30 WIB',
		status: 'done'
	},
	{
		id: 'verifikasi',
		no: 2,
		title: 'Tahap Lolos Verifikasi Berkas',
		desc: 'Berkas Anda telah diverifikasi oleh tim verifikator pusat',
		badgeLabel: 'Lulus',
		tanggal: '20 Mei 2025 10:30 WIB',
		status: 'done'
	},
	{
		id: 'tes',
		no: 3,
		title: 'Tahap Tes Bahasa Inggris',
		desc: 'Siap untuk dikerjakan. Pastikan Anda berada di tempat yang tenang dan tidak ada gangguan',
		badgeLabel: 'Siap Dikerjakan',
		tanggal: '20 Mei 2025 10:30 WIB',
		status: 'current'
	},
	{
		id: 'hasil',
		no: 4,
		title: 'Tahap Hasil Tes',
		desc: 'Hasil tes akan diverifikasi oleh tim verifikator pusat',
		badgeLabel: 'Belum Dimulai',
		tanggal: '20 Mei 2025 10:30 WIB',
		status: 'pending'
	}
];

export interface HeroWelcome {
	eyebrow: string;
	title: string;
	desc: string;
	notice: string;
}

export const heroWelcome: HeroWelcome = {
	eyebrow: 'Selamat Datang di',
	title: 'Tes Bahasa Inggris',
	desc: 'Tes ini bertujuan untuk mengukur kemampuan bahasa inggris Anda yang meliputi Listening, Structure & Written Expression, dan Reading Comprehension',
	notice: 'Pastikan Anda berada di tempat yang tenang dan tidak ada gangguan saat mengerjakan tes'
};

export type TestInfoId = 'bagian' | 'soal' | 'durasi' | 'passing' | 'percobaan';

export interface TestInfoItem {
	id: TestInfoId;
	label: string;
	value: string;
}

export const testInfo: TestInfoItem[] = [
	{ id: 'bagian', label: 'Total Bagian', value: '3 Bagian' },
	{ id: 'soal', label: 'Total Soal', value: '120 Soal' },
	{ id: 'durasi', label: 'Durasi Tes', value: '120 Menit' },
	{ id: 'passing', label: 'Passing Grade', value: '60%' },
	{ id: 'percobaan', label: 'Percobaan', value: '1 Kali' }
];

export type TestSectionId = 'listening' | 'structure' | 'reading';

export interface TestSection {
	id: TestSectionId;
	no: number;
	title: string;
	desc: string;
	/** Hanya bagian Listening yang punya baris ini di desain. */
	extra?: string;
	soal: string;
	durasi: string;
}

export const testSections: TestSection[] = [
	{
		id: 'listening',
		no: 1,
		title: 'Listening Comprehension',
		desc: 'Mengukur kemampuan memahami percakapan',
		extra: 'Maks. 5 MB',
		soal: '40 Soal',
		durasi: '40 Menit'
	},
	{
		id: 'structure',
		no: 2,
		title: 'Structure & Written Expression',
		desc: 'Mengukur kemampuan memahami struktur kalimat dan tata bahasa inggris',
		soal: '40 Soal',
		durasi: '40 Menit'
	},
	{
		id: 'reading',
		no: 3,
		title: 'Reading Comprehension',
		desc: 'Mengukur kemampuan melalui teks bacaan dalam bahasa inggris',
		soal: '40 Soal',
		durasi: '40 Menit'
	}
];

export const kameraGuideIntro =
	'Pastikan kamera menyala selama tes berlangsung. Posisi Anda saat mengerjakan tes harus sesuai dengan panduan berikut:';

export const kameraGuideBullets: string[] = [
	'Wajah terlihat jelas dan menghadap kamera',
	'Posisi duduk tegak berada di tengah frame',
	'Pastikan pencahayaan cukup dan tidak backlight'
];

export const petunjukSingkat: string[] = [
	'Pastikan koneksi internet stabil dan perangkat berfungsi dengan baik',
	'Kerjakan tes secara mandiri tanpa bantuan pihak lain',
	'Dilarang membuka buku, catatan, atau sumber lain',
	'Waktu akan berjalan setelah Anda menekan tombol "Mulai Tes"',
	'Jawaban akan tersimpan otomatis setiap kali berpindah soal'
];

export interface BantuanInfo {
	phone: string;
	email: string;
	jam: string;
}

export const bantuanInfo: BantuanInfo = {
	phone: '021-6253-9473',
	email: 'support@tnial.com',
	jam: '08.00 - 17.00 WIB (Senin - Jumat)'
};

export const mulaiTesNote =
	'Pastikan Anda sudah siap sebelum memulai tes. Setelah dimulai, waktu tidak dapat dijeda';
