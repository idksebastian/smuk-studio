import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText } from "../components/UI";
import { buyerPersona } from "../data/content";

function PersonaBlock({ title, items }) {
  return (
    <div>
      <SectionEyebrow>{title}</SectionEyebrow>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#2C2420",
                minWidth: "90px",
                flexShrink: 0,
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.78rem",
                fontWeight: 300,
                color: "#7C6A5E",
                lineHeight: 1.5,
              }}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClienteIdeal() {
  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Buyer Persona</SectionEyebrow>
          <SeriffH2>Ella es Smuk</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Descripción de nuestro cliente ideal: quién es, qué la motiva y cómo toma decisiones.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div
              className="p-8 md:p-12"
              style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}
            >
              {/* Avatar header */}
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-10">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: "#D9CEBA" }}
                >
                  <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="40" cy="40" r="40" fill="#D9CEBA" />
                    <ellipse cx="40" cy="30" rx="14" ry="17" fill="#E8D5C4" />
                    <path d="M18 78 Q22 55 40 52 Q58 55 62 78 Z" fill="#C4B49E" />
                    <path d="M27 22 Q31 12 40 11 Q49 12 53 22 Q55 15 50 10 Q40 4 30 10 Q25 15 27 22Z" fill="#7C6A5E" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontStyle: "italic",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "#2C2420",
                      lineHeight: 1,
                    }}
                  >
                    {buyerPersona.name}
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#B8A99A" }}
                  >
                    {buyerPersona.subtitle}
                  </p>
                  <p
                    className="mt-3 max-w-lg"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.82rem", color: "#7C6A5E", lineHeight: 1.6, fontWeight: 300 }}
                  >
                    Mujer joven que se toma en serio su bienestar y su imagen, sin caer en exageraciones.
                    Valora la autenticidad, la higiene y la personalización. Decide con base en recomendaciones de
                    confianza y contenido real en redes.
                  </p>
                </div>
              </div>

              {/* 3 columns */}
              <div
                className="pt-8 grid md:grid-cols-3 gap-8"
                style={{ borderTop: "1px solid #EDE5D8" }}
              >
                <PersonaBlock title="Variables demográficas" items={buyerPersona.demographic} />
                <PersonaBlock title="Variables psicográficas" items={buyerPersona.psychographic} />
                <PersonaBlock title="Variables comportamentales" items={buyerPersona.behavioral} />
              </div>
            </div>
          </FadeUp>

          {/* Pain / Gains */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <FadeUp>
              <div className="p-7" style={{ background: "#FDF8F2", border: "1px solid #EDE5D8" }}>
                <SectionEyebrow>Sus frustraciones</SectionEyebrow>
                <ul className="mt-4 space-y-3">
                  {[
                    "Resultados inconsistentes entre sesiones",
                    "Profesionales que no escuchan lo que quiere",
                    "Ambientes poco higiénicos o improvisados",
                    "Precios que no reflejan la calidad del servicio",
                    "No saber qué productos o tratamientos necesita",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "#B8A99A", marginTop: "2px", fontSize: "0.8rem" }}>—</span>
                      <BodyText className="text-sm">{item}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <div className="p-7" style={{ background: "#FDF8F2", border: "1px solid #EDE5D8" }}>
                <SectionEyebrow>Lo que busca en Smuk</SectionEyebrow>
                <ul className="mt-4 space-y-3">
                  {[
                    "Atención personalizada y sin prisa",
                    "Resultados naturales que la hagan sentir ella misma",
                    "Un espacio limpio, tranquilo y agradable",
                    "Una profesional en quien confiar a largo plazo",
                    "Rutinas de belleza que se adapten a su vida real",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "#B8A99A", marginTop: "2px", fontSize: "0.8rem" }}>✦</span>
                      <BodyText className="text-sm">{item}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
