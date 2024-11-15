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
        backgroundImage={dict.pageGovernment.callout.bgImage}
        callout={{
          title: dict.pageGovernment.callout.title,
          theme: dict.pageGovernment.callout.theme,
        }}
      />
      <Section
        theme={dict.pageGovernment.citykey.theme}
        bgImage={dict.pageGovernment.citykey.bgImage}
        bgImageAlt={dict.pageGovernment.citykey.bgImageAlt}
        columns={dict.pageGovernment.citykey.columns.map((column) => ({
          ...column,
          theme: dict.pageGovernment.citykey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGovernment.citykey.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageGovernment.transit.theme}
        bgImage={dict.pageGovernment.transit.bgImage}
        bgImageAlt={dict.pageGovernment.transit.bgImageAlt}
        columns={dict.pageGovernment.transit.columns.map((column) => ({
          ...column,
          theme: dict.pageGovernment.transit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGovernment.transit.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageGovernment.gov.theme}
        bgImage={dict.pageGovernment.gov.bgImage}
        bgImageAlt={dict.pageGovernment.gov.bgImageAlt}
        columns={dict.pageGovernment.gov.columns.map((column) => ({
          ...column,
          theme: dict.pageGovernment.gov.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGovernment.gov.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
