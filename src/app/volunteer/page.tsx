// app/volunteer/page.tsx
import Link from "next/link";

type Role = {
  title: string;
  desc: string;
  tags: string[];
};

const paths: Role[] = [
  {
    title: "Event Support",
    desc: "Help with setup, check-in, food service, stage support, and clean-up.",
    tags: ["One-time", "Great for newcomers"],
  },
  {
    title: "Community Service",
    desc: "Meals on Wheels, YWCA Host-a-Meal, drives, and relief initiatives.",
    tags: ["Ongoing", "High impact"],
  },
  {
    title: "Malayalam Classes Support",
    desc: "Assist teachers with classroom help, logistics, or coordination.",
    tags: ["Weekly/Seasonal", "Family-friendly"],
  },
  {
    title: "Youth Wing Support",
    desc: "Mentor, coordinate programs, or support youth-led service activities.",
    tags: ["Flexible", "Leadership"],
  },
  {
    title: "Leadership & Coordination",
    desc: "Lead a committee, run a program, or help manage year-round operations.",
    tags: ["Ongoing", "Leadership"],
  },
];

const timeOptions = [
  { title: "I have 2–3 hours", desc: "Perfect for event-day help or one-off tasks." },
  { title: "I can help monthly", desc: "Great for service programs and planning support." },
  { title: "I can help weekly", desc: "Ideal for classes, youth programs, or core teams." },
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

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-[#FBF7EF]">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-8 sm:p-10 shadow-sm ring-1 ring-black/5">
          {/* Pookalam-ish wash */}
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
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              VOLUNTEER
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Lend a hand. Build community
              <span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              COMA runs on volunteers. Whether you have a couple hours for an event or want to be part of a
              year-round team, we’ll help you find a great fit.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#signup" label="Volunteer Sign-Up" variant="primary" />
              <ButtonLink href="#roles" label="Ways to Volunteer" variant="secondary" />
              <ButtonLink href="/giving-back" label="See Our Impact" variant="ghost" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Volunteer%20Interest"
                label="Email Us"
                variant="ghost"
                external
              />
            </div>
          </div>
        </div>

        {/* Quick chooser */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {timeOptions.map((opt) => (
            <div
              key={opt.title}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
              <div className="text-base font-semibold text-slate-900">{opt.title}</div>
              <div className="mt-2 text-sm text-slate-600">{opt.desc}</div>
            </div>
          ))}
        </div>

        {/* Ways to volunteer */}
        <div id="roles" className="mt-12 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Ways to volunteer</h2>
              <p className="mt-1 text-sm text-slate-600">
                Pick a lane (or two). You can always switch based on your schedule.
              </p>
            </div>
            <div className="flex gap-2">
              <ButtonLink href="#signup" label="Sign Up" variant="primary" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Volunteer%20Question"
                label="Ask a question"
                variant="secondary"
                external
              />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {paths.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <ButtonLink href="#signup" label="I’m interested" variant="primary" />
                    {p.title.includes("Malayalam") ? (
                      <ButtonLink href="/malayalam-classes" label="See Classes" variant="secondary" />
                    ) : p.title.includes("Community Service") ? (
                      <ButtonLink href="/giving-back" label="See Giving Back" variant="secondary" />
                    ) : p.title.includes("Youth") ? (
                      <ButtonLink href="/youth" label="Youth Wing" variant="secondary" />
                    ) : (
                      <ButtonLink
                        href={'mailto:coma.officials@gmail.com?subject=COMA%20Volunteer%20-%20${encodeURIComponent(p.title)}'}
                        label="Ask about this"
                        variant="secondary"
                        external
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-semibold text-slate-900">What to expect</h2>
            <p className="text-sm text-slate-600">We’ll keep it easy and respectful of your time.</p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
              <div className="text-sm font-semibold text-slate-900">How we match volunteers</div>
              <ul className="mt-3 space-y-2">
                <CheckItem>We’ll ask what you enjoy and how much time you have</CheckItem>
                <CheckItem>We’ll share upcoming needs (events, service, programs)</CheckItem>
                <CheckItem>You can start small and grow into leadership</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
              <div className="text-sm font-semibold text-slate-900">Good to know</div>
              <ul className="mt-3 space-y-2">
                <CheckItem>No prior experience needed—training provided as needed</CheckItem>
                <CheckItem>Family-friendly opportunities available</CheckItem>
                <CheckItem>You’ll be contacted via email with next steps</CheckItem>
              </ul>
            </div>
          </div>
        </div>

        {/* Signup */}
        <div id="signup" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />

            <h2 className="text-xl font-semibold text-slate-900">Volunteer sign-up</h2>
            <p className="mt-2 text-sm text-slate-600">
              Hook this up to a Google Form link, embedded form, or email-based sign-up.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href="#" label="Volunteer Form (Link)" variant="primary" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Volunteer%20Sign%20Up"
                label="Email Sign-Up"
                variant="secondary"
                external
              />
              <ButtonLink href="/get-involved" label="Back to Get Involved" variant="ghost" />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              If you’re not sure where you fit, choose “Volunteer Form” and we’ll help match you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
