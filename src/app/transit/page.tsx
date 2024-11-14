import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-transit.json";
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
        image={data.callout.image}
      />
      <Section
        theme={data.deviceCahierSystem.theme}
        bgImage={data.deviceCahierSystem.bgImage}
        bgImageAlt={data.deviceCahierSystem.bgImageAlt}
        columns={data.deviceCahierSystem.columns.map((column) => ({
          ...column,
          theme: data.deviceCahierSystem.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.deviceCahierSystem.theme,
          })),
        }))}
      />
      <Section
        theme={data.appAndKey.theme}
        bgImage={data.appAndKey.bgImage}
        bgImageAlt={data.appAndKey.bgImageAlt}
        columns={data.appAndKey.columns.map((column) => ({
          ...column,
          theme: data.appAndKey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.appAndKey.theme,
          })),
        }))}
      />
      <Section
        theme={data.systemComponents.theme}
        bgImage={data.systemComponents.bgImage}
        bgImageAlt={data.systemComponents.bgImageAlt}
        columns={data.systemComponents.columns.map((column) => ({
          ...column,
          theme: data.systemComponents.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.systemComponents.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
