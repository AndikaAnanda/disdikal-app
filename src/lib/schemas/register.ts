import { z } from 'zod';

export const RELIGIONS = [
	'Islam',
	'Kristen Protestan',
	'Katolik',
	'Hindu',
	'Buddha',
	'Konghucu'
] as const;

export const GENDERS = [
	{ value: 'laki-laki', label: 'Laki-laki' },
	{ value: 'perempuan', label: 'Perempuan' }
] as const;

const MAX_FOTO_BYTES = 2 * 1024 * 1024;
const FOTO_MIME = ['image/jpeg', 'image/png'];

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
		nomorPeserta: z
			.string()
			.trim()
			.min(1, 'Nomor peserta wajib diisi')
			.regex(/^\d+$/, 'Nomor peserta hanya boleh angka'),
		nik: z.string().regex(/^\d{16}$/, 'NIK harus 16 digit angka'),
		namaLengkap: z
			.string()
			.trim()
			.min(3, 'Nama lengkap minimal 3 karakter')
			.regex(/^[A-Za-z\s.']+$/, 'Nama hanya boleh huruf dan spasi'),
		// String kosong jadi anggota pertama supaya default-nya '' dan Select
		// tetap menampilkan placeholder, bukan langsung memilih opsi pertama.
		jenisKelamin: z
			.enum(['', 'laki-laki', 'perempuan'])
			.refine((v) => v !== '', 'Pilih jenis kelamin'),
		// String, bukan z.coerce.date(): <input type="date"> mengirim 'YYYY-MM-DD'
		// dan tipe Date tidak bisa direpresentasikan di JSON Schema.
		tanggalLahir: z
			.string()
			.min(1, 'Tanggal lahir wajib diisi')
			.refine((v) => !Number.isNaN(new Date(v).getTime()), 'Tanggal lahir tidak valid')
			.refine((v) => isAtLeast17(new Date(v)), 'Usia minimal 17 tahun untuk mendaftar'),
		tempatLahir: z.string().trim().min(1, 'Tempat lahir wajib diisi'),
		agama: z.enum(['', ...RELIGIONS]).refine((v) => v !== '', 'Pilih agama'),
		email: z.string().trim().min(1, 'Email wajib diisi').email('Format email tidak valid'),
		noHp: z
			.string()
			.trim()
			.regex(/^(\+62|62|0)8[1-9][0-9]{6,10}$/, 'Nomor handphone tidak valid'),
		password: z
			.string()
			.min(8, 'Password minimal 8 karakter')
			.regex(/[0-9]/, 'Password harus mengandung angka')
			.regex(/[a-z]/, 'Password harus mengandung huruf kecil')
			.regex(/[A-Z]/, 'Password harus mengandung huruf besar')
			.regex(/[^A-Za-z0-9]/, 'Password harus mengandung simbol'),
		confirmPassword: z.string(),
		agreement: z.boolean().refine((v) => v === true, 'Anda harus menyetujui pernyataan ini'),
		foto: z
			.instanceof(File)
			.refine((f) => FOTO_MIME.includes(f.type), 'Foto harus berformat JPG atau PNG')
			.refine((f) => f.size <= MAX_FOTO_BYTES, 'Ukuran foto maksimal 2 MB')
			.optional()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Konfirmasi password tidak cocok',
		path: ['confirmPassword']
	});

export type RegisterInput = z.infer<typeof registerSchema>;
