import HeroBanner from "@/components/HeroBanner/HeroBanner";
import data from "@/data/data.json";

export default function Home() {
  return (
    <HeroBanner
      backgroundImage="/assets/images/bg-business-hero.png"
      header={data.header}
      callout={data.callout}
    />
  );
}
