import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/business-data.json";
import footerData from "@/data/footer.json";
import Header from "@/components/HeroBanner/Header";

export default function Home() {
  return (
    <>
      <Header {...data.header} />
      <HeroBanner
        backgroundImage="/assets/images/bg-hero-business.png"
        callout={data.callout}
      />
      <Section {...data.citykey} />
      <Section {...data.transit} />
      <Section {...data.giftCards} />
      <Footer {...footerData} />
    </>
  );
}
