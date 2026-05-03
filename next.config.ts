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
	output: "standalone",
	// Esta parte es vital para el Hot Reload a través de la red de Docker
	webpack: (config, { dev, isServer }) => {
		if (dev && !isServer) {
			config.watchOptions = {
				poll: 100, // Revisa cambios cada 500ms (más rápido)
				aggregateTimeout: 100, // Tiempo de espera desde que dejas de escribir hasta que compila
				// Evita que Webpack escanee estas carpetas, ahorrando mucho tiempo
				ignored: [
        		  '**/node_modules',
        		  '**/.next',
        		  '**/.git'
        		],
			};
		}
		return config;
	},
};

export default nextConfig;
