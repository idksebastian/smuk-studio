import { Link } from "react-router-dom";
import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary, BtnOutline, BtnLight } from "../components/UI";
import { extensiones, lifting, cejas, WA_BASE } from "../data/content";

const WA_MAIN =
  WA_BASE +
  "&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  );

const serviciosPreview = [
  extensiones[0],
  extensiones[2],
  extensiones[5],
  lifting,
  cejas[3],
  cejas[0],
];

function WaIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

function IgIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"
      style={{ display: "block", flexShrink: 0 }}>
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  );
}

// Botón con icono reutilizable
function BtnIcon({ href, to, children, icon, outlined = false }) {
  const baseStyle = {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: "13px 28px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    lineHeight: 1,
    cursor: "pointer",
    border: outlined ? "1px solid #2C2420" : "none",
    background: outlined ? "transparent" : "#2C2420",
    color: outlined ? "#2C2420" : "#F5F0E8",
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={baseStyle}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link to={to} style={baseStyle}>
      {icon}
      {children}
    </Link>
  );
}

// BtnLight con icono para CTA sobre fondo oscuro
function BtnLightIcon({ href, children, icon }) {
  return (
    
      <a href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        background: "transparent",
        color: "#F5F0E8",
        padding: "13px 28px",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "9px",
        border: "1px solid #F5F0E8",
        lineHeight: 1,
      }}
    >
      {icon}
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
        style={{ background: "#F5F0E8" }}
      >
        <FadeUp className="flex flex-col items-center">
          <SectionEyebrow>Bogotá, Colombia</SectionEyebrow>
          <div style={{ width: "1px", height: "52px", background: "#B8A99A", margin: "20px auto" }} />
          <h1 style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "clamp(5rem, 18vw, 9rem)", color: "#2C2420", lineHeight: 1, marginBottom: "4px" }}>
            Smuk
          </h1>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(1rem, 3vw, 1.5rem)", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 300, color: "#2C2420", marginBottom: "24px" }}>
            Studio
          </p>
          <BodyText className="max-w-sm mb-10 text-sm">
            Despierta con la mirada que siempre quisiste.
            <br />Lashista · Cosmetóloga · Esteticista Integral
          </BodyText>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/servicios"><BtnPrimary>Ver servicios</BtnPrimary></Link>
            <BtnIcon
              href={WA_MAIN}
              outlined
              icon={<WaIcon size={15} />}
            >
              Reservar cita
            </BtnIcon>
          </div>
          <div style={{ width: "1px", height: "52px", background: "#B8A99A", margin: "40px auto 0" }} />
        </FadeUp>
      </section>

      {/* PREVIEW — Nosotros */}
      <section className="py-20 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionEyebrow>Quiénes somos</SectionEyebrow>
              <SeriffH2>La mano detrás de tu mejor mirada</SeriffH2>
              <Divider className="mt-5 mb-6 !mx-0" />
              <BodyText className="mb-6 text-sm">
                Hola, soy <strong style={{ color: "#2C2420", fontWeight: 500 }}>Valentina Reyes</strong>, lashista
                certificada con 4 años de experiencia y cosmetóloga esteticista integral graduada. Me apasiona
                resaltar la belleza natural de cada mirada con técnica, precisión y productos de alta calidad.
              </BodyText>
              <Link to="/nosotros"><BtnOutline>Conocer más</BtnOutline></Link>
            </div>
            <div className="hidden md:block w-full aspect-[4/5] overflow-hidden" style={{ background: "#D9CEBA" }}>
              <img src="/valentina-reyes.jpeg" alt="Valentina Reyes lashista en Bogotá" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PREVIEW — Servicios */}
      <section className="py-20 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <SectionEyebrow>Portafolio 2026</SectionEyebrow>
            <SeriffH2>Nuestros servicios</SeriffH2>
            <Divider className="mt-5" />
            <BodyText className="mt-4 max-w-sm mx-auto text-sm">
              Extensiones de pestañas, lifting, laminado de cejas y mucho más.
            </BodyText>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 items-stretch">
            {serviciosPreview.map((s, i) => (
              <FadeUp key={s.id} delay={i * 60} className="h-full">
                <Link to={`/servicios/${s.slug}`} className="block group h-full" style={{ textDecoration: "none" }}>
                  <div className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                    style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}>
                    <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                      <img src={s.image} alt={s.nombre} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(44,36,32,0.45) 0%, transparent 55%)" }} />
                      <div className="absolute bottom-3 left-4">
                        <p style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "1.4rem", color: "#F5F0E8", lineHeight: 1 }}>{s.nombre}</p>
                        {s.subtitulo && (
                          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.55rem", color: "#D9CEBA", letterSpacing: "0.18em", textTransform: "uppercase" }}>{s.subtitulo}</p>
                        )}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <BodyText className="text-xs flex-1">{s.shortDesc}</BodyText>
                      <p className="mt-2 text-xs font-medium" style={{ fontFamily: '"DM Sans", sans-serif', color: "#2C2420" }}>
                        {s.precios?.set ? `Set ${s.precios.set}` : s.precios?.unico ? s.precios.unico : s.precios?.conDiseno ? `Desde ${s.precios.conDiseno}` : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="text-center">
            <Link to="/servicios"><BtnPrimary>Ver todos los servicios</BtnPrimary></Link>
          </div>
        </div>
      </section>

      {/* PREVIEW — Reseñas */}
      <section className="py-20 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <SectionEyebrow>Reseñas</SectionEyebrow>
            <SeriffH2>Lo que dicen nuestras clientas</SeriffH2>
            <Divider className="mt-5 mb-6" />
            <BodyText className="text-sm mb-8">
              ¿Ya viviste la experiencia Smuk? Encuentra nuestras reseñas en Instagram y Google, o cuéntanos directamente cómo te fue.
            </BodyText>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <BtnIcon
                href="https://www.instagram.com/smukstudio__/"
                icon={<IgIcon size={15} />}
              >
                Ver en Instagram
              </BtnIcon>
              <BtnIcon
                to="/testimonios"
                outlined
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                  </svg>
                }
              >
                Dejar una reseña
              </BtnIcon>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PREVIEW — FAQ */}
      <section className="py-20 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <SectionEyebrow>¿Tienes dudas?</SectionEyebrow>
            <SeriffH2>Preguntas frecuentes</SeriffH2>
            <Divider className="mt-5 mb-6" />
            <BodyText className="text-sm mb-8">
              Desde cómo reservar hasta cuánto duran las extensiones — resolvemos todo antes de tu cita.
            </BodyText>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <BtnIcon
                to="/faq"
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
              >
                Ver preguntas frecuentes
              </BtnIcon>
              <BtnIcon
                href={WA_MAIN}
                outlined
                icon={<WaIcon size={15} />}
              >
                Preguntar por WhatsApp
              </BtnIcon>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "clamp(3rem, 10vw, 5rem)", color: "#F5F0E8", lineHeight: 1, marginBottom: "12px" }}>
            Tu cita te espera
          </p>
          <BodyText className="mb-8 text-sm max-w-xs mx-auto" style={{ color: "#B8A99A" }}>
            Escríbenos por WhatsApp y cuéntanos qué servicio te interesa.
          </BodyText>
          <BtnLightIcon href={WA_MAIN} icon={<WaIcon size={16} />}>
            Reservar por WhatsApp
          </BtnLightIcon>
        </FadeUp>
      </section>
    </>
  );
}