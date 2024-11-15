import React from "react";
import Image from "next/image";
import Callout, { CalloutProps } from "./Callout";
import Container from "../Container";

type HeroBannerProps = {
  isFullWidth?: boolean;
  backgroundImage: string;
  callout: CalloutProps;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  return (
    <section
      className={`flex overflow-hidden flex-col ${
        props.callout.theme === "light" ? "text-white" : "text-black"
      } `}
      aria-label="Hero Banner"
    >
      <div className="flex overflow-hidden relative flex-col w-full min-h-[810px]">
        <Image
          src={props.backgroundImage}
          alt={`${props.callout.title} image`}
          width={1440}
          height={810}
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <Container
          className={`grid grid-cols-1 ${
            props.isFullWidth ? "" : "lg:grid-cols-2"
          } align-middle gap-32 lg:gap-56`}
        >
          <Callout
            theme={props.callout.theme === "light" ? "dark" : "light"}
            title={props.callout.title}
            description={props.callout.description}
          />
          <div className="flex flex-col mb-24 lg:mt-32 lg:mb-0 items-center justify-center w-full">
            {props.image && (
              <Image
                src={props.image.src}
                alt={props.image.alt}
                width={props.image.width}
                height={props.image.height}
                className="max-w-sm"
              />
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
