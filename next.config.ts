import type { NextConfig } from "next";
import {
  unstable_getResponseFromNextConfig,
} from 'next/experimental/testing/server'

const nextConfig: NextConfig = {
  compiler: {
    reactRemoveProperties: true,
  },
  async redirects() {
    return [{ source: '/test', destination: '/test2', permanent: false }]
  },
  
  /* config options here */
};

const response = async () => await unstable_getResponseFromNextConfig({
  url: "https://nextjs.org/test", 
  nextConfig
})

export default response;
