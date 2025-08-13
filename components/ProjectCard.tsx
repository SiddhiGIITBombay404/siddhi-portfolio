import Link from 'next/link';
import Badge from './Badge';

type Props = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ title, problem, solution, result, stack, repo, demo }: Props) {
  return (
    <article className="rounded-2xl border border-tabby/30 p-6 shadow-soft">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm">
        <li><strong>Problem:</strong> {problem}</li>
        <li><strong>Solution:</strong> {solution}</li>
        <li><strong>Result:</strong> {result}</li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {repo && (
          <Link className="underline" href={repo} target="_blank" aria-label={`${title} GitHub`}>GitHub</Link>
        )}
        {demo && (
          <Link className="underline" href={demo} target="_blank" aria-label={`${title} Live Demo`}>Live</Link>
        )}
      </div>
    </article>
  );
}