/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tilemaster.co.kr" }],
        destination: "https://tilemaster.co.kr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
