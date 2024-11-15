import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,

  // Add default locale configuration
  defaultLocale: "en",
  locales: ["en", "lv"],
  // Enable locale detection
  localeDetection: false,
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|lv)/:path*"],
};
