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
      <Header {...dict.header} theme="dark" />
      <HeroBanner
        backgroundImage="/assets/patterns/light/pattern_06.svg"
        callout={dict.pageTransactSmart.callout}
        isFullWidth={dict.pageTransactSmart.callout.isFullWidth}
      />
      <Section
        theme={dict.pageTransactSmart.sunmiP2.theme}
        bgImage={dict.pageTransactSmart.sunmiP2.bgImage}
        bgImageAlt={dict.pageTransactSmart.sunmiP2.bgImageAlt}
        columns={dict.pageTransactSmart.sunmiP2.columns.map((column) => ({
          ...column,
          theme: dict.pageTransactSmart.sunmiP2.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageTransactSmart.sunmiP2.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageTransactSmart.deviceCahierSystem.theme}
        bgImage={dict.pageTransactSmart.deviceCahierSystem.bgImage}
        bgImageAlt={dict.pageTransactSmart.deviceCahierSystem.bgImageAlt}
        columns={dict.pageTransactSmart.deviceCahierSystem.columns.map(
          (column) => ({
            ...column,
            theme: dict.pageTransactSmart.deviceCahierSystem.theme,
            horizontalAlign: column.horizontalAlign,
            verticalAlign: column.verticalAlign,
            data: column.data.map((item) => ({
              ...item,
              theme: dict.pageTransactSmart.deviceCahierSystem.theme,
            })),
          })
        )}
      />
      <Footer {...dict.footer} />
    </>
  );
}
