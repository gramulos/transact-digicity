import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/business-data.json";
import footerData from "@/data/footer.json";

export default function Home() {
  return (
    <>
      <HeroBanner
        backgroundImage="/assets/images/bg-hero-business.png"
        header={data.header}
        callout={data.callout}
      />
      <Section {...data.citykey} />
      <Section {...data.transit} />
      <Section {...data.giftCards} />
      <Footer {...footerData} />
    </>
  );
}
