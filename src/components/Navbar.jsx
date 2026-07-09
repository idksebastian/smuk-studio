import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/faq", label: "Preguntas frecuentes" },
  { to: "/contacto", label: "Contacto" },
];

const bottomLinks = [
  {
    to: "/",
    label: "Inicio",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z"
          stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    to: "/nosotros",
    label: "Nosotros",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
        <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: "/servicios",
    label: "Servicios",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
        <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
        <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
        <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
      </svg>
    ),
  },
  {
    to: "/testimonios",
    label: "Reseñas",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
          fill={active ? "currentColor" : "none"} />
      </svg>
    ),
  },
  {
    to: "/faq",
    label: "FAQ",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"
          fill={active ? "currentColor" : "none"} />
        <path d="M12 16v-4M12 8h.01"
          stroke={active ? "#F5F0E8" : "currentColor"}
          strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const WA_NAV =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

function WaIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      {/* TOP BAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-linen" : ""}`}
        style={{ background: "rgba(245,240,232,0.94)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "2rem", color: "#2C2420", lineHeight: 1, textDecoration: "none" }}>
            Smuk
          </Link>

          {/* Desktop — oculto en mobile */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to}
                style={{
                  fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", fontWeight: 400,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: isActive(l.to) ? "#2C2420" : "#7C6A5E", textDecoration: "none",
                  borderBottom: isActive(l.to) ? "1px solid #2C2420" : "none", paddingBottom: "2px",
                  transition: "color 0.2s",
                }}>
                {l.label}
              </Link>
            ))}
            
              <a href={WA_NAV}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                background: "#2C2420", color: "#F5F0E8", padding: "10px 22px",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px",
              }}
            >
              <WaIcon size={14} color="#F5F0E8" />
              Reservar
            </a>
          </div>

          {/* Mobile — oculto en desktop */}

  <a href={WA_NAV}
  target="_blank"
  rel="noreferrer"
  className="lg:hidden inline-flex items-center gap-2"
  style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "0.6rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    background: "#2C2420",
    color: "#F5F0E8",
    padding: "8px 16px",
    textDecoration: "none",
  }}
>
  <WaIcon size={13} color="#F5F0E8" />
  Reservar
</a>
        </div>
      </nav>

      {/* BOTTOM NAV mobile */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0"
        style={{
          zIndex: 100, background: "rgba(245,240,232,0.97)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid #EDE5D8", paddingBottom: "env(safe-area-inset-bottom)",
          pointerEvents: "all", touchAction: "manipulation",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {bottomLinks.map((l) => {
            const active = isActive(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", gap: "4px", padding: "10px 0 8px",
                  color: active ? "#2C2420" : "#B8A99A", textDecoration: "none",
                  WebkitTapHighlightColor: "transparent", transition: "color 0.15s",
                }}
              >
                {l.icon(active)}
                <span style={{
                  fontFamily: '"DM Sans", sans-serif', fontSize: "0.52rem",
                  fontWeight: active ? 500 : 400, letterSpacing: "0.08em",
                  textTransform: "uppercase", whiteSpace: "nowrap",
                }}>
                  {l.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}