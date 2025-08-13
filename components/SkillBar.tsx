type Props = { label: string; level: number };
export default function SkillBar({ label, level }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs opacity-70">{level}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded bg-tabby/30">
        <div className="h-2 rounded bg-tabby" style={{ width: `${level}%` }} aria-label={`${label} proficiency ${level}%`} />
      </div>
    </div>
  );
}