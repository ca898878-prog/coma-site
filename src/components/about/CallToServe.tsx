// src/components/about/CallToServe.tsx
import Link from "next/link";

export default function CallToServe() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold sm:text-2xl">Call to Serve</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
            COMA thrives on volunteer energy. Join a committee, volunteer at events, or bring your
            ideas to energize our community.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white/90"
          >
            Volunteer / Join
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/15"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </div>
  );
}
