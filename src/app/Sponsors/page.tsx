// app/sponsors/page.tsx
import Link from "next/link";

type Cta = { label: string; href: string; external?: boolean };

type Tier = {
  key: "platinum" | "gold" | "silver" | "bronze";
  name: string;
  tagline: string;
  // Keep pricing optional since you may not want it public
  priceLine?: string;
  perks: string[];
  highlight?: boolean;
};

type Sponsor = {
  name: string;
  website?: string;
};

const sponsorEmail = "coma.officials@gmail.com";

/**
 * Sponsorship tiers (copy edits are safe to tweak anytime)
 */
const tiers: Tier[] = [
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

/**
 * Your real sponsors from the screenshots
 * Add/replace websites anytime. If unknown, leave undefined or "#".
 */
const sponsorsByTier: Record<Tier["key"], Sponsor[]> = {
  platinum: [
    { name: "Grange Insurance", website: "https://www.grangeinsurance.com" },
    { name: "Sony Joseph,Red One Realty", website: "https://www.redonerealty.com" },
  ],
  gold: [
    { name: "Abraham Eappen – Keller Williams Greater Columbus (Truitt Team)" },
    { name: "New York Life – Erik Brown, CFP®", website: "https://www.newyorklife.com" },
    { name: "New York Life – Jason Sowards", website: "https://www.newyorklife.com" },
  ],
  silver: [
    { name: "Anand by Chef Anand" },
    { name: "RE/MAX Consultant Group – Courtney Egin", website: "https://www.remax.com" },
    { name: "DevCare Solutions" },
    { name: "India Grocers" },
    { name: "Open House Tutoring" },
  ],
  bronze: [{ name: "Bhavani Cash and Carry" }],
};

function ButtonLink({
  cta,
  variant = "primary",
}: {
  cta: Cta;
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

  const href = cta.href;

  if (cta.external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={`${base} ${styles}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {cta.label}
    </Link>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#C9A227]/20 px-2.5 py-1 text-xs font-semibold text-[#6B5200]">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-slate-700">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />

      {tier.highlight ? (
        <div className="absolute right-4 top-4">
          <div className="rounded-full bg-[#C9A227] px-3 py-1 text-xs font-semibold text-[#1B1B1B] shadow-sm">
            Most Visible
          </div>
        </div>
      ) : null}

      <div className="relative">
        <div className="text-base font-semibold text-slate-900">{tier.name}</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{tier.tagline}</p>

        <ul className="mt-4 space-y-2">
          {tier.perks.map((p) => (
            <CheckItem key={p}>{p}</CheckItem>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <ButtonLink
            cta={{
              label: "Sponsor at this level",
              href: `mailto:${sponsorEmail}?subject=${encodeURIComponent(
                `COMA Sponsorship - ${tier.name}`
              )}`,
              external: true,
            }}
            variant="primary"
          />
          <ButtonLink
            cta={{
              label: "Questions",
              href: `mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Question`,
              external: true,
            }}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}

function SponsorRow({ sponsor }: { sponsor: Sponsor }) {
  const hasWebsite = !!sponsor.website && sponsor.website !== "#";

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#FBF7EF] px-4 py-4 ring-1 ring-black/5">
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-slate-900">{sponsor.name}</div>
        <div className="text-xs text-slate-600">Sponsor</div>
      </div>

      {hasWebsite ? (
        <a
          className="shrink-0 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#0B5D3B] ring-1 ring-black/5 hover:bg-[#0B5D3B]/5"
          href={sponsor.website}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      ) : (
        <div className="shrink-0 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-500 ring-1 ring-black/5">
          —
        </div>
      )}
    </div>
  );
}

function SponsorGrid({
  title,
  tierKey,
  sponsors,
}: {
  title: string;
  tierKey: Tier["key"];
  sponsors: Sponsor[];
}) {
  const tierLabel =
    tierKey === "platinum"
      ? "Platinum"
      : tierKey === "gold"
      ? "Gold"
      : tierKey === "silver"
      ? "Silver"
      : "Bronze";

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />

      <div className="relative">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <div className="flex flex-wrap gap-2">
            <Tag>{tierLabel}</Tag>
            <Tag>{sponsors.length} sponsor{sponsors.length === 1 ? "" : "s"}</Tag>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <SponsorRow key={s.name} sponsor={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-black/5">
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
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">SPONSORS</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Sponsors<span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Sponsors make COMA’s cultural programs, youth initiatives, and community service possible.
              Thank you for supporting our community.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink cta={{ label: "Become a Sponsor", href: "#become" }} variant="primary" />
              <ButtonLink
                cta={{
                  label: "Email Sponsorship Team",
                  href: `mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Inquiry`,
                  external: true,
                }}
                variant="secondary"
              />
              <ButtonLink cta={{ label: "Get Involved", href: "/get-involved" }} variant="ghost" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Year-round visibility</Tag>
              <Tag>Major community events</Tag>
              <Tag>Support culture + service</Tag>
            </div>
          </div>
        </div>

        {/* Tiers */}
        <div className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Sponsorship tiers</h2>
              <p className="mt-1 text-sm text-slate-600">
                Choose a level that fits your goals. We can tailor sponsorships for specific events or programs.
              </p>
            </div>
            <ButtonLink
              cta={{
                label: "Talk to us",
                href: `mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Options`,
                external: true,
              }}
              variant="secondary"
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tiers.map((t) => (
              <TierCard key={t.key} tier={t} />
            ))}
          </div>
        </div>

        {/* Current sponsors */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Current sponsors</h2>
          <p className="mt-2 text-sm text-slate-600">
            Listed by tier. (We can swap name cards for logo tiles when you have clean logo files.)
          </p>

          <div className="mt-6 grid gap-4">
            <SponsorGrid
              title="Platinum Sponsors"
              tierKey="platinum"
              sponsors={sponsorsByTier.platinum}
            />
            <SponsorGrid title="Gold Sponsors" tierKey="gold" sponsors={sponsorsByTier.gold} />
            <SponsorGrid
              title="Silver Sponsors"
              tierKey="silver"
              sponsors={sponsorsByTier.silver}
            />
            <SponsorGrid
              title="Bronze Sponsors"
              tierKey="bronze"
              sponsors={sponsorsByTier.bronze}
            />
          </div>
        </div>

        {/* Why sponsor + CTA */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Why sponsor COMA?</h2>
              <ul className="mt-4 space-y-2">
                <CheckItem>Reach Central Ohio Malayalee families and professionals</CheckItem>
                <CheckItem>Visibility at major cultural events (Onam, Christmas, Picnic, and more)</CheckItem>
                <CheckItem>Support language programs, youth initiatives, and community service</CheckItem>
                <CheckItem>Year-round brand presence—not just one event</CheckItem>
              </ul>
            </div>
          </div>

          <div id="become" className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Become a sponsor</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Interested in sponsoring COMA events or programs? Email us and we’ll share current options,
                benefits, and next steps.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink
                  cta={{
                    label: "Email to Sponsor",
                    href: `mailto:${sponsorEmail}?subject=COMA%20Sponsorship%20Inquiry`,
                    external: true,
                  }}
                  variant="primary"
                />
                <ButtonLink cta={{ label: "Volunteer", href: "/volunteer" }} variant="secondary" />
                <ButtonLink cta={{ label: "Giving Back", href: "/giving-back" }} variant="ghost" />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                If you have a logo + website link, include it in your email and we’ll add it to the site.
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <ButtonLink cta={{ label: "← Back to Get Involved", href: "/get-involved" }} variant="ghost" />
        </div>
      </section>
    </main>
  );
}
