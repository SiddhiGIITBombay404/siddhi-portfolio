import Section from '@/components/Section';
import { getPost } from '@/lib/mdx';
import remark from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  return [];
}

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const { content, data } = getPost(params.slug);
  const processed = await remark().use(html).process(content);
  const __html = processed.toString();
  return (
    <Section>
      <article className="prose prose-neutral dark:prose-invert">
        <h1>{data.title}</h1>
        <p className="opacity-70 text-sm">{new Date(data.date).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html }} />
      </article>
    </Section>
  );
}