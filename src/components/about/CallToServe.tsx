// src/components/about/CallToServe.tsx
import Link from "next/link";

export default function CallToServe() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#0B5D3B] p-6 text-white shadow-sm sm:p-8">
      {/* Kasavu stripe */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

 
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            🤝 Get Involved
          </p>

          <h2 className="mt-3 text-xl font-semibold sm:text-2xl">Call to Serve</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
            COMA thrives on volunteer energy. Join a committee, volunteer at events, or bring your
            ideas to energize our community.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex rounded-full bg-[#C9A227]/25 px-2.5 py-1 font-semibold text-white">
              Culture
            </span>
            <span className="inline-flex rounded-full bg-[#C9A227]/25 px-2.5 py-1 font-semibold text-white">
              Community
            </span>
            <span className="inline-flex rounded-full bg-[#C9A227]/25 px-2.5 py-1 font-semibold text-white">
              Service
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0B5D3B] shadow-sm transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B5D3B]"
          >
            Volunteer / Join
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B5D3B]"
          >
            Reach Out
          </Link>
        </div>
      </div>
    </div>
  );
}
