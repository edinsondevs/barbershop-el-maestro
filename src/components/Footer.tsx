"use client";

import { SITE_CONFIG, WHATSAPP_URL } from "@/config/site";
import { Scissors, Clock } from "lucide-react";

// Ícono Instagram
function IconInstagram({ size = 20 }: { size?: number }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			width={size}
			height={size}
			aria-hidden='true'>
			<rect
				x='2'
				y='2'
				width='20'
				height='20'
				rx='5'
				ry='5'
			/>
			<circle
				cx='12'
				cy='12'
				r='4'
			/>
			<circle
				cx='17.5'
				cy='6.5'
				r='1'
				fill='currentColor'
				stroke='none'
			/>
		</svg>
	);
}

// Ícono Facebook
function IconFacebook({ size = 20 }: { size?: number }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			width={size}
			height={size}
			aria-hidden='true'>
			<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
		</svg>
	);
}

// Ícono WhatsApp
function IconWhatsApp({ size = 20 }: { size?: number }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='currentColor'
			width={size}
			height={size}
			aria-hidden='true'>
			<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
		</svg>
	);
}

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-[#060606] border-t border-[#1a1a1a] pt-14 pb-24 sm:pb-14'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12'>
					{/* Marca */}
					<div className='space-y-4'>
						<div className='flex items-center gap-2'>
							<div className='w-8 h-8 gradient-gold rounded-full flex items-center justify-center'>
								<Scissors
									size={16}
									className='text-black rotate-45'
								/>
							</div>
							<span className='font-display font-bold text-lg text-white'>
								{SITE_CONFIG.nombre}
							</span>
						</div>
						<p className='text-gray-500 text-sm leading-relaxed'>
							{SITE_CONFIG.descripcionCorta}
						</p>
						{/* Redes sociales */}
						<div className='flex gap-3 pt-2'>
							<a
								href={SITE_CONFIG.instagram}
								id='footer-instagram'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Ver Instagram'
								className='w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-600/50 transition-all'>
								<IconInstagram size={18} />
							</a>
							<a
								href={SITE_CONFIG.facebook}
								id='footer-facebook'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Ver Facebook'
								className='w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-600/50 transition-all'>
								<IconFacebook size={16} />
							</a>
							<a
								href={WHATSAPP_URL}
								id='footer-whatsapp'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Contactar por WhatsApp'
								className='w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#2e2e2e] flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-600/50 transition-all'>
								<IconWhatsApp size={17} />
							</a>
						</div>
					</div>

					{/* Links rápidos */}
					<div>
						<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
							Navegación
						</h3>
						<nav aria-label='Links del footer'>
							<ul className='space-y-2'>
								{[
									{ href: "#inicio", label: "Inicio" },
									{
										href: "#nosotros",
										label: "Sobre nosotros",
									},
									{ href: "#servicios", label: "Servicios" },
									{ href: "#turnos", label: "Turnos" },
									{
										href: "#testimonios",
										label: "Opiniones",
									},
									{ href: "#ubicacion", label: "Ubicación" },
								].map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
											className='text-gray-500 hover:text-yellow-400 text-sm transition-colors flex items-center gap-2 group'>
											<span className='w-1 h-1 rounded-full bg-yellow-600/50 group-hover:bg-yellow-400 transition-colors' />
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Contacto */}
					<div>
						<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
							Contacto
						</h3>
						<div className='space-y-3 text-sm text-gray-500'>
							<p className='flex gap-2'>
								<span className='text-yellow-600/70 shrink-0'>
									📍
								</span>
								{SITE_CONFIG.direccion}
							</p>
							<p className='flex gap-2'>
								<span className='text-yellow-600/70 shrink-0'>
									🕐
								</span>
								Lun–Vie: 09:00–20:00 / Sáb: 09:00–18:00
							</p>
						</div>

						{/* CTA */}
						<a
							href={WHATSAPP_URL}
							id='footer-cta'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-green-600/20 hover:bg-green-600/30 text-green-400 text-sm font-medium rounded-lg border border-green-600/30 hover:border-green-500/50 transition-all'>
							<IconWhatsApp size={16} />
							Escribinos ahora
						</a>
					</div>
				</div>

				{/* Línea divisoria */}
				<div className='border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
					<p className='text-gray-600 text-xs'>
						© {currentYear} {SITE_CONFIG.nombre}. Todos los derechos
						reservados.
					</p>
					<p className='text-gray-700 text-xs'>
						{SITE_CONFIG.ciudad}, {SITE_CONFIG.provincia}, Argentina
					</p>
				</div>
			</div>

			{/* Botón WhatsApp sticky mobile — solo visible en pantallas pequeñas, 
          oculto en sm+ porque ya está en el botón flotante */}
			<div
				className='fixed bottom-0 left-0 right-0 p-3 sm:hidden z-40'
				style={{
					background:
						"linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
				}}>
				<a
					href='#turnos'
					id='footer-mobile-cta'
					className='flex items-center justify-center gap-3 w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all shadow-lg'>
					<Clock size={20} />
					Reservar turno ahora
				</a>
			</div>
		</footer>
	);
}
