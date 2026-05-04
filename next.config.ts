import type { NextConfig } from "next";

const isDockerDev =
	process.env.NODE_ENV === "development" && process.env.DOCKER === "true";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
		],
		formats: ["image/webp", "image/avif"],
	},

	output: "standalone",

	turbopack: {},
};

export default nextConfig;
