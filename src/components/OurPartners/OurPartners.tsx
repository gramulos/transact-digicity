/**
 * This code was generated by Builder.io
 */
import React from "react";
import PartnerItem from "./PartnerItem";
import partnersData from "./partnersData.json";

interface OurPartnersProps {
  title: string;
}

const OurPartners: React.FC<OurPartnersProps> = ({ title }) => {
  return (
    <section className="flex flex-wrap justify-center items-start text-white">
      <div className="flex relative flex-1 shrink gap-10 p-24 basis-0 min-h-[752px] min-w-[240px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc8f7ecdef69f846019358338afc3c51d6e5780052bb4f388dc779caf8a5e2ed?placeholderIfAbsent=true&apiKey=82eec9096df64eb8b436c0dc64d15566"
          alt=""
          className="object-contain absolute top-2/4 left-2/4 z-0 self-start -translate-x-2/4 -translate-y-2/4 aspect-[0.68] h-[1101px] min-w-[240px] w-[752px] max-md:max-w-full"
        />
        <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-7xl font-light max-md:max-w-full max-md:text-4xl">
            {title}
          </h2>
          <div className="flex flex-col mt-32 w-full text-3xl max-md:mt-10 max-md:max-w-full">
            {partnersData.map((partner, index) => (
              <PartnerItem key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
