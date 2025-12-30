"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { events } from "../../../data/events";

export default function EventDetailPage() {
  const params = useParams();

  const raw = params?.id;
  const requestedId =
    typeof raw === "string" ? raw.trim() : Array.isArray(raw) ? raw[0]?.trim() : "";

  const event = events.find((e) => e.id.trim() === requestedId);

  if (!requestedId || !event) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Event not found</h1>

        <p className="mt-4 text-gray-600">
          Requested id:{" "}
          <code className="px-1 py-0.5 rounded bg-gray-100">
            {String(requestedId)}
          </code>
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Available ids: {events.map((e) => e.id).join(", ")}
        </p>

        <div className="mt-6">
          <Link href="/events" className="underline">
            ← Back to Events
          </Link>
        </div>
      </main>
    );
  }

  const isUpcoming = event.status === "upcoming";
  const soldOut = Boolean(event.tickets?.soldOut);
  const earlyBirdOn =
    isUpcoming && !soldOut && isEarlyBirdActive(event.tickets?.earlyBirdCutoff);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Top row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link href="/events" className="text-sm underline">
          ← Back to Events
        </Link>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isUpcoming ? "bg-black text-white border-black" : "bg-white text-black"
            }`}
          >
            {isUpcoming ? "Upcoming" : "Past Event"}
          </span>

          {soldOut && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-600 text-white">
              Sold Out
            </span>
          )}

          {earlyBirdOn && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500 text-black">
              Early Bird Pricing
            </span>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="mt-6 grid gap-8 md:grid-cols-2 items-start">
        {/* Poster */}
        <div className="rounded-xl border overflow-hidden">
          <div className="relative aspect-[4/5] bg-gray-100">
            {event.posterUrl ? (
              <Image
                src={event.posterUrl}
                alt={`${event.title} poster`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-gray-500">
                Poster coming soon
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="text-sm text-gray-500">
            {event.year} • {formatPrettyDate(event.date)}
          </div>

          <h1 className="mt-2 text-4xl font-bold">{event.title}</h1>

          <p className="mt-3 text-gray-700">{event.location}</p>

          {/* CTA */}
          <div className="mt-6 flex gap-3 flex-wrap">
            {soldOut ? (
              <button
                disabled
                className="rounded bg-gray-300 px-5 py-2.5 text-gray-700 text-sm cursor-not-allowed"
                title="Tickets are sold out"
              >
                Sold Out
              </button>
            ) : event.ctaUrl ? (
              <a href={event.ctaUrl} className="rounded bg-black px-5 py-2.5 text-white text-sm">
                {event.ctaLabel ?? "RSVP / Tickets"}
              </a>
            ) : (
              <Link href="/contact" className="rounded bg-black px-5 py-2.5 text-white text-sm">
                RSVP / Info
              </Link>
            )}

            <Link href="/get-involved" className="rounded border px-5 py-2.5 text-sm">
              Volunteer
            </Link>
          </div>

          {/* About */}
          <div className="mt-8 rounded-xl border p-6">
            <h2 className="text-xl font-semibold">About this event</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {event.description ?? "Event details will be posted soon."}
            </p>
          </div>

          {/* Ticket Pricing Table */}
          {event.tickets?.tiers && event.tickets.tiers.length > 0 && (
            <section className="mt-6 rounded-xl border p-6">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-semibold">Ticket Pricing</h2>

                {event.tickets.earlyBirdCutoff && (
                  <div className="text-sm text-gray-600">
                    Early bird until{" "}
                    <span className="font-medium">
                      {formatPrettyDate(event.tickets.earlyBirdCutoff)}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2 pr-4">Tier</th>
                      <th className="py-2 pr-4">Price</th>
                      <th className="py-2 pr-4">Early Bird</th>
                      <th className="py-2">Notes</th>
                    </tr>
                  </thead>

                  <tbody>
                    {event.tickets.tiers.map((tier, idx) => (
                      <tr key={idx} className="border-b last:border-b-0">
                        <td className="py-3 pr-4 font-medium">{tier.label}</td>
                        <td className="py-3 pr-4">{tier.price}</td>
                        <td className="py-3 pr-4">
                          {tier.earlyBirdPrice ? (
                            <span className={earlyBirdOn ? "font-semibold" : ""}>
                              {tier.earlyBirdPrice}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="py-3">
                          {tier.note ?? <span className="text-gray-400">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {event.tickets.footerNote && (
                <p className="mt-4 text-sm text-gray-600">{event.tickets.footerNote}</p>
              )}
            </section>
          )}

          {/* Media Links */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-5">
              <div className="font-semibold">📸 Photos</div>
              <p className="mt-2 text-sm text-gray-600">
                {event.galleryUrl ? (
                  <a className="underline" href='https://photos.app.goo.gl/MFMSvFpfDin34y9d9' target="_blank" rel="noreferrer">
                    View photo album →
                  </a>
                ) : (
                  "Photos will be added after the event."
                )}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <div className="font-semibold">🎥 Video</div>
              <p className="mt-2 text-sm text-gray-600">
                {event.youtubeUrl ? (
                  <a className="underline" href='https://www.youtube.com/user/comacmh' target="_blank" rel="noreferrer">
                    Watch highlights →
                  </a>
                ) : (
                  "Videos will be added after the event."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function isEarlyBirdActive(cutoff?: string) {
  if (!cutoff) return false;
  const [y, m, d] = cutoff.split("-").map(Number);
  if (!y || !m || !d) return false;
  const cutoffEnd = new Date(y, m - 1, d, 23, 59, 59);
  return new Date() <= cutoffEnd;
}

function formatPrettyDate(isoDate: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;

  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
