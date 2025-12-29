"use client";
// src/components/about/PersonCard.tsx
import { useMemo, useState } from "react";
import Chip from "./Chip";
import type { Person } from "../../data/about";

function getAvatarTheme(role: string) {
  const r = role.toLowerCase();

  if (r.includes("president")) {
    return {
      bg: "bg-[#0B5D3B]",
      ring: "ring-[#0B5D3B]/30",
      text: "text-white",
    };
  }
  if (r.includes("coordinator")) {
    return {
      bg: "bg-[#0B5D3B]/10",
      ring: "ring-[#0B5D3B]/20",
      text: "text-[#0B5D3B]",
    };
  }
  if (r.includes("youth")) {
    return {
      bg: "bg-[#C9A227]/20",
      ring: "ring-[#C9A227]/30",
      text: "text-[#6B5200]",
    };
  }
  return {
    bg: "bg-[#0B5D3B]/10",
    ring: "ring-[#0B5D3B]/20",
    text: "text-[#0B5D3B]",
  };
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function PersonCard({
  person,
  groupKey,
}: {
  person: Person;
  groupKey: string;
}) {
  const { name, role, location, from, since, family, hobbies } = person;

  const theme = getAvatarTheme(role);

  const inferredJpg = useMemo(() => `/team/${slugify(name)}.jpg`, [name]);
  const inferredPng = useMemo(() => `/team/${slugify(name)}.png`, [name]);

  const [imgSrc, setImgSrc] = useState<string | null>(
    (person as Person & { headshot?: string }).headshot ?? inferredJpg
  );
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = imgSrc && !imgFailed;

  return (
    <details className="group relative overflow-hidden rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
      {/* Kasavu mini stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9A227] via-[#F3E6A1] to-[#C9A227]" />

      {/* Pookalam glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0B5D3B]/5 blur-2xl opacity-0 transition group-open:opacity-100" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#C9A227]/20 blur-2xl opacity-60" />

      <summary className="relative cursor-pointer list-none">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {showImage ? (
                <img
                  src={imgSrc}
                  alt={name}
                  className="h-28 w-20 rounded-2xl object-cover ring-4 ring-[#0B5D3B]/10 transition group-open:scale-[1.03]"
                  onError={() => {
                    if (imgSrc === inferredJpg) setImgSrc(inferredPng);
                    else setImgFailed(true);
                  }}
                />
              ) : (
                <div
                  className={[
                    "flex h-20 w-20 items-center justify-center rounded-2xl",
                    theme.bg,
                    theme.text,
                    "font-semibold text-lg",
                    "ring-4",
                    theme.ring,
                    "transition group-open:scale-[1.03]",
                  ].join(" ")}
                >
                  {initials(name)}
                </div>
              )}
            </div>

            {/* Header text */}
            <div>
              <p className="inline-flex rounded-full bg-[#0B5D3B]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#0B5D3B] ring-1 ring-[#0B5D3B]/15">
                {role}
              </p>

              <p className="mt-1 text-base font-semibold text-slate-900">
                {name}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {location ? <Chip>📍 {location}</Chip> : null}
                {from ? <Chip>🌎 {from}</Chip> : null}
                {since ? <Chip>🗓️ {since}</Chip> : null}
              </div>
            </div>
          </div>

          {/* Read / Close pill */}
          <span className="mt-1 inline-flex rounded-xl bg-[#FBF7EF] px-2.5 py-1 text-xs font-semibold text-[#0B5D3B] ring-1 ring-black/5">
            <span className="group-open:hidden">Read</span>
            <span className="hidden group-open:inline">Close</span>
          </span>
        </div>
      </summary>

      {/* Expanded content */}
      <div className="relative mt-4 space-y-3">
        {family ? (
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Family:</span>{" "}
            {family}
          </p>
        ) : null}

        {hobbies && hobbies.length ? (
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <span
                key={`${groupKey}-${name}-${h}`}
                className="rounded-full bg-[#FBF7EF] px-3 py-1 text-xs font-medium text-[#0B5D3B] ring-1 ring-black/5"
              >
                {h}
              </span>
            ))}
          </div>
        ) : null}

        <p className="text-sm leading-relaxed text-slate-700">{person.bio}</p>
      </div>
    </details>
  );
}
