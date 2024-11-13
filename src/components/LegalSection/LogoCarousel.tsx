import React from "react";
import Image from "next/image";

export type LogoCarouselProps = {
  logos: {
    src: string;
    alt: string;
    width: number;
    height: number;
    aspectRatio: number;
  }[];
};

const LogoCarousel: React.FC<LogoCarouselProps> = (props) => {
  return (
    <div aria-label="Partner Logos" className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {props.logos.map((logo, index: number) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="mx-4 inline"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {props.logos.map((logo, index: number) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="mx-4 inline"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </div>
  );
};
export default LogoCarousel;
