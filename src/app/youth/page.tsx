// app/youth/page.tsx
import Link from "next/link";

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

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B5D3B]/5 text-2xl">
            {icon}
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">{title}</div>
            <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
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

export default function YouthPage() {
  const programs = [
    {
      icon: "🤝",
      title: "Volunteering & Service Club",
      desc: "Join organized service opportunities (Meals on Wheels, community events, and more).",
    },
    {
      icon: "🎤",
      title: "Leadership & 101 Sessions",
      desc: "Meet with industry experts, learn career basics, and build confidence.",
    },
    {
      icon: "🏫",
      title: "Campus Tours & Exploration",
      desc: "University campus tours and fun group outings that keep it social.",
    },
    {
      icon: "🎉",
      title: "Culture & Community",
      desc: "Celebrate traditions, connect with friends, and help shape youth-friendly events.",
    },
  ];

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
              YOUTH WING
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Lead. Serve. Connect
              <span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The COMA Youth Wing helps youth (under 18) build leadership, explore service opportunities,
              and stay connected to community and culture.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#join" label="Join Youth Wing" variant="primary" />
              <ButtonLink href="#programs" label="Programs" variant="secondary" />
              <ButtonLink href="/volunteer" label="Volunteer Page" variant="ghost" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=COMA%20Youth%20Wing"
                label="Email Questions"
                variant="ghost"
                external
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Under 18</Tag>
              <Tag>Service & leadership</Tag>
              <Tag>Career + campus exploration</Tag>
            </div>
          </div>
        </div>

        {/* What it is */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">What is Youth Wing?</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Youth Wing is a space for teens and young adults to grow together—through service,
                cultural connection, and leadership opportunities. It’s designed to be welcoming for
                first-timers and meaningful for returning members.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-slate-900">Great if you want</div>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>Volunteer hours and real community impact</CheckItem>
                    <CheckItem>New friends + group activities</CheckItem>
                    <CheckItem>Leadership and confidence-building</CheckItem>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-slate-900">Parents love it because</div>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>It’s structured and community-led</CheckItem>
                    <CheckItem>Service opportunities are age-appropriate</CheckItem>
                    <CheckItem>Builds culture, identity, and skills</CheckItem>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Quick actions</h2>
              <p className="mt-2 text-sm text-slate-600">
                Want to jump in right away? These are the easiest first steps.
              </p>

              <div className="mt-5 flex flex-col gap-2">
                <ButtonLink href="#join" label="Join Youth Wing" variant="primary" />
                <ButtonLink href="/volunteer#signup" label="Volunteer Sign-Up" variant="secondary" />
                <ButtonLink href="/giving-back" label="See Giving Back" variant="secondary" />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Youth Wing access is a membership benefit for children of COMA members.
              </p>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div id="programs" className="mt-12 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Programs</h2>
              <p className="mt-1 text-sm text-slate-600">
                A mix of service, learning, and fun—so youth can grow in different ways.
              </p>
            </div>
            <ButtonLink href="#join" label="Join" variant="primary" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {programs.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>

        {/* Join */}
        <div id="join" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Join Youth Wing</h2>
              <p className="mt-2 text-sm text-slate-600">
                Add your registration link or contact instructions here (Google Form or email).
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <ButtonLink href="#" label="Youth Wing Form (Link)" variant="primary" />
                <ButtonLink
                  href="mailto:coma.officials@gmail.com?subject=COMA%20Youth%20Wing%20Sign%20Up"
                  label="Sign Up via Email"
                  variant="secondary"
                  external
                />
                <ButtonLink href="/membership" label="Membership" variant="ghost" />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                If you don’t have a form ready yet, keep the email option and we’ll swap in the link later.
              </p>
            </div>
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
