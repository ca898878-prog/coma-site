// app/giving-back/page.tsx
import Link from "next/link";

const impactHighlights = [
  {
    year: "2018",
    items: [
      "Kerala Flood Relief: $43,611.38 donated to Kerala Chief Minister’s Relief Fund",
      "K.S. Chitra musical night proceeds: $4,000 donated to families of fallen Westerville police officers",
      "COMA 10-year anniversary 5K run/walk proceeds supported YWCA Host-a-Meal events",
    ],
  },
  {
    year: "2017",
    items: [
      "$1,000 donated to the Red Cross to help victims of Hurricane Harvey",
      "Donated 5 toaster ovens to The Open Shelter during Thanksgiving season",
    ],
  },
  {
    year: "2015",
    items: [
      "Hosted Shobana’s Krishna and donated $5,000 to the Wounded Warrior Project",
      "Gift cards from annual Christmas Party donated to the YWCA shelter",
      "Clothing drive with partner organizations sent to people in India and Bangladesh",
      "Began participating in Meals on Wheels (Lifecare Alliance)",
    ],
  },
  {
    year: "2014",
    items: [
      "Began conducting 2 annual Host-a-Meal events at the YWCA shelter (serving 150–200 people)",
    ],
  },
  {
    year: "2013",
    items: ["Hosted the Suresh Gopi show and donated $5,000 to the James Cancer Hospital"],
  },
  {
    year: "2011",
    items: [
      "Hosted Kannasum Kadalasum and donated $1,000 of profits to the Mid-Ohio Food Bank",
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

  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
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
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-[#FBF7EF] px-4 py-3 ring-1 ring-black/5">
      <div className="text-lg font-semibold text-[#0B5D3B]">{value}</div>
      <div className="text-xs leading-5 text-slate-600">{label}</div>
    </div>
  );
}

export default function GivingBackPage() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-black/5">
          {/* Pookalam-ish wash */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
           
          />
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              GIVING BACK
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Community Service & Giving Back
              <span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              COMA’s community impact is powered by members and volunteers—supporting local partners,
              relief efforts, and service programs throughout the year.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#donate" label="Support a Cause" variant="primary" />
              <ButtonLink href="/volunteer" label="Volunteer" variant="secondary" />
              <ButtonLink href="/giving-back/archive" label="View Full Archive" variant="ghost" />
            </div>

            {/* Quick stats */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <StatPill value="$43,611" label="Kerala Flood Relief (2018)" />
              <StatPill value="2015" label="Meals on Wheels since" />
              <StatPill value="2014" label="YWCA Host-a-Meal since" />
            </div>
          </div>
        </div>

        {/* Ongoing programs */}
        <div className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Ongoing programs</h2>
              <p className="mt-1 text-sm text-slate-600">
                These are year-round ways COMA shows up in Central Ohio.
              </p>
            </div>
            <ButtonLink href="/volunteer#roles" label="Join a program" variant="secondary" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
              <div className="pointer-events-none absolute -left-28 -bottom-28 h-64 w-64 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

              <div className="relative">
                <div className="text-base font-semibold text-slate-900">
                  Meals on Wheels (Lifecare Alliance)
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  COMA began participating in 2015. While we did one route a month for the first two years,
                  beginning 2018 we expanded to two routes a month with increased volunteer interest.
                </p>
                <ul className="mt-4 space-y-2">
                  <CheckItem>Volunteer-driven meal delivery routes</CheckItem>
                  <CheckItem>Flexible participation</CheckItem>
                  <CheckItem>Meaningful local impact</CheckItem>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ButtonLink href="/volunteer#signup" label="Volunteer for this" variant="primary" />
                  <ButtonLink href="/giving-back/archive" label="View logs" variant="secondary" />
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
              <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#C9A227]/15 blur-2xl" />

              <div className="relative">
                <div className="text-base font-semibold text-slate-900">YWCA Host-a-Meal</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Since 2014, COMA has funded and staffed two annual Host-a-Meal events serving 150–200
                  people, including women and children living in the shelter.
                </p>
                <ul className="mt-4 space-y-2">
                  <CheckItem>Cooking & serving teams</CheckItem>
                  <CheckItem>COMA-funded, volunteer-led</CheckItem>
                  <CheckItem>Family-friendly opportunities</CheckItem>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ButtonLink href="/volunteer#signup" label="Volunteer for this" variant="primary" />
                  <ButtonLink href="/giving-back/archive" label="Past events" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline / highlights */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Impact highlights</h2>
          <p className="mt-2 text-sm text-slate-600">
            A curated timeline of major donations, fundraising, and service milestones.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {impactHighlights.map((block) => (
              <div
                key={block.year}
                className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

                <div className="relative">
                  <div className="inline-flex rounded-full bg-[#0B5D3B]/10 px-3 py-1 text-sm font-semibold text-[#0B5D3B]">
                    {block.year}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#C9A227]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <ButtonLink href="/giving-back/archive" label="View Full Archive" variant="secondary" />
          </div>
        </div>

        {/* Donate */}
        <div id="donate" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <h2 className="text-xl font-semibold text-slate-900">Support a cause</h2>
            <p className="mt-2 text-sm text-slate-600">
              Add donation instructions, payment links, or current initiatives here.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href="#" label="Donate (Link)" variant="primary" />
              <ButtonLink href="/volunteer" label="Volunteer Instead" variant="secondary" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Giving%20Back"
                label="Questions?"
                variant="ghost"
                external
              />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: If you’re not sure what to support, email us and we’ll share current priorities.
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <ButtonLink href="/get-involved" label="← Back to Get Involved" variant="ghost" />
        </div>
      </section>
    </main>
  );
}
