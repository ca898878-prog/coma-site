export type TicketTier = {
  label: string;          // "General", "COMA Member", "Child"
  price: string;          // "$25"
  earlyBirdPrice?: string; // "$20"
  note?: string;          // "Ages 5–12"
};

export type ComaEvent = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  location: string;
  year: number;
  status: "upcoming" | "past";

  description?: string;
  posterUrl?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  galleryUrl?: string;
  youtubeUrl?: string;

  tickets?: {
    soldOut?: boolean;            // badge + CTA disabled behavior
    earlyBirdCutoff?: string;     // YYYY-MM-DD
    tiers?: TicketTier[];         // pricing table rows
    footerNote?: string;          // "Kids under 5 free"
  };
};
