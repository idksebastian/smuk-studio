import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnLight } from "../components/UI";

const WA_RESEÑA =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Quiero contarte cómo me fue con mi servicio en Smuk Studio"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

const WA_RESERVA =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Quiero reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

const IG_URL = "https://www.instagram.com/smukstudio__/";

export default function Testimonios() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Reseñas</SectionEyebrow>
          <SeriffH2>Lo que dicen nuestras clientas</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Cada mirada transformada es nuestra mejor carta de presentación.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-20 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Bloque Instagram */}
          <FadeUp>
            <div
              className="p-8 md:p-12 text-center"
              style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
                style={{ background: "#EDE5D8" }}
              >
                <IgIcon />
              </div>
              <SectionEyebrow>Instagram</SectionEyebrow>
              <p
                className="mt-3 mb-2"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontWeight: 300,
                  color: "#2C2420",
                  lineHeight: 1.3,
                }}
              >
                ¿Ya visitaste nuestro Instagram?
              </p>
              <BodyText className="text-sm mb-6 max-w-sm mx-auto">
                Ahí encontrarás fotos reales de nuestros trabajos, antes y después, y las reseñas de clientas que ya vivieron la experiencia Smuk.
              </BodyText>
              
                <a href={IG_URL}
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
                  padding: "13px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <IgIconSmall />
                Ver @smukstudio__
              </a>
            </div>
          </FadeUp>

          {/* Bloque Google — comentado hasta tener perfil verificado */}
          {/* <FadeUp delay={80}>
            <div
              className="p-8 md:p-12 text-center"
              style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
                style={{ background: "#EDE5D8" }}
              >
                <GoogleIcon />
              </div>
              <SectionEyebrow>Google</SectionEyebrow>
              <p
                className="mt-3 mb-2"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontWeight: 300,
                  color: "#2C2420",
                  lineHeight: 1.3,
                }}
              >
                ¿Ya fuiste al estudio?
              </p>
              <BodyText className="text-sm mb-6 max-w-sm mx-auto">
                Tu opinión ayuda a otras clientas a conocer Smuk Studio. Déjanos una reseña en Google y cuéntales cómo fue tu experiencia.
              </BodyText>
              
                href={GOOGLE_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "1px solid #2C2420",
                  color: "#2C2420",
                  padding: "12px 28px",
                  textDecoration: "none",
                  display: "inline-block",
                  background: "transparent",
                }}
              >
                Dejar reseña en Google
              </a>
            </div>
          </FadeUp> */}

          {/* Bloque WhatsApp */}
          <FadeUp delay={80}>
            <div
              className="p-8 md:p-12 text-center"
              style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}
            >
              <div
                className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
                style={{ background: "#EDE5D8" }}
              >
                <WaIconCircle />
              </div>
              <SectionEyebrow>WhatsApp</SectionEyebrow>
              <p
                className="mt-3 mb-2"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontWeight: 300,
                  color: "#2C2420",
                  lineHeight: 1.3,
                }}
              >
                ¿Quieres contarnos cómo te fue?
              </p>
              <BodyText className="text-sm mb-6 max-w-sm mx-auto">
                Nos encanta saber de ti después de tu cita. Escríbenos directamente y cuéntanos tu experiencia.
              </BodyText>
              
                <a href={WA_RESEÑA}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: "#25D366",
                  color: "#fff",
                  padding: "13px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <WaIconSmall />
                Escribir a Valentina
              </a>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* CTA */}
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
            ¿Lista para vivir la experiencia?
          </p>
          
            <a href={WA_RESERVA}
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
              padding: "13px 32px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              border: "1px solid #F5F0E8",
            }}
          >
            <WaIconSmall />
            Reservar cita
          </a>
        </FadeUp>
      </section>
    </div>
  );
}

function IgIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#7C6A5E" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="#7C6A5E" strokeWidth="1.5" fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="#7C6A5E" />
    </svg>
  );
}

function IgIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  );
}

// Icono WA grande para el círculo decorativo
function WaIconCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7C6A5E" width="24" height="24">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

// Icono WA pequeño para botones
function WaIconSmall() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"
      style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}