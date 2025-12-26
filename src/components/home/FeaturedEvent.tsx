export default function FeaturedEvent() {
  return (
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
  );
}
