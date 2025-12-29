import Link from "next/link";

export default function QuickLinks() {
  return (
    <section className="py-20 bg-[#F4F7F3]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-emerald-900 mb-12 text-center">
          Ways to Be Part of COMA
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Attend */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif text-emerald-800 mb-3">
              🎟 Attend
            </h3>
            <p className="text-gray-600 mb-6">
              Join cultural programs, celebrations, and community gatherings.
            </p>
            <Link
              href="/events"
              className="text-emerald-700 font-semibold hover:underline"
            >
              See Events →
            </Link>
          </div>

          {/* Volunteer */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif text-emerald-800 mb-3">
              🤝 Volunteer
            </h3>
            <p className="text-gray-600 mb-6">
              Help run events and support local service initiatives.
            </p>
            <Link
              href="/get-involved"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Get Involved →
            </Link>
          </div>

          {/* Membership */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-serif text-emerald-800 mb-3">
              💛 Become a Member
            </h3>
            <p className="text-gray-600 mb-6">
              Stay connected year-round and support COMA’s mission.
            </p>
            <Link
              href="/get-involved/membership"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Membership →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
