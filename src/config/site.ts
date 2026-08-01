// ============================================================
// CONFIGURACIÓN CENTRAL DE LA BARBERÍA
// Editá estos valores para personalizar el sitio
// ============================================================

import { SiteConfigInterfaces } from "@/types/site-config";

export const SITE_CONFIG: SiteConfigInterfaces = {
	version: '2.0.0',
	// --- Información del negocio ---
	nombre: 'Barbería El Maestro',
	slogan: 'Tu estilo, nuestra pasión, ¡dale!',
	descripcionCorta:
		'La mejor barbería de Buenos Aires. Metemos cortes modernos y clásicos, arreglo de barba y afeitado tradicional para que quedés re fachero.',

	// --- Contacto ---
	// Formato: código de país (549 para Argentina) + código de área + número
	// Ejemplo: 5491155667788 → (011) 5566-7788
	whatsappNumero: '5491100000000', // ← Reemplazá con tu número real
	whatsappMensaje: 'Hola%2C%20che%20quería%20sacar%20un%20turno',

	// --- Ubicación ---
	direccion: 'Av. Corrientes 1234, CABA, Buenos Aires, Argentina',
	ciudad: 'Buenos Aires',
	provincia: 'Buenos Aires',
	// Embed de Google Maps: reemplazá la URL con la de tu local
	// Cómo obtenerla: Google Maps → tu local → Compartir → Insertar mapa → copiá la URL del src
	googleMapsEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.017069343451!2d-58.38375!3d-34.60373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf2b9f6619%3A0x6c49ddb9e1dcb483!2sAv.%20Corrientes%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000',

	// --- Horarios ---
	horarios: [
		{ dia: 'Lunes a Viernes', horario: '09:00 – 20:00' },
		{ dia: 'Sábados', horario: '09:00 – 18:00' },
		{ dia: 'Domingos', horario: 'Cerrado' },
	],

	// --- Redes sociales ---
	instagram: 'https://instagram.com/barberiaelmaestro',
	facebook: 'https://facebook.com/barberiaelmaestro',

	// --- SEO ---
	seoTitulo:
		'Barbería El Maestro - Cortes de cabello y barba para caballeros | Buenos Aires',
	seoDescription:
		'Barbería profesional en Buenos Aires, Argentina. Cortes de cabello modernos y clásicos, arreglo de barba y afeitado tradicional. Atención personalizada con los mejores barberos.',
	seoKeywords:
		'barbería buenos aires, corte de pelo hombre buenos aires, barbero profesional, afeitado clásico, corte de barba CABA',
	seoUrl: 'https://barberiaelmaestro.com.ar',
	ogImage: '/images/Seo-barberia.png',

	// --- Reseñas de Google Maps (Manual) ---
	// Podés copiar las mejores reseñas de tu perfil de Google My Business
	testimonios: [
		{
			id: 'test-1',
			nombre: 'Matías Rodríguez',
			rol: 'Reseña de Google',
			comentario:
				'Re buena la atención y el local es de primera. Los barberos son unos genios, me hicieron el corte posta como quería. Re recomendable.',
			inicial: 'M',
			rating: 5,
		},
		{
			id: 'test-2',
			nombre: 'Santiago Pérez',
			rol: 'Reseña de Google',
			comentario:
				'La mejor barbería del barrio, por lejos. El servicio de toalla caliente para la barba es una locura, un 10 de 10.',
			inicial: 'S',
			rating: 5,
		},
		{
			id: 'test-3',
			nombre: 'Lucas Fernández',
			rol: 'Reseña de Google',
			comentario:
				'Ambiente re copado, buena música y los mejores cortes. Vale cada mango.',
			inicial: 'L',
			rating: 5,
		},
		{
			id: 'test-4',
			nombre: 'Agustín Morales',
			rol: 'Reseña de Google',
			comentario:
				'Súper prolijos los pibes, unos profesionales de verdad. Ya tengo mi turno para el mes que viene, ni ahí me lo pierdo.',
			inicial: 'A',
			rating: 5,
		},
	],
	// --- Barberos ---
	barberos: [
		{
			id: 'Edinson',
			nombre: 'Edinson',
			foto: '/images/Barbero_3.jpg',
			calendarId: '', // Opcional: ID específico si cada uno tiene su propio calendario
		},
		{
			id: 'Juan',
			nombre: 'Juan',
			foto: '/images/Barbero_1.jpg',
			calendarId:
				'3715d0aaeb0e4b8247097f282e2b4ec672f86a9f33f446ff69c82b8c3494b251@group.calendar.google.com',
		},
		{
			id: 'Marcos',
			nombre: 'Marcos',
			foto: '/images/Barbero_2.jpg',
			calendarId:
				'1143ef765cd0060a1c37e705b08bf4fcd804e31ba2f29fd68d79f98fd61dd17d@group.calendar.google.com',
		},
		{
			id: 'cualquiera',
			nombre: 'Cualquiera',
			foto: '/images/Peluquera_1.jpg',
			calendarId: process.env.GOOGLE_CALENDAR_ID, // Usa el calendario principal por defecto
		},
	],
} as const;

// URL completa de WhatsApp
export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumero}?text=${SITE_CONFIG.whatsappMensaje}`;
