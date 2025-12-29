// src/components/about/AboutHero.tsx
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="px-4 pt-10 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-10">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            🏛️ About COMA
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Central Ohio Malayalee Association
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            COMA is a volunteer-driven community organization dedicated to celebrating Malayalee
            heritage, strengthening local connections, and serving Central Ohio through cultural
            programming and community outreach.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Events
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
