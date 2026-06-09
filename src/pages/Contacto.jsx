import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, BtnPrimary } from "../components/UI";

const WA_MAIN = "https://api.whatsapp.com/send/?phone=573227665148&type=phone_number&app_absent=0&utm_source=web";

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
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
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
            <ContactRow
              icon={<PhoneIcon />}
              label="WhatsApp"
              value="+57 322 766 5148"
              href={WA_MAIN}
            />
            <ContactRow
              icon={<IgIcon />}
              label="Instagram"
              value="@smukstudio__"
              href="https://www.instagram.com/smukstudio__/"
            />
            <ContactRow
              icon={<LocationIcon />}
              label="Ubicación"
              value="Bogotá, Colombia"
            />
          </FadeUp>

          <FadeUp className="text-center">
            <BtnPrimary href={WA_MAIN}>
              Reservar por WhatsApp
            </BtnPrimary>
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
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.954-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8.5 9.5c.5 1 1.5 2.5 3 3.5s2.5 1.5 3.5 1.5c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1H14c-.5 0-.5-.5-1-1-.5-.5-1-.5-1.5 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M2 8L12 13L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
