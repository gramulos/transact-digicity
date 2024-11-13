/**
 * This code was generated by Builder.io
 */
import React from "react";

export type ContactInfoProps = {
  copyright: string;
  authorizedText: string;
  phoneNumber: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  copyright,
  authorizedText,
  phoneNumber,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-start w-full">
      <div className="flex flex-col gap-2 text-sm">
        <p className="">{copyright}</p>
        <p>{authorizedText}</p>
      </div>
      <div className="text-lg">
        +371 <span className="text-slate-50">{phoneNumber.slice(0, 1)}</span>{" "}
        <span className="text-slate-50">{phoneNumber.slice(1)}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
