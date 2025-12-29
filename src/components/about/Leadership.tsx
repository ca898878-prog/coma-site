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
  const accent =
    variant === "exec"
      ? "from-[#0B5D3B] via-[#C9A227] to-[#0B5D3B]"
      : "from-[#C9A227] via-[#F3E6A1] to-[#C9A227]";

  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
      {/* Kasavu stripe */}
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />

  
      {/* Header */}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0B5D3B] transition">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{subtitle}</p>
          )}
        </div>

        <span className="shrink-0 rounded-full bg-[#0B5D3B]/10 px-2.5 py-1 text-xs font-semibold text-[#0B5D3B] ring-1 ring-[#0B5D3B]/15">
          {people.length} {people.length === 1 ? "member" : "members"}
        </span>
      </div>

      {/* Cards */}
      <div className={`relative mt-4 grid gap-4 ${columns}`}>
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
      {/* Executive + Trustees side by side */}
      <div className="grid gap-6 lg:grid-cols-2">
        <CommitteeBlock
          title="Executive Committee"
          subtitle="Volunteer leaders guiding COMA’s year-to-year direction and programming."
          people={executive}
          variant="exec"
          // 1 column by default
        />

        <CommitteeBlock
          title="Trustees"
          subtitle="Governance, continuity, and oversight supporting COMA’s mission."
          people={trustees}
          variant="general"
          // 1 column by default
        />
      </div>

      {/* General Committee */}
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
