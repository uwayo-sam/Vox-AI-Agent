/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: "/api/vapi/:path*",
        destination: "https://api.vapi.ai/:path*",
      },
    ];
  },
};

export default nextConfig;
