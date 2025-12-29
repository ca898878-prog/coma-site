// src/components/about/SponsorTile.tsx
import Image from "next/image";
import type { Sponsor } from "../../data/about";

export default function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const Tile = (
    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      {sponsor.logoSrc ? (
        <img
          src={sponsor.logoSrc}
          alt={sponsor.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-center text-sm font-semibold text-slate-700">{sponsor.name}</span>
      )}
    </div>
  );

  return sponsor.href ? (
    <a href={sponsor.href} target="_blank" rel="noreferrer" aria-label={sponsor.name}>
      {Tile}
    </a>
  ) : (
    Tile
  );
}
