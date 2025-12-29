// src/components/about/SectionHeader.tsx
export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </h2>
      {subtitle ? <p className="text-sm text-slate-700 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
