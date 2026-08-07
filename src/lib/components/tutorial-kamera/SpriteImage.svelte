<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SpriteCrop } from '$lib/tutorial-kamera-data';

	let {
		src,
		sprite,
		alt = '',
		class: className
	}: { src: string; sprite: SpriteCrop; alt?: string; class?: string } = $props();
</script>

<!-- Beberapa ilustrasi diekspor sebagai satu sprite sheet; angka crop diambil
     persis dari Figma supaya tiap frame menampilkan bagian yang benar. -->
<div class={cn('relative shrink-0 overflow-hidden', className)}>
	<img
		{src}
		{alt}
		class="absolute max-w-none"
		style="left: {sprite.left}; top: {sprite.top}; width: {sprite.width}; height: {sprite.height}"
	/>
</div>
