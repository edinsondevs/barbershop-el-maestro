import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// Dominios permitidos para imágenes externas
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
		],
		// Formatos modernos: WebP con fallback automático a JPEG/PNG
		formats: ["image/webp", "image/avif"],
	},
};

export default nextConfig;
