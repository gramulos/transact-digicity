/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { cn } from "@/utils/styles";
import RichText, { RichTextElement } from "./RichText";

type SectionProps = {
  bgImage: string;
  bgImageAlt: string;
  theme: string;
  columns: {
    horizontalAlign: string;
    verticalAlign: string;
    data: RichTextElement[];
  }[];
};

const Section: React.FC<SectionProps> = ({
  columns,
  bgImage,
  bgImageAlt,
  theme,
}) => {
  return (
    <section className="relative flex flex-col w-full overflow-hidden">
      <Image
        src={bgImage}
        alt={bgImageAlt}
        width={2560}
        height={1600}
        className="absolute inset-0 object-cover w-full h-full"
        quality={100}
        loading="lazy"
        sizes="100vw"
      />
      <Container
        className={`grid grid-cols-1 lg:grid-cols-${columns.length} gap-20`}
      >
        {columns.map((col, index) => (
          <div
            key={`${col.horizontalAlign}_${col.verticalAlign}_${index}`}
            className={cn(
              "flex flex-col justify-center",
              theme === "light" ? "text-slate-800" : "text-slate-50",
              col.horizontalAlign ? `items-${col.horizontalAlign}` : "",
              col.verticalAlign ? `justify-${col.verticalAlign}` : ""
            )}
          >
            <RichText data={col.data} />
          </div>
        ))}
      </Container>
    </section>
  );
};
export default Section;
