# ✂️ Barbería El Maestro — Landing Page (v1 & v2)

Este proyecto contiene dos versiones de la landing page para una barbería profesional.

---

## 📅 Evolución del Proyecto

### v1 (Versión Inicial)

- **Concepto:** Landing page informativa simple.
- **Acción principal:** Botón directo a WhatsApp para consultas.
- **Accesible en:** `/v1`
- **Características:** Hero, Sobre nosotros, Servicios, Testimonios y Ubicación.

### v2 (Versión Actual)

- **Concepto:** Landing page con **Sistema de Reserva de Turnos Online**.
- **Acción principal:** Selección interactiva de día y horario.
- **Accesible en:** `/` (Home) y `/v2`
- **Novedades:** Incluye el nuevo componente `ReservaTurnos.tsx` que permite al usuario elegir una fecha y hora disponible antes de contactar por WhatsApp.

---

## 💡 Idea de la v2: Reserva de Turnos

En la v2, hemos agregado una sección interactiva de **Reserva de Turnos**.

1. El usuario selecciona un día (próximos 14 días disponibles, excluyendo domingos).
2. El usuario elige un bloque horario.
3. El sistema genera un mensaje de WhatsApp estructurado:
   _"Hola, quisiera reservar un turno para el día lunes 23 de febrero a las 10:30hs"_.

Esto mejora la tasa de conversión al ahorrarle tiempo al barbero y al cliente, enviando una solicitud ya definida.

---

## 🛠️ Stack tecnológico

- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4.x** (Estética premium Dark & Gold)
- **date-fns** (Manejo de fechas y calendarios)
- **lucide-react** (Iconografía)

---

## 📁 Estructura de archivos

```
barberiaapp/
├── src/
│   ├── app/
│   │   ├── v1/                # Ruta para la versión 1 (Landing simple)
│   │   ├── v2/                # Ruta para la versión 2 (Landing con Reserva de Turnos)
│   │   ├── page.tsx           # v2 (Landing con Reserva de Turnos)
│   │   └── globals.css        # Estilos y variables de diseño
│   │
│   ├── components/
│   │   ├── ReservaTurnos.tsx  # ✨ NUEVO: Selector de fecha y hora
│   │   ├── Navbar.tsx         # Actualizado para v2
│   │   ├── HeroSection.tsx    # Actualizado con CTAs a turnos
│   │   └── ... (otros componentes)
│   │
│   └── config/
│       └── site.ts            ← ⚙️ CONFIGURACIÓN DEL NEGOCIO
```

---

## 🚀 Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Correr modo desarrollo
npm run dev
```

---

## ⚙️ Configuración

Editá **`src/config/site.ts`** para personalizar:

- Número de WhatsApp (formato `549...`)
- Ubicación y Mapa
- Redes sociales
- Horarios de atención base

---

## 🎨 Diseño Premium

- **Dark Mode:** Fondo `#0a0a0a` para resaltar los tonos dorados.
- **Acentos Dorados:** Uso de gradientes `linear-gradient(135deg, #9a7832, #c9a84c)`.
- **Glassmorphism:** Navbar translúcida con blur.
- **Responsive:** Mobile-first con barra de reserva fija en smartphones.

---

## 🔍 SEO & Performance

- Soporte nativo para WebP/AVIF.
- Metadatos configurados para redes sociales (OG Tags).
- Estructura semántica completa para accesibilidad.
