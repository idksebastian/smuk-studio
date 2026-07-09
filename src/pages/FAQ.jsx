import { useState } from "react";
import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText } from "../components/UI";
import { faqs, WA_BASE } from "../data/content";

const WA_FAQ =
  WA_BASE +
  "&text=" +
  encodeURIComponent(
    "Hola Valentina! Tengo una pregunta sobre los servicios de Smuk Studio. ¿Me puedes ayudar? 😊"
  );

const WA_RESERVA =
  WA_BASE +
  "&text=" +
  encodeURIComponent(
    "Hola Valentina! Quiero reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  );

function WaIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 40}>
      <div
        style={{ borderBottom: "1px solid #EDE5D8", cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <div
          className="flex items-start justify-between gap-4 py-5 px-1"
          style={{ userSelect: "none" }}
        >
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "#2C2420",
              lineHeight: 1.4,
              flex: 1,
            }}
          >
            {faq.pregunta}
          </p>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "1.2rem",
              color: "#B8A99A",
              flexShrink: 0,
              marginTop: "2px",
              transition: "transform 0.2s",
              display: "inline-block",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </div>
        {open && (
          <div className="pb-5 px-1">
            <BodyText className="text-sm leading-relaxed">{faq.respuesta}</BodyText>
            {[1, 4, 7].includes(index) && (
              <a
                href={WA_FAQ}
                target="_blank"
                rel="noreferrer"
                className="mt-4"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  background: "#2C2420",
                  color: "#F5F0E8",
                  padding: "10px 20px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <WaIcon size={14} />
                Preguntar por WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
    </FadeUp>
  );
}

export default function FAQ() {
  return (
    <div>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <SeriffH2>Todo lo que necesitas saber</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            Resolvemos tus dudas antes de tu cita. Si no encuentras tu pregunta, escríbenos directamente.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-12 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-2xl mx-auto">
          <div style={{ borderTop: "1px solid #EDE5D8" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* CTA bloque */}
          <FadeUp>
            <div
              className="mt-12 p-8 text-center"
              style={{ background: "#EDE5D8", border: "1px solid #D9CEBA" }}
            >
              <SectionEyebrow>¿No encontraste tu respuesta?</SectionEyebrow>
              <p
                className="mt-3 mb-6"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  color: "#2C2420",
                }}
              >
                Escríbenos y te respondemos en menos de 2 horas
              </p>
              
                <a href={WA_FAQ}
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
                  padding: "14px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <WaIcon size={15} />
                Preguntar por WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p
            style={{
              fontFamily: '"Pinyon Script", cursive',
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              color: "#F5F0E8",
              lineHeight: 1,
              marginBottom: "12px",
            }}
          >
            Tu mirada, nuestra pasión
          </p>
          <BodyText className="mb-8 text-sm max-w-xs mx-auto" style={{ color: "#B8A99A" }}>
            Agenda tu cita hoy y empieza a despertar lista.
          </BodyText>
          
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
            <WaIcon size={15} />
            Reservar cita
          </a>
        </FadeUp>
      </section>
    </div>
  );
}