"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scissors, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import {  usePathname } from "next/navigation";

const NAV_LINKS = [
	{ href: "#nosotros", label: "Nosotros" },
	{ href: "#servicios", label: "Servicios" },
	{ href: "#turnos", label: "Turnos" },
	{ href: "#testimonios", label: "Opiniones" },
	{ href: "#ubicacion", label: "Ubicación" },
];
export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	
	const params = usePathname();
	
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = () => setMobileOpen(false);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "navbar-glass shadow-lg" : "bg-transparent"
			}`}>
			<nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
				{/* Logo */}
				<a
					href='#inicio'
					id='nav-logo'
					className='flex items-center gap-2 group'
					aria-label={`Inicio - ${SITE_CONFIG.nombre}`}>
					<div className='w-8 h-8 gradient-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
						<Scissors
							size={16}
							className='text-black rotate-45'
						/>
					</div>
					<span className='font-display font-bold text-lg text-white group-hover:text-yellow-400 transition-colors'>
						{SITE_CONFIG.nombre}
					</span>
				</a>

				{/* Links desktop */}
				<div className='hidden md:flex items-center gap-8'>
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							id={`nav-${link.label.toLowerCase()}`}
							className='text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors relative group'>
							{link.label}
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full' />
						</a>
					))}
					{ params !== "/v1" && <a
						href='#turnos'
						id='nav-cta-turnos'
						className='btn-primary text-sm py-2 px-5 group'>
						<Clock
							size={16}
							className='text-black group-hover:rotate-12 transition-transform'
						/>
						Reservar turno
					</a>}
				</div>

				{/* Hamburger mobile */}
				<button
					id='nav-hamburger'
					className='md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors'
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label='Abrir menú'
					aria-expanded={mobileOpen}>
					{mobileOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* Menú móvil */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ${
					mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
				style={{
					background: "rgba(10,10,10,0.97)",
					backdropFilter: "blur(12px)",
				}}>
				<div className='flex flex-col gap-1 px-4 py-4 border-t border-white/10'>
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							id={`nav-mobile-${link.label.toLowerCase()}`}
							onClick={handleNavClick}
							className='py-3 px-2 text-gray-300 hover:text-yellow-400 font-medium border-b border-white/5 transition-colors'>
							{link.label}
						</a>
					))}
					<a
						href='#turnos'
						id='nav-mobile-cta'
						onClick={handleNavClick}
						className='btn-primary mt-2 justify-center'>
						Reservar turno
					</a>
				</div>
			</div>
		</header>
	);
}
