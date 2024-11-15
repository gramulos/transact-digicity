/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { cn } from "@/utils/styles";
import RichText, { RichTextElement } from "./RichText";
import Heading from "./Heading";

export type DataProps = {
  horizontalAlign?: string;
  verticalAlign?: string;
  outline?: boolean;
  outlineChilds?: boolean;
  title?: string;
  data: RichTextElement[];
};

type SectionProps = {
  bgImage: string;
  bgImageAlt: string;
  theme: string;
  title?: RichTextElement[];
  columns: DataProps[];
  showAsRows?: boolean;
};

const Section: React.FC<SectionProps> = ({
  columns,
  bgImage,
  bgImageAlt,
  theme,
  title,
  showAsRows,
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
      <Container className="grid gap-10 md:gap-20">
        {title && <RichText data={title} />}
        <div
          className={cn(`gap-14`, {
            "grid grid-cols-1": !showAsRows,
            "sm:grid-cols-2 xl:grid-cols-4 gap-10":
              columns.length === 4 && !showAsRows,
            "sm:grid-cols-2 lg:grid-cols-3 gap-14":
              columns.length === 3 && !showAsRows,
            "sm:grid-cols-2 gap-16": columns.length === 2 && !showAsRows,
            "flex flex-col gap-8 md:gap-14": showAsRows,
          })}
        >
          {columns.map((col, index) => (
            <div
              key={`${col.horizontalAlign}_${col.verticalAlign}_${index}`}
              className={cn(
                "flex flex-col justify-center h-full gap-10 md:gap-20",
                theme === "light" ? "text-slate-800" : "text-slate-50",
                col.horizontalAlign ? `items-${col.horizontalAlign}` : "",
                col.verticalAlign ? `justify-${col.verticalAlign}` : "",
                { "border border-blue-600 rounded-3xl py-6 pr-16": col.outline }
              )}
            >
              {col.title && (
                <Heading theme={theme} headerTag="h2">
                  {col.title}
                </Heading>
              )}
              {col.outlineChilds ? (
                <div
                  className={cn({
                    "border border-blue-600 rounded-3xl w-full h-full py-16 pr-16":
                      col.outlineChilds,
                  })}
                >
                  <RichText data={col.data} />
                </div>
              ) : (
                <RichText data={col.data} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Section;
