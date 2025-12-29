// app/giving-back/archive/page.tsx
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

/**
 * Archive content based on what you pasted (cleaned into structured arrays)
 */
const impactByYear: { year: string; items: string[] }[] = [
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
      "Gift cards collected during Christmas Party donated to the YWCA shelter",
      "Clothing drive with partner organizations sent to people in India and Bangladesh",
      "Started participating in Meals on Wheels (Lifecare Alliance); expanded to two routes/month beginning 2018",
    ],
  },
  {
    year: "2014",
    items: [
      "Began conducting 2 annual YWCA Host-a-Meal events for women and children (serving ~150–200 people)",
    ],
  },
  {
    year: "2013",
    items: ["Hosted the Suresh Gopi show and donated $5,000 to the James Cancer Hospital"],
  },
  {
    year: "2011",
    items: [
      "Hosted Kannasum Kadalasum (Innocent & Jagathy Sreekumar) and donated $1,000 of profits to Mid-Ohio Food Bank",
    ],
  },
];

type MealLog = { year: string; date: string; volunteers: string; notes: string };

const mealsOnWheelsLog: MealLog[] = [
  // 2018
  { year: "2018", date: "May 27", volunteers: "Arun Kumar, Jacob Vengal, Adithya Arun", notes: "Completed" },
  { year: "2018", date: "May 13", volunteers: "Nish Nishant, Shibu Nair, Arun Davis, Rohan Nishant", notes: "Completed" },
  { year: "2018", date: "Apr 22", volunteers: "Sudha Warrier, Saira Nawaz", notes: "Completed" },
  { year: "2018", date: "Apr 8", volunteers: "Rajesh Ramachandran, Megha Rajesh, Manjula Nair", notes: "Completed" },
  { year: "2018", date: "Mar 25", volunteers: "Rohan Shome, Shome Thomas", notes: "Completed" },
  { year: "2018", date: "Mar 11", volunteers: "Manoj Thomas, Sunil Balkrishnan, Unnikrishnan Nair", notes: "Completed" },
  { year: "2018", date: "Feb 25", volunteers: "Thomas Varughese, Rachel Varughese, Nithin Aryan", notes: "Completed" },
  { year: "2018", date: "Feb 11", volunteers: "Arun Kumar, Valsan Palika, Arun Chand", notes: "Completed" },
  { year: "2018", date: "Jan 28", volunteers: "Nish Nishant, Sunil Balkrishnan, Saira Nawaz", notes: "Completed" },

  // 2017
  { year: "2017", date: "Dec 24", volunteers: "Route unavailable", notes: "Transferred to Holiday Volunteers" },
  { year: "2017", date: "Nov 26", volunteers: "Raj Panicker, Shibu Nair, Nikhil Nair", notes: "Completed" },
  { year: "2017", date: "Oct 22", volunteers: "Manoj Thomas, Thomas Varughese, Nithin Aryan", notes: "Completed" },
  { year: "2017", date: "Sep 24", volunteers: "Austin Pereira, Arun Kumar, Valsan", notes: "Completed" },
  { year: "2017", date: "Aug 27", volunteers: "Shome Thomas, Rohan Shome", notes: "Completed" },
  { year: "2017", date: "Jul 23", volunteers: "Nish Nishant, Arun Varkey, Rachel Mathew", notes: "Completed" },
  { year: "2017", date: "Jun 25", volunteers: "Arun Kumar, Priya Arun, Nish Nishant, Smitha Nishant", notes: "Completed" },
  { year: "2017", date: "May 28", volunteers: "Manoj Thomas, Julie Manoj, Ali Thomas, Melissa Thomas", notes: "Completed" },
  { year: "2017", date: "Apr 23", volunteers: "Joseph Abraham, Manoj Thomas, Melissa Thomas", notes: "Completed" },
  { year: "2017", date: "Mar 26", volunteers: "Arun Kumar, Austin Pereira, Jacob Vengal", notes: "Completed" },
  { year: "2017", date: "Feb 26", volunteers: "Jacob Vengal, Raj Panicker, Rajesh Ramachandran, Megha Rajesh", notes: "Completed" },
  { year: "2017", date: "Jan 22", volunteers: "Arun Kumar, Ajayan Janardhanan, Nish Nishant", notes: "Completed" },

  // 2016 (partial as pasted)
  { year: "2016", date: "Dec 25", volunteers: "Nish Nishant, Arun Kumar", notes: "Transferred to Holiday Volunteers" },
  { year: "2016", date: "Nov 27", volunteers: "Joseph Abraham, Joshua Joseph, Manoj Thomas, Alison Thomas", notes: "Completed" },
  { year: "2016", date: "Oct 23", volunteers: "Mary Eapen, Alex Eapen", notes: "Completed" },
  { year: "2016", date: "Sep 25", volunteers: "Joseph Abraham, Joshua Joseph, Nish Nishant, Mary Eapen", notes: "Completed" },
  { year: "2016", date: "Aug 28", volunteers: "Sudha, Nithya, and Govindan Warrier", notes: "Completed" },
  { year: "2016", date: "Jul 24", volunteers: "Nish Nishant, Jacob Vengal", notes: "Completed" },
  { year: "2016", date: "Jun 26", volunteers: "Nish Nishant, Arun Kumar, Aishwarya Arun", notes: "Completed" },
];

function groupByYear<T extends { year: string }>(rows: T[]) {
  return rows.reduce<Record<string, T[]>>((acc, r) => {
    acc[r.year] = acc[r.year] || [];
    acc[r.year].push(r);
    return acc;
  }, {});
}

export default function GivingBackArchivePage() {
  const mealsGrouped = groupByYear(mealsOnWheelsLog);
  const mealYears = Object.keys(mealsGrouped).sort((a, b) => Number(b) - Number(a));

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
            <p className="text-xs font-semibold tracking-wide text-[#0B5D3B]/80">GIVING BACK</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Archive<span className="text-[#0B5D3B]">.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              A historical record of COMA’s community service, donations, and volunteer-led programs.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href="/giving-back" label="Back to Giving Back" variant="primary" />
              <ButtonLink href="#impact" label="Impact Timeline" variant="secondary" />
              <ButtonLink href="#meals" label="Meals on Wheels" variant="secondary" />
              <ButtonLink href="#ywca" label="YWCA Host-a-Meal" variant="secondary" />
            </div>
          </div>
        </div>

        {/* Impact timeline */}
        <div id="impact" className="mt-12 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Impact timeline</h2>
              <p className="mt-1 text-sm text-slate-600">Major donations, fundraising, and milestones by year.</p>
            </div>
            <Tag>{impactByYear.length} years</Tag>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {impactByYear.map((block) => (
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
        </div>

        {/* Meals on Wheels */}
        <div id="meals" className="mt-12 scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Meals on Wheels volunteer log</h2>
              <p className="mt-1 text-sm text-slate-600">
                Historical routes and volunteer participation (as recorded).
              </p>
            </div>
            <Tag>{mealsOnWheelsLog.length} entries</Tag>
          </div>

          {mealYears.map((year) => (
            <div key={year} className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex rounded-full bg-[#0B5D3B]/10 px-3 py-1 text-sm font-semibold text-[#0B5D3B]">
                  {year}
                </div>
                <div className="text-xs text-slate-500">{mealsGrouped[year].length} routes</div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="h-1.5 bg-gradient-to-r from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]" />
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#FBF7EF] text-xs font-semibold text-slate-700">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-3">Date</th>
                        <th className="px-4 py-3">Volunteers</th>
                        <th className="whitespace-nowrap px-4 py-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {mealsGrouped[year].map((row, idx) => (
                        <tr key={`${row.year}-${row.date}-${idx}`} className="align-top">
                          <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                            {row.date}
                          </td>
                          <td className="px-4 py-3 text-slate-700">{row.volunteers}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="px-4 py-4 text-xs text-slate-500">
                  Want to help keep this log updated? Email{" "}
                  <a className="font-semibold underline text-[#0B5D3B]" href="mailto:coma.officials@gmail.com">
                    coma.officials@gmail.com
                  </a>
                  .
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YWCA */}
        <div id="ywca" className="mt-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E8D07A] to-[#C9A227]" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#C9A227]/15 blur-2xl" />

            <div className="relative">
              <h2 className="text-xl font-semibold text-slate-900">YWCA Host-a-Meal (highlights)</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                YWCA Host-a-Meal provides meals for homeless families at the YWCA Family Center in Northeast
                Columbus. COMA has funded and staffed host-a-meal events for years.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-slate-900">Oct 29, 2016</div>
                  <p className="mt-2 text-sm text-slate-600">
                    COMA sponsored a Host-a-Meal breakfast. (Add photos here if you want later.)
                  </p>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Volunteer-led cooking & serving</CheckItem>
                    <CheckItem>Supports families in temporary housing</CheckItem>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#FBF7EF] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-slate-900">Apr 30, 2016</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Volunteers cooked and served eggs, tater tots, sausage, toast, juice, fruit, and coffee.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Early morning volunteer team</CheckItem>
                    <CheckItem>Served families at the YWCA Family Center</CheckItem>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <ButtonLink href="/volunteer#signup" label="Volunteer for service events" variant="primary" />
                <ButtonLink
                  href={'mailto:${sponsorEmail}?subject=YWCA%20Host-a-Meal%20Photos%20or%20Archive%20Update'}
                  label="Send photos / updates"
                  variant="secondary"
                  external
                />
              </div>

              <p className="mt-5 text-xs text-slate-500">
                If you have more YWCA dates or photo folders, we can add them as a gallery section.
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <ButtonLink href="/giving-back" label="← Back to Giving Back" variant="ghost" />
        </div>
      </section>
    </main>
  );
}
