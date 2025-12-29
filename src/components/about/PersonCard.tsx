"use client";
// src/components/about/PersonCard.tsx
import { useMemo, useState } from "react";
import Chip from "./Chip";
import type { Person } from "../../data/about";

function getAvatarTheme(role: string) {
  const r = role.toLowerCase();

  if (r.includes("president")) {
    return { bg: "bg-slate-900", ring: "ring-slate-900/20", text: "text-white" };
  }
  if (r.includes("coordinator")) {
    return { bg: "bg-teal-600", ring: "ring-teal-600/20", text: "text-white" };
  }
  if (r.includes("youth")) {
    return { bg: "bg-rose-100", ring: "ring-rose-200", text: "text-rose-700" };
  }
  return { bg: "bg-slate-200", ring: "ring-slate-300", text: "text-slate-700" };
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

// Convert a name to kebab-case slug: "Stephen John" -> "stephen-john"
function slugify(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function PersonCard({ person, groupKey }: { person: Person; groupKey: string }) {
  const { name, role, location, from, since, family, hobbies } = person;

  const theme = getAvatarTheme(role);

  // If user provided headshot use it, else infer it from name.
  const inferredJpg = useMemo(() => `/team/${slugify(name)}.jpg`, [name]);
  const inferredPng = useMemo(() => `/team/${slugify(name)}.png`, [name]);

  // Try headshot -> inferred jpg -> inferred png
  const [imgSrc, setImgSrc] = useState<string | null>(
    (person as Person & { headshot?: string }).headshot ?? inferredJpg
  );
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = imgSrc && !imgFailed;

  return (
    <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <summary className="cursor-pointer list-none">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            {/* Avatar */}
<div className="relative flex-shrink-0">
  {showImage ? (
    <img
      src={imgSrc}
      alt={name}
      className="h-28 w-20 flex-shrink-0 rounded-2xl object-cover ring-4 ring-slate-900/5 transition group-open:scale-[1.03]"
      onError={() => {
        if (imgSrc === inferredJpg) setImgSrc(inferredPng);
        else setImgFailed(true);
      }}
    />
  ) : (
    <div
      className={[
        "flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl",
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
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{role}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{name}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {location ? <Chip>📍 {location}</Chip> : null}
                {from ? <Chip>🌎 {from}</Chip> : null}
                {since ? <Chip>🗓️ {since}</Chip> : null}
              </div>
            </div>
          </div>

          <span className="mt-1 rounded-xl bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="group-open:hidden">Read</span>
            <span className="hidden group-open:inline">Close</span>
          </span>
        </div>
      </summary>

      <div className="mt-3 space-y-3">
        {family ? (
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Family:</span> {family}
          </p>
        ) : null}

        {hobbies && hobbies.length ? (
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <span
                key={`${groupKey}-${name}-${h}`}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
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
