// src/components/about/Sponsors.tsx
import type { Sponsor } from "../../data/about";
import SponsorTile from "./SponsorTitle";

export default function Sponsors({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="relative mt-6 overflow-hidden rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-black/5">
      {/* Kasavu stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

      {/* Soft pookalam glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0B5D3B]/5 blur-2xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#C9A227]/20 blur-2xl" />

      <div className="relative">
        {sponsors.length ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((s) => (
              <SponsorTile key={s.name} sponsor={s} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#C9A227]/40 bg-[#FBF7EF] p-8 text-center">
            <p className="text-sm text-[#6B5200]">
              Add sponsor logos to{" "}
              <span className="font-mono">/public/sponsors</span> and update the{" "}
              <span className="font-mono">SPONSORS</span> array.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
