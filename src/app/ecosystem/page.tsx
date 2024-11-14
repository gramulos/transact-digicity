import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/page-ecosystem.json";
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
        theme={data.benefits.theme}
        bgImage={data.benefits.bgImage}
        bgImageAlt={data.benefits.bgImageAlt}
        columns={data.benefits.columns.map((column) => ({
          ...column,
          theme: data.benefits.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.benefits.theme,
          })),
        }))}
      />
      <Section
        theme={data.existingIssues.theme}
        bgImage={data.existingIssues.bgImage}
        bgImageAlt={data.existingIssues.bgImageAlt}
        columns={data.existingIssues.columns.map((column) => ({
          ...column,
          theme: data.existingIssues.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.existingIssues.theme,
          })),
        }))}
      />
      <Section
        theme={data.keyBenefit.theme}
        bgImage={data.keyBenefit.bgImage}
        bgImageAlt={data.keyBenefit.bgImageAlt}
        columns={data.keyBenefit.columns.map((column) => ({
          ...column,
          theme: data.keyBenefit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.keyBenefit.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
