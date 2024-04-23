import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.jobkorea.kr",
      },
      {
        protocol: "https",
        hostname: "file1.jobkorea.co.kr",
      },
    ],
  },
};
  
export default withVanillaExtract(nextConfig);
  