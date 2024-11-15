import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-gift-cards.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";

export default function Home() {
  return (
    <>
      <Header {...headerData} theme="dark" />
      <HeroBanner
        backgroundImage="/assets/patterns/light/pattern_06.png"
        callout={data.callout}
        isFullWidth={data.callout.isFullWidth}
        columns={data.callout.columns.map((column) => ({
          ...column,
          theme: data.callout.theme,
          data: column.data.map((item) => ({
            ...item,
            theme: data.callout.theme,
          })),
        }))}
      />
      <Section
        theme={data.keyFeatures.theme}
        bgImage={data.keyFeatures.bgImage}
        bgImageAlt={data.keyFeatures.bgImageAlt}
        title={data.keyFeatures.title.map((item) => ({
          ...item,
          theme: data.keyFeatures.theme,
        }))}
        columns={data.keyFeatures.columns.map((column) => ({
          ...column,
          theme: data.keyFeatures.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.keyFeatures.theme,
          })),
        }))}
      />
      <Section
        theme={data.kiosk.theme}
        bgImage={data.kiosk.bgImage}
        bgImageAlt={data.kiosk.bgImageAlt}
        columns={data.kiosk.columns.map((column) => ({
          ...column,
          theme: data.kiosk.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.kiosk.theme,
          })),
        }))}
      />
      <Section
        theme={data.kioskBenefits.theme}
        bgImage={data.kioskBenefits.bgImage}
        bgImageAlt={data.kioskBenefits.bgImageAlt}
        columns={data.kioskBenefits.columns.map((column) => ({
          ...column,
          theme: data.kioskBenefits.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.kioskBenefits.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
