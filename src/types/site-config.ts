export interface SiteConfig {
	/** Nombre del sitio */
	nombre: string;

	/** URL absoluta del sitio */
	url: string;

	/** Título SEO */
	seoTitulo: string;

	/** Descripción SEO */
	seoDescription: string;

	/** Palabras clave */
	seoKeywords: string[];

	/** Imagen Open Graph (ruta relativa o absoluta) */
	ogImage: string;

	/** Nombre mostrado en Open Graph */
	siteName?: string;

	/** Locale */
	locale?: string;

	/** Usuario de Twitter (opcional) */
	twitter?: string;

	/** Nombre del autor */
	author?: string;

	/** Nombre del publicador */
	publisher?: string;
}

export interface SiteConfigInterfaces {
	version: string;
	nombre: string;
	slogan: string;
	descripcionCorta: string;
	whatsappNumero: string;
	whatsappMensaje: string;
	direccion: string;
	ciudad: string;
	provincia: string;
	googleMapsEmbedUrl: string;
	horarios: Horario[];
	instagram: string;
	facebook: string;
	seoTitulo: string;
	seoDescription: string;
	seoKeywords: string;
	seoUrl: string;
	testimonios: Testimonio[];
	barberos: Barbero[];
	imagenes?: Imagen[];
	/** Imagen Open Graph (ruta relativa o absoluta) */
	ogImage?: string;
}

interface Imagen {
	id: string;
	url: string;
	alt: string;
}

interface Barbero {
	id: string;
	nombre: string;
	foto: string;
	calendarId?: string;
}

interface Testimonio {
	id: string;
	nombre: string;
	rol: string;
	comentario: string;
	inicial: string;
	rating: number;
}

interface Horario {
	dia: string;
	horario: string;
}