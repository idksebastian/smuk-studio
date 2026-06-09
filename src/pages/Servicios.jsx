import { Link, useParams } from "react-router-dom";
import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary, BtnOutline } from "../components/UI";
import { services, WA_BASE } from "../data/content";

export function Servicios() {
  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Portafolio</SectionEyebrow>
          <SeriffH2>Nuestros servicios</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Cada tratamiento está diseñado para tu tipo de piel, tus facciones y tu estilo de vida.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {services.map((s, i) => (
              <FadeUp key={s.id} delay={i * 60} className="h-full">
                <Link to={`/servicios/${s.slug}`} className="block group h-full">
                  <div className="h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1"
                    style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}>
                    <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                      <img src={s.image} alt={s.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(44,36,32,0.45) 0%, transparent 55%)" }} />
                      <span className="absolute bottom-3 left-4"
                        style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.6rem", color: "#D9CEBA", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                        {s.number}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "1.15rem", color: "#2C2420", marginBottom: "6px" }}>
                        {s.name}
                      </p>
                      <BodyText className="text-xs mb-3 flex-1">{s.shortDesc}</BodyText>
                      <div className="flex items-center justify-between mt-auto">
                        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.78rem", fontWeight: 500, color: "#2C2420" }}>
                          {s.price}
                        </p>
                        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", color: "#B8A99A", letterSpacing: "0.12em" }}>
                          Ver detalle →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicioDetalle() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 px-6 text-center min-h-screen">
        <p style={{ fontFamily: '"DM Sans", sans-serif', color: "#7C6A5E" }}>Servicio no encontrado.</p>
        <Link to="/servicios" style={{ color: "#2C2420" }}>← Volver a servicios</Link>
      </div>
    );
  }

  const waUrl = `${WA_BASE}&text=${encodeURIComponent(service.waMessage)}`;
  const others = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
      <div className="w-full overflow-hidden" style={{ maxHeight: "60vh", background: "#D9CEBA" }}>
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" style={{ maxHeight: "60vh" }} />
      </div>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <SectionEyebrow>{service.number}</SectionEyebrow>
            <h1 className="mt-3 mb-2"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#2C2420" }}>
              {service.name}
            </h1>
            <Divider className="mt-4 mb-8 !mx-0" />
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <p className="mb-3" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A99A" }}>
                  Descripción
                </p>
                <BodyText className="leading-relaxed">{service.description}</BodyText>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <BtnPrimary href={waUrl}>Reservar este servicio</BtnPrimary>
                  <Link to="/servicios"><BtnOutline>Ver todos los servicios</BtnOutline></Link>
                </div>
              </div>
              <div>
                <div className="p-5" style={{ background: "#EDE5D8", border: "1px solid #D9CEBA" }}>
                  <p className="mb-3" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A99A" }}>
                    Precio
                  </p>
                  <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.6rem", fontWeight: 300, color: "#2C2420" }}>
                    {service.price}
                  </p>
                  <div style={{ width: "100%", height: "1px", background: "#D9CEBA", margin: "16px 0" }} />
                  <p className="mb-4" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.75rem", color: "#7C6A5E", lineHeight: 1.6 }}>
                    Reserva por WhatsApp con un mensaje personalizado.
                  </p>
                  <a href={waUrl} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", background: "#25D366", color: "#fff", padding: "12px 18px", textDecoration: "none" }}>
                    <WaIcon />
                    Reservar en WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-10">
            <SectionEyebrow>También te puede interesar</SectionEyebrow>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-4 items-stretch">
            {others.map((s) => (
              <FadeUp key={s.id} className="h-full">
                <Link to={`/servicios/${s.slug}`} className="block group h-full">
                  <div className="h-full flex flex-col" style={{ background: "#FDFAF6", border: "1px solid #D9CEBA" }}>
                    <div className="overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "1rem", color: "#2C2420" }}>{s.name}</p>
                      <p className="mt-auto pt-2" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.75rem", color: "#B8A99A" }}>{s.price}</p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.954-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
        fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="1" />
      <path d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3.5 1.5c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1H14c-.5 0-.5-.5-1-1-.5-.5-1-.5-1.5 0"
        stroke="white" strokeWidth="1.2" fill="none" />
    </svg>
  );
}