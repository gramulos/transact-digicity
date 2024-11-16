import React from "react";
import Image from "next/image";
import Callout, { CalloutProps } from "./Callout";
import Container from "../Container";
import RichText from "../RichText";
import { cn } from "@/utils/styles";
import { DataProps } from "../Section";

type ImageItem = { src: string; alt: string; width: number; height: number };

type HeroBannerProps = {
  isFullWidth?: boolean;
  backgroundImage: string;
  callout: CalloutProps;
  image?: ImageItem;
  columns?: DataProps[];
};

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  return (
    <section
      className={cn("flex overflow-hidden flex-col", {
        "bg-slate-800 text-white": props.callout.theme === "dark",
        "bg-sky-50 text-black": props.callout.theme === "light",
        "bg-blue-600 text-white": props.callout.theme === "blue",
      })}
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
          className={cn(
            `grid grid-cols-1 ${props.isFullWidth ? "" : "lg:grid-cols-2"}`,
            {
              "gap-32 lg:gap-56 align-middle": !props.columns,
              "gap-14 lg:gap-0": props.columns,
            }
          )}
        >
          <Callout
            theme={props.callout.theme}
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
            {props.columns && (
              <div
                className={cn("gap-14 grid grid-cols-1", {
                  "sm:grid-cols-2 xl:grid-cols-4 gap-10":
                    props.columns.length === 4,
                  "sm:grid-cols-2 lg:grid-cols-3 gap-14":
                    props.columns.length === 3,
                  "sm:grid-cols-2 gap-16": props.columns.length === 2,
                })}
              >
                {props.columns.map((col, index) => (
                  <RichText
                    key={`${col.horizontalAlign}_${col.verticalAlign}_${index}`}
                    data={col.data}
                  />
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
