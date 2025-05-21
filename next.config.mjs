/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // Bu satırı eklemen gerekiyor
};

export default nextConfig;
