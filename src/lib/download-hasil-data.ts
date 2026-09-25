import type { DetailDokumen, DetailField, RiwayatStatus } from './pengajuan-shared';
import type { LayananId } from './pengajuan-data';

export const downloadHasilHeader = {
	title: 'Download Hasil',
	description: 'Unduh hasil penetapan dan seluruh dokumen terkait pengajuan yang telah disetujui.'
};

export type DownloadStatus = 'Tersedia';

export interface DownloadRow {
	id: string;
	no: number;
	layanan: LayananId;
	nomor: string;
	nama: string;
	tanggalPengajuan: string;
	tanggalTerbit: string;
	terbitIso: string;
	jumlahDokumen: number;
	status: DownloadStatus;
}

export const TOTAL_UNDUHAN = 156;

export const downloadRows: DownloadRow[] = [
	{
		id: 'GG-2026-0012',
		no: 1,
		layanan: 'gun',
		nomor: 'GG-2026-0012',
		nama: 'Penetapan Gelar',
		tanggalPengajuan: '15 Agustus 2026',
		tanggalTerbit: '21 Agustus 2026',
		terbitIso: '2026-08-21',
		jumlahDokumen: 4,
		status: 'Tersedia'
	},
	{
		id: 'UUD-2026-0008',
		no: 2,
		layanan: 'updatedik',
		nomor: 'UUD-2026-0008',
		nama: 'Pembaruan Data Pendidikan',
		tanggalPengajuan: '10 Agustus 2026',
		tanggalTerbit: '18 Agustus 2026',
		terbitIso: '2026-08-18',
		jumlahDokumen: 3,
		status: 'Tersedia'
	},
	{
		id: 'PD-2026-0005',
		no: 3,
		layanan: 'patubel',
		nomor: 'PD-2026-0005',
		nama: 'Persetujuan Patubel Pendidikan',
		tanggalPengajuan: '05 Agustus 2026',
		tanggalTerbit: '12 Agustus 2026',
		terbitIso: '2026-08-12',
		jumlahDokumen: 4,
		status: 'Tersedia'
	},
	{
		id: 'DA-2026-0003',
		no: 4,
		layanan: 'barjas',
		nomor: 'DA-2026-0003',
		nama: 'Dukungan Administrasi',
		tanggalPengajuan: '28 Juli 2026',
		tanggalTerbit: '05 Agustus 2026',
		terbitIso: '2026-08-05',
		jumlahDokumen: 3,
		status: 'Tersedia'
	},
	{
		id: 'USP-2026-0007',
		no: 5,
		layanan: 'setprof',
		nomor: 'USP-2026-0007',
		nama: 'Pembaruan Data Setprof',
		tanggalPengajuan: '25 Juli 2026',
		tanggalTerbit: '02 Agustus 2026',
		terbitIso: '2026-08-02',
		jumlahDokumen: 4,
		status: 'Tersedia'
	},
	{
		id: 'PI-2026-0004',
		no: 6,
		layanan: 'iptek',
		nomor: 'PI-2026-0004',
		nama: 'Persetujuan Patubel Iptek',
		tanggalPengajuan: '20 Juli 2026',
		tanggalTerbit: '28 Juli 2026',
		terbitIso: '2026-07-28',
		jumlahDokumen: 5,
		status: 'Tersedia'
	},
	{
		id: 'DK-2026-0001',
		no: 7,
		layanan: 'diklu',
		nomor: 'DK-2026-0001',
		nama: 'Hasil Pendidikan Diklu',
		tanggalPengajuan: '15 Juli 2026',
		tanggalTerbit: '21 Juli 2026',
		terbitIso: '2026-07-21',
		jumlahDokumen: 5,
		status: 'Tersedia'
	},
	{
		id: 'GG-2026-0011',
		no: 8,
		layanan: 'gun',
		nomor: 'GG-2026-0011',
		nama: 'Penggunaan Gelar',
		tanggalPengajuan: '10 Juli 2026',
		tanggalTerbit: '17 Juli 2026',
		terbitIso: '2026-07-17',
		jumlahDokumen: 4,
		status: 'Tersedia'
	},
	{
		id: 'UUD-2026-0006',
		no: 9,
		layanan: 'updatedik',
		nomor: 'UUD-2026-0006',
		nama: 'Pembaruan Data Pendidikan',
		tanggalPengajuan: '02 Juli 2026',
		tanggalTerbit: '09 Juli 2026',
		terbitIso: '2026-07-09',
		jumlahDokumen: 3,
		status: 'Tersedia'
	},
	{
		id: 'DA-2026-0002',
		no: 10,
		layanan: 'barjas',
		nomor: 'DA-2026-0002',
		nama: 'Dukungan Administrasi',
		tanggalPengajuan: '24 Juni 2026',
		tanggalTerbit: '01 Juli 2026',
		terbitIso: '2026-07-01',
		jumlahDokumen: 3,
		status: 'Tersedia'
	},
	{
		id: 'PD-2026-0003',
		no: 11,
		layanan: 'patubel',
		nomor: 'PD-2026-0003',
		nama: 'Persetujuan Patubel Pendidikan',
		tanggalPengajuan: '18 Juni 2026',
		tanggalTerbit: '25 Juni 2026',
		terbitIso: '2026-06-25',
		jumlahDokumen: 4,
		status: 'Tersedia'
	},
	{
		id: 'DK-2026-0002',
		no: 12,
		layanan: 'diklu',
		nomor: 'DK-2026-0002',
		nama: 'Hasil Pendidikan Diklu',
		tanggalPengajuan: '11 Juni 2026',
		tanggalTerbit: '19 Juni 2026',
		terbitIso: '2026-06-19',
		jumlahDokumen: 5,
		status: 'Tersedia'
	}
];

export interface DownloadDetail {
	id: string;
	nomor: string;
	tanggal: string;
	status: RiwayatStatus;
	judul: string;
	deskripsi: string;
	dataKiri: DetailField[];
	dataKanan: DetailField[];
	withDownload: boolean;
	dokumenHasil: DetailDokumen[];
	dokumenPengajuan: DetailDokumen[];
}

const KETERANGAN_DISETUJUI =
	'Data pengajuan Anda telah disetujui dan diperbaharui pada sistem Dinas Pendidikan TNI AL. Hasil penetapan pengajuan dapat dilihat dan diunduh melalui menu';

interface DokumenSeed {
	nama: string;
	keterangan: string;
	fileName: string;
}

function dokumenList(seeds: DokumenSeed[], tanggal: string, jam: string): DetailDokumen[] {
	return seeds.map((seed, index) => ({
		no: index + 1,
		nama: seed.nama,
		keterangan: seed.keterangan,
		fileName: seed.fileName,
		fileSize: '2.4 MB',
		tanggal,
		jam,
		status: 'Terverifikasi'
	}));
}

const detailSeeds: Record<
	LayananId,
	{
		judul: string;
		deskripsi: string;
		hasil: DokumenSeed[];
		pengajuan: DokumenSeed[];
		data: (row: DownloadRow) => { kiri: DetailField[]; kanan: DetailField[] };
	}
> = {
	gun: {
		judul: 'Detail Pengajuan Gun Gelar',
		deskripsi:
			'Berikut ini adalah informasi detail pengajuan penetapan/penggunaan gelar akademik yang Anda ajukan.',
		hasil: [
			{
				nama: 'Surat Penetapan Gelar',
				keterangan: 'Ijazah asli atau legalisir',
				fileName: 'Ijazah_S2_.pdf'
			},
			{
				nama: 'SK Penyesuaian Data Pegawai',
				keterangan: 'Transkrip nilai asli atau legalisir',
				fileName: 'Transkrip_Nilai_S2.pdf'
			}
		],
		pengajuan: [
			{ nama: 'Ijazah S2', keterangan: 'Ijazah asli atau legalisir', fileName: 'Ijazah_S2_.pdf' },
			{
				nama: 'Transkrip Nilai',
				keterangan: 'Transkrip nilai asli atau legalisir',
				fileName: 'Transkrip_Nilai_S2.pdf'
			},
			{
				nama: 'Surat Keterangan Lulus',
				keterangan: 'Data dari perguruan tinggi',
				fileName: 'SKL_S2.pdf'
			},
			{
				nama: 'Surat Lulusan Terbaik',
				keterangan: 'Dokumen Tambahan',
				fileName: 'Surat_Lulusan_Terbaik_S2.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Jenjang Pendidikan', value: 'S2' },
				{ label: 'Nama Gelar', value: 'M.Han' },
				{ label: 'Program Studi', value: 'Magister Pertahanan' },
				{ label: 'Perguruan Tinggi', value: 'Universitas Pertahanan' }
			],
			kanan: [
				{ label: 'Nomor Ijazah', value: '1234567890' },
				{ label: 'Tahun Masuk', value: '2024' },
				{ label: 'Tanggal Lulus', value: '15 Februari 2026' },
				{ label: 'Tujuan Pengajuan', value: 'Penyesuaian data pegawai' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	updatedik: {
		judul: 'Detail Pengajuan Update Data Dik',
		deskripsi:
			'Berikut ini adalah informasi detail pembaruan data pendidikan personel yang Anda ajukan.',
		hasil: [
			{
				nama: 'SK Pembaruan Data Pendidikan',
				keterangan: 'Surat keputusan pembaruan data',
				fileName: 'SK_Update_Data_Dik.pdf'
			},
			{
				nama: 'Kartu Data Pendidikan',
				keterangan: 'Kartu data pendidikan terbaru',
				fileName: 'Kartu_Data_Pendidikan.pdf'
			}
		],
		pengajuan: [
			{ nama: 'Scan Ijazah', keterangan: 'Ijazah asli atau legalisir', fileName: 'Ijazah_S1_.pdf' },
			{
				nama: 'Transkip Nilai',
				keterangan: 'Transkrip nilai asli atau legalisir',
				fileName: 'Transkrip_Nilai_S1.pdf'
			},
			{
				nama: 'Surat Keterangan Lulus',
				keterangan: 'SKL, asli atau legalisir',
				fileName: 'SKL_S1.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Jenis Pendidikan', value: 'S1 - Sarjana' },
				{ label: 'Fakultas', value: 'Teknik' },
				{ label: 'Program Studi', value: 'Teknik Informatika' },
				{ label: 'Perguruan Tinggi', value: 'Politeknik STMI Jakarta' }
			],
			kanan: [
				{ label: 'Gelar', value: 'S.Tr.Kom.' },
				{ label: 'Tahun Lulus', value: '2022' },
				{ label: 'Satuan Kerja', value: 'Dinas Pendidikan TNI Angkatan Laut' },
				{ label: 'Tujuan Pengajuan', value: 'Pembaruan data pendidikan personel' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	patubel: {
		judul: 'Detail Pengajuan Patubel Dikpitek',
		deskripsi:
			'Berikut ini adalah informasi detail pengajuan tugas belajar bidang pendidikan, ilmu pengetahuan, dan teknologi yang Anda ajukan.',
		hasil: [
			{
				nama: 'Surat Perintah Tugas Belajar',
				keterangan: 'Surat perintah resmi tugas belajar',
				fileName: 'Sprin_Tugas_Belajar.pdf'
			},
			{
				nama: 'SK Persetujuan Patubel',
				keterangan: 'Surat keputusan persetujuan',
				fileName: 'SK_Patubel_Dikpitek.pdf'
			}
		],
		pengajuan: [
			{
				nama: 'Surat Rekomendasi Atasan',
				keterangan: 'Rekomendasi dari satuan kerja',
				fileName: 'Rekomendasi_Atasan.pdf'
			},
			{
				nama: 'Surat Keterangan Aktif Dinas',
				keterangan: 'Keterangan aktif dinas',
				fileName: 'SK_Aktif_Dinas.pdf'
			},
			{
				nama: 'Sertifikat Bahasa Inggris',
				keterangan: 'Hasil tes kemampuan bahasa',
				fileName: 'Sertifikat_ALCPT.pdf'
			},
			{
				nama: 'Surat Penerimaan Kampus',
				keterangan: 'Letter of acceptance',
				fileName: 'LoA_Kampus.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Jenjang Tujuan', value: 'S2 - Magister' },
				{ label: 'Program Studi', value: 'Teknologi Pertahanan' },
				{ label: 'Perguruan Tinggi', value: 'Institut Teknologi Sepuluh Nopember' },
				{ label: 'Lokasi Pendidikan', value: 'Dalam Negeri' }
			],
			kanan: [
				{ label: 'Lama Pendidikan', value: '24 Bulan' },
				{ label: 'Tahun Akademik', value: '2026 / 2027' },
				{ label: 'Sumber Biaya', value: 'Dinas' },
				{ label: 'Tujuan Pengajuan', value: 'Pengembangan kompetensi personel' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	barjas: {
		judul: 'Detail Pengajuan Duk Admin Sus Barjas',
		deskripsi:
			'Berikut ini adalah informasi detail dukungan administrasi peserta kursus barjas yang Anda ajukan.',
		hasil: [
			{
				nama: 'Surat Dukungan Administrasi',
				keterangan: 'Dukungan administrasi peserta kursus',
				fileName: 'Surat_Duk_Admin.pdf'
			},
			{
				nama: 'Sertifikat Kursus Barjas',
				keterangan: 'Sertifikat kelulusan kursus',
				fileName: 'Sertifikat_Barjas.pdf'
			}
		],
		pengajuan: [
			{
				nama: 'Surat Perintah Kursus',
				keterangan: 'Surat perintah mengikuti kursus',
				fileName: 'Sprin_Kursus_Barjas.pdf'
			},
			{
				nama: 'Surat Keterangan Aktif Dinas',
				keterangan: 'Keterangan aktif dinas',
				fileName: 'SK_Aktif_Dinas.pdf'
			},
			{
				nama: 'Kartu Identitas TNI AL',
				keterangan: 'Kartu identitas / NRP',
				fileName: 'Kartu_TNI_Pangidoan.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Nama Kursus', value: 'Kursus Pengadaan Barang dan Jasa' },
				{ label: 'Angkatan', value: 'Angkatan XII' },
				{ label: 'Penyelenggara', value: 'Dinas Pendidikan TNI Angkatan Laut' },
				{ label: 'Lokasi Kursus', value: 'Jakarta' }
			],
			kanan: [
				{ label: 'Lama Kursus', value: '3 Bulan' },
				{ label: 'Tanggal Mulai', value: '01 Agustus 2026' },
				{ label: 'Tanggal Selesai', value: '31 Oktober 2026' },
				{ label: 'Tujuan Pengajuan', value: 'Dukungan administrasi peserta kursus' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	setprof: {
		judul: 'Detail Pengajuan Update Data Setprof',
		deskripsi:
			'Berikut ini adalah informasi detail pembaruan data sertifikasi profesi yang Anda ajukan.',
		hasil: [
			{
				nama: 'SK Pembaruan Data Setprof',
				keterangan: 'Surat keputusan pembaruan data',
				fileName: 'SK_Update_Setprof.pdf'
			},
			{
				nama: 'Kartu Sertifikasi Profesi',
				keterangan: 'Kartu sertifikasi terbaru',
				fileName: 'Kartu_Setprof.pdf'
			}
		],
		pengajuan: [
			{
				nama: 'Sertifikat Kompetensi',
				keterangan: 'Sertifikat kompetensi asli',
				fileName: 'Sertifikat_Kompetensi.pdf'
			},
			{
				nama: 'Sertifikat Profesi',
				keterangan: 'Sertifikat profesi asli',
				fileName: 'Sertifikat_Profesi.pdf'
			},
			{
				nama: 'Surat Keterangan Lembaga',
				keterangan: 'Keterangan lembaga sertifikasi',
				fileName: 'Surat_Lembaga_Sertifikasi.pdf'
			},
			{
				nama: 'Surat Rekomendasi Atasan',
				keterangan: 'Rekomendasi dari satuan kerja',
				fileName: 'Rekomendasi_Atasan.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Nama Sertifikasi', value: 'Ahli Pengadaan Barang dan Jasa' },
				{ label: 'Bidang Profesi', value: 'Manajemen Logistik' },
				{ label: 'Lembaga Penerbit', value: 'Badan Nasional Sertifikasi Profesi' },
				{ label: 'Nomor Sertifikat', value: 'BNSP-2026-77120' }
			],
			kanan: [
				{ label: 'Tanggal Terbit', value: row.tanggalTerbit },
				{ label: 'Masa Berlaku', value: '3 Tahun' },
				{ label: 'Jenjang Sertifikasi', value: 'Level 6' },
				{ label: 'Tujuan Pengajuan', value: 'Pembaruan data sertifikasi profesi' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	iptek: {
		judul: 'Detail Pengajuan Patubel Iptek',
		deskripsi:
			'Berikut ini adalah informasi detail pengajuan tugas belajar bidang ilmu pengetahuan dan teknologi yang Anda ajukan.',
		hasil: [
			{
				nama: 'Surat Perintah Tugas Belajar',
				keterangan: 'Surat perintah resmi tugas belajar',
				fileName: 'Sprin_Tugas_Belajar_Iptek.pdf'
			},
			{
				nama: 'SK Persetujuan Patubel Iptek',
				keterangan: 'Surat keputusan persetujuan',
				fileName: 'SK_Patubel_Iptek.pdf'
			}
		],
		pengajuan: [
			{
				nama: 'Surat Penerimaan Kampus',
				keterangan: 'Letter of acceptance',
				fileName: 'LoA_Kampus_Iptek.pdf'
			},
			{
				nama: 'Sertifikat Bahasa Inggris',
				keterangan: 'Hasil tes kemampuan bahasa',
				fileName: 'Sertifikat_ALCPT.pdf'
			},
			{
				nama: 'Surat Rekomendasi Atasan',
				keterangan: 'Rekomendasi dari satuan kerja',
				fileName: 'Rekomendasi_Atasan.pdf'
			},
			{
				nama: 'Surat Keterangan Aktif Dinas',
				keterangan: 'Keterangan aktif dinas',
				fileName: 'SK_Aktif_Dinas.pdf'
			},
			{
				nama: 'Proposal Penelitian',
				keterangan: 'Dokumen Tambahan',
				fileName: 'Proposal_Penelitian.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Jenjang Tujuan', value: 'S3 - Doktor' },
				{ label: 'Program Studi', value: 'Rekayasa Kelautan' },
				{ label: 'Perguruan Tinggi', value: 'Universitas Indonesia' },
				{ label: 'Lokasi Pendidikan', value: 'Dalam Negeri' }
			],
			kanan: [
				{ label: 'Lama Pendidikan', value: '36 Bulan' },
				{ label: 'Tahun Akademik', value: '2026 / 2027' },
				{ label: 'Sumber Biaya', value: 'Beasiswa Dinas' },
				{ label: 'Tujuan Pengajuan', value: 'Pengembangan kompetensi bidang IPTEK' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	},
	diklu: {
		judul: 'Detail Pengajuan Diklu',
		deskripsi:
			'Berikut ini adalah informasi detail administrasi pendidikan lanjutan yang Anda ajukan.',
		hasil: [
			{
				nama: 'Surat Keterangan Lulus Diklu',
				keterangan: 'Keterangan kelulusan pendidikan lanjutan',
				fileName: 'SKL_Diklu.pdf'
			},
			{
				nama: 'Sertifikat Pendidikan Lanjutan',
				keterangan: 'Sertifikat kelulusan Diklu',
				fileName: 'Sertifikat_Diklu.pdf'
			}
		],
		pengajuan: [
			{
				nama: 'Surat Perintah Pendidikan',
				keterangan: 'Surat perintah mengikuti pendidikan',
				fileName: 'Sprin_Diklu.pdf'
			},
			{
				nama: 'Surat Keterangan Aktif Dinas',
				keterangan: 'Keterangan aktif dinas',
				fileName: 'SK_Aktif_Dinas.pdf'
			},
			{
				nama: 'Surat Keterangan Sehat',
				keterangan: 'Hasil pemeriksaan kesehatan',
				fileName: 'Surat_Keterangan_Sehat.pdf'
			},
			{
				nama: 'Kartu Identitas TNI AL',
				keterangan: 'Kartu identitas / NRP',
				fileName: 'Kartu_TNI_Pangidoan.pdf'
			},
			{
				nama: 'Curriculum Vitae',
				keterangan: 'Dokumen Tambahan',
				fileName: 'CV_Pangidoan.pdf'
			}
		],
		data: (row) => ({
			kiri: [
				{ label: 'Nomor Pengajuan', value: row.nomor },
				{ label: 'Jenis Pengajuan', value: row.nama },
				{ label: 'Nama Pendidikan', value: 'Pendidikan Lanjutan Perwira' },
				{ label: 'Angkatan', value: 'Angkatan VIII' },
				{ label: 'Penyelenggara', value: 'Dinas Pendidikan TNI Angkatan Laut' },
				{ label: 'Lokasi Pendidikan', value: 'Surabaya' }
			],
			kanan: [
				{ label: 'Lama Pendidikan', value: '6 Bulan' },
				{ label: 'Tanggal Mulai', value: '15 Januari 2026' },
				{ label: 'Tanggal Selesai', value: '15 Juli 2026' },
				{ label: 'Tujuan Pengajuan', value: 'Administrasi pendidikan lanjutan' },
				{ label: 'Status Pengajuan', value: 'Disetujui' },
				{ label: 'Keterangan', value: KETERANGAN_DISETUJUI }
			]
		})
	}
};

function buildDetail(row: DownloadRow): DownloadDetail {
	const seed = detailSeeds[row.layanan];
	const { kiri, kanan } = seed.data(row);

	return {
		id: row.id,
		nomor: row.nomor,
		tanggal: row.tanggalPengajuan,
		status: 'Disetujui',
		judul: seed.judul,
		deskripsi: seed.deskripsi,
		dataKiri: kiri,
		dataKanan: kanan,
		withDownload: true,
		dokumenHasil: dokumenList(seed.hasil, row.tanggalTerbit, '10.00 WIB'),
		dokumenPengajuan: dokumenList(seed.pengajuan, row.tanggalPengajuan, '14.32 WIB')
	};
}

export const downloadDetail: Record<string, DownloadDetail> = Object.fromEntries(
	downloadRows.map((row) => [row.id, buildDetail(row)])
);
