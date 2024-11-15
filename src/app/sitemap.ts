import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          lv: "https://acme.com/es",
          en: "https://acme.com/de",
        },
      },
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          lv: "https://acme.com/es/about",
          en: "https://acme.com/de/about",
        },
      },
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          lv: "https://acme.com/es/blog",
          en: "https://acme.com/de/blog",
        },
      },
    },
  ];
}
