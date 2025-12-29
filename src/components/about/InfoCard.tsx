// src/components/about/InfoCard.tsx
export default function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Kasavu stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

    
      <div className="relative flex items-start gap-3">
        {/* Icon pill */}
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B5D3B]/10 text-xl text-[#0B5D3B] ring-1 ring-[#0B5D3B]/15">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0B5D3B] transition">
            {title}
          </h3>
          <div className="mt-2 text-sm leading-relaxed text-slate-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
