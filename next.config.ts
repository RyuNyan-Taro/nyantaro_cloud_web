import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "doodleipsum.com",
            },
            {
                protocol: "https",
                hostname: `${process.env.SUPABASE_PROJECT_ID}.supabase.co`,
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
};

export default nextConfig;
