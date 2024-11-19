import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import More from "./Icons/More";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { cn } from "@/utils/styles";

export type CardProps = {
  backgroundImage: string;
  title: string;
  description: string[];
  image: string;
  moreLink: string;
  moreText: string;
  theme: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full justify-center py-px w-full shadow-xl shadow-slate-500",
        {
          "bg-slate-800 text-white": props.theme === "dark",
          "bg-sky-50": props.theme === "light",
          "bg-blue-600": props.theme === "blue",
        }
      )}
    >
      <Image
        src={props.backgroundImage}
        alt={"Card bg"}
        fill
        className="object-cover"
        priority
      />
      <div className="relative flex h-full flex-col justify-between p-8 xl:p-12 w-full">
        <div className="flex flex-col gap-12 items-center w-full">
          <Heading theme={props.theme} headerTag="h2">
            {props.title}
          </Heading>
          <Paragraph text={props.description} className="pl-0 mt-0 md:mt-0" />
          <Image
            src={props.image}
            alt="Mastercard City Key™ Logo"
            width={151}
            height={240}
            className="z-10 max-w-full"
          />
        </div>
        <Link
          href={props.moreLink}
          className="flex gap-2 items-center self-end mt-9 text-sm text-white whitespace-nowrap group"
        >
          <More className="object-contain shrink-0" size={16} />
          <span className="group-hover:underline">{props.moreText}</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
