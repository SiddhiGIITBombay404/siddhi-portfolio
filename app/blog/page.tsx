import Section from '@/components/Section';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <Section>
      <h2 className="text-3xl font-bold">Blog</h2>
      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-tabby/30 p-6 shadow-soft">
            <Link className="text-lg font-semibold underline" href={`/blog/${p.slug}`}>{p.title}</Link>
            <div className="text-xs opacity-70">{new Date(p.date).toLocaleDateString()}</div>
            <p className="mt-2 opacity-90">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}