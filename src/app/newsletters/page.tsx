import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { newslettersQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type NewsletterCard = {
  _id: string;
  title: string;
  slug: string;
  publishDate: string;
  excerpt: string;
  heroImage?: unknown;
};

export default async function NewslettersPage() {
  const posts: NewsletterCard[] = await sanityClient.fetch(newslettersQuery);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Newsletters</h1>
        <p className="mt-2 text-sm text-gray-600">
          Stories, updates, and community highlights.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => {
          const imgUrl =
            p.heroImage ? urlFor(p.heroImage).width(900).height(600).url() : null;

          return (
            <article
              key={p._id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {imgUrl && (
                <div className="relative h-52 w-full">
                  <Image
                    src={imgUrl}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              <div className="p-5">
                <div className="text-xs text-gray-500">
                  {new Date(p.publishDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h2 className="mt-1 text-xl font-semibold leading-snug">
                  <Link className="hover:underline" href={`/newsletters/${p.slug}`}>
                    {p.title}
                  </Link>
                </h2>

                <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                  {p.excerpt}
                </p>

                <div className="mt-4">
                  <Link
                    href={`/newsletters/${p.slug}`}
                    className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {posts.length === 0 && (
        <p className="text-gray-600">No newsletters published yet.</p>
      )}
    </main>
  );
}
