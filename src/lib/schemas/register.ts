import { z } from 'zod';
import { KABUPATEN } from '$lib/wilayah-data';

export const GENDERS = [
	{ value: 'laki-laki', label: 'Laki-laki' },
	{ value: 'perempuan', label: 'Perempuan' }
] as const;

export const PENDIDIKAN = ['SMA/MA', 'SMK', 'D3', 'D4/S1', 'S2'] as const;

const MAX_FILE_BYTES = 2 * 1024 * 1024;
const IMAGE_MIME = ['image/jpeg', 'image/png'];
const DOC_MIME = [...IMAGE_MIME, 'application/pdf'];

// Windows kadang mengosongkan f.type untuk PDF, jadi ekstensi dipakai sebagai fallback.
function fileField(mimes: string[], formatMessage: string) {
	return z
		.instanceof(File)
		.refine(
			(f) => mimes.includes(f.type) || (f.type === '' && /\.(pdf|jpe?g|png)$/i.test(f.name)),
			formatMessage
		)
		.refine((f) => f.size <= MAX_FILE_BYTES, 'Ukuran berkas maksimal 2 MB')
		.optional();
}

function isAtLeast17(birthDate: Date) {
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
	if (!hasHadBirthdayThisYear) age -= 1;
	return age >= 17;
}

export const registerSchema = z
	.object({
		// Step 1: Data Diri
		namaLengkap: z
			.string()
			.trim()
			.min(3, 'Nama lengkap minimal 3 karakter')
			.regex(/^[A-Za-z\s.']+$/, 'Nama hanya boleh huruf dan spasi'),
		nik: z.string().regex(/^\d{16}$/, 'NIK harus 16 digit angka'),
		// String, bukan z.coerce.date(): <input type="date"> mengirim 'YYYY-MM-DD'
		// dan tipe Date tidak bisa direpresentasikan di JSON Schema.
		tanggalLahir: z
			.string()
			.min(1, 'Tanggal lahir wajib diisi')
			.refine((v) => !Number.isNaN(new Date(v).getTime()), 'Tanggal lahir tidak valid')
			.refine((v) => isAtLeast17(new Date(v)), 'Usia minimal 17 tahun untuk mendaftar'),
		// String kosong jadi anggota pertama supaya default-nya '' dan Select
		// tetap menampilkan placeholder, bukan langsung memilih opsi pertama.
		jenisKelamin: z
			.enum(['', 'laki-laki', 'perempuan'])
			.refine((v) => v !== '', 'Pilih jenis kelamin'),
		pendidikanTerakhir: z
			.enum(['', ...PENDIDIKAN])
			.refine((v) => v !== '', 'Pilih pendidikan terakhir'),
		jurusan: z.string().trim().min(1, 'Jurusan wajib diisi'),
		provinsi: z.string().min(1, 'Pilih provinsi'),
		kabupatenKota: z.string().min(1, 'Pilih kabupaten/kota'),
		alamat: z.string().trim().min(5, 'Alamat minimal 5 karakter'),
		noHp: z
			.string()
			.trim()
			.regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, 'Nomor telepon tidak valid'),

		// Step 2: Foto Profil & Dokumen
		foto: fileField(IMAGE_MIME, 'Foto harus berformat JPG atau PNG'),
		ktp: fileField(DOC_MIME, 'Berkas harus berformat JPG, PNG, atau PDF'),
		ijazah: fileField(DOC_MIME, 'Berkas harus berformat JPG, PNG, atau PDF'),
		transkrip: fileField(DOC_MIME, 'Berkas harus berformat JPG, PNG, atau PDF'),
		suratSehat: fileField(DOC_MIME, 'Berkas harus berformat JPG, PNG, atau PDF'),

		// Step 3: Buat Akun
		email: z.string().trim().min(1, 'Email wajib diisi').email('Format email tidak valid'),
		namaPengguna: z
			.string()
			.trim()
			.min(4, 'Nama pengguna minimal 4 karakter')
			.regex(/^[a-z0-9._]+$/i, 'Nama pengguna hanya boleh huruf, angka, titik, dan garis bawah'),
		password: z
			.string()
			.min(8, 'Kata sandi minimal 8 karakter')
			.regex(/[0-9]/, 'Kata sandi harus mengandung angka')
			.regex(/[a-z]/, 'Kata sandi harus mengandung huruf kecil')
			.regex(/[A-Z]/, 'Kata sandi harus mengandung huruf besar')
			.regex(/[^A-Za-z0-9]/, 'Kata sandi harus mengandung simbol'),
		confirmPassword: z.string(),

		// Step 4: Verifikasi
		kodeVerifikasi: z.string().regex(/^\d{6}$/, 'Kode verifikasi harus 6 digit')
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Konfirmasi kata sandi tidak cocok',
		path: ['confirmPassword']
	})
	// Hanya dicek untuk provinsi yang daftar kab/kotanya sudah terisi.
	.refine(
		(data) =>
			!KABUPATEN[data.provinsi]?.length || KABUPATEN[data.provinsi].includes(data.kabupatenKota),
		{ message: 'Kabupaten/kota tidak sesuai provinsi', path: ['kabupatenKota'] }
	);

export type RegisterInput = z.infer<typeof registerSchema>;
