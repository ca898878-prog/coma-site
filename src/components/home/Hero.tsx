import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
          A home for Malayalees in Central Ohio
        </h1>

        <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
          Celebrate culture, build community, and give back — together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/get-involved/membership"
            className="bg-amber-400 hover:bg-amber-300 text-emerald-900 font-semibold px-8 py-3 rounded-full transition"
          >
            Join COMA
          </Link>

          <Link
            href="/events"
            className="border border-emerald-200 text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Explore Events
          </Link>
        </div>

        <div className="mt-6">
          <Link
            href="/about"
            className="text-sm text-emerald-200 hover:underline"
          >
            Learn more about COMA →
          </Link>
        </div>
      </div>
    </section>
  );
}
