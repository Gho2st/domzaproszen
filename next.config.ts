import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Domyślnie Next serwuje tylko WebP; AVIF jest o ~30% lżejszy,
    // a goście otwierają stronę na sali, często na słabym zasięgu.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
