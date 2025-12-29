// src/components/about/PillarGrid.tsx
type Pillar = { title: string; emoji: string; desc: string };

const PILLARS: Pillar[] = [
  { title: "Culture", emoji: "🎭", desc: "Celebrate Kerala’s traditions through festivals, performances, and cultural programs." },
  { title: "Community", emoji: "🤝", desc: "Create spaces for families and friends to connect, build friendships, and support one another." },
  { title: "Youth", emoji: "🧑‍🎓", desc: "Grow leadership and belonging through youth engagement, volunteering, and community initiatives." },
  { title: "Language", emoji: "🗣️", desc: "Preserve Malayalam through learning opportunities and heritage-focused activities." },
];

export default function PillarGrid() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {PILLARS.map((p) => (
        <div
          key={p.title}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xl">
              {p.emoji}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{p.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
