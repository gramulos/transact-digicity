import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-transact-smart.json";
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
      />
      <Section
        theme={data.sunmiP2.theme}
        bgImage={data.sunmiP2.bgImage}
        bgImageAlt={data.sunmiP2.bgImageAlt}
        columns={data.sunmiP2.columns.map((column) => ({
          ...column,
          theme: data.sunmiP2.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.sunmiP2.theme,
          })),
        }))}
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
      <Footer {...footerData} />
    </>
  );
}
