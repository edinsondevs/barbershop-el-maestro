import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreNosotros from "@/components/SobreNosotros";
import Servicios from "@/components/Servicios";
import ReservaTurnos from "@/components/ReservaTurnos/ReservaTurnos";
import Testimonios from "@/components/Testimonios";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Página principal de la versión 2 de la landing page.
 * Incluye el sistema de reserva de turnos online.
 */
export default function V2Page() {
	return (
		<>
			{/* Barra de navegación fija */}
			<Navbar />

			<main id='main-content'>
				{/* 1. Hero con CTA principal */}
				<HeroSection />

				{/* 2. Sobre nosotros */}
				<SobreNosotros />

				{/* 3. Servicios */}
				<Servicios />

				{/* 3.1 Reserva de Turnos (Novedad v2) */}
				<ReservaTurnos />

				{/* 4. Testimonios */}
				<Testimonios />

				{/* 5. Ubicación y mapa */}
				<Ubicacion />
			</main>

			{/* 6. Footer */}
			<Footer />

			{/* Botón flotante de WhatsApp (visible en todos los dispositivos) */}
			<WhatsAppButton />
		</>
	);
}
