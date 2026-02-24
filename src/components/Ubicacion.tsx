"use client";

import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_URL } from "@/config/site";

export default function Ubicacion() {
	return (
		<section
			id='ubicacion'
			className='py-20 lg:py-28 bg-[#0a0a0a] relative'
			aria-labelledby='ubicacion-titulo'>
			{/* Separador superior */}
			<div
				className='absolute inset-x-0 top-0 h-px'
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
				}}
			/>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-14'>
					<p className='section-label mb-3'>Dónde encontrarnos</p>
					<h2
						id='ubicacion-titulo'
						className='font-display text-4xl sm:text-5xl font-bold text-white mb-4'>
						Ubicación y{" "}
						<span className='gradient-text'>horarios</span>
					</h2>
					<div className='gold-divider' />
				</div>

				<div className='grid lg:grid-cols-5 gap-8 items-start'>
					{/* Mapa */}
					<div className='lg:col-span-3'>
						<div
							className='rounded-2xl overflow-hidden border'
							style={{ borderColor: "rgba(201,168,76,0.2)" }}>
							<iframe
								id='mapa-ubicacion'
								src={SITE_CONFIG.googleMapsEmbedUrl}
								width='100%'
								height='420'
								style={{ border: 0, display: "block" }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title={`Mapa de ubicación de ${SITE_CONFIG.nombre}`}
								aria-label={`Mapa de ${SITE_CONFIG.direccion}`}
							/>
						</div>
					</div>

					{/* Info lateral */}
					<div className='lg:col-span-2 space-y-5'>
						{/* Dirección */}
						<div
							className='card-dark p-5 flex gap-4'
							style={{ borderColor: "rgba(201,168,76,0.15)" }}>
							<div className='w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shrink-0 mt-0.5'>
								<MapPin
									size={18}
									className='text-black'
								/>
							</div>
							<div>
								<h3 className='text-white font-semibold mb-1'>
									Dirección
								</h3>
								<p className='text-gray-400 text-sm leading-relaxed'>
									{SITE_CONFIG.direccion}
								</p>
							</div>
						</div>

						{/* Horarios */}
						<div
							className='card-dark p-5'
							style={{ borderColor: "rgba(201,168,76,0.15)" }}>
							<div className='flex gap-4 mb-4'>
								<div className='w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shrink-0'>
									<Clock
										size={18}
										className='text-black'
									/>
								</div>
								<div>
									<h3 className='text-white font-semibold'>
										Horarios de atención
									</h3>
								</div>
							</div>
							<div className='space-y-2 ml-14'>
								{SITE_CONFIG.horarios.map((h) => (
									<div
										key={h.dia}
										className='flex items-center justify-between border-b border-[#2e2e2e] pb-2 last:border-0 last:pb-0'>
										<span className='text-gray-400 text-sm'>
											{h.dia}
										</span>
										<span
											className={`text-sm font-medium ${
												h.horario === "Cerrado"
													? "text-gray-600"
													: "text-yellow-500"
											}`}>
											{h.horario}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* CTA WhatsApp */}
						<a
							href={WHATSAPP_URL}
							id='ubicacion-cta-whatsapp'
							target='_blank'
							rel='noopener noreferrer'
							className='btn-primary w-full justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								width='20'
								height='20'
								aria-hidden='true'>
								<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
							</svg>
							Reservar turno por WhatsApp
						</a>

						{/* Nota */}
						<p className='text-gray-600 text-xs text-center'>
							También podés venir sin turno, sujeto a
							disponibilidad.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
