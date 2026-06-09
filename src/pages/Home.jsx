import { Link } from "react-router-dom";
import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary, BtnOutline } from "../components/UI";
import { services, testimonials, activities } from "../data/content";

const WA_MAIN =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center" style={{ background: "#F5F0E8" }}>
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
            Belleza auténtica. Resultados que perduran.
            <br />Lashista · Cosmetóloga · Esteticista
          </BodyText>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/servicios"><BtnPrimary>Ver servicios</BtnPrimary></Link>
            <BtnOutline href={WA_MAIN}>Reservar cita</BtnOutline>
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
              <SeriffH2>La mano detrás de tu mejor versión</SeriffH2>
              <Divider className="mt-5 mb-6 !mx-0" />
              <BodyText className="mb-6 text-sm">
                Hola, soy <strong style={{ color: "#2C2420", fontWeight: 500 }}>Valentina Reyes</strong>, lashista
                certificada, cosmetóloga y esteticista. Smuk —que en danés significa "hermoso/a"— nació de la
                convicción de que la belleza real se construye desde adentro.
              </BodyText>
              <Link to="/nosotros"><BtnOutline>Conocer más</BtnOutline></Link>
            </div>
            {/* Hidden on mobile, visible from md up */}
            <div className="hidden md:block w-full aspect-[4/5] overflow-hidden" style={{ background: "#D9CEBA" }}>
              <img src="/valentina-reyes.jpeg" alt="Valentina Reyes" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PREVIEW — Servicios */}
      <section className="py-20 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <SectionEyebrow>Servicios</SectionEyebrow>
            <SeriffH2>Lo que hacemos por ti</SeriffH2>
            <Divider className="mt-5" />
          </FadeUp>
          {/* grid uniforme: cada card ocupa todo el alto de su celda */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 items-stretch">
            {services.map((s, i) => (
              <FadeUp key={s.id} delay={i * 60} className="h-full">
                <Link to={`/servicios/${s.slug}`} className="block group h-full">
                  <div className="h-full flex flex-col overflow-hidden"
                    style={{ background: "#FDFAF6", border: "1px solid #EDE5D8", transition: "border-color 0.25s, transform 0.25s" }}>
                    <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: "4/3" }}>
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(44,36,32,0.4) 0%, transparent 60%)" }} />
                      <span className="absolute bottom-3 left-4" style={{ fontFamily: '"Pinyon Script", cursive', fontSize: "1.4rem", color: "#F5F0E8" }}>
                        {s.name}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <BodyText className="text-xs flex-1">{s.shortDesc}</BodyText>
                      <p className="mt-2 text-xs font-medium" style={{ fontFamily: '"DM Sans", sans-serif', color: "#2C2420" }}>
                        {s.price}
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

      {/* PREVIEW — Actividades */}
      <section className="py-20 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-12">
            <SectionEyebrow>Actividades comerciales</SectionEyebrow>
            <SeriffH2>Próximos eventos</SeriffH2>
            <Divider className="mt-5" />
          </FadeUp>
          {/* items-stretch garantiza altura uniforme en ambas columnas */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10 items-stretch">
            {activities.map((a) => (
              <FadeUp key={a.id} className="h-full">
                <div className="h-full p-6 flex flex-col" style={{ background: "#FDFAF6", border: "1px solid #D9CEBA" }}>
                  <SectionEyebrow>Actividad {a.number}</SectionEyebrow>
                  <p className="mt-2 mb-1 flex-1" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300 }}>
                    {a.name}
                  </p>
                  <p className="mb-3 text-xs" style={{ fontFamily: '"DM Sans", sans-serif', color: "#B8A99A" }}>
                    {a.dateLabel}
                  </p>
                  <BodyText className="text-xs">{a.shortDesc}</BodyText>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center">
            <Link to="/actividades"><BtnOutline>Ver actividades completas</BtnOutline></Link>
          </div>
        </div>
      </section>

      {/* PREVIEW — Testimonios */}
      <section className="py-20 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-12">
            <SectionEyebrow>Testimonios</SectionEyebrow>
            <SeriffH2>Lo que dicen ellas</SeriffH2>
            <Divider className="mt-5" />
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-5 mb-10 items-stretch">
            {testimonials.slice(0, 2).map((t) => (
              <FadeUp key={t.name} className="h-full">
                <div className="h-full p-6 flex flex-col" style={{ background: "#FDF8F2", borderLeft: "2px solid #D9CEBA" }}>
                  <p className="mb-4 flex-1" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.1rem", fontStyle: "italic", color: "#2C2420" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                      style={{ background: "#D9CEBA", color: "#7C6A5E", fontFamily: '"DM Sans", sans-serif' }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ fontFamily: '"DM Sans", sans-serif', color: "#2C2420" }}>{t.name}</p>
                      <p className="text-xs" style={{ fontFamily: '"DM Sans", sans-serif', color: "#B8A99A" }}>{t.service}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonios"><BtnOutline>Ver todos los testimonios</BtnOutline></Link>
          </div>
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
          <BtnPrimary href={WA_MAIN} style={{ background: "#F5F0E8", color: "#2C2420"}}>
            Reservar por WhatsApp
          </BtnPrimary>
        </FadeUp>
      </section>
    </>
  );
}