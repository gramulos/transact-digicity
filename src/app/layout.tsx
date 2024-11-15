import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const graphikLCWeb = localFont({
  src: [
    {
      path: "./fonts/Graphik-SuperItalic-Cy-Web.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Super-Cy-Web.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-BlackItalic-Cy-Web.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Black-Cy-Web.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-BoldItalic-Cy-Web.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Bold-Cy-Web.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-SemiboldItalic-Cy-Web.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Semibold-Cy-Web.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-MediumItalic-Cy-Web.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Medium-Cy-Web.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-RegularItalic-Cy-Web.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Regular-Cy-Web.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-LightItalic-Cy-Web.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Light-Cy-Web.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-ExtralightItalic-Cy-Web.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Extralight-Cy-Web.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Graphik-ThinItalic-Cy-Web.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Graphik-Thin-Cy-Web.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Fully In-House Payment Service Provider for Your Business",
  description:
    "Transact Pro is Latvia-based licensed provider of payment card issuing, acquiring and online payment acceptance tailored services",
  robots: "all",
  themeColor: "#ffffff",
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
  twitter: {
    card: "summary",
    site: "@transactpro",
    title: "Fully In-House Payment Service Provider for Your Business",
    description:
      "Transact Pro is Latvia-based licensed provider of payment card issuing, acquiring and online payment acceptance tailored services",
    images: "https://www.transactpro.lv/assets/manifest/graph-preview.jpg",
  },
  openGraph: {
    url: "https://www.transactpro.lv/",
    title: "Fully In-House Payment Service Provider for Your Business",
    description:
      "Transact Pro is Latvia-based licensed provider of payment card issuing, acquiring and online payment acceptance tailored services",
    images: "https://www.transactpro.lv/assets/manifest/graph-preview.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graphikLCWeb.variable} antialiased`}>{children}</body>
    </html>
  );
}
