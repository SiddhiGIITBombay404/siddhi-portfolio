import Section from '@/components/Section';
import { getPost } from '@/lib/mdx';

type Props = { params: { slug: string } };

// We render the markdown as plain text for now (no remark), so the site builds cleanly.
export default function PostPage({ params }: Props) {
  const { content, data } = getPost(params.slug);
  return (
    <Section>
      <article className="prose prose-neutral dark:prose-invert">
        <h1>{data.title}</h1>
        <p className="opacity-70 text-sm">{new Date(data.date).toLocaleDateString()}</p>
        <pre className="whitespace-pre-wrap">{content}</pre>
      </article>
    </Section>
  );
}
