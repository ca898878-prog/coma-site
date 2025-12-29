import { groq } from "next-sanity";

export const newslettersQuery = groq`
  *[
    _type == "post"
    && !(_id in path("drafts.**"))
    && category == "newsletter"
  ]
  | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    publishDate,
    excerpt,
    heroImage
  }
`;

export const newsletterBySlugQuery = groq`
  *[
    _type == "post"
    && !(_id in path("drafts.**"))
    && slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    publishDate,
    authorName,
    authorBio,
    heroImage,
    excerpt,
    content
  }
`;
