import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary } from "../components/UI";

const WA_MAIN = "https://api.whatsapp.com/send/?phone=573227665148&type=phone_number&app_absent=0&utm_source=web";

const valores = ["Autenticidad", "Precisión", "Calidez", "Higiene", "Confianza"];

export default function Nosotros() {
  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
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
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: "3/4", background: "#D9CEBA" }}
            >
              <img
                src="/valentina-reyes.jpeg"
                alt="Valentina Reyes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <SectionEyebrow>Valentina Reyes</SectionEyebrow>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: "1.8rem",
                  color: "#2C2420",
                  lineHeight: 1.2,
                }}
              >
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
              <p
                className="mt-3 mb-3"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}
              >
                Lo que hacemos cada día
              </p>
              <BodyText className="text-xs">
                Brindar experiencias de belleza personalizadas, seguras y transformadoras que potencien la autoestima
                de cada clienta a través de técnicas certificadas y productos de calidad.
              </BodyText>
            </div>
            <div style={{ borderTop: "1px solid #B8A99A", paddingTop: "24px" }}>
              <SectionEyebrow>Visión</SectionEyebrow>
              <p
                className="mt-3 mb-3"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}
              >
                Hacia dónde vamos
              </p>
              <BodyText className="text-xs">
                Ser el estudio de referencia en Bogotá para mujeres que buscan belleza auténtica, consolidando un
                espacio donde el cuidado personal es un acto de amor propio.
              </BodyText>
            </div>
            <div style={{ borderTop: "1px solid #B8A99A", paddingTop: "24px" }}>
              <SectionEyebrow>Valores</SectionEyebrow>
              <p
                className="mt-3 mb-3"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.3rem", fontWeight: 300, color: "#2C2420" }}
              >
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
            <SectionEyebrow>Propuesta única de valor</SectionEyebrow>
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
              "En Smuk Studio cada procedimiento comienza con una escucha real — porque tu belleza no es un estándar,
              es tuya."
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 300,
              color: "#F5F0E8",
              marginBottom: "20px",
            }}
          >
            ¿Lista para comenzar?
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
