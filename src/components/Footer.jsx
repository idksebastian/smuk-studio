import { Link } from "react-router-dom";

const pages = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/actividades", label: "Actividades" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/cliente-ideal", label: "Cliente ideal" },
  { to: "/contacto", label: "Contacto" },
];

const WA_FOOTER =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Vi tu sitio web y me gustaría agendar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? 🌸"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

const IgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.954-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
      stroke="currentColor" strokeWidth="1.5" fill="none"
    />
    <path
      d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3.5 1.5c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1H14c-.5 0-.5-.5-1-1-.5-.5-1-.5-1.5 0"
      stroke="currentColor" strokeWidth="1.2" fill="none"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#2C2420", color: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "3rem", color: "#F5F0E8", lineHeight: 1 }}>
              Smuk
            </p>
            <p className="mt-1 mb-4" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A99A" }}>
              Studio · Valentina Reyes
            </p>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A", lineHeight: 1.7, fontWeight: 300 }}>
              Lashista · Cosmetóloga · Esteticista
              <br />Bogotá, Colombia
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/smukstudio__/" target="_blank" rel="noreferrer"
                style={{ color: "#B8A99A" }} className="hover:text-cream transition-colors" aria-label="Instagram">
                <IgIcon />
              </a>
              <a href={WA_FOOTER} target="_blank" rel="noreferrer"
                style={{ color: "#B8A99A" }} className="hover:text-cream transition-colors" aria-label="WhatsApp">
                <WaIcon />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="mb-5" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7C6A5E" }}>
              Páginas
            </p>
            <div className="flex flex-col gap-3">
              {pages.map((p) => (
                <Link key={p.to} to={p.to}
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A", textDecoration: "none", fontWeight: 300 }}
                  className="hover:text-cream transition-colors">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7C6A5E" }}>
              Contacto
            </p>
            <div className="space-y-3">
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A", fontWeight: 300 }}>
                +57 322 766 5148
              </p>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A", fontWeight: 300 }}>
                Bogotá, Colombia
              </p>
              <a href={WA_FOOTER} target="_blank" rel="noreferrer" className="inline-block mt-2"
                style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #7C6A5E", color: "#F5F0E8", padding: "10px 22px", textDecoration: "none" }}>
                Reservar cita
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6" style={{ borderColor: "#3D3330" }}>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", color: "#7C6A5E" }}>
            © 2025 Smuk Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}