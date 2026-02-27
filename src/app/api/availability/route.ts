import { google } from "googleapis";
import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site";

// IMPORTANTE: Estas variables deben estar en tu archivo .env.local
// GOOGLE_CLIENT_EMAIL=tu-servicio-tecnico@...
// GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
// GOOGLE_CALENDAR_ID=tu-calendario-id@gmail.com

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

function getGoogleAuth() {
	const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
	const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(
		/^"(.*)"$/,
		"$1",
	).replace(/\\n/g, "\n");

	if (!clientEmail || !privateKey) {
		throw new Error("Faltan credenciales de Google");
	}

	return new google.auth.JWT({
		email: clientEmail,
		key: privateKey,
		scopes: SCOPES,
	});
}

// GET: Consultar disponibilidad
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const dateStr = searchParams.get("date"); // Formato YYYY-MM-DD
	const barberoId = searchParams.get("barber");

	if (!dateStr) {
		return NextResponse.json(
			{ error: "Falta el parámetro date" },
			{ status: 400 },
		);
	}

	try {
		const auth = getGoogleAuth();

		// Buscar el calendario del barbero
		const barberoObj = SITE_CONFIG.barberos.find((b) => b.id === barberoId);
		const calendarId =
			barberoObj?.calendarId || process.env.GOOGLE_CALENDAR_ID;

		const calendar = google.calendar({ version: "v3", auth });

		const timeMin = new Date(`${dateStr}T00:00:00Z`).toISOString();
		const timeMax = new Date(`${dateStr}T23:59:59Z`).toISOString();

		const response = await calendar.events.list({
			calendarId,
			timeMin,
			timeMax,
			singleEvents: true,
		});

		const events = response.data.items || [];
		const busySlots = events
			.map((event) => {
				const start = event.start?.dateTime || event.start?.date;
				if (!start) return null;
				const date = new Date(start);
				return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
			})
			.filter(Boolean);

		return NextResponse.json({ busySlots });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error("Error en Google Calendar GET:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

// POST: Crear el turno en el calendario
export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { nombre, email, telefono, fecha, hora, barbero } = body;

		if (!nombre || !telefono || !fecha || !hora || !barbero) {
			return NextResponse.json(
				{ error: "Faltan datos obligatorios" },
				{ status: 400 },
			);
		}

		const auth = getGoogleAuth();

		// Buscar el calendario del barbero
		const barberoObj = SITE_CONFIG.barberos.find((b) => b.id === barbero);
		const calendarId =
			barberoObj?.calendarId || process.env.GOOGLE_CALENDAR_ID;

		const calendar = google.calendar({ version: "v3", auth });

		// Combinar fecha y hora para crear el objeto Date
		// Asumimos que la barbería está en Argentina (UTC-3)
		const startDateTime = new Date(`${fecha}T${hora}:00-03:00`);
		const endDateTime = new Date(startDateTime.getTime() + 30 * 60000); // 30 minutos de duración

		const barberoNombre = barberoObj ? barberoObj.nombre : barbero;

		const event = {
			summary: `Corte (${barberoNombre}): ${nombre}`,
			location: SITE_CONFIG.direccion || "Barbería",
			description: `Barbero: ${barberoNombre}\nCliente: ${nombre}\nWhatsApp: ${telefono}\nEmail: ${email || "No proporcionado"}`,
			start: {
				dateTime: startDateTime.toISOString(),
				timeZone: "America/Argentina/Buenos_Aires",
			},
			end: {
				dateTime: endDateTime.toISOString(),
				timeZone: "America/Argentina/Buenos_Aires",
			},
		};

		const response = await calendar.events.insert({
			calendarId,
			requestBody: event,
		});

		return NextResponse.json({ success: true, eventId: response.data.id });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error("Error en Google Calendar POST:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
