import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    nextIntl: {
        locales: ['ge', 'en'],
        defaultLocale: 'ge',
        localeDetection: false
      },
};

export default withNextIntl(nextConfig);
