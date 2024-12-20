import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import RichText, { RichTextElement } from "./RichText";
import { cn } from "@/utils/styles";

export interface PanelProps {
  title: string;
  backgroundImage: string;
  theme: string;
  data: RichTextElement[];
}

const Panel: React.FC<PanelProps> = (props) => {
  return (
    <section className={"flex relative justify-center w-full"}>
      <div
        className={cn("flex relative p-10 lg:p-20 xs:min-h-[752px] w-full", {
          "bg-slate-800 text-white": props.theme === "dark",
          "bg-sky-50 text-black": props.theme === "light",
          "bg-blue-600 text-white": props.theme === "blue",
        })}
      >
        <Image
          src={props.backgroundImage}
          alt={`${props.title} image`}
          width={752}
          height={1100}
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="flex z-0 flex-col gap-8 sm:gap-14">
          <Heading theme={props.theme} headerTag="h2">
            {props.title}
          </Heading>
          <div className="flex flex-col w-full gap-9">
            <RichText data={props.data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
