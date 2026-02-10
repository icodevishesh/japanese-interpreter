import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.japanese-interpreter.com"],
    },
};

export default withNextIntl(nextConfig);
