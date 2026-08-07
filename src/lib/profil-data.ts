// Mock data untuk halaman Profil Saya. Sama seperti dashboard-data.ts: sengaja
// bebas dari import Svelte/SvelteKit supaya bisa dipakai layout maupun page.

export interface ProfilHero {
	name: string;
	badgeLabel: string;
	nrp: string;
	satker: string;
	programStudi: string;
	gelar: string;
	statusLabel: string;
	verifDate: string;
	completionPct: number;
}

export const profilHero: ProfilHero = {
	name: 'Pangidoan Nugroho Syahputra Harahap',
	badgeLabel: 'Peserta',
	nrp: '9175629002',
	satker: 'Koarmada II',
	programStudi: 'Gun Gelar (S2)',
	gelar: 'M.Han',
	statusLabel: 'Akun Terverifikasi',
	verifDate: 'Tanggal Verifikasi: 05 April 26 - 13.00 WIB',
	completionPct: 90
};

export interface PersonalInfo {
	namaLengkap: string;
	phone: string;
	tanggalLahir: string;
	email: string;
	jenisKelamin: string;
	domisili: string;
}

export const personalInfo: PersonalInfo = {
	namaLengkap: 'Pangidoan Nugroho Syahputra Harahap',
	phone: '+62 81638593726',
	tanggalLahir: '1 Januari 2004',
	email: 'Pangidoaja21@gmail.com',
	jenisKelamin: 'Perempuan',
	domisili: 'Jl Bahagia Selalu No.1'
};

export interface EducationInfo {
	pendidikanTerakhir: string;
	perguruanTinggi: string;
	programStudi: string;
	ipk: string;
}

export const educationInfo: EducationInfo = {
	pendidikanTerakhir: 'S1 - Magister',
	perguruanTinggi: 'Universitas Pertahanan',
	programStudi: 'Managemen Pertahanan',
	ipk: '3,85'
};

export type DocStatus = 'done' | 'pending';

export interface DocumentItem {
	id: string;
	name: string;
	status: DocStatus;
}

export const documentItems: DocumentItem[] = [
	{ id: 'ktp', name: 'KTP', status: 'done' },
	{ id: 'ijazah', name: 'Ijazah', status: 'done' },
	{ id: 'transkrip', name: 'Transkip Nilai', status: 'pending' },
	{ id: 'sk-pangkat', name: 'SK Pangkat', status: 'done' },
	{ id: 'surat-sehat', name: 'Surat Keterangan Sehat', status: 'done' }
];
