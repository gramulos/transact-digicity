import "server-only";

const dictionaries = {
  en: () => import("../../data/en/index").then((module) => module.default),
  lv: () => import("../../data/lv/index").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "lv") =>
  dictionaries[locale]?.();
