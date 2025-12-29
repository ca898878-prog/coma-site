// src/components/about/SponsorTile.tsx
import type { Sponsor } from "../../data/about";

export default function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  // support either key so you don't have to hunt everywhere
  const src = sponsor.logoUrl ?? (sponsor as Sponsor & { logoSrc?: string }).logoSrc;

  const Tile = (
    <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[22px] bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Subtle kasavu corner accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-transparent opacity-70" />

      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(11,93,59,0.08), transparent 45%)",
        }}
      />

      {src ? (
        <img
          src={src}
          alt={sponsor.name}
          className="relative max-h-full max-w-full object-contain transition group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <span className="relative text-center text-sm font-semibold text-[#0B5D3B]">
          {sponsor.name}
        </span>
      )}
    </div>
  );

  return sponsor.href ? (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noreferrer"
      aria-label={sponsor.name}
      className="rounded-[22px] focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]/40"
    >
      {Tile}
    </a>
  ) : (
    Tile
  );
}
