import { SiteConfigInterfaces } from '@/types/site-config';
import { Metadata } from 'next';

export function generateMetadata(config: SiteConfigInterfaces): Metadata {
	return {
		metadataBase: new URL(config.seoUrl),

		title: config.nombre,

		description: config.seoDescription,

		keywords: config.seoKeywords,

		authors: [
			{
				name: 'Edinson Madrid',
			},
		],

		creator: 'Edinson Madrid',

		publisher: 'Edinson Digital',

		alternates: {
			canonical: config.seoUrl,
		},

		robots: {
			index: true,
			follow: true,
		},

		openGraph: {
			title: config.nombre,

			description: config.seoDescription,

			url: config.seoUrl,

			siteName: config.nombre,

			locale: 'es_AR',

			type: 'website',

			images: [
				{
					url: config.ogImage || '',

					width: 1200,

					height: 630,
				},
			],
		},

		twitter: {
			card: 'summary_large_image',

			title: config.nombre,

			description: config.seoDescription,

			images: [config.ogImage || ''],
		},
	};
}
