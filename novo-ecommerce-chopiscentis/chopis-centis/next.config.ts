import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    //domains: ['https://api.escuelajs.co/api/v1/products'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakeapi.platzi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
