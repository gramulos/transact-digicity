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
      <Section
        theme={data.appAutonomous.theme}
        bgImage={data.appAutonomous.bgImage}
        bgImageAlt={data.appAutonomous.bgImageAlt}
        title={data.appAutonomous.title.map((item) => ({
          ...item,
          theme: data.appAutonomous.theme,
        }))}
        columns={data.appAutonomous.columns.map((column) => ({
          ...column,
          theme: data.appAutonomous.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.appAutonomous.theme,
          })),
        }))}
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
        theme={data.administrationBenefits.theme}
        bgImage={data.administrationBenefits.bgImage}
        bgImageAlt={data.administrationBenefits.bgImageAlt}
        columns={data.administrationBenefits.columns.map((column) => ({
          ...column,
          theme: data.administrationBenefits.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.administrationBenefits.theme,
          })),
        }))}
      />
      <Section
        theme={data.smeSupport.theme}
        bgImage={data.smeSupport.bgImage}
        bgImageAlt={data.smeSupport.bgImageAlt}
        title={data.smeSupport.title.map((item) => ({
          ...item,
          theme: data.smeSupport.theme,
        }))}
        columns={data.smeSupport.columns.map((column) => ({
          ...column,
          theme: data.smeSupport.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.smeSupport.theme,
          })),
        }))}
      />
      <Section
        theme={data.protection.theme}
        bgImage={data.protection.bgImage}
        bgImageAlt={data.protection.bgImageAlt}
        title={data.protection.title.map((item) => ({
          ...item,
          theme: data.protection.theme,
        }))}
        columns={data.protection.columns.map((column) => ({
          ...column,
          theme: data.protection.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.protection.theme,
          })),
        }))}
      />
      <Section
        theme={data.knowledge.theme}
        bgImage={data.knowledge.bgImage}
        bgImageAlt={data.knowledge.bgImageAlt}
        title={data.knowledge.title.map((item) => ({
          ...item,
          theme: data.knowledge.theme,
        }))}
        columns={data.knowledge.columns.map((column) => ({
          ...column,
          theme: data.knowledge.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: data.knowledge.theme,
          })),
        }))}
      />
      <Footer {...footerData} />
    </>
  );
}
