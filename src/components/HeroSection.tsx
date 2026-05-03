"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { CalendarCheck, ChevronDown } from "lucide-react";
import Barbero from "@/images/barbero.webp";
import { usePathname } from "next/navigation";

export default function HeroSection() {
	const params = usePathname();
	const textoBtn = params === "/v2" ? "Reservar turno online" : "Escribenos para reservar turno";

	return (
		<section
			id='inicio'
			className='relative min-h-screen flex items-center justify-center overflow-hidden'
			aria-label='Sección principal'>
			{/* Imagen de fondo con overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src={Barbero}
					alt='Interior de barbería profesional'
					fill
					priority
					sizes='100vw'
					className='object-cover object-center'
					style={{ filter: "brightness(0.35)" }}
				/>
				{/* Gradiente sobre la imagen */}
				<div
					className='absolute inset-0'
					style={{
						background:
							"linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,1) 100%)",
					}}
				/>
				{/* Patrón sutil de rayas diagonales */}
				<div
					className='absolute inset-0 opacity-5'
					style={{
						backgroundImage:
							"repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
						backgroundSize: "20px 20px",
					}}
				/>
			</div>

			{/* Contenido */}
			<div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32'>
				{/* Badge superior */}
				<div
					className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-600/40 bg-yellow-600/10 text-yellow-400 text-sm font-medium'
					style={{ backdropFilter: "blur(8px)" }}>
					<span className='w-2 h-2 rounded-full bg-yellow-400 animate-pulse' />
					Expertos en estilo masculino
				</div>

				{/* Headline */}
				<h1 className='font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6'>
					Tu estilo,{" "}
					<span className='gradient-text'>nuestra verdadera pasión</span>
				</h1>

				{/* Subheadline */}
				<p className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed font-light'>
					Barbería profesional en {SITE_CONFIG.ciudad}. Cortes
					modernos y clásicos, arreglo de barba y afeitado tradicional
					con la mejor atención personalizada.
				</p>

				{/* Rating social proof */}
				<div className='flex items-center justify-center gap-3 mb-10'>
					<div className='flex'>
						{Array.from({ length: 5 }).map((_, i) => (
							<svg
								key={i}
								className='w-5 h-5 star-filled'
								fill='currentColor'
								viewBox='0 0 20 20'
								aria-hidden='true'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
							</svg>
						))}
					</div>
					<span className='text-gray-400 text-sm'>
						<strong className='text-white'>+200 clientes</strong>{" "}
						satisfechos
					</span>
				</div>

				{/* CTAs */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<a
						href={params === "/v2" ? "#turnos" : "https://wa.me/5493416141044"}
						target={params === "/v2" ? "_self" : "_blank"}
						id='hero-cta-turnos'
						className='btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center'>
						<CalendarCheck size={20} />
						{textoBtn}
					</a>
					<a
						href='#servicios'
						id='hero-cta-servicios'
						className='btn-secondary w-full sm:w-auto justify-center'>
						Ver servicios
					</a>
				</div>

				{/* Scroll indicator */}
				<a
					href='#nosotros'
					id='hero-scroll-indicator'
					aria-label='Ver más'
					className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-400 transition-colors group'>
					<span className='text-xs tracking-widest uppercase font-medium'>
						Ver más
					</span>
					<ChevronDown
						size={20}
						className='animate-bounce group-hover:text-yellow-400'
					/>
				</a>
			</div>
		</section>
	);
}
