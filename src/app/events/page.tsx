"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ComaEvent, TicketTier } from "../../types/event";
import { events } from "../../data/events";

function compareByDateAsc(a: ComaEvent, b: ComaEvent) {
  return a.date.localeCompare(b.date);
}

function compareByDateDesc(a: ComaEvent, b: ComaEvent) {
  return b.date.localeCompare(a.date);
}

export default function EventsPage() {
  const years = useMemo(() => {
    const set = new Set<number>(events.map((e) => e.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const upcoming = useMemo(() => {
    return events
      .filter((e: ComaEvent) => e.status === "upcoming")
      .sort(compareByDateAsc);
  }, []);

  const pastAll = useMemo(() => {
    return events
      .filter((e: ComaEvent) => e.status === "past")
      .sort(compareByDateDesc);
  }, []);

  const pastFiltered = useMemo(() => {
    if (selectedYear === "all") return pastAll;
    return pastAll.filter((e) => e.year === selectedYear);
  }, [pastAll, selectedYear]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold">Events & Media</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore upcoming events, browse our archive by year, and relive
          celebrations through photos and videos.
        </p>
      </header>

      {/* Upcoming */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <Link href="/get-involved" className="text-sm underline">
            Want to volunteer?
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {upcoming.length === 0 ? (
            <div className="rounded border p-6 text-gray-600">
              No upcoming events posted yet. Check back soon!
            </div>
          ) : (
            upcoming.map((e: ComaEvent) => {
              const soldOut = Boolean(e.tickets?.soldOut);
              const earlyBirdOn =
                !soldOut &&
                isEarlyBirdActive(e.tickets?.earlyBirdCutoff) &&
                Boolean(e.tickets?.tiers?.some((tier) => tier.earlyBirdPrice));

              const pricingSummary = getPricingSummary(e, earlyBirdOn);

              return (
                <article key={e.id} className="rounded border p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-500">
                        {formatPrettyDate(e.date)}
                      </div>
                      <div className="mt-1 text-lg font-semibold">{e.title}</div>
                      <div className="mt-2 text-gray-600">{e.location}</div>

                      {pricingSummary && (
                        <div className="mt-3 text-sm text-gray-600">
                          {pricingSummary}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 flex-wrap justify-end">
                      <Badge tone="dark">Upcoming</Badge>
                      {soldOut && <Badge tone="danger">Sold Out</Badge>}
                      {earlyBirdOn && <Badge tone="amber">Early Bird</Badge>}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-4 flex-wrap">
                    <Link href={`/events/${e.id}`} className="text-sm underline">
                      View details →
                    </Link>

                    {!soldOut ? (
                      <Link href="/contact" className="text-sm underline">
                        RSVP / Info
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">
                        Ticket sales closed
                      </span>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* Archive */}
      <section className="mt-16">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">Event Archive</h2>
            <p className="mt-2 text-gray-600">Filter past events by year.</p>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="year" className="text-sm text-gray-600">
              Year
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(ev) => {
                const v = ev.target.value;
                setSelectedYear(v === "all" ? "all" : Number(v));
              }}
              className="rounded border px-3 py-2 text-sm"
            >
              <option value="all">All</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {pastFiltered.length === 0 ? (
            <div className="rounded border p-6 text-gray-600">
              No past events found for {selectedYear}.
            </div>
          ) : (
            pastFiltered.map((e: ComaEvent) => (
              <article key={e.id} className="rounded border p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500">
                      {e.year} • {formatPrettyDate(e.date)}
                    </div>
                    <div className="mt-1 text-lg font-semibold">{e.title}</div>
                    <div className="mt-2 text-gray-600">{e.location}</div>
                  </div>

                  <Badge tone="light">Past</Badge>
                </div>

                <div className="mt-5">
                  <Link href={`/events/${e.id}`} className="text-sm underline">
                    View details →
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Media */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Media</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Photos, videos, and social links for COMA events (we’ll wire these to
          real links next).
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded border p-6">
            <div className="font-semibold">📸 Photo Gallery</div>
            <p className="mt-2 text-gray-600 text-sm">
              Browse albums from recent events.
            </p>
            <a
              href="https://photos.app.goo.gl/MFMSvFpfDin34y9d9"
              className="mt-4 inline-block text-sm underline"
              onClick={(ev) => ev.preventDefault()}
            >
              View gallery
            </a>
          </div>

          <div className="rounded border p-6">
            <div className="font-semibold">🎥 YouTube</div>
            <p className="mt-2 text-gray-600 text-sm">
              Watch performances and highlights.
            </p>
            <a
              href="https://www.youtube.com/user/comacmh"
              className="mt-4 inline-block text-sm underline"
              onClick={(ev) => ev.preventDefault()}
            >
              Open channel
            </a>
          </div>

          <div className="rounded border p-6">
            <div className="font-semibold">💬 Community Updates</div>
            <p className="mt-2 text-gray-600 text-sm">
              Facebook + WhatsApp links for announcements.
            </p>
            <a
              href="https://chat.whatsapp.com/DVq11LkFSEs5eESNgDA6VM"
              className="mt-4 inline-block text-sm underline"
              onClick={(ev) => ev.preventDefault()}
            >
              See links
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI + Helpers ---------- */

function Badge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "dark" | "light" | "danger" | "amber";
}) {
  const base = "text-xs font-semibold px-3 py-1 rounded-full border";
  const styles =
    tone === "dark"
      ? "bg-black text-white border-black"
      : tone === "danger"
      ? "bg-red-600 text-white border-red-600"
      : tone === "amber"
      ? "bg-amber-500 text-black border-amber-500"
      : "bg-white text-black border-gray-300";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

function isEarlyBirdActive(cutoff?: string) {
  if (!cutoff) return false;
  const [y, m, d] = cutoff.split("-").map(Number);
  if (!y || !m || !d) return false;
  const cutoffEnd = new Date(y, m - 1, d, 23, 59, 59);
  return new Date() <= cutoffEnd;
}

function getPricingSummary(event: ComaEvent, earlyBirdOn: boolean) {
  const tiers = event.tickets?.tiers;
  if (!tiers || tiers.length === 0) return null;

  const prices = tiers
    .map((t: TicketTier) =>
      earlyBirdOn && t.earlyBirdPrice ? t.earlyBirdPrice : t.price
    )
    .filter(Boolean);

  const min = prices
    .map((p) => Number(String(p).replace(/[^0-9.]/g, "")))
    .filter((n) => !Number.isNaN(n))
    .sort((a, b) => a - b)[0];

  if (!min) return "Pricing available";

  const suffix =
    earlyBirdOn && event.tickets?.earlyBirdCutoff
      ? ` (early bird until ${formatPrettyDate(event.tickets.earlyBirdCutoff)})`
      : "";

  return `From $${min}${suffix}`;
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
