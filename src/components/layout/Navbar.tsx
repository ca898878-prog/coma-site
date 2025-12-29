import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          COMA
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/events">Events & Media</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/newsletters">Newsletters</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/get-involved/membership"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Join
        </Link>
      </nav>
    </header>
  );
}
