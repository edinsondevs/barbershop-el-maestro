"use client";

import { Scissors, Smile, Sparkles, Palette, Leaf, Wind } from "lucide-react";

interface Servicio {
	id: string;
	icon: React.ElementType;
	nombre: string;
	descripcion: string;
	duracion: string;
}

const SERVICIOS: Servicio[] = [
	{
		id: "corte-cabello",
		icon: Scissors,
		nombre: "Corte de cabello",
		descripcion:
			"Cortes modernos y clásicos adaptados a tu estilo, tipo de pelo y forma de rostro. Con tijera o máquina, siempre con acabado prolijo.",
		duracion: "30–45 min",
	},
	{
		id: "corte-barba",
		icon: Smile,
		nombre: "Corte de barba",
		descripcion:
			"Delineado y perfilado de barba para mantenerla impecable. Definimos contornos y trabajamos el degradado para un resultado natural.",
		duracion: "20–30 min",
	},
	{
		id: "afeitado-clasico",
		icon: Sparkles,
		nombre: "Afeitado clásico",
		descripcion:
			"La experiencia tradicional del barbero: toalla caliente, crema de afeitar artesanal y navaja de filo para un afeitado suave y duradero.",
		duracion: "30 min",
	},
	{
		id: "coloracion",
		icon: Palette,
		nombre: "Coloración",
		descripcion:
			"Tinte, mechas o decoloración para cabello y barba. Trabajamos con productos de alta calidad para cuidar tu cabello mientras cambiás tu look.",
		duracion: "60–90 min",
	},
	{
		id: "tratamiento-capilar",
		icon: Leaf,
		nombre: "Tratamiento capilar",
		descripcion:
			"Hidratación profunda, anti-caída y nutrición capilar para recuperar la fuerza y el brillo de tu cabello. Asesoramiento personalizado incluido.",
		duracion: "45 min",
	},
	{
		id: "combo-corte-barba",
		icon: Wind,
		nombre: "Combo corte + barba",
		descripcion:
			"La combinación perfecta: corte de cabello completo más arreglo y perfilado de barba, todo en una sola sesión para que salgas renovado.",
		duracion: "50–70 min",
	},
];

export default function Servicios() {
	return (
		<section
			id='servicios'
			className='py-20 lg:py-28 bg-[#0a0a0a] relative'
			aria-labelledby='servicios-titulo'>
			{/* Decoración */}
			<div
				className='absolute inset-x-0 top-0 h-px'
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
				}}
			/>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header de sección */}
				<div className='text-center mb-14'>
					<p className='section-label mb-3'>Lo que hacemos</p>
					<h2
						id='servicios-titulo'
						className='font-display text-4xl sm:text-5xl font-bold text-white mb-4'>
						Nuestros{" "}
						<span className='gradient-text'>servicios</span>
					</h2>
					<div className='gold-divider mb-4' />
					<p className='text-gray-400 max-w-xl mx-auto'>
						Cada servicio está diseñado para que salgas sintiéndote
						y viéndote en tu mejor versión.
					</p>
				</div>

				{/* Grid de servicios */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{SERVICIOS.map((servicio) => {
						const Icon = servicio.icon;
						return (
							<article
								key={servicio.id}
								id={`servicio-${servicio.id}`}
								className='card-dark p-6 group relative overflow-hidden'>
								{/* Efecto hover de brillo */}
								<div
									className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
									style={{
										background:
											"radial-gradient(circle at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)",
									}}
								/>

								{/* Ícono */}
								<div className='w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300'>
									<Icon
										size={22}
										className='text-black'
										strokeWidth={2}
									/>
								</div>

								{/* Contenido */}
								<h3 className='font-display text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors'>
									{servicio.nombre}
								</h3>
								<p className='text-gray-400 text-sm leading-relaxed mb-4'>
									{servicio.descripcion}
								</p>

								{/* Duración */}
								<div className='flex items-center gap-1.5 text-yellow-600/70 text-xs font-medium mt-auto'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										className='w-3.5 h-3.5'
										aria-hidden='true'>
										<circle
											cx='12'
											cy='12'
											r='10'
										/>
										<polyline points='12 6 12 12 16 14' />
									</svg>
									<span>{servicio.duracion}</span>
								</div>

								{/* Línea inferior decorativa */}
								<div
									className='absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									style={{
										background:
											"linear-gradient(90deg, transparent, #c9a84c, transparent)",
									}}
								/>
							</article>
						);
					})}
				</div>

				{/* Nota sin precios */}
				<p className='text-center text-gray-500 text-sm mt-10'>
					* Consultá precios y disponibilidad directamente por
					WhatsApp.
				</p>
			</div>
		</section>
	);
}
