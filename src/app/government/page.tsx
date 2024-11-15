import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-government.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";

export default function Home() {
  return (
    <>
      <Header {...headerData} theme="light" />
      <HeroBanner
        backgroundImage={data.callout.bgImage}
        callout={{
          title: data.callout.title,
          theme: data.callout.theme,
        }}
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
        theme={data.transit.theme}
        bgImage={data.transit.bgImage}
        bgImageAlt={data.transit.bgImageAlt}
        columns={data.transit.columns.map((column) => ({
          ...column,
          theme: data.transit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.transit.theme,
          })),
        }))}
      />
      <Section
        theme={data.gov.theme}
        bgImage={data.gov.bgImage}
        bgImageAlt={data.gov.bgImageAlt}
        columns={data.gov.columns.map((column) => ({
          ...column,
          theme: data.gov.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.gov.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
