import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary } from "../components/UI";
import { testimonials } from "../data/content";

const WA_MAIN = "https://api.whatsapp.com/send/?phone=573227665148&type=phone_number&app_absent=0&utm_source=web";

// Extra testimonials to fill the page
const allTestimonials = [
  ...testimonials,
  {
    initials: "CP",
    name: "Camila Parra",
    service: "Pigmento en henna",
    text: "Tenía miedo de que quedaran muy marcadas pero Valentina me diseñó la forma perfecta para mi cara. La henna se ve natural y duró un mes. Volví a las 3 semanas.",
  },
  {
    initials: "DF",
    name: "Daniela Forero",
    service: "Laminado de cejas",
    text: "El laminado transformó mis cejas en algo que pensé que no podía tener. Valentina es muy detallista y el resultado fue exactamente lo que quería.",
  },
  {
    initials: "NR",
    name: "Natalia Ruiz",
    service: "Depilación en cera",
    text: "El servicio fue rápido, sin irritación y el resultado duró mucho más que en otros lugares. El espacio es muy limpio y acogedor.",
  },
  {
    initials: "JB",
    name: "Juliana Becerra",
    service: "Tratamiento hiperpigmentación",
    text: "Empecé el ciclo de hiperpigmentación y en la tercera sesión ya veía diferencia en mis manchas. Valentina te explica todo y se nota que realmente sabe.",
  },
];

export default function Testimonios() {
  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Testimonios</SectionEyebrow>
          <SeriffH2>Lo que dicen ellas</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Resultados reales. Palabras de quienes ya confiaron en Smuk Studio.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {allTestimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 60}>
                <div
                  className="p-7"
                  style={{
                    background: "#FDF8F2",
                    borderLeft: "2px solid #D9CEBA",
                  }}
                >
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      color: "#2C2420",
                      lineHeight: 1.6,
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                      style={{
                        background: "#D9CEBA",
                        color: "#7C6A5E",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: '"DM Sans", sans-serif', color: "#2C2420" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: '"DM Sans", sans-serif', color: "#B8A99A" }}
                      >
                        {t.service}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(1.3rem, 4vw, 2rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              marginBottom: "20px",
            }}
          >
            ¿Lista para ser la próxima?
          </p>
          <BtnPrimary
            href={WA_MAIN}
            style={{ background: "#F5F0E8", color: "#2C2420" }}
          >
            Reservar cita
          </BtnPrimary>
        </FadeUp>
      </section>
    </div>
  );
}
