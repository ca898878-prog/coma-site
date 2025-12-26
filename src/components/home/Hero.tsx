export default function Hero() {
  return (
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

        <a href="/events" className="rounded border border-black px-6 py-3">
          Upcoming Events
        </a>
      </div>
    </section>
  );
}
