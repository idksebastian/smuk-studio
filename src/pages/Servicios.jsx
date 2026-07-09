import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnOutline,
} from "../components/UI";
import { extensiones, lifting, cejas, WA_BASE } from "../data/content";

const todosLosServicios = [
  ...extensiones.map((s) => ({ ...s, categoria: "Extensiones de Pestañas" })),
  { ...lifting, categoria: "Lifting" },
  ...cejas.map((s) => ({ ...s, categoria: "Cejas" })),
];

function getPrecioSecundario(precios) {
  if (!precios) return null;
  if (precios.retoque) return { label: "Retoque", value: precios.retoque };
  if (precios.otroLugar) return { label: "Otro lugar", value: precios.otroLugar };
  if (precios.sinDiseno) return { label: "Sin diseño", value: precios.sinDiseno };
  if (precios.bigote) return { label: "Bigote", value: precios.bigote };
  return null;
}

function WaIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

export function Servicios() {
  const [filtro, setFiltro] = useState("todos");
  const categorias = ["todos", "Extensiones de Pestañas", "Lifting", "Cejas"];
  const filtrados =
    filtro === "todos"
      ? todosLosServicios
      : todosLosServicios.filter((s) => s.categoria === filtro);

  return (
    <div>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Portafolio 2026</SectionEyebrow>
          <SeriffH2>Nuestros servicios</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Cada servicio está diseñado para realzar tu belleza natural con técnica, precisión y productos de alta calidad.
          </BodyText>
        </FadeUp>

        <FadeUp className="flex flex-wrap justify-center gap-2 mt-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.65rem",
                fontWeight: filtro === cat ? 500 : 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "8px 18px",
                border: "1px solid",
                borderColor: filtro === cat ? "#2C2420" : "#D9CEBA",
                background: filtro === cat ? "#2C2420" : "transparent",
                color: filtro === cat ? "#F5F0E8" : "#7C6A5E",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat === "todos" ? "Todos" : cat}
            </button>
          ))}
        </FadeUp>
      </section>

      <section className="py-16 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {filtrados.map((s, i) => {
              const secundario = getPrecioSecundario(s.precios);
              return (
                <FadeUp key={s.id} delay={i * 50} className="h-full">
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="block group h-full"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1"
                      style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}
                    >
                      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={s.image} alt={s.nombre}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0"
                          style={{ background: "linear-gradient(to top, rgba(44,36,32,0.5) 0%, transparent 55%)" }} />
                        <div className="absolute bottom-3 left-4">
                          <p style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "1.4rem", color: "#F5F0E8", lineHeight: 1 }}>
                            {s.nombre}
                          </p>
                          {s.subtitulo && (
                            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.55rem", color: "#D9CEBA", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                              {s.subtitulo}
                            </p>
                          )}
                        </div>
                        <span className="absolute top-3 right-3"
                          style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(245,240,232,0.9)", color: "#7C6A5E", padding: "4px 10px" }}>
                          {s.categoria}
                        </span>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <BodyText className="text-xs flex-1 mb-4">{s.shortDesc}</BodyText>
                        <div className="flex justify-around pt-3" style={{ borderTop: "1px solid #EDE5D8" }}>
                          <div className="text-center">
                            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>
                              {s.precios?.set ? "Set nuevo" : s.precios?.unico ? "Precio" : s.precios?.smuk ? "En Smuk" : s.precios?.conDiseno ? "Con diseño" : s.precios?.cejas ? "Cejas" : "Precio"}
                            </p>
                            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 400, color: "#2C2420" }}>
                              {s.precios?.set || s.precios?.unico || s.precios?.smuk || s.precios?.conDiseno || s.precios?.cejas || ""}
                            </p>
                          </div>
                          {secundario && (
                            <div className="text-center">
                              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>
                                {secundario.label}
                              </p>
                              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 400, color: "#2C2420" }}>
                                {secundario.value}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicioDetalle() {
  const { slug } = useParams();
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);

  const servicio =
    extensiones.find((s) => s.slug === slug) ||
    (lifting.slug === slug ? lifting : null) ||
    cejas.find((s) => s.slug === slug);

  useEffect(() => { setZonaSeleccionada(null); }, [slug]);

  if (!servicio) {
    return (
      <div className="px-6 text-center min-h-screen flex flex-col items-center justify-center">
        <p style={{ fontFamily: '"DM Sans", sans-serif', color: "#7C6A5E" }}>Servicio no encontrado.</p>
        <Link to="/servicios" style={{ color: "#2C2420" }}>← Volver a servicios</Link>
      </div>
    );
  }

  const mensajeWa = servicio.zonas && zonaSeleccionada
    ? `Hola Valentina! Me interesa agendar una *${servicio.nombre}* para *${zonaSeleccionada}* en Smuk Studio. ¿Cuándo tienes disponibilidad?`
    : servicio.waMessage;

  const waUrl = WA_BASE + "&text=" + encodeURIComponent(mensajeWa);

  const esExtension = extensiones.find((s) => s.slug === slug);
  const esCeja = cejas.find((s) => s.slug === slug);
  const sugeridos = esExtension
    ? extensiones.filter((s) => s.slug !== slug).slice(0, 3)
    : esCeja
    ? cejas.filter((s) => s.slug !== slug).slice(0, 3)
    : extensiones.slice(0, 3);

  return (
    <div>
      <section className="py-14 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            {/* Card principal */}
            <div className="flex flex-col md:flex-row overflow-hidden mb-10"
              style={{ border: "1px solid #EDE5D8", background: "#FDFAF6" }}>
              <div className="w-full md:w-80 flex-shrink-0" style={{ aspectRatio: "1/1", minHeight: "280px" }}>
                <img src={servicio.image} alt={servicio.nombre}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </div>

              <div className="flex flex-col justify-between p-7 flex-1">
                <div>
                  {servicio.subtitulo && <SectionEyebrow>{servicio.subtitulo}</SectionEyebrow>}
                  <h1 className="mt-2 mb-3"
                    style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#2C2420", lineHeight: 1.1 }}>
                    {servicio.nombre}
                  </h1>
                  <Divider className="mb-4 !mx-0" />
                  <BodyText className="text-sm leading-relaxed">{servicio.descripcion}</BodyText>
                </div>

                <div className="flex flex-wrap gap-6 mt-6 pt-5" style={{ borderTop: "1px solid #EDE5D8" }}>
                  {servicio.precios?.set && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Set nuevo</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.set}</p>
                    </div>
                  )}
                  {servicio.precios?.retoque && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Retoque</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.retoque}</p>
                    </div>
                  )}
                  {servicio.precios?.unico && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Precio</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.unico}</p>
                    </div>
                  )}
                  {servicio.precios?.smuk && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>En Smuk</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.smuk}</p>
                    </div>
                  )}
                  {servicio.precios?.otroLugar && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Otro lugar</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.otroLugar}</p>
                    </div>
                  )}
                  {servicio.precios?.conDiseno && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Con diseño</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.conDiseno}</p>
                    </div>
                  )}
                  {servicio.precios?.sinDiseno && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Sin diseño</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.sinDiseno}</p>
                    </div>
                  )}
                  {servicio.precios?.conDiseno && servicio.precios?.bigote && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Bigote</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.bigote}</p>
                    </div>
                  )}
                  {servicio.precios?.cejas && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Cejas</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.cejas}</p>
                    </div>
                  )}
                  {servicio.precios?.cejas && servicio.precios?.bigote && !servicio.precios?.conDiseno && (
                    <div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A99A" }}>Bigote</p>
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>{servicio.precios.bigote}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detalle adicional */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {servicio.beneficios && (
                <div>
                  <SectionEyebrow>Beneficios</SectionEyebrow>
                  <ul className="mt-3 space-y-2">
                    {servicio.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span style={{ color: "#B8A99A", fontSize: "0.8rem" }}>✦</span>
                        <BodyText className="text-sm">{b}</BodyText>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {servicio.zonas && (
                <div>
                  <SectionEyebrow>
                    {zonaSeleccionada ? `Zona seleccionada: ${zonaSeleccionada}` : "Selecciona una zona"}
                  </SectionEyebrow>
                  <p className="mt-1 mb-3"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.72rem", color: "#B8A99A", fontWeight: 300 }}>
                    Elige la zona y el mensaje de WhatsApp se personalizará automáticamente.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {servicio.zonas.map((z) => {
                      const activa = zonaSeleccionada === z;
                      return (
                        <button key={z} onClick={() => setZonaSeleccionada(activa ? null : z)}
                          style={{
                            fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem",
                            fontWeight: activa ? 500 : 400, letterSpacing: "0.12em", textTransform: "uppercase",
                            padding: "8px 16px", border: "1px solid",
                            borderColor: activa ? "#2C2420" : "#D9CEBA",
                            background: activa ? "#2C2420" : "transparent",
                            color: activa ? "#F5F0E8" : "#7C6A5E",
                            cursor: "pointer", transition: "all 0.15s",
                          }}>
                          {z}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {servicio.durabilidad && (
                <div>
                  <SectionEyebrow>Durabilidad</SectionEyebrow>
                  <BodyText className="mt-2 text-sm">{servicio.durabilidad}</BodyText>
                </div>
              )}

              {servicio.recomendado && (
                <div>
                  <SectionEyebrow>Recomendado para</SectionEyebrow>
                  <BodyText className="mt-2 text-sm">{servicio.recomendado}</BodyText>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              
                <a href={waUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: "#2C2420",
                  color: "#F5F0E8",
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <WaIcon size={15} />
                {zonaSeleccionada ? `Reservar — ${zonaSeleccionada}` : "Reservar este servicio"}
              </a>
              <Link to="/servicios">
                <BtnOutline>Ver todos los servicios</BtnOutline>
              </Link>
            </div>

          </FadeUp>
        </div>
      </section>

      {/* Sugeridos */}
      {sugeridos.length > 0 && (
        <section className="py-12 px-6" style={{ background: "#EDE5D8" }}>
          <div className="max-w-4xl mx-auto">
            <FadeUp className="text-center mb-10">
              <SectionEyebrow>También te puede interesar</SectionEyebrow>
            </FadeUp>
            <div className="grid sm:grid-cols-3 gap-4 items-stretch">
              {sugeridos.map((s) => (
                <FadeUp key={s.id} className="h-full">
                  <Link to={`/servicios/${s.slug}`} className="block group h-full" style={{ textDecoration: "none" }}>
                    <div className="h-full flex flex-col" style={{ background: "#FDFAF6", border: "1px solid #D9CEBA" }}>
                      <div className="overflow-hidden flex-shrink-0" style={{ aspectRatio: "1/1" }}>
                        <img src={s.image} alt={s.nombre}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "1rem", color: "#2C2420" }}>
                          {s.nombre}
                        </p>
                        {s.subtitulo && (
                          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", color: "#B8A99A", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
                            {s.subtitulo}
                          </p>
                        )}
                        <p className="mt-auto pt-2" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.75rem", color: "#B8A99A" }}>
                          {s.precios?.set ? `Set ${s.precios.set}` : s.precios?.unico ? s.precios.unico : s.precios?.smuk ? `Desde ${s.precios.smuk}` : s.precios?.conDiseno ? `Desde ${s.precios.conDiseno}` : s.precios?.cejas ? `Cejas ${s.precios.cejas}` : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}