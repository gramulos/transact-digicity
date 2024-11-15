/**
 * This code was generated by Builder.io
 */
import React from "react";
import Image from "next/image";
import ContactInfo, { ContactInfoProps } from "./ContactInfo";
import LegalNotice, { LegalNoticeProps } from "./LegalNotice";
import LogoCarousel, { LogoCarouselProps } from "./LogoCarousel";
import Container from "../Container";

type FooterProps = ContactInfoProps &
  LegalNoticeProps &
  LogoCarouselProps & {
    logo: string;
    logoAlt: string;
  };

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="w-full bg-darkBlue text-gray-400">
      <Container className="flex flex-col gap-12">
        <LogoCarousel logos={props.logos} />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <Image
            src={props.logo}
            alt={props.logoAlt}
            width={87}
            height={79}
            className="object-contain flex-none"
            loading="lazy"
          />
          <div className="flex flex-col basis-0 lg:basis-4/6">
            <ContactInfo
              copyright={props.copyright}
              authorizedText={props.authorizedText}
              phoneNumber={props.phoneNumber}
            />
            <LegalNotice
              legalText={props.legalText}
              trademarkText={props.trademarkText}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
