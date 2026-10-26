import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.example.com',
      //   pathname: '/uploads/**',
      // },
      {
        protocol: 'https',
        hostname: '**.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'psxoezxhibrwhk1p.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
