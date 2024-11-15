import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-business.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";

export default function Home() {
  return (
    <>
      <Header {...headerData} theme="light" />
      <HeroBanner
        backgroundImage={data.callout.bgImage}
        callout={data.callout}
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
        theme={data.giftCards.theme}
        bgImage={data.giftCards.bgImage}
        bgImageAlt={data.giftCards.bgImageAlt}
        columns={data.giftCards.columns.map((column) => ({
          ...column,
          theme: data.giftCards.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.giftCards.theme,
          })),
        }))}
      />
      <Section
        theme={data.transactSmart.theme}
        bgImage={data.transactSmart.bgImage}
        bgImageAlt={data.transactSmart.bgImageAlt}
        columns={data.transactSmart.columns.map((column) => ({
          ...column,
          theme: data.transactSmart.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.transactSmart.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
