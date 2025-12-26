export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gray-100 px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Central Ohio Malayalee Association
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Connecting Malayalees across Central Ohio through culture, service, and community.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/get-involved/membership"
            className="rounded bg-black px-6 py-3 text-white"
          >
            Join Now
          </a>
          <a
            href="/events"
            className="rounded border border-black px-6 py-3"
          >
            Upcoming Events
          </a>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        <div className="rounded border p-6 text-center">
          <h3 className="text-xl font-semibold">🎉 Next Event</h3>
          <p className="mt-2 text-gray-600">Onam 2025</p>
        </div>

        <div className="rounded border p-6 text-center">
          <h3 className="text-xl font-semibold">📰 Newsletter</h3>
          <p className="mt-2 text-gray-600">Latest community updates</p>
        </div>

        <div className="rounded border p-6 text-center">
          <h3 className="text-xl font-semibold">🤝 Get Involved</h3>
          <p className="mt-2 text-gray-600">Membership & volunteering</p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Upcoming Event</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Join us for our upcoming cultural celebrations and community gatherings.
        </p>
        <a
          href="/events"
          className="inline-block mt-6 rounded bg-black px-6 py-3 text-white"
        >
          View Event Details
        </a>
      </section>
    </main>
  );
}
