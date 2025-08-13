import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = { slug: string; title: string; date: string; excerpt: string };

export function getAllPosts(): Post[] {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt
    } as Post;
  }).sort((a,b)=> a.date < b.date ? 1 : -1);
}

export function getPost(slug: string) {
  const p = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const raw = fs.readFileSync(p, 'utf-8');
  return matter(raw);
}