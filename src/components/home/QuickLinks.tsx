export default function QuickLinks() {
  return (
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
  );
}
