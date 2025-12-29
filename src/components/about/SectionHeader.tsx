// src/components/about/SectionHeader.tsx
export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* Small kasavu accent */}
      <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

      <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
        {title}
        <span className="text-[#0B5D3B]">.</span>
      </h2>

      {subtitle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}

      {/* Soft divider */}
      <div className="mt-1 h-px w-full bg-gradient-to-r from-black/10 via-black/5 to-transparent" />
    </div>
  );
}
