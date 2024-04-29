import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ge", "en"],
  defaultLocale: "ge",
});

export const config = {
  matcher: ["/", "/(ge|en)/:path*"],
};
