import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktifkan minifikasi untuk mempercepat loading
  swcMinify: true,

  // Konfigurasi headers untuk caching
  async headers() {
    return [
      {
        source: "/(.*)", // Berlaku untuk semua halaman & aset
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", 
            // Cache selama 1 tahun (untuk aset statis)
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
            // Cache halaman selama 1 hari, tapi bisa revalidate setelah 1 jam
          },
        ],
      },
    ];
  },

  // Konfigurasi untuk gambar dengan Next.js Image Optimization
  images: {
    formats: ["image/avif", "image/webp"], // Gunakan format gambar yang lebih ringan
    minimumCacheTTL: 31536000, // Cache gambar selama 1 tahun
  },
};

export default nextConfig;
