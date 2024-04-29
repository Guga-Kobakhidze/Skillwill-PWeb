import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ge"],
  defaultLocale: "ge",
  localePrefix: {
    ge: "",
    en: "en",
  },
});

export const config = {
  matcher: ["/", "/(ge|en)/:path*"],
};
