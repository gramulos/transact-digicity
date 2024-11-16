import React from "react";
import Image from "next/image";
import Container from "./Container";
import RichText, { RichTextElement } from "./RichText";
import Callout, { CalloutProps } from "./HeroBanner/Callout";
import { cn } from "@/utils/styles";

type ShortHeroBannerProps = {
  backgroundImage: string;
  theme: string;
  data: RichTextElement[];
  callout: CalloutProps;
};

const ShortHeroBanner: React.FC<ShortHeroBannerProps> = (props) => {
  return (
    <section
      className={cn(
        `flex overflow-hidden flex-col ${
          props.theme === "light" ? "text-white" : "text-black"
        }`,
        {
          "bg-slate-800": props.theme === "dark",
          "bg-sky-50": props.theme === "light",
          "bg-blue-600": props.theme === "blue",
        }
      )}
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
