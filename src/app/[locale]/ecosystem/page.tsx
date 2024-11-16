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
        callout={dict.pageEcosystem.callout}
        isFullWidth={dict.pageEcosystem.callout.isFullWidth}
        columns={dict.pageEcosystem.callout.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.callout.theme,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.callout.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.existingIssues.theme}
        bgImage={dict.pageEcosystem.existingIssues.bgImage}
        bgImageAlt={dict.pageEcosystem.existingIssues.bgImageAlt}
        columns={dict.pageEcosystem.existingIssues.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.existingIssues.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.existingIssues.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.keyBenefit.theme}
        bgImage={dict.pageEcosystem.keyBenefit.bgImage}
        bgImageAlt={dict.pageEcosystem.keyBenefit.bgImageAlt}
        columns={dict.pageEcosystem.keyBenefit.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.keyBenefit.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.keyBenefit.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.appAutonomous.theme}
        bgImage={dict.pageEcosystem.appAutonomous.bgImage}
        bgImageAlt={dict.pageEcosystem.appAutonomous.bgImageAlt}
        title={dict.pageEcosystem.appAutonomous.title.map((item) => ({
          ...item,
          theme: dict.pageEcosystem.appAutonomous.theme,
        }))}
        columns={dict.pageEcosystem.appAutonomous.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.appAutonomous.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.appAutonomous.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.benefits.theme}
        bgImage={dict.pageEcosystem.benefits.bgImage}
        bgImageAlt={dict.pageEcosystem.benefits.bgImageAlt}
        columns={dict.pageEcosystem.benefits.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.benefits.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.benefits.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.administrationBenefits.theme}
        bgImage={dict.pageEcosystem.administrationBenefits.bgImage}
        bgImageAlt={dict.pageEcosystem.administrationBenefits.bgImageAlt}
        columns={dict.pageEcosystem.administrationBenefits.columns.map(
          (column) => ({
            ...column,
            theme: dict.pageEcosystem.administrationBenefits.theme,
            horizontalAlign: column.horizontalAlign,
            verticalAlign: column.verticalAlign,
            data: column.data.map((item) => ({
              ...item,
              theme: dict.pageEcosystem.administrationBenefits.theme,
            })),
          })
        )}
      />
      <Section
        theme={dict.pageEcosystem.smeSupport.theme}
        bgImage={dict.pageEcosystem.smeSupport.bgImage}
        bgImageAlt={dict.pageEcosystem.smeSupport.bgImageAlt}
        title={dict.pageEcosystem.smeSupport.title.map((item) => ({
          ...item,
          theme: dict.pageEcosystem.smeSupport.theme,
        }))}
        columns={dict.pageEcosystem.smeSupport.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.smeSupport.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.smeSupport.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.protection.theme}
        bgImage={dict.pageEcosystem.protection.bgImage}
        bgImageAlt={dict.pageEcosystem.protection.bgImageAlt}
        title={dict.pageEcosystem.protection.title.map((item) => ({
          ...item,
          theme: dict.pageEcosystem.protection.theme,
        }))}
        columns={dict.pageEcosystem.protection.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.protection.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.protection.theme,
          })),
        }))}
      />
      <Section
        theme={dict.pageEcosystem.knowledge.theme}
        bgImage={dict.pageEcosystem.knowledge.bgImage}
        bgImageAlt={dict.pageEcosystem.knowledge.bgImageAlt}
        title={dict.pageEcosystem.knowledge.title.map((item) => ({
          ...item,
          theme: dict.pageEcosystem.knowledge.theme,
        }))}
        columns={dict.pageEcosystem.knowledge.columns.map((column) => ({
          ...column,
          theme: dict.pageEcosystem.knowledge.theme,
          horizontalAlign: column.horizontalAlign,
          verticalAlign: column.verticalAlign,
          data: column.data.map((item) => ({
            ...item,
            theme: dict.pageEcosystem.knowledge.theme,
          })),
        }))}
      />
      <Footer {...dict.footer} />
    </>
  );
}
