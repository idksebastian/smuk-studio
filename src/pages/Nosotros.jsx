import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText } from "../components/UI";

const WA_MAIN =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

const valores = ["Autenticidad", "Precisión", "Calidez", "Higiene", "Confianza"];

export default function Nosotros() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Quiénes somos</SectionEyebrow>
          <SeriffH2>La mano detrás de tu mejor versión</SeriffH2>
          <Divider className="mt-6" />
        </FadeUp>
      </section>

      {/* About */}
      <section className="py-16 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4", background: "#D9CEBA" }}>
              <img
                src="/valentina-reyes.jpeg"
                alt="Valentina Reyes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <SectionEyebrow>Valentina Reyes</SectionEyebrow>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "1.8rem", color: "#2C2420", lineHeight: 1.2 }}>
                Lashista, cosmetóloga y esteticista
              </p>
              <BodyText className="text-sm">
                Con más de 4 años de experiencia transformando la confianza de mis clientas a través del cuidado
                consciente de la piel y la belleza, fundé Smuk Studio con una idea clara: cada persona merece una
                atención hecha a su medida.
              </BodyText>
              <BodyText className="text-sm">
                <strong style={{ color: "#2C2420", fontWeight: 500 }}>Smuk</strong> —que en danés significa
                "hermoso/a"— nació de la convicción de que la belleza real se construye desde adentro hacia afuera:
                con técnica, productos de alta calidad y un espacio donde te sientas completamente vista y cuidada.
              </BodyText>
              <BodyText className="text-sm">
                Aquí no ofrecemos tratamientos genéricos. Cada servicio está personalizado según tu tipo de piel, tus
                facciones y tu estilo de vida.
              </BodyText>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-16 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp className="grid md:grid-cols-3 gap-8">
            <div style={{ borderTop: "1px solid #B8A99A", paddingTop: "24px" }}>
              <SectionEyebrow>Misión</SectionEyebrow>
              <p className="mt-3 mb-3" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}>
                Lo que hacemos cada día
              </p>
              <BodyText className="text-xs">
                Brindar experiencias de belleza personalizadas, seguras y transformadoras que potencien la autoestima
                de cada clienta a través de técnicas certificadas y productos de calidad.
              </BodyText>
            </div>
            <div style={{ borderTop: "1px solid #B8A99A", paddingTop: "24px" }}>
              <SectionEyebrow>Visión</SectionEyebrow>
              <p className="mt-3 mb-3" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}>
                Hacia dónde vamos
              </p>
              <BodyText className="text-xs">
                Ser el estudio de referencia en Bogotá para mujeres que buscan belleza auténtica, consolidando un
                espacio donde el cuidado personal es un acto de amor propio.
              </BodyText>
            </div>
            <div style={{ borderTop: "1px solid #B8A99A", paddingTop: "24px" }}>
              <SectionEyebrow>Valores</SectionEyebrow>
              <p className="mt-3 mb-3" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}>
                Cómo lo hacemos
              </p>
              <div className="flex flex-wrap gap-2">
                {valores.map((v) => (
                  <span
                    key={v}
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#7C6A5E",
                      border: "1px solid #D9CEBA",
                      padding: "7px 14px",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PUV */}
      <section className="py-16 px-6" style={{ background: "#EDE5D8" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp
            className="text-center p-10 md:p-14"
            style={{ background: "#F5F0E8", border: "1px solid #D9CEBA" }}
          >
            <p
              className="mt-5 mx-auto"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                color: "#2C2420",
                lineHeight: 1.5,
                maxWidth: "520px",
              }}
            >
              "Cada detalle importa. Cada clienta es única. Cada resultado, intencional."
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "20px" }}>
            ¿Lista para comenzar?
          </p>
          <a
  href={WA_MAIN}
  target="_blank"
  rel="noreferrer"
  style={{
    fontFamily: '"DM Sans", sans-serif',
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#F5F0E8",
    background: "transparent",
    border: "1px solid rgba(245,240,232,.8)",
    padding: "14px 28px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    transition: "all .3s ease",
    lineHeight: 1,
    whiteSpace: "nowrap",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{
      width: "18px",
      height: "18px",
      flexShrink: 0,
      display: "block",
    }}
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
  </svg>

  <span>Reservar cita</span>
</a>
        </FadeUp>
      </section>
    </div>
  );
}