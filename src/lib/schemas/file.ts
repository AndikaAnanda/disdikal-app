import { z } from 'zod';

const DOC_MIME = ['application/pdf', 'image/jpeg', 'image/png'];

export function docField(maxBytes = 5 * 1024 * 1024) {
	const maxMb = Math.round(maxBytes / (1024 * 1024));

	return z
		.instanceof(File)
		.refine(
			(f) =>
				DOC_MIME.includes(f.type) ||
				f.type.startsWith('application/vnd.openxmlformats') ||
				f.type === 'application/msword' ||
				(f.type === '' && /\.(pdf|docx?|jpe?g|png)$/i.test(f.name)),
			'Berkas harus berformat PDF, DOC, PNG, atau JPG'
		)
		.refine((f) => f.size <= maxBytes, `Ukuran berkas maksimal ${maxMb} MB`)
		.optional();
}
