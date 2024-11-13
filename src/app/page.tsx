import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Section from "@/components/Section";
import Footer from "@/components/LegalSection/Footer";
import data from "@/data/en/business-data.json";
import footerData from "@/data/en/footer.json";
import headerData from "@/data/en/header.json";
import Header from "@/components/HeroBanner/Header";

export default function Home() {
  return (
    <>
      <Header {...headerData} theme="light" />
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
