import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-city-key.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";
import Panels from "@/components/Panels";

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
        theme={data.citykey.theme}
        bgImage={data.citykey.bgImage}
        bgImageAlt={data.citykey.bgImageAlt}
        columns={data.citykey.columns.map((column) => ({
          ...column,
          theme: data.citykey.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.citykey.theme,
          })),
        }))}
      />
      <Section
        theme={data.functionalityServices.theme}
        bgImage={data.functionalityServices.bgImage}
        bgImageAlt={data.functionalityServices.bgImageAlt}
        columns={data.functionalityServices.columns.map((column) => ({
          ...column,
          theme: data.functionalityServices.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.functionalityServices.theme,
          })),
        }))}
      />
      <Section
        theme={data.advantages.theme}
        bgImage={data.advantages.bgImage}
        bgImageAlt={data.advantages.bgImageAlt}
        title={data.advantages.title.map((item) => ({
          ...item,
          theme: data.advantages.theme,
        }))}
        showAsRows={data.advantages.showAsRows}
        columns={data.advantages.columns.map((column) => ({
          ...column,
          theme: data.advantages.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.advantages.theme,
          })),
        }))}
      />
      <Panels panels={data.highlightPanels} />
      <Section
        theme={data.graph.theme}
        bgImage={data.graph.bgImage}
        bgImageAlt={data.graph.bgImageAlt}
        showAsRows={data.graph.showAsRows}
        columns={data.graph.columns.map((column) => ({
          ...column,
          theme: data.graph.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.graph.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
