import Link from "next/link";

export default function GovernanceLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="group relative overflow-hidden rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {/* Kasavu accent stripe */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          {/* Soft pookalam glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#C9A227]/20 blur-2xl opacity-60" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-slate-900 group-hover:text-[#0B5D3B] transition">
                {l.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Open the document or page to learn more.
              </p>
            </div>

            <span className="shrink-0 inline-flex items-center justify-center rounded-2xl bg-[#0B5D3B]/10 px-3 py-2 text-sm font-semibold text-[#0B5D3B] transition group-hover:bg-[#0B5D3B] group-hover:text-white">
              ↗
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
