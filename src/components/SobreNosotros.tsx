"use client";

import Image from "next/image";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const STATS = [
	{ icon: Users, value: "+200", label: "Clientes atendidos" },
	{ icon: Award, value: "8+", label: "Años de experiencia" },
	{ icon: Clock, value: "6", label: "Días a la semana" },
	{ icon: CheckCircle, value: "100%", label: "Satisfacción garantizada" },
];

export default function SobreNosotros() {
	return (
		<section
			id='nosotros'
			className='py-20 lg:py-28 bg-[#111111] relative overflow-hidden'
			aria-labelledby='nosotros-titulo'>
			{/* Decoración de fondo */}
			<div
				className='absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none'
				style={{
					background:
						"radial-gradient(circle, #c9a84c, transparent 70%)",
					transform: "translate(50%, -50%)",
				}}
				aria-hidden='true'
			/>
			<div
				className='absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 pointer-events-none'
				style={{
					background:
						"radial-gradient(circle, #c9a84c, transparent 70%)",
					transform: "translate(-50%, 50%)",
				}}
				aria-hidden='true'
			/>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					{/* Imagen */}
					<div className='relative order-2 lg:order-1'>
						<div className='relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl'>
							<Image
								src='https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80&fm=webp'
								alt='Barbero profesional dando un corte de pelo'
								fill
								loading='lazy'
								sizes='(max-width: 1024px) 100vw, 50vw'
								className='object-cover object-top'
							/>
							{/* Overlay sutil */}
							<div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent' />
						</div>

						{/* Badge flotante */}
						<div
							className='absolute -bottom-5 -right-5 bg-[#1a1a1a] border border-yellow-600/30 rounded-xl px-5 py-4 shadow-xl'
							style={{ backdropFilter: "blur(8px)" }}>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 gradient-gold rounded-full flex items-center justify-center shrink-0'>
									<Award
										size={20}
										className='text-black'
									/>
								</div>
								<div>
									<p className='text-white font-bold text-sm'>
										Maestros barberos
									</p>
									<p className='text-gray-400 text-xs'>
										certificados
									</p>
								</div>
							</div>
						</div>

						{/* Marco decorativo dorado */}
						<div
							className='absolute -top-4 -left-4 w-24 h-24 border-2 border-yellow-600/30 rounded-xl'
							aria-hidden='true'
						/>
					</div>

					{/* Contenido */}
					<div className='order-1 lg:order-2'>
						<p className='section-label mb-3'>Quiénes somos</p>
						<div
							className='gold-divider mb-6'
							style={{ margin: "0 0 1.5rem 0" }}
						/>
						<h2
							id='nosotros-titulo'
							className='font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight'>
							Más de 8 años{" "}
							<span className='gradient-text'>
								afilando el arte
							</span>{" "}
							del buen corte
						</h2>

						<div className='space-y-4 text-gray-300 leading-relaxed'>
							<p>
								En{" "}
								<strong className='text-white'>
									Barbería El Maestro
								</strong>{" "}
								creemos que un buen corte va mucho más allá del
								cabello. Es la forma en que un hombre se
								presenta al mundo, la confianza que proyecta al
								salir por la puerta. Por eso, cada servicio lo
								tratamos con el cuidado y la precisión que
								merecés.
							</p>
							<p>
								Nuestro equipo de barberos certificados combina
								técnicas tradicionales con tendencias actuales
								para ofrecerte un resultado que no solo se vea
								bien, sino que también se adapte a tu estilo de
								vida y la forma de tu rostro.
							</p>
							<p>
								Usamos productos de primera calidad y trabajamos
								en un ambiente cuidado, donde podés relajarte y
								disfrutar del proceso. Porque venir a la
								barbería también es un momento para vos.
							</p>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-2 gap-4 mt-10'>
							{STATS.map(({ icon: Icon, value, label }) => (
								<div
									key={label}
									className='flex items-center gap-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl px-4 py-3'>
									<div className='w-9 h-9 gradient-gold rounded-lg flex items-center justify-center shrink-0'>
										<Icon
											size={18}
											className='text-black'
										/>
									</div>
									<div>
										<p className='text-white font-bold text-lg leading-none'>
											{value}
										</p>
										<p className='text-gray-500 text-xs mt-0.5'>
											{label}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
