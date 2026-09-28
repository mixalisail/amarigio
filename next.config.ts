import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
output: "export",
trailingSlash: true,
 
basePath: "/amarigio",
assetPrefix: "/amarigio",
 
images: {
unoptimized: true,
},
};
 
export default nextConfig;
