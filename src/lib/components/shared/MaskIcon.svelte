<script lang="ts">
	import { cn } from '$lib/utils';

	let { src, class: className }: { src: string; class?: string } = $props();
</script>

<!-- SVG/PNG single-color dari Figma dipakai sebagai mask agar warnanya ikut
     currentColor; satu aset bisa dipakai untuk varian navy maupun putih. -->
<span
	class={cn('shrink-0 bg-current mask-contain mask-center mask-no-repeat', className)}
	style="mask-image: url({src})"
></span>
