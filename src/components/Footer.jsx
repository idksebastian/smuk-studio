import { Link } from "react-router-dom";

const pages = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/faq", label: "Preguntas frecuentes" },
  { to: "/contacto", label: "Contacto" },
];

const WA_FOOTER =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Vi tu sitio web y me gustaría agendar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? 🌸"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

const IgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const WaIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    style={{ display: "block", flexShrink: 0 }}
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#2C2420", color: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-16">
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
              Lashista · Cosmetóloga · Esteticista Integral
              <br />Bogotá, Colombia
            </p>
            <div className="flex items-center gap-5 mt-6">
              
                <a href="https://www.instagram.com/smukstudio__/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{ color: "#B8A99A", display: "flex", alignItems: "center", lineHeight: 0 }}
                className="hover:text-cream transition-colors"
              >
                <IgIcon />
              </a>
              
                <a href={WA_FOOTER}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                style={{ color: "#B8A99A", display: "flex", alignItems: "center", lineHeight: 0 }}
                className="hover:text-cream transition-colors"
              >
                <WaIcon size={20} />
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
                <Link
                  key={p.to}
                  to={p.to}
                  style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A", textDecoration: "none", fontWeight: 300 }}
                  className="hover:text-cream transition-colors"
                >
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
              
                <a href={WA_FOOTER}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "1px solid #7C6A5E",
                  color: "#F5F0E8",
                  padding: "10px 22px",
                  textDecoration: "none",
                  lineHeight: 1,
                }}
              >
                <WaIcon size={15} />
                Reservar cita
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6" style={{ borderColor: "#3D3330" }}>
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", color: "#7C6A5E" }}>
            © 2026 Smuk Studio · Valentina Reyes. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="lg:hidden" style={{ height: "64px", background: "#2C2420" }} />
    </footer>
  );
}