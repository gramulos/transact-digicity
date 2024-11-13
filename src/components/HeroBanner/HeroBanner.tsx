/**
 * This code was generated by Builder.io
 */
"use client";

import React from "react";
import Image from "next/image";
import Callout, { CalloutProps } from "./Callout";
import Container from "../Container";

type HeroBannerProps = {
  backgroundImage: string;
  callout: CalloutProps;
};

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  return (
    <section
      className="flex overflow-hidden flex-col text-white"
      aria-label="Hero Banner"
    >
      <div className="flex overflow-hidden relative flex-col w-full min-h-[810px]">
        <Image
          src={props.backgroundImage}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
        />
        <Container className="flex flex-col">
          <Callout
            title={props.callout.title}
            description={props.callout.description}
          />
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
