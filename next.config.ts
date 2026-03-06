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
                hostname: "blyixuxiltbiaxvesavl.supabase.co",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    }
};

export default nextConfig;
