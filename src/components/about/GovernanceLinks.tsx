// src/components/about/GovernanceLinks.tsx
import Link from "next/link";

export default function GovernanceLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-slate-900">{l.label}</p>
              <p className="mt-1 text-sm text-slate-700">Open the document or page to learn more.</p>
            </div>
            <span className="rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700 transition group-hover:bg-slate-200">
              ↗
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
