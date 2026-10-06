import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/art/*.jpg', { eager: true });

/** Look up a piece of art by its file name, without the extension. */
export function art(name: string): ImageMetadata {
  const hit = files[`../assets/art/${name}.jpg`];
  if (!hit) throw new Error(`No art named "${name}" in src/assets/art`);
  return hit.default;
}
