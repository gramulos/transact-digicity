import React from "react";
import Image from "next/image";
import Container from "./Container";
import RichText, { RichTextElement } from "./RichText";
import Callout, { CalloutProps } from "./HeroBanner/Callout";

type ShortHeroBannerProps = {
  backgroundImage: string;
  theme: string;
  data: RichTextElement[];
  callout: CalloutProps;
};

const ShortHeroBanner: React.FC<ShortHeroBannerProps> = (props) => {
  return (
    <section
      className={`flex overflow-hidden flex-col ${
        props.theme === "light" ? "text-white" : "text-black"
      } `}
      aria-label="Hero Banner"
    >
      <div className="flex overflow-hidden relative flex-col w-full min-h-[310px]">
        <Image
          src={props.backgroundImage}
          alt={`Short hero image`}
          width={2560}
          height={1600}
          quality={100}
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <Container className="text-white">
          <Callout title={props.callout.title} theme={props.theme} />
          <div className="grid grod-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-28 md:gap-14">
            <RichText data={props.data} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ShortHeroBanner;
