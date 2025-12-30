// app/sponsors/page.tsx
import Link from "next/link";
import { SPONSORS } from "../../data/about";
import type { Sponsor } from "../../data/about";
import SponsorTile from "../../components/about/SponsorTitle"; // <-- make sure this path+filename is correct

const sponsorEmail = "coma.officials@gmail.com";

/** Page expects lowercase tiers, but your data uses "Gold" etc — normalize it */
type SponsorTier = "platinum" | "gold" | "silver" | "bronze" | "community";

type TierCard = {
  key: Exclude<SponsorTier, "community">;
  name: string;
  tagline: string;
  perks: string[];
  highlight?: boolean;
};

const tiers: TierCard[] = [
  {
    key: "platinum",
    name: "Platinum Sponsors",
    tagline: "Top-tier visibility across major COMA events and year-round presence.",
    perks: [
      "Top logo placement on COMA website",
      "Recognition on event banners / stage signage",
      "Social media sponsor shoutouts",
      "Option for booth/table at select events",
      "Priority acknowledgements",
    ],
    highlight: true,
  },
  {
    key: "gold",
    name: "Gold Sponsors",
    tagline: "Strong visibility at key events and community recognition.",
    perks: [
      "Logo placement on COMA website (Gold section)",
      "Recognition at select events",
      "Social media mention",
      "Opportunity to provide promo materials",
    ],
  },
  {
    key: "silver",
    name: "Silver Sponsors",
    tagline: "A meaningful way to support COMA programs and reach the community.",
    perks: [
      "Logo placement on COMA website (Silver section)",
      "Recognition at select events (as applicable)",
      "Sponsor listing in select communications",
    ],
  },
  {
    key: "bronze",
    name: "Bronze Sponsors",
    tagline: "A great entry-level option for small businesses and community partners.",
    perks: [
      "Name/logo listing on COMA website (Bronze section)",
      "Recognition in select communications (as applicable)",
    ],
  },
];

function normalizeTier(tier?: string): SponsorTier {
  switch ((tier ?? "").toLowerCase()) {
    case "platinum":
      return "platinum";
    case "gold":
      return "gold";
    case "silver":
      return "silver";
    case "bronze":
      return "bronze";
    case "community":
      return "community";
    default:
      return "community"; // default bucket so undefined never crashes
  }
}

function groupSponsors(sponsors: Sponsor[]) {
  const grouped: Record<SponsorTier, Sponsor[]> = {
    platinum: [],
    gold: [],
    silver: [],
    bronze: [],
    community: [],
  };

  for (const s of sponsors) {
    grouped[normalizeTier(s.tier)].push(s);
  }

  (Object.keys(grouped) as SponsorTier[]).forEach((k) =>
    grouped[k].sort((a, b) => a.name.localeCompare(b.name))
  );

  return grouped;
}

function ButtonLink({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#0B5D3B] text-white hover:opacity-95 focus:ring-[#0B5D3B]"
      : variant === "secondary"
      ? "bg-white text-[#0B5D3B] ring-1 ring-[#0B5D3B]/25 hover:bg-[#0B5D3B]/5 focus:ring-[#0B5D3B]"
      : "bg-transparent text-[#0B5D3B] hover:bg-[#0B5D3B]/5 focus:ring-[#0B5D3B]";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${base} ${styles}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}

export default function SponsorsPage() {
  const byTier = groupSponsors(SPONSORS);

  const sections = [
    { key: "platinum" as const, title: "Platinum Sponsors" },
    { key: "gold" as const, title: "Gold Sponsors" },
    { key: "silver" as const, title: "Silver Sponsors" },
    { key: "bronze" as const, title: "Bronze Sponsors" },
    { key: "community" as const, title: "Community Sponsors" },
  ];

  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 25%, rgba(201,162,39,0.18), transparent 40%),
                radial-gradient(circle at 85% 30%, rgba(11,93,59,0.10), transparent 42%),
                radial-gradient(circle at 55% 85%, rgba(201,162,39,0.12), transparent 45%),
                linear-gradient(135deg, rgba(11,93,59,0.05), rgba(201,162,39,0.04))
              `,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              SPONSORS
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Sponsors<span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Sponsors make COMA’s cultural programs, youth initiatives, and
              community service possible. Thank you for supporting our
              community.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#become" label="Become a Sponsor" variant="primary" />
              <ButtonLink
                href={`mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Inquiry`}
                label="Email Sponsorship Team"
                variant="secondary"
              />
              <ButtonLink href="/get-involved" label="Get Involved" variant="ghost" />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Sponsor logos also appear on the{" "}
              <Link href="/about" className="underline">
                About Us
              </Link>{" "}
              page.
            </p>
          </div>
        </div>

        {/* Tier cards */}
        <div className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Sponsorship tiers
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Choose a level that fits your goals. We can tailor sponsorships
                for specific events or programs.
              </p>
            </div>
            <ButtonLink
              href={`mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Options`}
              label="Talk to us"
              variant="secondary"
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tiers.map((t) => (
              <div
                key={t.key}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />

                {t.highlight ? (
                  <div className="absolute right-4 top-4">
                    <div className="rounded-full bg-[#C9A227] px-3 py-1 text-xs font-semibold text-[#1B1B1B] shadow-sm">
                      Most Visible
                    </div>
                  </div>
                ) : null}

                <div className="relative">
                  <div className="text-base font-semibold text-slate-900">
                    {t.name}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t.tagline}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B]">
                          ✓
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <ButtonLink
                      href={`mailto:${sponsorEmail}?subject=${encodeURIComponent(
                        `COMA Sponsorship - ${t.name}`
                      )}`}
                      label="Sponsor at this level"
                      variant="primary"
                    />
                    <ButtonLink
                      href={`mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Question`}
                      label="Questions"
                      variant="secondary"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current sponsors */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Current sponsors</h2>
          <p className="mt-2 text-sm text-slate-600">
            Listed by tier. Logos are pulled from{" "}
            <code className="rounded bg-white px-2 py-0.5 ring-1 ring-black/5">
              src/data/about.ts
            </code>
            .
          </p>

          <div className="mt-6 grid gap-4">
            {sections.map(({ key, title }) => {
              const list = byTier[key];

              return (
                <div
                  key={key}
                  className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />

                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">
                      {title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-600">
                      {list.length} sponsor{list.length === 1 ? "" : "s"}
                    </div>
                  </div>

                  {list.length === 0 ? (
                    <div className="relative mt-5 rounded-2xl bg-[#FBF7EF] px-4 py-4 text-sm text-slate-600 ring-1 ring-black/5">
                      No sponsors listed yet.
                    </div>
                  ) : (
                    <div className="relative mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {list.map((s) => (
                        <SponsorTile key={s.name} sponsor={s} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why sponsor + CTA */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">
                Why sponsor COMA?
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Reach Central Ohio Malayalee families and professionals",
                  "Visibility at major cultural events (Onam, Christmas, Picnic, and more)",
                  "Support language programs, youth initiatives, and community service",
                  "Year-round brand presence—not just one event",
                ].map((text) => (
                  <li key={text} className="flex gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B]">
                      ✓
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            id="become"
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">
                Become a sponsor
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Interested in sponsoring COMA events or programs? Email us and
                we’ll share current options, benefits, and next steps.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink
                  href={`mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Inquiry`}
                  label="Email to Sponsor"
                  variant="primary"
                />
                <ButtonLink href="/get-involved" label="Get Involved" variant="secondary" />
                <ButtonLink href="/contact" label="Contact" variant="ghost" />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                If you have a logo + website link, include it in your email and
                we’ll add it to the site.
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link href="/resources" className="text-sm font-semibold text-[#0B5D3B] underline">
            ← Back to Resources
          </Link>
        </div>
      </section>
    </main>
  );
}
