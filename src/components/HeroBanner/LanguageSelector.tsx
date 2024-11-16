"use client";

import { cn } from "@/utils/styles";
import { usePathname, useRouter } from "../../i18n/routing";
import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useLocale } from "next-intl";

type LanguageSelectorProps = {
  languages: string[];
  theme?: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale.toUpperCase()
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    router.push(pathname, { locale: language.toLocaleLowerCase() });
  };

  return (
    <div className="relative">
      <div className="xl:hidden">
        <ul className="text-slate-700 flex gap-2 items-center">
          {props.languages.map((language) => (
            <li key={language}>
              <button
                onClick={() => selectLanguage(language)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 border border-slate-200 rounded-full ${
                  language === selectedLanguage ? "bg-gray-100" : ""
                }`}
                role="option"
                aria-selected={
                  language.toLocaleLowerCase() === selectedLanguage
                }
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block">
        <button
          onClick={toggleDropdown}
          className={cn(
            `flex gap-2 items-center whitespace-nowrap text-sm ${
              props.theme === "light" ? "text-slate-50" : "text-slate-700"
            }`
          )}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Select language"
        >
          <span className="self-stretch my-auto">{selectedLanguage}</span>
          <RiArrowDownSFill className="object-contain shrink-0 self-stretch my-auto" />
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 mt-1 bg-white text-slate-700 shadow-md rounded-md">
            {props.languages
              .filter((lang) => lang !== selectedLanguage)
              .map((language) => (
                <li key={language}>
                  <button
                    onClick={() => selectLanguage(language)}
                    className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                    role="option"
                    aria-selected={language === selectedLanguage}
                  >
                    {language}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
