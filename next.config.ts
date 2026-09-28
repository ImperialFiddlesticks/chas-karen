import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The board page moved into "Om föreningen".
      {
        source: "/styrelsen",
        destination: "/om-foreningen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
