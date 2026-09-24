import type { RiwayatStatus } from './pengajuan-shared';

export const dataDikBanner = {
	title: 'Pengajuan Layanan Update Data Dik',
	description:
		'Layanan untuk memperbarui atau melengkapi data pendidikan personel, seperti jenjang pendidikan, program studi, perguruan tinggi, tahun lulus, gelar, serta dokumen pendidikan pendukung.'
};

export interface PersonelRecord {
	id: string;
	nama: string;
	ttl: string;
	nrp: string;
	jenisKelamin: string;
	pangkat: string;
	satker: string;
	jabatan: string;
	email: string;
}

export const personelRecords: PersonelRecord[] = [
	{
		id: 'P-19899415290121003',
		nama: 'Pangidoan Nugroho',
		ttl: 'Jakarta, 15 April 1989',
		nrp: '19899415290121003',
		jenisKelamin: 'Laki-Laki',
		pangkat: 'Mayor Laut / III',
		satker: 'Dinas Pendidikan TNI Angkatan Laut',
		jabatan: 'Perwira Staf',
		email: 'pangidoan.nugroho@tnial.mil.id'
	},
	{
		id: 'P-19920311290121008',
		nama: 'Rangga Adi Prasetyo',
		ttl: 'Surabaya, 11 Maret 1992',
		nrp: '19920311290121008',
		jenisKelamin: 'Laki-Laki',
		pangkat: 'Kapten Laut / II',
		satker: 'Koarmada II',
		jabatan: 'Perwira Operasi',
		email: 'rangga.adi@tnial.mil.id'
	},
	{
		id: 'P-19940726290121015',
		nama: 'Dewi Anggraini Putri',
		ttl: 'Bandung, 26 Juli 1994',
		nrp: '19940726290121015',
		jenisKelamin: 'Perempuan',
		pangkat: 'Letnan Satu Laut / I',
		satker: 'Dinas Pendidikan TNI Angkatan Laut',
		jabatan: 'Perwira Administrasi',
		email: 'dewi.anggraini@tnial.mil.id'
	},
	{
		id: 'P-19871105290121002',
		nama: 'Bagus Setiawan',
		ttl: 'Semarang, 05 November 1987',
		nrp: '19871105290121002',
		jenisKelamin: 'Laki-Laki',
		pangkat: 'Letnan Kolonel Laut / III',
		satker: 'Koarmada I',
		jabatan: 'Kepala Seksi Pendidikan',
		email: 'bagus.setiawan@tnial.mil.id'
	}
];

export const PERGURUAN_TINGGI = [
	'Universitas Indonesia',
	'Politeknik Negeri Jakarta',
	'Politeknik STMI Jakarta',
	'Universitas Pertahanan Republik Indonesia',
	'Institut Teknologi Sepuluh Nopember',
	'Universitas Airlangga'
] as const;

export type DokumenDikField =
	'ijazah' | 'transkrip' | 'suratKeteranganLulus' | 'sertifikatPendukung';

export interface DokumenDik {
	field: DokumenDikField;
	title: string;
	hint: string;
}

export const dokumenWajibDik: DokumenDik[] = [
	{ field: 'ijazah', title: 'Scan Ijazah', hint: 'Ijazah asli atau legalisir' },
	{ field: 'transkrip', title: 'Transkip Nilai', hint: 'Transkrip nilai asli atau legalisir' },
	{
		field: 'suratKeteranganLulus',
		title: 'Surat Keterangan Lulus',
		hint: 'SKL, asli atau legalisir'
	},
	{
		field: 'sertifikatPendukung',
		title: 'Sertifikat Pendukung (Optional)',
		hint: 'Sertifikat pendukung terkait pendidikan (jika ada)'
	}
];

export interface RiwayatDikRow {
	id: string;
	no: number;
	jenisPengajuan: string;
	jenjang: string;
	namaGelar: string;
	perguruanTinggi: string;
	tahunLulus: string;
	tanggal: string;
	jam: string;
	status: RiwayatStatus;
}

export const riwayatDikRows: RiwayatDikRow[] = [
	{
		id: 'UDD-2024-00001',
		no: 1,
		jenisPengajuan: 'Penetapan Gelar',
		jenjang: 'D3',
		namaGelar: 'A.Md. (Ahli Madya)',
		perguruanTinggi: 'Politeknik Negeri Jakarta',
		tahunLulus: '2020',
		tanggal: '10 Januari 2024',
		jam: '09:15 WIB',
		status: 'Disetujui'
	},
	{
		id: 'UDD-2024-00002',
		no: 2,
		jenisPengajuan: 'Penetapan Gelar',
		jenjang: 'S1 - Sarjana',
		namaGelar: 'S.Tr.Kom. (Sarjana Terapan)',
		perguruanTinggi: 'Politeknik STMI Jakarta',
		tahunLulus: '2022',
		tanggal: '15 Maret 2024',
		jam: '14:20 WIB',
		status: 'Disetujui'
	},
	{
		id: 'UDD-2026-00003',
		no: 3,
		jenisPengajuan: 'Penetapan Gelar',
		jenjang: 'S2 - Magister',
		namaGelar: 'M.T (Magister Teknik)',
		perguruanTinggi: 'Universitas Indonesia',
		tahunLulus: '2024',
		tanggal: '02 April 2026',
		jam: '10:30 WIB',
		status: 'Dalam Proses'
	}
];
