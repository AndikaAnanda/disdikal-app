import bgBarjas from '$lib/assets/allservices-cardbg/dukadmin.png';
import bgDiklu from '$lib/assets/allservices-cardbg/diklu.png';
import bgGun from '$lib/assets/allservices-cardbg/gun.png';
import bgIptek from '$lib/assets/allservices-cardbg/iptek.png';
import bgPatubel from '$lib/assets/allservices-cardbg/patubel.png';
import bgSetprof from '$lib/assets/allservices-cardbg/setkprof.png';
import bgUpdatedik from '$lib/assets/allservices-cardbg/updatedik.png';
import iconAll from '$lib/assets/allservices-icons/all.svg';
import iconBarjas from '$lib/assets/allservices-icons/barjas.svg';
import iconDiklu from '$lib/assets/allservices-icons/diklu.svg';
import iconGun from '$lib/assets/allservices-icons/gun.svg';
import iconIptek from '$lib/assets/allservices-icons/iptek.svg';
import iconPatubel from '$lib/assets/allservices-icons/patubel.svg';
import iconSetprof from '$lib/assets/allservices-icons/setprof.svg';
import iconUpdatedik from '$lib/assets/allservices-icons/updatedik.svg';
import type { LayananId, MenuIconId } from '$lib/pengajuan-data';

export { default as pengajuanIcon } from '$lib/assets/allservices-icons/pengajuan-layanan.png';

export const layananIcon: Record<MenuIconId, string> = {
	all: iconAll,
	gun: iconGun,
	updatedik: iconUpdatedik,
	patubel: iconPatubel,
	barjas: iconBarjas,
	setprof: iconSetprof,
	iptek: iconIptek,
	diklu: iconDiklu
};

export const layananBg: Record<LayananId, string> = {
	gun: bgGun,
	updatedik: bgUpdatedik,
	patubel: bgPatubel,
	barjas: bgBarjas,
	setprof: bgSetprof,
	iptek: bgIptek,
	diklu: bgDiklu
};
