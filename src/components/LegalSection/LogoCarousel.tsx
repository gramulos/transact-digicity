"use client";
import React from "react";
import Image from "next/image";

export type LogoCarouselProps = {
  logos: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

const LogoCarousel: React.FC<LogoCarouselProps> = (props) => {
  return (
    <div aria-label="Partner Logos" className="relative flex overflow-x-hidden">
      <div className="flex gap-12 animate-left whitespace-nowrap">
        <div className="flex w-max gap-8">
          {props.logos.map((logo, index: number) => (
            <div
              key={`lc1_${logo.alt}-${index}`}
              className="flex justify-center items-center w-48"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="mx-4 inline"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <div className="flex w-max gap-8">
          {props.logos.map((logo, index: number) => (
            <div
              key={`lc1_${logo.alt}-${index}`}
              className="flex justify-center items-center w-48"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="mx-4 inline"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoCarousel;
