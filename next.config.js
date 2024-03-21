/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            
          },
          {
            protocol: "https",
            hostname: "careeratgermany-de.vercel.app",
          },
          {
            protocol: "https",
            hostname: "tony-next-ecommerce.s3.ap-south-1.amazonaws.com",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
        ],
      },
}

module.exports = nextConfig
