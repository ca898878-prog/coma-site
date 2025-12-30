import Link from "next/link";

export default function FeaturedEvent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-emerald-900 mb-2">
          Coming Up Next
        </h2>
        <p className="text-gray-600 mb-10">
          Don’t miss our next community gathering.
        </p>

        <div className="rounded-2xl border border-emerald-100 bg-[#FAFAF8] p-8 md:flex md:items-center md:justify-between gap-8 shadow-sm">
          <div>
            <p className="text-amber-500 font-semibold mb-2">🌼 Featured Event</p>
            <h3 className="text-2xl font-serif text-emerald-900 mb-2">
              Onam 2025
            </h3>
            <p className="text-gray-700 mb-2">
              A celebration of harvest, tradition, and togetherness.
            </p>
            <p className="text-sm text-gray-500">
              September 14, 2025 • Columbus, OH
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <Link
              href="/events/onam-2025"
              className="bg-emerald-800 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
