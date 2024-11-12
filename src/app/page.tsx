import HeroBanner from "@/components/HeroBanner/HeroBanner";
import data from "@/data/data.json";

export default function Home() {
  return <HeroBanner header={data.header} callout={data.callout} />;
}
