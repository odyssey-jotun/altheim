import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

interface Chapter {
  frontmatter: { order: number; session: number; title: string; image?: string; alt?: string };
  Content: AstroComponentFactory;
  slug: string;
}

const mods = import.meta.glob<any>('../chronicle/*.md', { eager: true });

export const chapters: Chapter[] = Object.entries(mods)
  .map(([file, m]) => ({
    frontmatter: m.frontmatter,
    Content: m.Content,
    slug: file.split('/').pop()!.replace(/^\d+-/, '').replace(/\.md$/, ''),
  }))
  .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
