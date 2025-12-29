// src/app/newsletters/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { sanityClient } from "@/lib/sanity/client";
import { newsletterBySlugQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

type Post = {
  _id: string;
  title: string;
  publishDate: string;
  authorName: string;
  authorBio?: string;
  heroImage?: unknown;
  excerpt?: string;
  content: PortableTextBlock[];
};

type SanityImageValue = {
  _type: "image";
  asset?: { _ref?: string; _type?: "reference" };
  alt?: string;
};

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const img = value as unknown as SanityImageValue;
      if (!img?.asset?._ref) return null;

      const imgUrl = urlFor(img).width(1400).url();

      return (
        <figure className="my-8">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border">
            <Image
              src={imgUrl}
              alt={img.alt || "Newsletter image"}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 pl-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-7 text-gray-800">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string } | undefined)?.href;
      if (!href) return <>{children}</>;

      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="underline underline-offset-2 hover:opacity-80"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default async function NewsletterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Next.js 16: params is a Promise
  const { slug } = await params;

  const post = (await sanityClient.fetch(newsletterBySlugQuery, {
    slug, // ✅ now it is actually provided
  })) as Post | null;

  if (!post) return notFound();

  const heroUrl =
    post.heroImage ? urlFor(post.heroImage).width(600).height(600).url() : null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8">
        <div className="text-xs text-gray-500">
          {new Date(post.publishDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-semibold tracking-tight">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-gray-600">— {post.authorName}</p>
          </div>

          {heroUrl && (
            <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border md:h-44 md:w-44">
              <Image
                src={heroUrl}
                alt={`${post.authorName} photo`}
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          )}
        </div>

        {post.authorBio && (
          <div className="mt-6 rounded-2xl border bg-emerald-50 p-5 text-sm text-gray-800">
            {post.authorBio}
          </div>
        )}
      </header>

      <article className="max-w-none">
        <PortableText value={post.content} components={portableTextComponents} />
      </article>
    </main>
  );
}
