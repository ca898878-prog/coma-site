// src/components/about/AboutHero.tsx
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="px-4 pt-10 pb-6 sm:px-6 lg:px-8 bg-[#FBF7EF]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          {/* Pookalam wash */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
           
          />

         
          <div className="relative">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0B5D3B]/10 px-3 py-1 text-xs font-semibold text-[#0B5D3B] ring-1 ring-[#0B5D3B]/15">
              🏛️ About COMA
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Central Ohio Malayalee Association
              <span className="text-[#0B5D3B]">.</span>
            </h1>

            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              COMA (Central Ohio Malayalee Association) is a non-profit association run by Malayalees for Malayalees in 
              the Columbus metropolitan area. Malayalees hail from the beautiful coastal
              state of Kerala in India. The Central Ohio Malayalee Association (COMA) was formally registered
              as a “not for profit” organization in October 2007. COMA strives to bring Central Ohio Malayalees
              together and also organizes various cultural and seasonal events throughout the year.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0B5D3B] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] focus:ring-offset-2"
              >
                Explore Events
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0B5D3B] shadow-sm ring-1 ring-[#0B5D3B]/20 transition hover:bg-[#0B5D3B]/5 focus:outline-none focus:ring-2 focus:ring-[#0B5D3B] focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>

            {/* Optional little footer microcopy */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex rounded-full bg-[#C9A227]/20 px-2.5 py-1 font-semibold text-[#6B5200]">
                Culture
              </span>
              <span className="inline-flex rounded-full bg-[#C9A227]/20 px-2.5 py-1 font-semibold text-[#6B5200]">
                Community
              </span>
              <span className="inline-flex rounded-full bg-[#C9A227]/20 px-2.5 py-1 font-semibold text-[#6B5200]">
                Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
