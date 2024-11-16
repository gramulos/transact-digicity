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
        callout={dict.pageGiftCards.callout}
        isFullWidth={dict.pageGiftCards.callout.isFullWidth}
        columns={dict.pageGiftCards.callout.columns.map((column) => ({
          ...column,
          theme: dict.pageGiftCards.callout.theme,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGiftCards.callout.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageGiftCards.keyFeatures.theme}
        bgImage={dict.pageGiftCards.keyFeatures.bgImage}
        bgImageAlt={dict.pageGiftCards.keyFeatures.bgImageAlt}
        title={dict.pageGiftCards.keyFeatures.title.map((item) => ({
          ...item,
          theme: dict.pageGiftCards.keyFeatures.theme,
        }))}
        columns={dict.pageGiftCards.keyFeatures.columns.map((column) => ({
          ...column,
          theme: dict.pageGiftCards.keyFeatures.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGiftCards.keyFeatures.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageGiftCards.kiosk.theme}
        bgImage={dict.pageGiftCards.kiosk.bgImage}
        bgImageAlt={dict.pageGiftCards.kiosk.bgImageAlt}
        columns={dict.pageGiftCards.kiosk.columns.map((column) => ({
          ...column,
          theme: dict.pageGiftCards.kiosk.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGiftCards.kiosk.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageGiftCards.kioskBenefits.theme}
        bgImage={dict.pageGiftCards.kioskBenefits.bgImage}
        bgImageAlt={dict.pageGiftCards.kioskBenefits.bgImageAlt}
        columns={dict.pageGiftCards.kioskBenefits.columns.map((column) => ({
          ...column,
          theme: dict.pageGiftCards.kioskBenefits.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageGiftCards.kioskBenefits.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
