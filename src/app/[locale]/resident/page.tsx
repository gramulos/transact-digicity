import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import Header from "@/components/HeroBanner/Header";
import { getDictionary } from "../dictionaries";
import { setRequestLocale } from "next-intl/server";

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
      <HeroBanner
        backgroundImage={dict.pageResident.callout.bgImage}
        callout={dict.pageResident.callout}
      />
      <Section
        theme={dict.pageResident.citykey.theme}
        bgImage={dict.pageResident.citykey.bgImage}
        bgImageAlt={dict.pageResident.citykey.bgImageAlt}
        columns={dict.pageResident.citykey.columns.map((column) => ({
          ...column,
          theme: dict.pageResident.citykey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageResident.citykey.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageResident.transit.theme}
        bgImage={dict.pageResident.transit.bgImage}
        bgImageAlt={dict.pageResident.transit.bgImageAlt}
        columns={dict.pageResident.transit.columns.map((column) => ({
          ...column,
          theme: dict.pageResident.transit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageResident.transit.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageResident.giftCards.theme}
        bgImage={dict.pageResident.giftCards.bgImage}
        bgImageAlt={dict.pageResident.giftCards.bgImageAlt}
        columns={dict.pageResident.giftCards.columns.map((column) => ({
          ...column,
          theme: dict.pageResident.giftCards.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageResident.giftCards.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
