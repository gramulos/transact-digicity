import { setRequestLocale } from "next-intl/server";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import Header from "@/components/HeroBanner/Header";
import ShortHeroBanner from "@/components/ShortHero";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: "en" | "lv" }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  setRequestLocale(locale);

  return (
    <>
      <Header {...dict.header} theme="light" />
      <ShortHeroBanner
        callout={dict.pageHome.callout}
        backgroundImage={dict.pageHome.callout.bgImage}
        theme={dict.pageHome.callout.theme}
        data={dict.pageHome.callout.data.map((item) => ({
          ...item,
          theme: dict.pageHome.callout.theme,
        }))}
      />
      <Section
        theme={dict.pageHome.cards.theme}
        bgImage={dict.pageHome.cards.bgImage}
        bgImageAlt={dict.pageHome.cards.bgImageAlt}
        columns={dict.pageHome.cards.columns.map((column) => ({
          ...column,
          theme: dict.pageHome.cards.theme,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageHome.cards.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageHome.digicity.theme}
        bgImage={dict.pageHome.digicity.bgImage}
        bgImageAlt={dict.pageHome.digicity.bgImageAlt}
        columns={dict.pageHome.digicity.columns.map((column) => ({
          ...column,
          theme: dict.pageHome.digicity.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageHome.digicity.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
