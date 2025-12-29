// src/components/about/PillarGrid.tsx
type Pillar = { title: string; emoji: string; desc: string };

const PILLARS: Pillar[] = [
  {
    title: "Culture",
    emoji: "🎭",
    desc: "Celebrate Kerala’s traditions through festivals, performances, and cultural programs.",
  },
  {
    title: "Community",
    emoji: "🤝",
    desc: "Create spaces for families and friends to connect, build friendships, and support one another.",
  },
  {
    title: "Youth",
    emoji: "🧑‍🎓",
    desc: "Grow leadership and belonging through youth engagement, volunteering, and community initiatives.",
  },
  {
    title: "Language",
    emoji: "🗣️",
    desc: "Preserve Malayalam through learning opportunities and heritage-focused activities.",
  },
];

export default function PillarGrid() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {PILLARS.map((p) => (
        <div
          key={p.title}
          className="group relative overflow-hidden rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {/* Kasavu stripe */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

         
          <div className="relative flex items-start gap-3">
            {/* Emoji tile */}
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B5D3B]/10 text-xl text-[#0B5D3B] ring-1 ring-[#0B5D3B]/15">
              {p.emoji}
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0B5D3B] transition">
                {p.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {p.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
