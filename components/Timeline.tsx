export default function Timeline({ items }: { items: { role: string; org: string; period: string; bullets: string[] }[] }) {
  return (
    <ol className="relative border-l border-tabby/40 pl-6">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-paw" />
          <h3 className="text-base font-semibold">{it.role} · {it.org}</h3>
          <div className="text-xs opacity-70">{it.period}</div>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {it.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}