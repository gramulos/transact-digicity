import Image from "next/image";
import Paragraph from "./Paragraph";
import UnorderedList from "./UnorderedList";
import Heading from "./Heading";
import React from "react";
import LinkButton from "./LinkButton";
import Card, { CardProps } from "./Card";
import DescriptiveImage, { DescriptiveImageProps } from "./DescriptiveImage";

type KeyOptions = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Headings = {
  [k in KeyOptions]?: string;
};

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type RichTextElement = Headings & {
  theme: string;
  br?: string;
  p?: string[];
  ul?: {
    text: string;
    icon?: ImageProps;
    subitems?: RichTextElement[];
  }[];
  ol?: {
    text: string;
    subitems?: RichTextElement[];
  }[];
  img?: ImageProps[] | ImageProps;
  a?: {
    href: string;
    target?: string;
    text: string;
  };
  card?: CardProps;
  descriptiveImage?: DescriptiveImageProps;
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
          {k === "ul" && item.ul && (
            <UnorderedList theme={item.theme} items={item.ul} />
          )}
          {k === "ol" && item.ol && (
            <UnorderedList theme={item.theme} items={item.ol} isOrdered />
          )}
          {k === "p" && item.p && <Paragraph text={item.p} />}
          {k === "img" &&
            item.img &&
            (Array.isArray(item.img) ? (
              item.img.map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                />
              ))
            ) : (
              <Image
                src={item.img.src}
                alt={item.img.alt}
                width={item.img.width}
                height={item.img.height}
              />
            ))}
          {k === "a" && item.a && (
            <LinkButton
              href={item.a.href}
              target={item.a.target}
              theme={item.theme}
              text={item.a.text}
            />
          )}
          {k === "descriptiveImage" && item.descriptiveImage && (
            <DescriptiveImage
              img={item.descriptiveImage.img}
              p={item.descriptiveImage.p}
            />
          )}
          {k === "br" && <span className="block mb-36 w-full" />}
          {k === "card" && item.card && (
            <Card
              backgroundImage={item.card.backgroundImage}
              title={item.card.title}
              description={item.card.description}
              image={item.card.image}
              moreLink={item.card.moreLink}
              moreText={item.card.moreText}
              theme={item.card.theme}
            />
          )}
        </React.Fragment>
      ))}{" "}
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
