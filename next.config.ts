/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
        unoptimized: true, // Add this for better Vercel compatibility
    },
    // Add this
    distDir: '.next',
};

module.exports = nextConfig;