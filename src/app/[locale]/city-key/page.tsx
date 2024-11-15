import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import Header from "@/components/HeroBanner/Header";
import Panels from "@/components/Panels";
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
        backgroundImage="/assets/patterns/light/pattern_06.png"
        callout={dict.pageCityKey.callout}
        image={dict.pageCityKey.callout.image}
      />
      <Section
        theme={dict.pageCityKey.citykey.theme}
        bgImage={dict.pageCityKey.citykey.bgImage}
        bgImageAlt={dict.pageCityKey.citykey.bgImageAlt}
        columns={dict.pageCityKey.citykey.columns.map((column) => ({
          ...column,
          theme: dict.pageCityKey.citykey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageCityKey.citykey.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageCityKey.functionalityServices.theme}
        bgImage={dict.pageCityKey.functionalityServices.bgImage}
        bgImageAlt={dict.pageCityKey.functionalityServices.bgImageAlt}
        columns={dict.pageCityKey.functionalityServices.columns.map(
          (column) => ({
            ...column,
            theme: dict.pageCityKey.functionalityServices.theme,
            horizontalAlign: column.horizontalAlign,
            verticalAlign: column.verticalAlign,
            data: column.data.map((item) => ({
              ...item,
              theme: dict.pageCityKey.functionalityServices.theme,
            })),
          })
        )}
      />
      <Section
        theme={dict.pageCityKey.advantages.theme}
        bgImage={dict.pageCityKey.advantages.bgImage}
        bgImageAlt={dict.pageCityKey.advantages.bgImageAlt}
        title={dict.pageCityKey.advantages.title.map((item) => ({
          ...item,
          theme: dict.pageCityKey.advantages.theme,
        }))}
        showAsRows={dict.pageCityKey.advantages.showAsRows}
        columns={dict.pageCityKey.advantages.columns.map((column) => ({
          ...column,
          theme: dict.pageCityKey.advantages.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageCityKey.advantages.theme,
          })),
        }))}
      />
      <Panels panels={dict.pageCityKey.highlightPanels} />
      <Section
        theme={dict.pageCityKey.graph.theme}
        bgImage={dict.pageCityKey.graph.bgImage}
        bgImageAlt={dict.pageCityKey.graph.bgImageAlt}
        showAsRows={dict.pageCityKey.graph.showAsRows}
        columns={dict.pageCityKey.graph.columns.map((column) => ({
          ...column,
          theme: dict.pageCityKey.graph.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageCityKey.graph.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
