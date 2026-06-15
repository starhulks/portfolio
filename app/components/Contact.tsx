"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GitFork,
  Link2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".section-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="ct-root">
      {/* Glow A */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Glow B */}
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          right: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.08), transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="ct-inner">

        {/* ── HEADER ── */}
        <div className="section-reveal ct-header">
          <div className="ct-eyebrow">
            <Sparkles size={14} color="#6c63ff" />
            Contact
          </div>

          <h2 className="ct-heading">
            {"Let's Build Something"}
            <span
              style={{
                background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" Amazing"}
            </span>
          </h2>

          <p className="ct-subheading">
            Have a project idea, startup vision, or Flutter opportunity?
            {"Let's"} discuss and create something impactful together.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="ct-grid">

          {/* LEFT */}
          <div className="section-reveal ct-left">

            {/* Contact cards */}
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} className="ct-card">
                <div className="ct-card-glow" />
                <div className="ct-card-icon">
                  {item.icon}
                </div>
                <div className="ct-card-text">
                  <div className="ct-card-label">{item.label}</div>
                  <div className="ct-card-value">{item.value}</div>
                </div>
                <ArrowUpRight size={18} color="#6c63ff" style={{ flexShrink: 0, position: "relative", zIndex: 2 }} />
              </a>
            ))}

            {/* Social */}
            <div className="ct-social-box">
              <div className="ct-social-glow" />
              <div className="ct-social-title">Connect With Me</div>
              <div className="ct-social-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-social-btn"
                  aria-label="GitHub"
                >
                  <GitFork size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-social-btn"
                  aria-label="LinkedIn"
                >
                  <Link2 size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="ct-avail-box">
              <div className="ct-avail-glow" />
              <div className="ct-avail-title-row">
                <div className="ct-avail-dot" />
                <span className="ct-avail-title">Available for Work</span>
              </div>
              <p className="ct-avail-desc">
                Open for full-time opportunities, freelance projects,
                startup collaborations, and long-term partnerships.
                Typical response time within 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="section-reveal ct-right">
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-form-glow" />

              <div className="ct-form-inner">
                <h3 className="ct-form-title">Send a Message</h3>
                <p className="ct-form-desc">
                  Fill out the form below and your default email client
                  will open with your message pre-filled.
                </p>

                {/* Name + Email row */}
                <div className="ct-input-row">
                  <InputField
                    label="Your Name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <InputField
                    label="Email Address"
                    placeholder="john@example.com"
                    value={form.email}
                    type="email"
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>

                {/* Subject */}
                <div className="ct-input-single">
                  <InputField
                    label="Subject"
                    placeholder="Project inquiry / Job opportunity"
                    value={form.subject}
                    onChange={(v) => setForm({ ...form, subject: v })}
                  />
                </div>

                {/* Message */}
                <div className="ct-input-single">
                  <label className="ct-label">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="ct-input ct-textarea"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className={`ct-send-btn${sent ? " ct-sent" : ""}`}>
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section root ──────────────────────────── */
        .ct-root {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
          border-top: 1px solid #1d1d22;
        }

        /* ── Inner container ───────────────────────── */
        .ct-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        /* ── Header ────────────────────────────────── */
        .ct-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: #141416;
          border: 1px solid #2a2a30;
          color: #8888a0;
          font-size: 13px;
          margin-bottom: 20px;
        }

        .ct-heading {
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }

        .ct-subheading {
          color: #8888a0;
          max-width: 680px;
          margin: 18px auto 0;
          line-height: 1.8;
          font-size: 15px;
        }

        /* ── Main grid ─────────────────────────────── */
        .ct-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: start;
        }

        /* ── Left col ──────────────────────────────── */
        .ct-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Contact card ──────────────────────────── */
        .ct-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px;
          border-radius: 24px;
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          text-decoration: none;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .ct-card:hover {
          transform: translateY(-4px);
          border-color: rgba(108,99,255,0.28);
        }

        .ct-card-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%);
          pointer-events: none;
        }

        .ct-card-icon {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(108,99,255,0.18), rgba(0,212,170,0.08));
          border: 1px solid rgba(108,99,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c63ff;
          position: relative;
          z-index: 2;
        }

        .ct-card-text {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .ct-card-label {
          color: #8888a0;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .ct-card-value {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Social box ────────────────────────────── */
        .ct-social-box {
          position: relative;
          overflow: hidden;
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          border-radius: 24px;
          padding: 26px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .ct-social-glow {
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,170,0.10), transparent 70%);
          pointer-events: none;
        }

        .ct-social-title {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .ct-social-row {
          display: flex;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .ct-social-btn {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: #18181c;
          border: 1px solid #2a2a30;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8888a0;
          text-decoration: none;
          transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .ct-social-btn:hover {
          border-color: #6c63ff;
          color: #6c63ff;
          transform: translateY(-3px);
        }

        /* ── Availability box ──────────────────────── */
        .ct-avail-box {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 26px;
          background: linear-gradient(135deg, rgba(108,99,255,0.14), rgba(0,212,170,0.08));
          border: 1px solid rgba(108,99,255,0.2);
        }

        .ct-avail-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%);
          pointer-events: none;
        }

        .ct-avail-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          position: relative;
          z-index: 2;
        }

        .ct-avail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00d4aa;
          animation: ct-pulse 2s infinite;
          flex-shrink: 0;
        }

        .ct-avail-title {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
        }

        .ct-avail-desc {
          color: #d0d0d8;
          line-height: 1.8;
          font-size: 13.5px;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        /* ── Form card ─────────────────────────────── */
        .ct-form {
          position: relative;
          overflow: hidden;
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          border-radius: 28px;
          padding: 34px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .ct-form-glow {
          position: absolute;
          top: -90px;
          right: -90px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%);
          pointer-events: none;
        }

        .ct-form-inner {
          position: relative;
          z-index: 2;
        }

        .ct-form-title {
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .ct-form-desc {
          color: #8888a0;
          line-height: 1.8;
          font-size: 13.5px;
          margin: 0 0 28px;
        }

        /* ── Inputs ────────────────────────────────── */
        .ct-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .ct-input-single {
          margin-bottom: 16px;
        }

        .ct-label {
          display: block;
          color: #8888a0;
          font-size: 12px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .ct-input {
          width: 100%;
          background: #18181c;
          border: 1px solid #2a2a30;
          border-radius: 14px;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .ct-input:focus {
          border-color: #6c63ff;
          box-shadow: 0 0 0 4px rgba(108,99,255,0.08);
        }

        .ct-input::placeholder {
          color: #555564;
        }

        .ct-textarea {
          resize: none;
        }

        /* ── Send button ───────────────────────────── */
        .ct-send-btn {
          width: 100%;
          height: 56px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(135deg, #6c63ff, #7d75ff);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 12px 36px rgba(108,99,255,0.25);
          margin-top: 8px;
        }

        .ct-send-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 48px rgba(108,99,255,0.35);
        }

        .ct-sent {
          background: linear-gradient(135deg, #00d4aa, #00b890);
          box-shadow: 0 12px 36px rgba(0,212,170,0.25);
        }

        /* ── Animation ─────────────────────────────── */
        @keyframes ct-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        /* ── Tablet  ≤ 960px ───────────────────────── */
        @media (max-width: 960px) {
          .ct-inner {
            padding: 0 32px;
          }
          .ct-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .ct-header {
            margin-bottom: 56px;
          }
        }

        /* ── Mobile  ≤ 640px ───────────────────────── */
        @media (max-width: 640px) {
          .ct-root {
            padding: 80px 0;
          }
          .ct-inner {
            padding: 0 20px;
          }
          .ct-header {
            margin-bottom: 44px;
          }
          .ct-subheading {
            font-size: 14px;
          }
          .ct-input-row {
            grid-template-columns: 1fr;
          }
          .ct-form {
            padding: 24px 20px;
            border-radius: 22px;
          }
          .ct-form-title {
            font-size: 20px;
          }
          .ct-card {
            padding: 18px;
          }
          .ct-card-value {
            font-size: 13px;
          }
          .ct-social-box,
          .ct-avail-box {
            padding: 20px;
          }
        }

        /* ── Very small  ≤ 360px ───────────────────── */
        @media (max-width: 360px) {
          .ct-inner {
            padding: 0 14px;
          }
          .ct-card-icon {
            width: 44px;
            height: 44px;
          }
          .ct-send-btn {
            height: 50px;
            font-size: 14px;
          }
        }

        /* ── Reveal animation ──────────────────────── */
        .section-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="ct-label">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="ct-input"
      />
    </div>
  );
}