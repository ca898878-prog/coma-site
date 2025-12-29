"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events & Media" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <Link href="/" className="font-bold text-lg">
          COMA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Join */}
          <Link
            href="/get-involved/membership"
            className="hidden md:inline-flex rounded bg-black px-4 py-2 text-white text-sm font-semibold"
          >
            Join
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded border px-3 py-2 text-sm font-semibold"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-6 py-3 grid gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 rounded bg-black px-4 py-3 text-white text-sm font-semibold text-center"
            >
              Join / Renew Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
