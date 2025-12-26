import type { ComaEvent } from "../types/event";

export const events: ComaEvent[] = [
  {
    id: "onam-2025",
    title: "Onam Celebration 2025",
    date: "2025-09-07",
    location: "Columbus, OH",
    year: 2025,
    status: "upcoming",
    description:
      "Celebrate Onam with performances, sadhya, and community activities for families across Central Ohio.",
    posterUrl: "/images/events/onam-2025.jpg",
    ctaLabel: "Buy Tickets",
    ctaUrl: "/contact",

    tickets: {
      soldOut: false,
      earlyBirdCutoff: "2025-08-15",
      tiers: [
        { label: "General Admission", price: "$25", earlyBirdPrice: "$20" },
        { label: "COMA Members", price: "$20", earlyBirdPrice: "$15" },
        { label: "Children", price: "$10", note: "Ages 5–12" },
      ],
      footerNote: "Kids under 5 attend free.",
    },
  },

  {
    id: "christmas-2024",
    title: "Christmas & New Year Program 2024",
    date: "2024-12-21",
    location: "Columbus, OH",
    year: 2024,
    status: "past",
    description:
      "Holiday celebration with performances, community announcements, and end-of-year festivities.",
    youtubeUrl: "#",
  },
];
