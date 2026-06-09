import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/actividades", label: "Actividades" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/cliente-ideal", label: "Cliente ideal" },
  { to: "/contacto", label: "Contacto" },
];

const WA_NAV =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-linen" : ""
      }`}
      style={{
        background: "rgba(245,240,232,0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          style={{
            fontFamily: '"Pinyon Script", cursive',
            fontSize: "2rem",
            color: "#2C2420",
            lineHeight: 1,
            textDecoration: "none",
          }}
        >
          Smuk
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors duration-200"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isActive(l.to) ? "#2C2420" : "#7C6A5E",
                textDecoration: "none",
                borderBottom: isActive(l.to) ? "1px solid #2C2420" : "none",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_NAV}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "#2C2420",
              color: "#F5F0E8",
              padding: "10px 22px",
              textDecoration: "none",
            }}
          >
            Reservar
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-px bg-ink transition-all duration-200"
            style={{ transform: open ? "translateY(8px) rotate(45deg)" : "" }}
          />
          <span
            className="block w-5 h-px bg-ink transition-all duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px bg-ink transition-all duration-200"
            style={{
              width: open ? "20px" : "12px",
              transform: open ? "translateY(-8px) rotate(-45deg)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden border-t border-linen overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "450px" : "0", background: "#F5F0E8" }}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: isActive(l.to) ? "#2C2420" : "#7C6A5E",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_NAV}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "#2C2420",
              color: "#F5F0E8",
              padding: "12px 24px",
              textDecoration: "none",
              display: "inline-block",
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            Reservar cita
          </a>
        </div>
      </div>
    </nav>
  );
}