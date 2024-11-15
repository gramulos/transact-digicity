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
        backgroundImage={dict.pageBusiness.callout.bgImage}
        callout={dict.pageBusiness.callout}
      />
      <Section
        theme={dict.pageBusiness.citykey.theme}
        bgImage={dict.pageBusiness.citykey.bgImage}
        bgImageAlt={dict.pageBusiness.citykey.bgImageAlt}
        columns={dict.pageBusiness.citykey.columns.map((column) => ({
          ...column,
          theme: dict.pageBusiness.citykey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageBusiness.citykey.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageBusiness.transit.theme}
        bgImage={dict.pageBusiness.transit.bgImage}
        bgImageAlt={dict.pageBusiness.transit.bgImageAlt}
        columns={dict.pageBusiness.transit.columns.map((column) => ({
          ...column,
          theme: dict.pageBusiness.transit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageBusiness.transit.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageBusiness.giftCards.theme}
        bgImage={dict.pageBusiness.giftCards.bgImage}
        bgImageAlt={dict.pageBusiness.giftCards.bgImageAlt}
        columns={dict.pageBusiness.giftCards.columns.map((column) => ({
          ...column,
          theme: dict.pageBusiness.giftCards.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageBusiness.giftCards.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageBusiness.transactSmart.theme}
        bgImage={dict.pageBusiness.transactSmart.bgImage}
        bgImageAlt={dict.pageBusiness.transactSmart.bgImageAlt}
        columns={dict.pageBusiness.transactSmart.columns.map((column) => ({
          ...column,
          theme: dict.pageBusiness.transactSmart.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageBusiness.transactSmart.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
