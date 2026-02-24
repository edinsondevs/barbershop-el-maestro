import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
	title: SITE_CONFIG.seoTitulo,
	description: SITE_CONFIG.seoDescription,
	keywords: SITE_CONFIG.seoKeywords,
	authors: [{ name: SITE_CONFIG.nombre }],
	openGraph: {
		title: SITE_CONFIG.seoTitulo,
		description: SITE_CONFIG.seoDescription,
		type: "website",
		locale: "es_AR",
		url: SITE_CONFIG.seoUrl,
		siteName: SITE_CONFIG.nombre,
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_CONFIG.seoTitulo,
		description: SITE_CONFIG.seoDescription,
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: SITE_CONFIG.seoUrl,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='es'
			className='scroll-smooth'>
			<head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<meta
					name='theme-color'
					content='#0a0a0a'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</head>
			<body className='antialiased'>{children}</body>
		</html>
	);
}
