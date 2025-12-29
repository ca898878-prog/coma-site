// src/components/about/Sponsors.tsx
import type { Sponsor } from "../../data/about";
import SponsorTile from "./SponsorTitle";

export default function Sponsors({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {sponsors.length ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {sponsors.map((s) => (
            <SponsorTile key={s.name} sponsor={s} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center">
          <p className="text-sm text-slate-600">
            Add sponsor logos to <span className="font-mono">/public/sponsors</span> and update the{" "}
            <span className="font-mono">SPONSORS</span> array.
          </p>
        </div>
      )}
    </div>
  );
}
