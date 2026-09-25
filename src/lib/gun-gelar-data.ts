import type {
	DetailDokumen,
	DetailDokumenStatus,
	DetailField,
	DetailStep,
	RiwayatStatus
} from './pengajuan-shared';

export type {
	DetailDokumen,
	DetailDokumenStatus,
	DetailField,
	DetailStep
} from './pengajuan-shared';

export const gunGelarBanner = {
	title: 'Pengajuan Layanan Gun Gelar',
	description:
		'Ajukan penetapan atau penggunaan gelar akademik sesuai dengan ketentuan yang berlaku di lingkungan Dinas Pendidikan TNI Angkatan Laut.'
};

export interface FormStep {
	title: string;
	sub: string;
}

export const formSteps: FormStep[] = [
	{ title: 'Data Pengajuan', sub: 'Lengkapi data pengajuan' },
	{ title: 'Dokumen Pendukung', sub: 'Unggah berkas yang diperlukan' },
	{ title: 'Review & Kirim', sub: 'Periksa kembali data dan kirim' }
];

export type DokumenWajibField = 'ijazah' | 'transkrip' | 'suratKeteranganLulus';

export interface DokumenWajib {
	field: DokumenWajibField;
	title: string;
	hint: string;
}

export const dokumenWajib: DokumenWajib[] = [
	{ field: 'ijazah', title: 'Scan Ijazah', hint: 'Ijazah asli atau legalisir' },
	{ field: 'transkrip', title: 'Transkip Nilai', hint: 'Transkrip nilai asli atau legalisir' },
	{
		field: 'suratKeteranganLulus',
		title: 'Surat Keterangan Lulus',
		hint: 'SKL asli atau legalisir'
	}
];

export const PERNYATAAN_INTRO =
	'Silakan baca pernyataan di bawah ini dengan teliti. Jika Anda menyetujui isi pernyataan, silakan checklist kotak sebagai tanda persetujuan.';

export const PERNYATAAN_TEKS =
	'Dengan ini saya menyatakan bahwa seluruh data yang saya isi dan dokumen yang saya unggah adalah benar dan sesuai dengan ketentuan yang berlaku. Jika di kemudian hari ditemukan ketidaksesuaian, saya bersedia menerima sanksi sesuai dengan peraturan yang berlaku.';

export interface RiwayatRow {
	id: string;
	no: number;
	jenisPengajuan: string;
	jenjang: string;
	programStudi: string;
	namaGelar: string;
	perguruanTinggi: string;
	tanggal: string;
	jam: string;
	status: RiwayatStatus;
}

export const riwayatRows: RiwayatRow[] = [
	{
		id: 'GG-2026-00011',
		no: 1,
		jenisPengajuan: 'Penetapan Gelar',
		jenjang: 'S1 - Sarjana',
		programStudi: 'Teknik Pertahanan',
		namaGelar: 'S.T.Han',
		perguruanTinggi: 'Universitas Pertahan Republik Indonesia',
		tanggal: '10 Januari 2024',
		jam: '09.15 WIB',
		status: 'Disetujui'
	},
	{
		id: 'GG-2026-00012',
		no: 2,
		jenisPengajuan: 'Penetapan Gelar',
		jenjang: 'S2 - Magister',
		programStudi: 'Manajemen Pertahanan',
		namaGelar: 'M.Han',
		perguruanTinggi: 'Universitas Pertahan Republik Indonesia',
		tanggal: '15 Agustus 2026',
		jam: '14.30 WIB',
		status: 'Dalam Proses'
	}
];

export interface DetailPengajuan {
	id: string;
	nomor: string;
	tanggal: string;
	status: RiwayatStatus;
	currentStep: number;
	steps: DetailStep[];
	dataKiri: DetailField[];
	dataKanan: DetailField[];
	dokumen: DetailDokumen[];
	withDownload: boolean;
}

const stepsBase: DetailStep[] = [
	{
		title: 'Pengajuan Diajukan',
		date: '15 Agustus 2026, 14.30 WIB',
		desc: 'Pengajuan berhasil dikirim dan diterima oleh sistem'
	},
	{
		title: 'Verifikasi Dokumen',
		date: '17 Agustus 2026, 09.15 WIB',
		desc: 'Dokumen telah diperiksa kelengkapan dan kesesuaiannya oleh tim Dinas Pendidikan TNI AL'
	},
	{
		title: 'Menunggu Hasil',
		date: '19 Agustus 2026, 13.45 WIB',
		desc: 'Proses verifikasi telah selesai dan pengajuan sedang menunggu hasil penetapan dari Dinas Pendidikan TNI AL'
	},
	{
		title: 'Hasil dan Penetapan',
		date: '21 Agustus 2026, 10.00 WIB',
		desc: 'Pengajuan telah disetujui dan penetapan gelar akademik telah diterbitkan'
	}
];

function dokumenList(status: DetailDokumenStatus): DetailDokumen[] {
	return [
		{
			no: 1,
			nama: 'Ijazah S2',
			keterangan: 'Ijazah asli atau legalisir',
			fileName: 'Ijazah_S2_.pdf',
			fileSize: '2.4 MB',
			tanggal: '15 Agustus 2026',
			jam: '14.32 WIB',
			status
		},
		{
			no: 2,
			nama: 'Transkrip Nilai',
			keterangan: 'Transkrip nilai asli atau legalisir',
			fileName: 'Transkrip_Nilai_S2.pdf',
			fileSize: '2.4 MB',
			tanggal: '15 Agustus 2026',
			jam: '14.32 WIB',
			status
		},
		{
			no: 3,
			nama: 'Surat Keterangan Lulus',
			keterangan: 'Data dari perguruan tinggi',
			fileName: 'SKL_S2.pdf',
			fileSize: '2.4 MB',
			tanggal: '15 Agustus 2026',
			jam: '14.32 WIB',
			status
		},
		{
			no: 4,
			nama: 'Surat Lulusan Terbaik',
			keterangan: 'Dokumen Tambahan',
			fileName: 'Surat_Lulusan_Terbaik_S2.pdf',
			fileSize: '2.4 MB',
			tanggal: '15 Agustus 2026',
			jam: '14.32 WIB',
			status
		}
	];
}

export const detailPengajuan: Record<string, DetailPengajuan> = {
	'GG-2026-00012': {
		id: 'GG-2026-00012',
		nomor: 'GG-2026-00012',
		tanggal: '15 Agustus 2026',
		status: 'Dalam Proses',
		currentStep: 2,
		steps: stepsBase,
		dataKiri: [
			{ label: 'Nomor Pengajuan', value: 'GG-2026-0012' },
			{ label: 'Jenis Pengajuan', value: 'Penetapan Gelar' },
			{ label: 'Jenjang Pendidikan', value: 'S2' },
			{ label: 'Nama Gelar', value: 'M.Han' },
			{ label: 'Program Studi', value: 'Magister Pertahanan' },
			{ label: 'Perguruan Tinggi', value: 'Universitas Pertahanan' }
		],
		dataKanan: [
			{ label: 'Nomor Ijazah', value: '1234567890' },
			{ label: 'Tahun Masuk', value: '2024' },
			{ label: 'Tanggal Lulus', value: '15 Februari 2026' },
			{ label: 'Tujuan Pengajuan', value: 'Penyesuaian data pegawai' },
			{ label: 'Status Pengajuan', value: 'Dalam Proses' },
			{ label: 'Keterangan', value: '-' }
		],
		dokumen: dokumenList('Terverifikasi'),
		withDownload: false
	},
	'GG-2026-00011': {
		id: 'GG-2026-00011',
		nomor: 'GG-2026-00011',
		tanggal: '10 Januari 2024',
		status: 'Disetujui',
		currentStep: 4,
		steps: stepsBase,
		dataKiri: [
			{ label: 'Nomor Pengajuan', value: 'GG-2026-0011' },
			{ label: 'Jenis Pengajuan', value: 'Penetapan Gelar' },
			{ label: 'Jenjang Pendidikan', value: 'S1' },
			{ label: 'Nama Gelar', value: 'S.T.Han' },
			{ label: 'Program Studi', value: 'Teknik Pertahanan' },
			{ label: 'Perguruan Tinggi', value: 'Universitas Pertahanan' }
		],
		dataKanan: [
			{ label: 'Nomor Ijazah', value: '1234567890' },
			{ label: 'Tahun Masuk', value: '2020' },
			{ label: 'Tanggal Lulus', value: '15 Februari 2024' },
			{ label: 'Tujuan Pengajuan', value: 'Penyesuaian data pegawai' },
			{ label: 'Status Pengajuan', value: 'Disetujui' },
			{
				label: 'Keterangan',
				value:
					'Data pengajuan Anda telah disetujui dan diperbaharui pada sistem Dinas Pendidikan TNI AL. Hasil penetapan gelar akademik dapat dilihat dan diunduh melalui menu'
			}
		],
		dokumen: dokumenList('Terverifikasi'),
		withDownload: true
	}
};
