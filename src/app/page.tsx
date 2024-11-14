import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-home.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";
import ShortHeroBanner from "@/components/ShortHero";

export default function Home() {
  return (
    <>
      <Header {...headerData} theme="light" />
      <ShortHeroBanner
        callout={data.callout}
        backgroundImage={data.callout.bgImage}
        theme={data.callout.theme}
        data={data.callout.data.map((item) => ({
          ...item,
          theme: data.callout.theme,
        }))}
      />
      <Section
        theme={data.cards.theme}
        bgImage={data.cards.bgImage}
        bgImageAlt={data.cards.bgImageAlt}
        columns={data.cards.columns.map((column) => ({
          ...column,
          theme: data.cards.theme,
          data: column.data.map((item) => ({
            ...item,
            theme: data.cards.theme,
          })),
        }))}
      />
      <Section
        theme={data.digicity.theme}
        bgImage={data.digicity.bgImage}
        bgImageAlt={data.digicity.bgImageAlt}
        columns={data.digicity.columns.map((column) => ({
          ...column,
          theme: data.digicity.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.digicity.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
