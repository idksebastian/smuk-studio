import { useEffect, useRef, useState } from "react";

export function SectionEyebrow({ children }) {
  return (
    <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8A99A" }}>
      {children}
    </span>
  );
}

export function Divider({ className = "" }) {
  return (
    <div className={`mx-auto ${className}`} style={{ width: "40px", height: "1px", background: "#B8A99A" }} />
  );
}

export function SeriffH2({ children, className = "" }) {
  return (
    <h2 className={`mt-4 ${className}`} style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, color: "#2C2420", lineHeight: 1.2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
      {children}
    </h2>
  );
}

export function BodyText({ children, className = "" }) {
  return (
    <p className={className} style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, color: "#7C6A5E", lineHeight: 1.7, fontSize: "0.9rem" }}>
      {children}
    </p>
  );
}

export function BtnPrimary({ children, href, onClick, className = "" }) {
  const style = { fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", background: "#2C2420", color: "#F5F0E8", padding: "14px 32px", display: "inline-block", textDecoration: "none", cursor: "pointer", border: "none" };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={style} className={className}>{children}</a>;
  return <button style={style} onClick={onClick} className={className}>{children}</button>;
}

export function BtnOutline({ children, href, onClick, className = "" }) {
  const style = { fontFamily: '"DM Sans", sans-serif', fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #2C2420", color: "#2C2420", padding: "13px 32px", display: "inline-block", textDecoration: "none", cursor: "pointer", background: "transparent" };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={style} className={className}>{children}</a>;
  return <button style={style} onClick={onClick} className={className}>{children}</button>;
}

export function useFadeUp() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export function FadeUp({ children, className = "", delay = 0 }) {
  const { ref, visible } = useFadeUp();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

// Detects OS and opens the right calendar without asking the user
function openCalendar(activity) {
  const formatDate = (dateStr, time) => {
    const [y, m, d] = dateStr.split("-");
    const [h, min] = time.split(":");
    return `${y}${m}${d}T${h}${min}00`;
  };

  const start = formatDate(activity.date, activity.startTime);
  const end = formatDate(activity.date, activity.endTime);
  const title = encodeURIComponent(`Smuk Studio — ${activity.name}`);
  const details = encodeURIComponent(activity.consists);
  const location = encodeURIComponent(activity.location);

  const ua = navigator.userAgent;
  const isApple = /iPhone|iPad|iPod|Macintosh/i.test(ua) && !/Chrome/i.test(ua);

  if (isApple) {
    // Apple devices → download .ics which iOS/macOS opens natively in Calendar
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:Smuk Studio — ${activity.name}`,
      `DESCRIPTION:${activity.consists}`,
      `LOCATION:${activity.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `smuk-${activity.id}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  } else {
    // Android, Windows, Linux → Google Calendar
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(googleUrl, "_blank", "noreferrer");
  }
}

export function CalendarButton({ activity }) {
  return (
    <button
      onClick={() => openCalendar(activity)}
      style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: "0.65rem",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        border: "1px solid #D9CEBA",
        color: "#7C6A5E",
        padding: "9px 18px",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <CalIcon />
      Agregar al calendario
    </button>
  );
}

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M5 1V4M11 1V4M1 7H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}