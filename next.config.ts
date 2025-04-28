import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    reactRemoveProperties: true,
  },
  async redirects() {
    return [{ source: "/test", destination: "/test2", permanent: false }];
  },

  /* config options here */
};

export default nextConfig;
