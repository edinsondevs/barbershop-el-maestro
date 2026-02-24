"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

const TESTIMONIOS = SITE_CONFIG.testimonios;

function StarRating({ rating }: { rating: number }) {
	return (
		<div
			className='flex gap-1'
			aria-label={`${rating} estrellas`}>
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					className={`w-4 h-4 ${
						i < rating ? "star-filled" : "star-empty"
					}`}
					fill='currentColor'
					viewBox='0 0 20 20'
					aria-hidden='true'>
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				</svg>
			))}
		</div>
	);
}

export default function Testimonios() {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((c) => (c - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);
	const next = () => setCurrent((c) => (c + 1) % TESTIMONIOS.length);

	const testimonio = TESTIMONIOS[current];

	return (
		<section
			id='testimonios'
			className='py-20 lg:py-28 bg-[#111111] relative overflow-hidden'
			aria-labelledby='testimonios-titulo'>
			{/* Decoración de fondo */}
			<div
				className='absolute inset-0 opacity-[0.03]'
				style={{
					backgroundImage:
						'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><text y="45" font-size="40" fill="%23c9a84c">✂</text></svg>\')',
					backgroundSize: "60px 60px",
				}}
				aria-hidden='true'
			/>

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Header */}
				<div className='text-center mb-14'>
					<p className='section-label mb-3'>
						Lo que dicen nuestros clientes
					</p>
					<h2
						id='testimonios-titulo'
						className='font-display text-4xl sm:text-5xl font-bold text-white mb-4'>
						Opiniones <span className='gradient-text'>reales</span>
					</h2>
					<div className='gold-divider' />
				</div>

				{/* Carousel */}
				<div className='relative'>
					{/* Tarjeta principal */}
					<div
						key={testimonio.id}
						id={testimonio.id}
						className='card-dark p-8 sm:p-10 relative'
						style={{
							background:
								"linear-gradient(135deg, rgba(26,26,26,0.9), rgba(22,22,22,0.9))",
							border: "1px solid rgba(201,168,76,0.2)",
						}}>
						{/* Ícono de cita */}
						<Quote
							size={40}
							className='absolute top-6 right-8 text-yellow-600/20'
							aria-hidden='true'
						/>

						{/* Rating */}
						<div className='mb-5'>
							<StarRating rating={testimonio.rating} />
						</div>

						{/* Comentario */}
						<blockquote className='text-gray-200 text-lg leading-relaxed mb-6 font-light italic'>
							&ldquo;{testimonio.comentario}&rdquo;
						</blockquote>

						{/* Autor */}
						<div className='flex items-center gap-4'>
							<div
								className='w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-black font-bold text-lg shrink-0'
								aria-hidden='true'>
								{testimonio.inicial}
							</div>
							<div>
								<p className='text-white font-semibold'>
									{testimonio.nombre}
								</p>
								<p className='text-gray-500 text-sm'>
									{testimonio.rol}
								</p>
							</div>
						</div>
					</div>

					{/* Controles */}
					<div className='flex items-center justify-between mt-6'>
						<button
							id='testimonios-prev'
							onClick={prev}
							className='w-10 h-10 rounded-full border border-[#2e2e2e] bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-600/50 transition-all'
							aria-label='Testimonio anterior'>
							<ChevronLeft size={18} />
						</button>

						{/* Dots */}
						<div
							className='flex gap-2'
							role='tablist'
							aria-label='Testimonios'>
							{TESTIMONIOS.map((_, i) => (
								<button
									key={i}
									id={`testimonio-dot-${i}`}
									role='tab'
									aria-selected={i === current}
									aria-label={`Testimonio ${i + 1}`}
									onClick={() => setCurrent(i)}
									className={`w-2 h-2 rounded-full transition-all duration-300 ${
										i === current
											? "w-6 bg-yellow-500"
											: "bg-gray-600 hover:bg-gray-500"
									}`}
								/>
							))}
						</div>

						<button
							id='testimonios-next'
							onClick={next}
							className='w-10 h-10 rounded-full border border-[#2e2e2e] bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-600/50 transition-all'
							aria-label='Siguiente testimonio'>
							<ChevronRight size={18} />
						</button>
					</div>
				</div>

				{/* Grid de avatars */}
				<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12'>
					{TESTIMONIOS.map((t, i) => (
						<button
							key={t.id}
							id={`testimonio-avatar-${i}`}
							onClick={() => setCurrent(i)}
							className={`p-4 rounded-xl border text-left transition-all duration-200 ${
								i === current
									? "border-yellow-600/50 bg-yellow-600/10"
									: "border-[#2e2e2e] bg-[#1a1a1a] hover:border-yellow-600/30"
							}`}
							aria-label={`Ver opinión de ${t.nombre}`}>
							<div className='flex items-center gap-2 mb-1'>
								<div
									className={`w-7 h-7 rounded-full flex items-center justify-center text-black text-xs font-bold shrink-0 ${
										i === current
											? "gradient-gold"
											: "bg-[#2e2e2e]"
									}`}>
									{t.inicial}
								</div>
								<p
									className={`text-xs font-medium truncate ${
										i === current
											? "text-yellow-400"
											: "text-gray-400"
									}`}>
									{t.nombre.split(" ")[0]}
								</p>
							</div>
							<StarRating rating={t.rating} />
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
