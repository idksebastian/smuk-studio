import { FadeUp, SectionEyebrow, Divider, SeriffH2, BodyText, CalendarButton } from "../components/UI";
import { activities } from "../data/content";

export default function Actividades() {
  return (
    <div className="pt-24" style={{ background: "#F5F0E8" }}>
      <section className="py-16 px-6 text-center" style={{ background: "#EDE5D8" }}>
        <FadeUp>
          <SectionEyebrow>Estrategia comercial</SectionEyebrow>
          <SeriffH2>Actividades del semestre</SeriffH2>
          <Divider className="mt-6" />
          <BodyText className="mt-4 max-w-sm mx-auto text-sm">
            4 actividades diseñadas para conectar, fidelizar y crecer con nuestra comunidad.
          </BodyText>
        </FadeUp>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-5">
          {activities.map((a, i) => (
            <FadeUp key={a.id} delay={i * 80}>
              <div className="p-7 md:p-10" style={{ background: "#FDFAF6", border: "1px solid #EDE5D8" }}>
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Left */}
                  <div className="md:col-span-1 flex flex-col">
                    <SectionEyebrow>Actividad {a.number}</SectionEyebrow>
                    <p className="mt-2" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "1.4rem", color: "#2C2420", lineHeight: 1.2 }}>
                      {a.name}
                    </p>
                    <p className="mt-2 mb-4" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.72rem", color: "#B8A99A" }}>
                      {a.dateLabel}
                    </p>
                    <div className="mt-auto">
                      <CalendarButton activity={a} />
                    </div>
                  </div>

                  {/* Right */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <p className="mb-1" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A99A" }}>
                        ¿Qué es?
                      </p>
                      <BodyText className="text-sm">{a.what}</BodyText>
                    </div>
                    <div>
                      <p className="mb-1" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A99A" }}>
                        En qué consiste
                      </p>
                      <BodyText className="text-sm">{a.consists}</BodyText>
                    </div>
                    <div>
                      <p className="mb-1" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8A99A" }}>
                        Objetivo
                      </p>
                      <BodyText className="text-sm">{a.goal}</BodyText>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}