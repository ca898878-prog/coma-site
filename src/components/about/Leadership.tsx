// src/components/about/Leadership.tsx
import type { Person } from "../../data/about";
import PersonCard from "./PersonCard";


function CommitteeBlock({
  title,
  people,
  variant,
  subtitle,
  columns = "",
}: {
  title: string;
  people: Person[];
  variant: "exec" | "general";
  subtitle?: string;
  columns?: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-700">{subtitle}</p>
          )}
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          {people.length} {people.length === 1 ? "member" : "members"}
        </span>
      </div>

      {/* Cards */}
      <div className={`mt-4 grid gap-4 ${columns}`}>
        {people.map((person) => (
          <PersonCard
            key={`${title}-${person.name}`}
            person={person}
            groupKey={title}
          />
        ))}
      </div>
    </div>
  );
}

export default function Leadership({
  executive,
  trustees,
  general,
}: {
  executive: Person[];
  trustees: Person[];
  general: Person[];
}) {
  return (
    <div className="space-y-6">
      {/* Executive + Trustees side by side (1 col each) */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CommitteeBlock
          title="Executive Committee"
          subtitle="Volunteer leaders guiding COMA’s year-to-year direction and programming."
          people={executive}
          variant="exec"
          // 👈 no columns prop = 1 column
        />

        <CommitteeBlock
          title="Trustees"
          subtitle="Governance, continuity, and oversight supporting COMA’s mission."
          people={trustees}
          variant="general"
          // 👈 also 1 column
        />
      </div>

      {/* General Committee – 2 columns */}
      <CommitteeBlock
        title="General Committee"
        subtitle="Committee leads and volunteers powering events, youth programs, and community initiatives."
        people={general}
        variant="general"
        columns="md:grid-cols-2"
      />
    </div>
  );
}
