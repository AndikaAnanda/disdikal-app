import { error } from '@sveltejs/kit';
import { dokumenSections, type DokumenSectionId } from '$lib/profil-data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (!(params.section in dokumenSections)) error(404, 'Bagian dokumen tidak ditemukan');
	return { section: params.section as DokumenSectionId };
};
