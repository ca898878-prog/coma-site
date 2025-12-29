// app/malayalam-classes/page.tsx
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

function InfoCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0B5D3B]/5 text-xl">
            {icon}
          </div>
          <div>
            <div className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
              {title.toUpperCase()}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">{value}</div>
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

export default function MalayalamClassesPage() {
  const teachers = [
    "Veda Warrier",
    "Venu Nair",
    "Madhu Parameshwaran",
    "Prahlad Trivikraman",
    "Indira",
    "Priyadarsini Kumar",
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
              PROGRAM
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Malayalam Classes
              <span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              COMA sponsors Malayalam classes that emphasize speaking and understanding, while helping
              students connect with Kerala culture, history, and literature.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="#registration" label="Registration & Fees" variant="primary" />
              <ButtonLink href="#schedule" label="Schedule" variant="secondary" />
              <ButtonLink href="/membership" label="Membership Required" variant="secondary" />
              <ButtonLink
                href="mailto:coma.officials@gmail.com?subject=Malayalam%20Classes%20Question"
                label="Email Questions"
                variant="ghost"
                external
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Members only</Tag>
              <Tag>Ages 5+ recommended</Tag>
              <Tag>Speaking & comprehension</Tag>
            </div>
          </div>
        </div>

        {/* Quick info */}
        <div id="schedule" className="mt-10 scroll-mt-24 grid gap-4 md:grid-cols-3">
          <InfoCard title="Timing" value="11:00 AM – 12:00 PM" icon="⏰" />
          <InfoCard
            title="Venue"
            value={
              <>
                Lazalle Woods Community Center
                <br />
                8140 Sancus Blvd, Columbus, OH 43215
              </>
            }
            icon="📍"
          />
          <InfoCard
            title="Start Date"
            value={
              <>
                Classes start <span className="font-semibold">09/22</span> onward
                <br />
                <span className="text-xs text-slate-500">
                  Rest of schedule updated later
                </span>
              </>
            }
            icon="🗓️"
          />
        </div>

        {/* Program overview */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
              <div className="pointer-events-none absolute -left-28 -bottom-28 h-64 w-64 rounded-full bg-[#C9A227]/15 blur-2xl" />

              <div className="relative">
                <h2 className="text-xl font-semibold text-slate-900">What students learn</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Juniors are taught “Balapaadam,” and seniors learn to appreciate Kerala culture,
                  history, and literature. The emphasis is on understanding and speaking the language
                  more than writing and reading ability.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                    <div className="text-sm font-semibold text-slate-900">Sub Juniors</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Early learners (5+ recommended).
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                    <div className="text-sm font-semibold text-slate-900">Juniors</div>
                    <div className="mt-1 text-sm text-slate-600">
                      “Balapaadam” + speaking focus.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                    <div className="text-sm font-semibold text-slate-900">Seniors</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Culture, history, literature + language.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ButtonLink href="#registration" label="See fees & how to register" variant="primary" />
                  <ButtonLink
                    href="mailto:coma.officials@gmail.com?subject=Malayalam%20Classes%20Volunteer"
                    label="Volunteer to help"
                    variant="secondary"
                    external
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Teachers */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
            <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#0B5D3B]/5 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Volunteer teachers</h2>
              <p className="mt-2 text-sm text-slate-600">
                Thank you to our teachers who have volunteered for many years:
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {teachers.map((name) => (
                  <span
                    key={name}
                    className="inline-flex rounded-full bg-[#0B5D3B]/10 px-3 py-1 text-xs font-semibold text-[#0B5D3B]"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                <div className="text-sm text-slate-700">
                  Our teachers will appreciate help with the classes. If you’re interested in
                  volunteering or want to know more about the coming academic year (starting in
                  August), please contact us.
                </div>
              </div>

              <div className="mt-6">
                <ButtonLink
                  href="mailto:coma.officials@gmail.com?subject=Malayalam%20Classes%20Volunteer"
                  label="Volunteer for Classes"
                  variant="primary"
                  external
                />
              </div>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div id="registration" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">Registration & fees</h2>
              <p className="mt-2 text-sm text-slate-600">
                Registration is for the entire academic year (August to May). COMA membership is a prerequisite.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-[#FBF7EF] p-6 ring-1 ring-black/5">
                  <div className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
                    ANNUAL FEE
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0B5D3B]">$120</div>
                  <div className="mt-1 text-sm text-slate-600">Per academic year (Aug–May)</div>
                </div>

                <div className="rounded-3xl bg-[#FBF7EF] p-6 ring-1 ring-black/5">
                  <div className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
                    SIBLING FEE
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0B5D3B]">$60</div>
                  <div className="mt-1 text-sm text-slate-600">For sibling(s)</div>
                </div>

                <div className="rounded-3xl bg-[#FBF7EF] p-6 ring-1 ring-black/5">
                  <div className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">
                    MEMBERSHIP
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#0B5D3B]">Required</div>
                  <div className="mt-1 text-sm text-slate-600">
                    <Link href="/membership" className="font-semibold underline text-[#0B5D3B]">
                      Join/renew COMA
                    </Link>{" "}
                    before registering
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                  <div className="text-base font-semibold text-slate-900">How to pay</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Please QuickPay the fees to{" "}
                    <a className="font-semibold underline text-[#0B5D3B]" href="mailto:coma.officials@gmail.com">
                      coma.officials@gmail.com
                    </a>
                    .
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <ButtonLink
                      href="mailto:coma.officials@gmail.com?subject=Malayalam%20Classes%20Registration"
                      label="Register via Email"
                      variant="primary"
                      external
                    />
                    <ButtonLink href="/membership" label="Membership" variant="secondary" />
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
                  <div className="text-base font-semibold text-slate-900">Need help?</div>
                  <ul className="mt-3 space-y-2">
                    <CheckItem>Questions about the academic year or schedule</CheckItem>
                    <CheckItem>Volunteering to support classes</CheckItem>
                    <CheckItem>Confirming membership status</CheckItem>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <ButtonLink
                      href="mailto:coma.officials@gmail.com?subject=Malayalam%20Classes%20Question"
                      label="Email Us"
                      variant="secondary"
                      external
                    />
                    <ButtonLink href="/get-involved" label="Get Involved" variant="ghost" />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-600">
                For more details, please contact <span className="font-semibold text-slate-900">Ravi Hariharan</span> at{" "}
                <a className="font-semibold underline text-[#0B5D3B]" href="mailto:coma.officials@gmail.com">
                  coma.officials@gmail.com
                </a>
                .
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
