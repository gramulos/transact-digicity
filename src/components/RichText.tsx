import Image from "next/image";
import Paragraph from "./Paragraph";
import UnorderedList from "./UnorderedList";
import Heading from "./Heading";
import Link from "next/link";
import { cn } from "@/utils/styles";
import React from "react";

type KeyOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Headings = {
  [k in KeyOptions]?: string;
};

export type RichTextElement = Headings & {
  theme: string;
  p?: string[];
  ul?: string[];
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  a?: {
    href: string;
    target?: string;
    text: string;
  };
};

type RichTextProps = {
  data: RichTextElement[];
};

const Rte = (item: RichTextElement) => {
  return (
    <>
      {Object.keys(item).map((k, index) => (
        <React.Fragment key={`rtec_${Object.keys(item).length}_${k}_${index}`}>
          {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).includes(
            k as KeyOptions
          ) &&
            item[k as KeyOptions] && (
              <Heading theme={item.theme} headerTag={k as KeyOptions}>
                {item[k as KeyOptions]}
              </Heading>
            )}
          {k === "ul" && item.ul && <UnorderedList items={item.ul} />}
          {k === "p" && item.p && <Paragraph text={item.p} />}
          {k === "img" && item.img && (
            <Image
              src={item.img.src}
              alt={item.img.alt}
              width={item.img.width}
              height={item.img.height}
            />
          )}
          {k === "a" && item.a && (
            <Link
              href={item.a.href}
              target={item.a.target}
              className={cn(
                "text-sm text-center px-10 py-4 mt-20 max-w-full text-slate-50 rounded-full shadow-xl hover:shadow-lg active:shadow-none transition-all duration-300",
                item.theme !== "blue"
                  ? "bg-sky-600 hover:bg-sky-800 active:bg-sky-950"
                  : "bg-sky-950 hover:bg-sky-800 active:bg-sky-600"
              )}
            >
              {item.a.text}
            </Link>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

const RichText: React.FC<RichTextProps> = (props) => {
  return (
    <>
      {props.data.map((item, index) => (
        <Rte
          key={`rte_${Object.keys(item).length}_${item.theme}_${index}`}
          {...item}
        />
      ))}
    </>
  );
};

export default RichText;
