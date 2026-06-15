"use client";

import { useEffect, useState } from "react";
import { ArrowDown, GitFork, Link2, Mail } from "lucide-react";
import { personalInfo, stats } from "../data/portfolio";

const roles = ["Flutter Developer", "Mobile App Specialist", "UI/UX Enthusiast", "Dart Expert"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        t = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: isMobile ? "56px" : "64px",
        overflow: "hidden",
      }}
    >
      {/* BG orbs */}
      <div style={{
        position: "absolute",
        top: isMobile ? "10%" : "25%",
        left: isMobile ? "10%" : "30%",
        width: isMobile ? 280 : 480,
        height: isMobile ? 280 : 480,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: isMobile ? "10%" : "20%",
        right: isMobile ? "5%" : "20%",
        width: isMobile ? 200 : 360,
        height: isMobile ? 200 : 360,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,170,0.10), transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)",
        backgroundSize: isMobile ? "40px 40px" : "60px 60px",
      }} />

      {/* ── MAIN CONTENT ── */}
      <div style={{
        width: "100%",
        maxWidth: "1152px",
        margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 48px",
        boxSizing: "border-box",
      }}>

        {/* Two-column / stacked hero row */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "space-between",
          gap: isMobile ? "40px" : "48px",
          padding: isMobile ? "32px 0 28px" : "48px 0 40px",
        }}>

          {/* ── MOBILE: Avatar first ── */}
          {isMobile && (
            <MobileAvatar />
          )}

          {/* ── LEFT / BOTTOM: Text content ── */}
          <div style={{
            flex: "1 1 380px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "16px" : "20px",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
            width: "100%",
          }}>

            {/* Available badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", borderRadius: 100,
              border: "1px solid #2a2a30", background: "#141416",
              fontSize: 12, fontWeight: 500, color: "#8888a0",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#00d4aa", display: "inline-block",
                animation: "pulse 2s infinite",
              }} />
              Available for work
            </div>

            {/* Name */}
            <div>
              <h1 style={{
                fontSize: isMobile ? "clamp(32px, 9vw, 44px)" : "clamp(36px, 5vw, 60px)",
                fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: 0,
              }}>
                Hi, I&apos;m
              </h1>
              <h1 className="gradient-text" style={{
                fontSize: isMobile ? "clamp(32px, 9vw, 44px)" : "clamp(36px, 5vw, 60px)",
                fontWeight: 800, lineHeight: 1.15, margin: 0,
              }}>
                {personalInfo.name}
              </h1>
            </div>

            {/* Typewriter */}
            <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start" }}>
              <span style={{
                fontSize: isMobile ? "clamp(15px, 4.5vw, 20px)" : "clamp(18px, 2.5vw, 24px)",
                color: "#8888a0", fontWeight: 500,
              }}>
                {displayed}
                <span className="cursor-blink" style={{ color: "#6c63ff" }}>|</span>
              </span>
            </div>

            {/* Bio */}
            <p style={{
              color: "#8888a0",
              fontSize: isMobile ? 14 : 15,
              lineHeight: 1.75,
              maxWidth: isMobile ? "100%" : 480,
              margin: 0,
            }}>
              {personalInfo.bio}
            </p>

            {/* CTA */}
            <div style={{
              display: "flex", gap: 12,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              width: "100%",
            }}>
              <a href="#projects" style={{
                flex: isMobile ? "1 1 140px" : "0 0 auto",
                padding: "13px 24px",
                background: "#6c63ff", color: "#fff",
                fontWeight: 600, fontSize: 14, borderRadius: 12,
                textDecoration: "none", textAlign: "center",
                boxShadow: "0 8px 24px rgba(108,99,255,0.3)",
                transition: "background 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#5a52e0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#6c63ff"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Projects
              </a>
              <a href="#contact" style={{
                flex: isMobile ? "1 1 140px" : "0 0 auto",
                padding: "13px 24px",
                background: "transparent", color: "#f0f0f5",
                fontWeight: 600, fontSize: 14, borderRadius: 12,
                textDecoration: "none", textAlign: "center",
                border: "1px solid #2a2a30",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#6c63ff"; e.currentTarget.style.color = "#6c63ff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a30"; e.currentTarget.style.color = "#f0f0f5"; }}
              >
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, justifyContent: isMobile ? "center" : "flex-start" }}>
              {[
                { href: personalInfo.github, icon: <GitFork size={17} />, label: "GitHub" },
                { href: personalInfo.linkedin, icon: <Link2 size={17} />, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} title={label}
                  target={label !== "Email" ? "_blank" : undefined} rel="noreferrer"
                  style={{
                    width: 42, height: 42, borderRadius: 11,
                    border: "1px solid #2a2a30",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#8888a0", textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#6c63ff";
                    e.currentTarget.style.color = "#6c63ff";
                    e.currentTarget.style.background = "rgba(108,99,255,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#2a2a30";
                    e.currentTarget.style.color = "#8888a0";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Avatar (desktop only) ── */}
          {!isMobile && (
            <DesktopAvatar />
          )}
        </div>

        {/* ── Stats row ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? 10 : 16,
          paddingBottom: isMobile ? 48 : 64,
        }}>
          {stats.map((s) => (
            <div key={s.label} className="card-hover" style={{
              background: "#141416", border: "1px solid #2a2a30",
              borderRadius: 16, padding: isMobile ? "16px 12px" : "20px 16px",
              textAlign: "center",
            }}>
              <div className="gradient-text" style={{
                fontSize: isMobile ? 24 : 30,
                fontWeight: 700,
              }}>
                {s.value}
              </div>
              <div style={{ color: "#8888a0", fontSize: isMobile ? 11 : 13, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        color: "#8888a0", opacity: 0.4,
      }}>
        <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <ArrowDown size={13} style={{ animation: "bounce 1.5s infinite" }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}

/* ─── Desktop Avatar (unchanged layout with floating badges) ─── */
function DesktopAvatar() {
  return (
    <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
      <div style={{ position: "relative", width: 310, height: 310 }}>
        <SpinningRingAvatar size={310} />

        {/* Badge: top-left — Years Exp */}
        <FloatingBadge style={{ top: -12, left: -12 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1 }}>4+</div>
          <div style={{ fontSize: 11, color: "#8888a0", marginTop: 3, whiteSpace: "nowrap" }}>Years Exp.</div>
        </FloatingBadge>

        {/* Badge: bottom-right — Apps Shipped */}
        <FloatingBadge style={{ bottom: -12, right: -12 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#00d4aa", lineHeight: 1 }}>20+</div>
          <div style={{ fontSize: 11, color: "#8888a0", marginTop: 3, whiteSpace: "nowrap" }}>Apps Shipped</div>
        </FloatingBadge>

        {/* Badge: right-center — Client Rate */}
        <FloatingBadge style={{ top: "50%", right: -80, transform: "translateY(-50%)" }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#6c63ff", lineHeight: 1 }}>100%</div>
          <div style={{ fontSize: 11, color: "#8888a0", marginTop: 3, whiteSpace: "nowrap" }}>Client Rate</div>
        </FloatingBadge>
      </div>
    </div>
  );
}

/* ─── Mobile Avatar (compact, badges inline below) ─── */
function MobileAvatar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: "100%" }}>
      {/* Avatar ring */}
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <SpinningRingAvatar size={200} />
      </div>

      {/* Inline stat badges */}
      <div style={{
        display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap",
      }}>
        {[
          { value: "4+", label: "Years Exp.", color: "#fff" },
          { value: "20+", label: "Apps Shipped", color: "#00d4aa" },
          { value: "100%", label: "Client Rate", color: "#6c63ff" },
        ].map(({ value, label, color }) => (
          <div key={label} style={{
            background: "#18181c", border: "1px solid #2a2a30",
            borderRadius: 14, padding: "10px 18px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            textAlign: "center", minWidth: 80,
          }}>
            <div style={{ fontSize: 18, fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 10, color: "#8888a0", marginTop: 3, whiteSpace: "nowrap" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Shared spinning ring avatar ─── */
function SpinningRingAvatar({ size }: { size: number }) {
  const gap = size < 250 ? 3 : 4;
  const inner = size < 250 ? 6 : 8;
  return (
    <>
      {/* Spinning ring */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: "conic-gradient(from 0deg, #6c63ff, #00d4aa, #ff6b9d, #6c63ff)",
        animation: "spin-slow 8s linear infinite",
      }} />
      {/* Ring mask */}
      <div style={{
        position: "absolute", inset: gap, borderRadius: "50%",
        background: "#0d0d0f",
      }} />
      {/* Inner */}
      <div style={{
        position: "absolute", inset: inner, borderRadius: "50%",
        background: "linear-gradient(135deg, #1c1c22, #141416)",
        border: "1px solid #2a2a30",
        overflow: "hidden",
      }}>
        <img
          src="/profile.png"
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(13,13,15,0.55), rgba(13,13,15,0.05))",
        }} />
        <div style={{
          position: "absolute", bottom: size < 250 ? 12 : 18,
          left: 0, right: 0,
          display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2,
        }}>
          <div style={{
            padding: size < 250 ? "5px 10px" : "7px 14px",
            borderRadius: 999,
            background: "rgba(108,99,255,0.18)",
            border: "1px solid rgba(108,99,255,0.25)",
            backdropFilter: "blur(12px)",
            color: "#fff",
            fontSize: size < 250 ? 10 : 12,
            fontWeight: 600,
          }}>
            Flutter Developer
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Floating badge wrapper ─── */
function FloatingBadge({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute",
      background: "#18181c", border: "1px solid #2a2a30",
      borderRadius: 14, padding: "10px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      zIndex: 10,
      ...style,
    }}>
      {children}
    </div>
  );
}