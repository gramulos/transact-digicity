import { setRequestLocale } from "next-intl/server";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import Header from "@/components/HeroBanner/Header";
import { getDictionary } from "../dictionaries";

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
        callout={dict.pageTransit.callout}
        image={dict.pageTransit.callout.image}
      />
      <Section
        theme={dict.pageTransit.deviceCahierSystem.theme}
        bgImage={dict.pageTransit.deviceCahierSystem.bgImage}
        bgImageAlt={dict.pageTransit.deviceCahierSystem.bgImageAlt}
        columns={dict.pageTransit.deviceCahierSystem.columns.map((column) => ({
          ...column,
          theme: dict.pageTransit.deviceCahierSystem.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageTransit.deviceCahierSystem.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageTransit.appAndKey.theme}
        bgImage={dict.pageTransit.appAndKey.bgImage}
        bgImageAlt={dict.pageTransit.appAndKey.bgImageAlt}
        columns={dict.pageTransit.appAndKey.columns.map((column) => ({
          ...column,
          theme: dict.pageTransit.appAndKey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageTransit.appAndKey.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageTransit.systemComponents.theme}
        bgImage={dict.pageTransit.systemComponents.bgImage}
        bgImageAlt={dict.pageTransit.systemComponents.bgImageAlt}
        columns={dict.pageTransit.systemComponents.columns.map((column) => ({
          ...column,
          theme: dict.pageTransit.systemComponents.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageTransit.systemComponents.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
