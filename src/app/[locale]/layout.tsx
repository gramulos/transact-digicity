import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GoogleTagManager } from "@next/third-parties/google";
import { getDictionary } from "./dictionaries";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: "en" | "lv" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = (await params).locale;
  const dict = await getDictionary(locale);

  return {
    title: dict?.seoData.title,
    description: dict?.seoData.description,
    robots: "noindex, nofollow",
    manifest: "/assets/manifest/manifest.json",
    icons: {
      icon: [
        {
          url: "/assets/manifest/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/manifest/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/assets/manifest/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    twitter: dict?.seoData.twitter,
    openGraph: dict?.seoData.openGraph,
  };
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "lv")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
