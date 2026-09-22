import { z } from 'zod';

export const strongPassword = z
	.string()
	.min(8, 'Kata sandi minimal 8 karakter')
	.regex(/[0-9]/, 'Kata sandi harus mengandung angka')
	.regex(/[a-z]/, 'Kata sandi harus mengandung huruf kecil')
	.regex(/[A-Z]/, 'Kata sandi harus mengandung huruf besar')
	.regex(/[^A-Za-z0-9]/, 'Kata sandi harus mengandung simbol');

export const changePasswordSchema = z
	.object({
		currentPassword: z.string().min(1, 'Kata sandi saat ini wajib diisi'),
		newPassword: strongPassword,
		confirmPassword: z.string()
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Konfirmasi kata sandi tidak cocok',
		path: ['confirmPassword']
	});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
