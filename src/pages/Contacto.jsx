import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText } from "../components/UI";

const WA_MAIN =
  "https://api.whatsapp.com/send/?phone=573227665148&text=" +
  encodeURIComponent(
    "Hola Valentina! Me gustaría reservar una cita en Smuk Studio. ¿Cuándo tienes disponibilidad? ✨"
  ) +
  "&type=phone_number&app_absent=0&utm_source=web";

function WaIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.59 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.86 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42ZM12.07 21.85h-.01a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.93 9.93 0 1 1 8.35 4.58Zm5.45-7.44c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/>
    </svg>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 p-5" style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}>
      <div style={{ color: "#B8A99A", marginTop: "2px" }}>{icon}</div>
      <div>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8A99A", marginBottom: "4px" }}>
          {label}
        </p>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.9rem", color: "#2C2420" }}>{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>{content}</a>;
  return content;
}

export default function Contacto() {
  return (
    <div style={{ background: "#F5F0E8" }}>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Contacto</SectionEyebrow>
          <SeriffH2>Hablemos</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-xs mx-auto text-sm">
            Escríbeme por WhatsApp y cuéntame qué servicio te interesa. Te respondo en menos de 2 horas.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <FadeUp className="space-y-3 mb-10">
            <ContactRow icon={<PhoneIcon />} label="WhatsApp" value="+57 322 766 5148" href={WA_MAIN} />
            <ContactRow icon={<IgIcon />} label="Instagram" value="@smukstudio__" href="https://www.instagram.com/smukstudio__/" />
            <ContactRow icon={<LocationIcon />} label="Ubicación" value="Bogotá, Colombia" />
          </FadeUp>

          <FadeUp className="mt-16" delay={100}>
            <div className="p-8 text-center" style={{ background: "#EDE5D8", border: "1px solid #D9CEBA" }}>
              <SectionEyebrow>Horario de atención</SectionEyebrow>
              <div className="mt-5 space-y-2">
                {[
                  ["Lunes – Viernes", "9:00 am – 7:00 pm"],
                  ["Sábados", "9:00 am – 5:00 pm"],
                  ["Domingos", "Solo citas especiales"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between items-center" style={{ borderBottom: "1px solid #D9CEBA", paddingBottom: "8px" }}>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", color: "#7C6A5E" }}>{day}</p>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.8rem", fontWeight: 500, color: "#2C2420" }}>{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: "#2C2420" }}>
        <FadeUp>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "20px" }}>
            ¿Lista para comenzar?
          </p>
          
            <a href={WA_MAIN}
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
            Reservar por WhatsApp
          </a>
        </FadeUp>
      </section>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.954-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
        stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3.5 1.5c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1H14c-.5 0-.5-.5-1-1-.5-.5-1-.5-1.5 0"
        stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
        stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}