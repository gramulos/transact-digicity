import type { MetadataRoute } from "next";

const urls = [
  "",
  "/transit",
  "/transact-smart",
  "/resident",
  "/government",
  "/gift-cards",
  "/ecosystem",
  "/city-key",
  "/business",
];

const langs = ["en", "lv"];

export default function sitemap(): MetadataRoute.Sitemap {
  return urls.map((url) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    lastModified: new Date(),
    alternates: {
      languages: langs.reduce(
        (acc, lang) => ({
          ...acc,
          [lang]: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}${url}`,
        }),
        {}
      ),
    },
  }));
}
