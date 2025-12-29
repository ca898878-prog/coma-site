// app/get-involved/page.tsx
import Link from "next/link";

type Cta = { label: string; href: string; external?: boolean };
type Card = {
  key: string;
  emoji: string;
  title: string;
  description: string;
  badge?: string;
  note?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

const cards: Card[] = [
  {
    key: "membership",
    emoji: "🪪",
    title: "Become a COMA Member",
    description:
      "Join or renew to access member pricing, programs, and community initiatives.",
    badge: "Required for Malayalam Classes",
    primaryCta: { label: "Join / Renew", href: "/membership" },
    secondaryCta: { label: "Benefits & Pricing", href: "/membership#pricing" },
  },
  {
    key: "volunteer",
    emoji: "🤝",
    title: "Volunteer With COMA",
    description:
      "Help with events, service programs, youth activities, or Malayalam classes—one-time or ongoing.",
    primaryCta: { label: "Sign Up to Volunteer", href: "/volunteer" },
    secondaryCta: { label: "View Volunteer Roles", href: "/volunteer#roles" },
  },
  {
    key: "malayalam",
    emoji: "📚",
    title: "Malayalam Classes",
    description:
      "Sunday classes focused on speaking, comprehension, and Kerala culture. Ages 5+ recommended.",
    note: "Available to COMA members only.",
    primaryCta: { label: "Class Details & Registration", href: "/malayalam-classes" },
    secondaryCta: {
      label: "Email Questions",
      href: "mailto:coma.officials@gmail.com",
      external: true,
    },
  },
  {
    key: "youth",
    emoji: "🌱",
    title: "Youth Wing",
    description:
      "A space for teens and young adults to build leadership, culture, and community service together.",
    primaryCta: { label: "Join Youth Wing", href: "/youth" },
    secondaryCta: { label: "Programs", href: "/youth#programs" },
  },
  {
    key: "giving",
    emoji: "❤️",
    title: "Community Service & Giving Back",
    description:
      "Explore COMA’s impact—from disaster relief to local service like YWCA Host-a-Meal and Meals on Wheels.",
    primaryCta: { label: "See Our Impact", href: "/giving-back" },
    secondaryCta: { label: "Support a Cause", href: "/giving-back#donate" },
  },
];

const impactStats = [
  { label: "Kerala Flood Relief (2018)", value: "$43,611" },
  { label: "Meals on Wheels volunteering since", value: "2015" },
  { label: "YWCA Host-a-Meal since", value: "2014" },
];

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

  if (cta.external || cta.href.startsWith("mailto:") || cta.href.startsWith("http")) {
    return (
      <a
        href={cta.href}
        className={`${base} ${styles}`}
        target={cta.href.startsWith("http") ? "_blank" : undefined}
        rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
      >
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={`${base} ${styles}`}>
      {cta.label}
    </Link>
  );
}

function CardItem({ card }: { card: Card }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Kasavu stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
      {/* subtle leaf wash */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B5D3B]/5 text-2xl">
            {card.emoji}
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
            {card.badge ? (
              <div className="mt-1 inline-flex rounded-full bg-[#C9A227]/20 px-2.5 py-1 text-xs font-semibold text-[#6B5200]">
                {card.badge}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{card.description}</p>

      {card.note ? (
        <p className="mt-3 text-xs font-medium text-slate-500">{card.note}</p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        <ButtonLink cta={card.primaryCta} variant="primary" />
        {card.secondaryCta ? <ButtonLink cta={card.secondaryCta} variant="secondary" /> : null}
      </div>
    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-black/5">
          {/* Pookalam-ish pattern wash */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
          />
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              GET INVOLVED
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Find your place in COMA
              <span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Join, volunteer, learn, lead, or give back—pick your path and we’ll help you get started.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink cta={{ label: "Start with Membership", href: "/membership" }} variant="primary" />
              <ButtonLink cta={{ label: "Volunteer", href: "/volunteer" }} variant="secondary" />
              <ButtonLink
                cta={{ label: "Email Us", href: "mailto:coma.officials@gmail.com", external: true }}
                variant="ghost"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <CardItem key={card.key} card={card} />
          ))}
        </div>

        {/* Impact strip */}
        <div className="mt-10 relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
          

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Quick impact snapshot</h2>
              <p className="mt-1 text-sm text-slate-600">
                A few highlights from what members and volunteers make possible.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#FBF7EF] px-4 py-3 ring-1 ring-black/5"
                >
                  <div className="text-lg font-semibold text-[#0B5D3B]">{stat.value}</div>
                  <div className="text-xs leading-5 text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Not sure strip */}
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Not sure where to start?</h2>
              <p className="mt-1 text-sm text-slate-600">
                Membership is the best first step—then choose a program or volunteer role that fits your schedule.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <ButtonLink cta={{ label: "Membership", href: "/membership" }} variant="primary" />
              <ButtonLink cta={{ label: "Malayalam Classes", href: "/malayalam-classes" }} variant="secondary" />
              <ButtonLink cta={{ label: "Giving Back", href: "/giving-back" }} variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
