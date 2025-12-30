import Link from "next/link";

type Newsletter = {
  title: string;
  date: string; // YYYY-MM-DD
  href: string; // PDF or internal page
};

type SponsorRef = {
  name: string;
  href?: string;
  tier?: "Gold" | "Silver" | "Bronze" | "Community";
};

type ResourceDoc = {
  title: string;
  description: string;
  href: string;
  tag?: "PDF" | "Link" | "Form";
};

type CommunityLink = {
  title: string;
  description: string;
  href: string;
};

const newsletters: Newsletter[] = [
  { title: "June 2025 Newsletter", date: "2025-06-01", href: "/newsletters/newsletter-june-2025" },
  { title: "May 2025 Newsletter", date: "2025-05-01", href: "/newsletters/newsletter-may-2025" },
  { title: "April 2025 Newsletter", date: "2025-04-01", href: "/newsletters/newsletter-april-2025" },
];

const sponsorRefs: SponsorRef[] = [
  { name: "Sponsor 1", tier: "Gold", href: "#" },
  { name: "Sponsor 2", tier: "Silver", href: "#" },
  { name: "Sponsor 3", tier: "Bronze", href: "#" },
  { name: "Sponsor 4", tier: "Community", href: "#" },
];

const documents: ResourceDoc[] = [
  {
    title: "COMA Bylaws",
    description: "Official governance document for the organization.",
    href: "#",
    tag: "PDF",
  },
  {
    title: "Nonprofit / 501(c)(3) Documentation",
    description: "IRS determination letter and nonprofit status documents.",
    href: "#",
    tag: "PDF",
  },
  {
    title: "Sponsorship Packet",
    description: "Sponsor tier details + benefits for supporting COMA.",
    href: "#",
    tag: "PDF",
  },
  {
    title: "Volunteer Guidelines",
    description: "How volunteering works and what to expect at programs/events.",
    href: "#",
    tag: "PDF",
  },
  {
    title: "Malayalam Classes Handbook",
    description: "Class schedule, policies, and learning resources.",
    href: "#",
    tag: "PDF",
  },
];

const communityLinks: CommunityLink[] = [
  {
    title: "Facebook",
    description: "Community updates, posts, and event announcements.",
    href: "https://www.facebook.com/coma.ohio/",
  },
  {
    title: "YouTube",
    description: "Event highlights and performance videos.",
    href: "https://www.youtube.com/user/comacmh/playlists",
  },
  {
    title: "WhatsApp Announcements",
    description: "Fast updates and reminders (link shared upon request).",
    href: "https://chat.whatsapp.com/DVq11LkFSEs5eESNgDA6VM",
  },
];

export default function ResourcesPage() {
  const sortedNewsletters = [...newsletters].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="mt-4 text-gray-600">
          Newsletters, helpful documents, and community links — everything important in one place.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <Link href="/contact" className="rounded bg-black px-5 py-2.5 text-white text-sm">
            Need help finding something?
          </Link>
          <Link href="/events" className="rounded border px-5 py-2.5 text-sm">
            Browse Events
          </Link>
        </div>
      </header>

      {/* Newsletters */}
      <section className="mt-14">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold">Newsletters</h2>
          <Link href="/newsletters" className="text-sm underline">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4">
          {sortedNewsletters.length === 0 ? (
            <div className="rounded border p-6 text-gray-600">
              No newsletters posted yet.
            </div>
          ) : (
            sortedNewsletters.map((n) => (
              <div key={n.href} className="rounded-xl border p-5 flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-sm text-gray-500">{formatPrettyDate(n.date)}</div>
                  <div className="mt-1 font-semibold">{n.title}</div>
                </div>

                <Link href={n.href} className="text-sm underline">
                  Open →
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Sponsors (reference) */}
      <section className="mt-16">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold">Sponsors</h2>
          <Link href="/Sponsors" className="text-sm underline">
            Sponsor showcase →
          </Link>
        </div>

        <p className="mt-2 text-gray-600 max-w-2xl">
          A reference list of sponsors supporting COMA. Full sponsor logos and highlights are on the Sponsors page.
        </p>

        <div className="mt-8 rounded-xl bg-gray-50 p-6">
          <h3 className="font-semibold">Become a sponsor</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            Sponsorship helps fund cultural programs, youth initiatives, and community service. We’d love to partner
            with local businesses.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="text-sm underline">
              Contact us about sponsorship →
            </Link>
          </div>
        </div>
      </section>

      {/* Member Directory (portal link) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Member Directory</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          The member directory is available to logged-in members (privacy-first). You can opt in/out of visibility.
        </p>

        <div className="mt-6 rounded-xl border p-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="font-semibold">Members-only</div>
            <div className="mt-1 text-sm text-gray-600">
              Find community members by name/city and send a message without sharing personal emails publicly.
            </div>
          </div>

          <Link href="/contact" className="text-sm underline">
           = Request access to the member directory →
          </Link>

        </div>
      </section>

      {/* Documents */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Documents & Links</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Download official documents, guidelines, and helpful resources.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {documents.map((d) => (
            <div key={d.title} className="rounded-xl border p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold">{d.title}</div>
                {d.tag && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-white">
                    {d.tag}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-gray-600">{d.description}</p>

              <div className="mt-4">
                {d.href !== "#" ? (
                  <a className="text-sm underline" href={d.href} target="_blank" rel="noreferrer">
                    Open →
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">
                    Link coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Links */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Community Links</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Follow COMA online for announcements and media.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {communityLinks.map((c) => (
            <div key={c.title} className="rounded-xl border p-6">
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>

              <div className="mt-4">
                {c.href !== "#" ? (
                  <a className="text-sm underline" href={c.href} target="_blank" rel="noreferrer">
                    Open →
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">Link coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
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
