import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./locales/request.ts");

const nextConfig: NextConfig = {
  // your other Next.js options here
};

export default withNextIntl(nextConfig);
