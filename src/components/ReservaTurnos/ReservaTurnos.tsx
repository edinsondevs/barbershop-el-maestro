"use client";

import { useState, useMemo, useEffect } from "react";
import { format, addDays, isSameDay, startOfDay, isSunday } from "date-fns";
import { es } from "date-fns/locale";
import {
	Calendar,
	Clock,
	CheckCircle2,
	ArrowRight,
	User,
	Phone,
	Mail,
	Loader2,
	Scissors,
} from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";

// Generar horarios de 30 minutos
const generateTimeSlots = () => {
	const slots = [];
	const startHour = 9;
	const endHour = 20;
	for (let hour = startHour; hour < endHour; hour++) {
		if (hour === 13) continue; // Almuerzo
		slots.push(`${hour.toString().padStart(2, "0")}:00`);
		slots.push(`${hour.toString().padStart(2, "0")}:30`);
	}
	return slots;
};

export default function ReservaTurnos() {
	const [selectedDate, setSelectedDate] = useState<Date>(
		addDays(startOfDay(new Date()), 1),
	);
	const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [step, setStep] = useState(1); // 1: Barbero, 2: Fecha, 3: Hora, 4: Datos, 5: Confirmación

	// Formulario de cliente
	const [formData, setFormData] = useState({
		nombre: "",
		telefono: "",
		email: "",
	});
	// error de email (solo si el usuario escribió algo inválido)
	const [emailError, setEmailError] = useState<string | null>(null);

	// helper de validación simple
	const isValidEmail = (email: string) => {
		// simple regex para comprobar el formato básico
		return /^\S+@\S+\.\S+$/.test(email);
	};

	// Estado para los turnos ocupados
	const [occupiedSlots, setOccupiedSlots] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isBooking, setIsBooking] = useState(false);

	// Consultar disponibilidad
	useEffect(() => {
		async function fetchAvailability() {
			setIsLoading(true);
			try {
				const dateKey = format(selectedDate, "yyyy-MM-dd");
				const res = await fetch(
					`/api/availability?date=${dateKey}&barber=${selectedBarber}`,
				);
				const data = await res.json();
				setOccupiedSlots(data.busySlots || []);
			} catch (error) {
				console.error("Error al cargar disponibilidad:", error);
			} finally {
				setIsLoading(false);
			}
		}

		if (step === 3) fetchAvailability();
	}, [selectedDate, step]);

	// Generar próximos 14 días
	const availableDates = useMemo(() => {
		const dates = [];
		const current = startOfDay(new Date());
		for (let i = 0; i < 20; i++) {
			const date = addDays(current, i + 1);
			if (!isSunday(date)) dates.push(date);
			if (dates.length >= 14) break;
		}
		return dates;
	}, []);

	const timeSlots = useMemo(() => generateTimeSlots(), []);

	const handleDateSelect = (date: Date) => {
		setSelectedDate(date);
		setSelectedTime(null);
		setStep(3);
	};

	const handleFinalBooking = async () => {
		// validación de datos obligatorios
		if (
			!selectedBarber ||
			!selectedDate ||
			!selectedTime ||
			!formData.nombre ||
			!formData.telefono
		)
			return;

		setIsBooking(true);
		try {
			const fechaKey = format(selectedDate, "yyyy-MM-dd");

			// 1. Agendar en Google Calendar vía API
			const response = await fetch("/api/availability", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					fecha: fechaKey,
					hora: selectedTime,
					barbero: selectedBarber,
				}),
			});

			if (response.ok) {
				// 2. Redirigir a WhatsApp con el resumen
				const fechaFormateada = format(
					selectedDate,
					"eeee d 'de' MMMM",
					{ locale: es },
				);
				const mensaje = `Hola!%20Acabo%20de%20reservar%20un%20un%20turno%20online.%0A%0A*Detalles:*%0A👤%20*Nombre:*%20${formData.nombre}%0A💈%20*Barbero:*%20${SITE_CONFIG.barberos.find((b) => b.id === selectedBarber)?.nombre}%0A📅%20*Fecha:*%20${fechaFormateada}%0A⏰%20*Hora:*%20${selectedTime}hs%0A📞%20*Tel:*%20${formData.telefono}%0A✉️%20*Email:*%20${formData.email || "N/A"}`;
				const url = `https://wa.me/${SITE_CONFIG.whatsappNumero}?text=${mensaje}`;
				window.open(url, "_blank");
				setStep(5);
			} else {
				alert(
					"Hubo un error al reservar el turno. Por favor contactanos directamente por WhatsApp.",
				);
			}
		} catch (error) {
			console.error("Error al reservar:", error);
		} finally {
			setIsBooking(false);
		}
	};

	return (
		<section
			id='turnos'
			className='py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden'>
			<div
				className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none'
				style={{
					backgroundImage:
						"radial-gradient(#c9a84c 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='text-center mb-12'>
					<p className='section-label mb-3'>Reserva Online</p>
					<h2 className='font-display text-4xl sm:text-5xl font-bold text-white mb-4'>
						Sacá tu <span className='gradient-text'>turno</span>
					</h2>
					<div className='gold-divider mb-6' />
				</div>

				<div className='card-dark overflow-hidden bg-[#111111] border-[#2e2e2e]'>
					{/* Progress Header */}
					<div className='flex border-b border-[#2e2e2e]'>
						{[1, 2, 3, 4, 5].map((n) => (
							<div
								key={n}
								className={`flex-1 py-4 text-center text-[10px] font-bold uppercase transition-all border-b-2 ${step === n ? "text-yellow-500 border-yellow-500 bg-white/5" : "text-gray-600 border-transparent"}`}>
								Paso {n}
							</div>
						))}
					</div>

					<div className='p-6 sm:p-10'>
						{/* STEP 1: Barberó */}
						{step === 1 && (
							<div className='animate-fade-up'>
								<h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
									<Scissors
										size={20}
										className='text-yellow-500'
									/>{" "}
									Seleccioná tu barbero
								</h3>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									{SITE_CONFIG.barberos.map((barber) => (
										<button
											key={barber.id}
											onClick={() => {
												setSelectedBarber(barber.id);
												setStep(2);
											}}
											className={`p-6 rounded-xl border flex items-center justify-between transition-all ${selectedBarber === barber.id ? "border-yellow-500 bg-yellow-500/10 text-yellow-400" : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-yellow-600/50 text-gray-400"}`}>
											<div className='flex items-center gap-4 text-left'>
												<div
													className={`w-16 h-16 rounded-full relative flex items-center justify-center font-bold text-xl overflow-hidden ${selectedBarber === barber.id ? "bg-yellow-500 text-black border-2 border-yellow-400" : "bg-[#2e2e2e] text-gray-400 border border-[#3e3e3e]"}`}>
													{barber.foto ? (
														<Image
															src={barber.foto}
															alt={barber.nombre}
															fill
															className='object-cover'
														/>
													) : (
														(
															barber as {
																nombre: string;
															}
														).nombre[0]
													)}
												</div>
												<div>
													<span className='font-display text-lg font-semibold block'>
														{barber.nombre}
													</span>
													<span className='text-xs text-gray-500 uppercase tracking-wider'>
														{barber.id ===
														"cualquiera"
															? "Cualquier experto"
															: "Barbero Profesional"}
													</span>
												</div>
											</div>
											{selectedBarber === barber.id && (
												<CheckCircle2
													size={24}
													className='text-yellow-500'
												/>
											)}
										</button>
									))}
								</div>
							</div>
						)}

						{/* STEP 2: Fecha */}
						{step === 2 && (
							<div className='animate-fade-up'>
								<h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
									<Calendar
										size={20}
										className='text-yellow-500'
									/>{" "}
									Seleccioná el día
								</h3>
								<div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3'>
									{availableDates.map((date) => (
										<button
											key={date.toISOString()}
											onClick={() =>
												handleDateSelect(date)
											}
											className={`p-4 rounded-xl border flex flex-col items-center gap-1 transition-all ${isSameDay(selectedDate, date) ? "border-yellow-500 bg-yellow-500/10 text-yellow-400" : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-yellow-600/50 text-gray-400"}`}>
											<span className='text-[10px] uppercase opacity-70'>
												{format(date, "eee", {
													locale: es,
												})}
											</span>
											<span className='text-xl font-bold'>
												{format(date, "d")}
											</span>
										</button>
									))}
								</div>
								<div className='mt-8'>
									<button
										onClick={() => setStep(1)}
										className='btn-secondary py-2 px-4 shadow-none border-gray-700 text-gray-400'>
										Volver
									</button>
								</div>
							</div>
						)}

						{/* STEP 3: Hora */}
						{step === 3 && (
							<div className='animate-fade-up'>
								<h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
									<Clock
										size={20}
										className='text-yellow-500'
									/>{" "}
									Horarios para el{" "}
									{format(selectedDate, "d 'de' MMMM", {
										locale: es,
									})}
								</h3>
								{isLoading ? (
									<div className='py-20 flex justify-center text-yellow-500'>
										<Loader2
											className='animate-spin'
											size={32}
										/>
									</div>
								) : (
									<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3'>
										{timeSlots.map((time) => {
											const isOccupied =
												occupiedSlots.includes(time);
											return (
												<button
													key={time}
													disabled={isOccupied}
													onClick={() =>
														setSelectedTime(time)
													}
													className={`py-3 rounded-lg border text-sm transition-all ${isOccupied ? "opacity-20 cursor-not-allowed grayscale" : selectedTime === time ? "border-yellow-500 bg-yellow-500 text-black font-bold" : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-yellow-600/50 text-gray-300"}`}>
													{time}
												</button>
											);
										})}
									</div>
								)}
								<div className='mt-8 flex justify-between'>
									<button
										onClick={() => setStep(2)}
										className='btn-secondary py-2 px-4 shadow-none border-gray-700 text-gray-400'>
										Volver
									</button>
									<button
										disabled={!selectedTime}
										onClick={() => setStep(4)}
										className='btn-primary py-3'>
										Continuar <ArrowRight size={18} />
									</button>
								</div>
							</div>
						)}

						{/* STEP 4: Datos */}
						{step === 4 && (
							<div className='animate-fade-up max-w-md mx-auto'>
								<h3 className='text-white font-semibold mb-6 text-center'>
									Tus datos de contacto
								</h3>
								<div className='space-y-4'>
									<div className='relative'>
										<User
											className='absolute left-3 top-3.5 text-gray-500'
											size={18}
										/>
										<input
											type='text'
											placeholder='Nombre completo'
											className='w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl py-3 pl-10 pr-4 text-white focus:border-yellow-500 outline-none transition-all'
											value={formData.nombre}
											onChange={(e) =>
												setFormData({
													...formData,
													nombre: e.target.value,
												})
											}
										/>
									</div>
									<div className='relative'>
										<Phone
											className='absolute left-3 top-3.5 text-gray-500'
											size={18}
										/>
										<input
											type='tel'
											placeholder='WhatsApp (Ej: 1122334455)'
											className='w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl py-3 pl-10 pr-4 text-white focus:border-yellow-500 outline-none transition-all'
											value={formData.telefono}
											inputMode='numeric'
											pattern='[0-9]*'
											maxLength={10}
											onChange={(e) => {
												const onlyNumbers =
													e.target.value.replace(
														/\D/g,
														"",
													);
												setFormData({
													...formData,
													telefono: onlyNumbers,
												});
											}}
										/>
									</div>
									<div className='relative'>
										<Mail
											className='absolute left-3 top-3.5 text-gray-500'
											size={18}
										/>
										<input
											type='email'
											placeholder='Email (Opcional)'
											className='w-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl py-3 pl-10 pr-4 text-white focus:border-yellow-500 outline-none transition-all'
											value={formData.email}
											onChange={(e) => {
												const value = e.target.value;
												setFormData({
													...formData,
													email: value,
												});
												if (
													value &&
													!isValidEmail(value)
												) {
													setEmailError(
														"Formato de correo inválido",
													);
												} else {
													setEmailError(null);
												}
											}}
										/>
										{emailError && (
											<p className='text-red-500 text-sm mt-1'>
												{emailError}
											</p>
										)}
									</div>
								</div>
								<div className='mt-8 flex gap-3'>
									<button
										onClick={() => setStep(3)}
										className='btn-secondary flex-1 py-3 text-gray-400 border-gray-800'>
										Atrás
									</button>
									<button
										disabled={
											!formData.nombre ||
											!formData.telefono ||
											isBooking ||
											emailError !== null
										}
										onClick={handleFinalBooking}
										className='btn-primary flex-2 py-3'>
										{isBooking ? (
											<Loader2 className='animate-spin mx-auto' />
										) : (
											"Confirmar Turno"
										)}
									</button>
								</div>
							</div>
						)}

						{/* STEP 5: ¡Éxito! */}
						{step === 5 && (
							<div className='text-center py-6 animate-fade-up'>
								<div className='w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6'>
									<CheckCircle2
										className='text-green-500'
										size={40}
									/>
								</div>
								<h3 className='text-2xl font-bold text-white mb-2'>
									¡Turno Agendado!
								</h3>
								<p className='text-gray-400 mb-8'>
									Gracias{" "}
									<span className='text-white font-bold'>
										{formData.nombre}
									</span>
									. El barbero te acaba de agendar para el{" "}
									{format(selectedDate, "d 'de' MMMM", {
										locale: es,
									})}{" "}
									a las {selectedTime}hs. <br /> Si no se
									abrió WhatsApp, hacé clic abajo.
								</p>

								<button
									onClick={() => setStep(1)}
									className='btn-secondary py-3 px-8 text-gray-400 border-gray-800'>
									Volver al inicio
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
