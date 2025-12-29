import Link from "next/link";

type Tier = {
  key: string;
  name: string;
  priceLine: string;
  tagline: string;
  includes: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    key: "sustaining",
    name: "Sustaining Membership",
    priceLine: "Family $500 • Couple $300 • Individual $200",
    tagline:
      "Support COMA and help us plan bigger, better events. Includes free admission to most COMA events in 2024 (excluding mega events).",
    includes: [
      "Free admission to all COMA events in 2024 (except mega events)",
      "Choose Family / Couple / Individual level",
      "Family includes member, spouse, children, and parents",
      "Best value for frequent event attendees",
    ],
    highlight: true,
  },
  {
    key: "family",
    name: "Family Membership",
    priceLine: "$50 / year",
    tagline:
      "Membership for your entire family with reduced member pricing on event tickets.",
    includes: [
      "Member-only discounted pricing for regular COMA events",
      "Family includes member, spouse, children, and parents",
      "Great for families attending multiple events",
    ],
  },
  {
    key: "individual",
    name: "Individual Membership",
    priceLine: "$25 / year",
    tagline:
      "Membership for one individual with reduced member pricing on event tickets.",
    includes: [
      "Member-only discounted pricing for regular COMA events",
      "Perfect if you attend events solo or occasionally",
    ],
  },
];

const benefitGroups: { title: string; items: string[] }[] = [
  {
    title: "Event perks",
    items: [
      "Member discounts for regular COMA events (Onam, Christmas, Picnic, and more)",
      "Member-only events",
      "Active/Healthy events (Walk/Run/Bike clubs and more)",
    ],
  },
  {
    title: "Programs for families",
    items: [
      "Malayalam classes for adults and kids (members only)",
      "Access for your children to COMA Youth Wing (under 18)",
      "Youth volunteering, service club opportunities, and planned events",
      "Meet with industry experts (101 sessions), campus tours, and fun events",
    ],
  },
  {
    title: "Community impact & volunteering",
    items: [
      "Opportunities to participate in charity/volunteering events",
      "Meals on Wheels, YWCA meal hosting, Indian clothing drive, and more (for adults and youth)",
    ],
  },
  {
    title: "Sponsor discounts",
    items: [
      "All-year discounts from COMA sponsors",
      "Exclusive member-only sponsor offers",
    ],
  },
];

function ButtonLink({
  href,
  label,
  variant = "primary",
  external = false,
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#0B5D3B] text-white hover:opacity-95 focus:ring-[#0B5D3B]"
      : variant === "secondary"
      ? "bg-white text-[#0B5D3B] ring-1 ring-[#0B5D3B]/25 hover:bg-[#0B5D3B]/5 focus:ring-[#0B5D3B]"
      : "bg-transparent text-[#0B5D3B] hover:bg-[#0B5D3B]/5 focus:ring-[#0B5D3B]";

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-slate-700">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#8A6A00]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 transition",
        "ring-black/5 hover:-translate-y-0.5 hover:shadow-md",
        tier.highlight ? "shadow-md" : "",
      ].join(" ")}
    >
      {/* Kasavu border */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
      {/* subtle leaf wash */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

      {tier.highlight ? (
        <div className="absolute right-4 top-4">
          <div className="rounded-full bg-[#C9A227] px-3 py-1 text-xs font-semibold text-[#1B1B1B] shadow-sm">
            Recommended
          </div>
        </div>
      ) : null}

      <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
      <div className="mt-1 text-2xl font-semibold text-[#0B5D3B]">
        {tier.priceLine}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tier.tagline}</p>

      <ul className="mt-5 space-y-2">
        {tier.includes.map((i) => (
          <CheckItem key={i}>{i}</CheckItem>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <ButtonLink href="#join" label="Join / Renew" variant="primary" />
        <ButtonLink
          href="mailto:coma.officials@gmail.com?subject=COMA%20Membership"
          label="Questions"
          variant="secondary"
          external
        />
      </div>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Kerala-inspired hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-black/5">
          {/* Pookalam-ish subtle pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 18% 30%, rgba(201,162,39,0.18), transparent 40%),
                radial-gradient(circle at 82% 35%, rgba(11,93,59,0.10), transparent 42%),
                radial-gradient(circle at 55% 80%, rgba(201,162,39,0.12), transparent 45%),
                linear-gradient(135deg, rgba(11,93,59,0.05), rgba(201,162,39,0.04))
              `,
            }}
          />
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              MEMBERSHIP
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Join COMA
              <span className="text-[#0B5D3B]">.</span> Celebrate culture, community, and giving back.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Pick a membership that fits your household and how often you attend events. Membership also unlocks
              members-only programs like Malayalam Classes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#pricing" label="View Membership Levels" variant="primary" />
              <ButtonLink href="/malayalam-classes" label="Malayalam Classes" variant="secondary" />
              <ButtonLink href="/get-involved" label="Get Involved" variant="ghost" />
            </div>

            <p className="mt-4 text-xs font-medium text-slate-500">
              Malayalam Classes are available only to COMA members.
            </p>
          </div>
        </div>

        {/* Tiers */}
        <div id="pricing" className="mt-10 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Membership levels</h2>
              <p className="mt-1 text-sm text-slate-600">
                Choose Sustaining for maximum value, or Family/Individual for member pricing.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tiers.map((t) => (
              <TierCard key={t.key} tier={t} />
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Sustaining includes free admission to all COMA events in 2024 (except mega events).
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Membership benefits</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your membership funds cultural programs, youth initiatives, and community service—while giving you great perks.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefitGroups.map((g) => (
              <div
                key={g.title}
                className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
                <div className="text-base font-semibold text-slate-900">{g.title}</div>
                <ul className="mt-4 space-y-2">
                  {g.items.map((i) => (
                    <CheckItem key={i}>{i}</CheckItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Validity */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Membership validity</h2>
            <p className="text-sm text-slate-600">
              COMA memberships run July → June.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
              <div className="text-sm font-semibold text-slate-900">Membership for 2024</div>
              <div className="mt-1 text-sm text-slate-700">
                Valid from <span className="font-semibold">July 1, 2024</span> to{" "}
                <span className="font-semibold">June 30, 2025</span>
              </div>
            </div>
            <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
              <div className="text-sm font-semibold text-slate-900">Membership for 2025</div>
              <div className="mt-1 text-sm text-slate-700">
                Valid from <span className="font-semibold">July 1, 2025</span> to{" "}
                <span className="font-semibold">June 30, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join */}
        <div id="join" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <h2 className="text-xl font-semibold text-slate-900">Join or renew</h2>
            <p className="mt-2 text-sm text-slate-600">
              Replace the placeholder buttons with your real registration/payment links (or embed a form).
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href="#" label="Join Now (Link)" variant="primary" />
              <ButtonLink href="#" label="Renew (Link)" variant="secondary" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Membership%20Help"
                label="Need help? Email us"
                variant="ghost"
                external
              />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: If you want Malayalam Classes, make sure your membership is active before registering.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
