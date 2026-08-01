import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { generateMetadata } from "@/config/generateMetadata";

export const metadata = generateMetadata(SITE_CONFIG);


export default function RootLayout({
	children,
}: {
	readonly children: React.ReactNode;
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
