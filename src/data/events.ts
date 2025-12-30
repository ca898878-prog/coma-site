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
    id: "Xmas-2025",
    title: "Xmas 2025",
    date: "2025-12-20",
    location: "Columbus, OH",
    year: 2025,
    status: "upcoming",
    description:
      "Ring in Xmas fun with a final celebration.",
    posterUrl: "/images/events/Xmas-2025.jpg",
    ctaLabel: "RSVP",
    ctaUrl: "/contact",
    tickets: {
      soldOut: true,
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
    id: "youth-talent-2025",
    title: "Youth Talent Showcase 2025",
    date: "2025-06-08",
    location: "Dublin, OH",
    year: 2025,
    status: "upcoming",
    description:
      "A platform for young performers in our community to shine through dance, music, and spoken word.",
    posterUrl: "/images/events/youth-talent-2025.jpg",
    ctaLabel: "Register",
    ctaUrl: "/contact",
    tickets: {
      soldOut: true,
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
    id: "summer-picnic-2025",
    title: "COMA Summer Family Picnic",
    date: "2025-07-13",
    location: "Alum Creek State Park, OH",
    year: 2025,
    status: "past",
    description:
      "Outdoor summer picnic with games, potluck, kids activities, and community bonding.",
    posterUrl: "/images/events/summer-picnic-2025.jpg",
    ctaLabel: "View Details",
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
    id: "badminton-2025",
    title: "COMA Badminton Tournament 2025",
    date: "2025-05-18",
    location: "Columbus, OH",
    year: 2025,
    status: "past",
    description:
      "Friendly competitive badminton tournament open to all skill levels.",
    posterUrl: "/images/events/badminton-2025.jpg",
    ctaLabel: "Sign Up",
    ctaUrl: "/contact",
    tickets: {
      soldOut: false,
      tiers: [{ label: "Player Registration", price: "$15" }],
    },
  },

  {
    id: "onam-2024",
    title: "Onam Celebration 2024",
    date: "2024-09-08",
    location: "Columbus, OH",
    year: 2024,
    status: "past",
    description:
      "A vibrant celebration of Onam with traditional sadhya, cultural programs, and community gatherings.",
    posterUrl: "/images/events/onam-2024.jpg",
    youtubeUrl: "#",
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

  {
    id: "volunteer-drive-2024",
    title: "Community Volunteer Drive",
    date: "2024-03-10",
    location: "Columbus, OH",
    year: 2024,
    status: "past",
    description:
      "Giving back to the local community through volunteering and service initiatives.",
  },

  {
    id: "onam-2023",
    title: "Onam Celebration 2023",
    date: "2023-09-10",
    location: "Columbus, OH",
    year: 2023,
    status: "past",
    description:
      "Traditional Onam festivities with cultural programs and community participation.",
    youtubeUrl: "#",
  },
];
