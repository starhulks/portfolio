"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2, Sparkles, Layers, Zap, MonitorSmartphone,
  ShieldCheck, GitBranch, Database, Palette, RefreshCw
} from "lucide-react";

const specialties = [
  { icon: Layers, label: "State Management", sub: "Bloc / Cubit / Provider" },
  { icon: MonitorSmartphone, label: "Responsive UI", sub: "Adaptive layouts" },
  { icon: Zap, label: "Performance", sub: "60 fps animations" },
  { icon: Database, label: "Firebase & APIs", sub: "Auth, Firestore, REST" },
  { icon: Palette, label: "Design Systems", sub: "Custom UI kits" },
  { icon: GitBranch, label: "Clean Architecture", sub: "SOLID principles" },
  { icon: ShieldCheck, label: "Testing & CI/CD", sub: "Unit & widget tests" },
  { icon: RefreshCw, label: "App Lifecycle", sub: "MVP → production" },
];

/* ─── Phone screens ─────────────────────────────────────────── */
function ScreenDashboard() {
  return (
    <div style={{ padding: "10px 10px 0", display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ background: "linear-gradient(135deg,#6c63ff,#a78bfa)", borderRadius: 11, padding: "11px 12px" }}>
        <div style={{ fontSize: 8, color: "rgba(255,255,255,0.8)", marginBottom: 2 }}>Good morning 👋</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Alex Johnson</div>
        <div style={{ fontSize: 7, color: "rgba(255,255,255,0.65)", marginTop: 1 }}>Flutter Developer</div>
      </div>
      <div style={{ display: "flex", gap: 5 }}>
        {[["12", "Projects"], ["843", "Commits"], ["2.1k", "Stars"]].map(([v, l]) => (
          <div key={l} style={{ flex: 1, background: "#1d1d28", borderRadius: 9, padding: "6px 4px", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{v}</div>
            <div style={{ fontSize: 6.5, color: "#555", marginTop: 1 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 8, color: "#555" }}>Recent Activity</div>
      {[
        { dot: "#6c63ff", text: "E-commerce app shipped", t: "2h ago" },
        { dot: "#00d4aa", text: "Firebase integration", t: "Yesterday" },
        { dot: "#f59e0b", text: "UI kit published", t: "3d ago" },
      ].map(r => (
        <div key={r.text} style={{ display: "flex", alignItems: "center", gap: 6, background: "#1a1a26", borderRadius: 7, padding: "5px 7px" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: r.dot, flexShrink: 0 }} />
          <div style={{ flex: 1, fontSize: 7.5, color: "#bbb" }}>{r.text}</div>
          <div style={{ fontSize: 6.5, color: "#555" }}>{r.t}</div>
        </div>
      ))}
    </div>
  );
}

function ScreenAnalytics() {
  const bars = [60, 80, 45, 90, 65, 75, 55];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div style={{ padding: "10px 10px 0", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 9, color: "#8888a0", fontWeight: 600 }}>Weekly Stats</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 60 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <div style={{ width: "100%", height: h * 0.55, background: i === 3 ? "#6c63ff" : "rgba(108,99,255,0.25)", borderRadius: "3px 3px 0 0" }} />
            <span style={{ fontSize: 6, color: "#555" }}>{days[i]}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[{ label: "Sessions", val: "1.2k", c: "#6c63ff" }, { label: "Retention", val: "87%", c: "#00d4aa" }].map(s => (
          <div key={s.label} style={{ flex: 1, background: "#1a1a26", borderRadius: 8, padding: "7px 8px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: s.c }}>{s.val}</div>
            <div style={{ fontSize: 7, color: "#555", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {[
        { label: "Crash-free rate", val: "99.8%", pct: 99.8, c: "#00d4aa" },
        { label: "Avg. load time", val: "0.8s", pct: 80, c: "#6c63ff" },
      ].map(m => (
        <div key={m.label} style={{ background: "#1a1a26", borderRadius: 8, padding: "7px 9px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 7.5, color: "#8888a0" }}>{m.label}</span>
            <span style={{ fontSize: 7.5, fontWeight: 700, color: m.c }}>{m.val}</span>
          </div>
          <div style={{ height: 3, background: "#2a2a38", borderRadius: 2 }}>
            <div style={{ width: `${m.pct}%`, height: "100%", background: m.c, borderRadius: 2 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Phone frame ───────────────────────────────────────────── */
function Phone({ children, barColor, label, style }: {
  children: React.ReactNode; barColor: string; label: string; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      width: 148, background: "#0c0c12", borderRadius: 24,
      border: "2px solid #22222e",
      boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
      overflow: "hidden", flexShrink: 0, ...style,
    }}>
      <div style={{ background: barColor, height: 24, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 11px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 40, height: 10, background: "#0c0c12", borderRadius: "0 0 7px 7px" }} />
        <span style={{ fontSize: 7, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>9:41</span>
        <div style={{ width: 9, height: 4.5, border: "1px solid rgba(255,255,255,0.5)", borderRadius: 2, padding: 1 }}>
          <div style={{ width: "65%", height: "100%", background: "rgba(255,255,255,0.75)", borderRadius: 1 }} />
        </div>
      </div>
      <div style={{ background: barColor, padding: "5px 11px 8px", fontSize: 10, fontWeight: 700, color: "#fff" }}>{label}</div>
      <div style={{ background: "#0c0c12", minHeight: 195 }}>{children}</div>
      <div style={{ background: "#0c0c12", display: "flex", justifyContent: "center", padding: "5px 0 7px" }}>
        <div style={{ width: 34, height: 3, borderRadius: 2, background: "#252532" }} />
      </div>
    </div>
  );
}

/* ─── Specialty card ─────────────────────────────────────────── */
function SpecialtyCard({ icon: Icon, label, sub }: { icon: React.ElementType; label: string; sub: string }) {
  return (
    <div
      style={{
        background: "#0e0e16", border: "1px solid #1f1f2d", borderRadius: 18,
        padding: "10px 14px", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        gap: 10, transition: "all 0.25s ease", cursor: "default", minHeight: 130,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.45)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.background = "#12121c";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f2d";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.background = "#0e0e16";
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        border: "1.5px solid rgba(108,99,255,0.35)",
        background: "rgba(108,99,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={20} color="#8b82ff" strokeWidth={1.7} />
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 11, color: "#66667a", lineHeight: 1.5 }}>{sub}</div>
      </div>
    </div>
  );
}

/* ─── Mobile phones carousel ─────────────────────────────────── */
function MobilePhones() {
  const [active, setActive] = useState(0);
  const phones = [
    { barColor: "#6c63ff", label: "Dashboard", content: <ScreenDashboard /> },
    { barColor: "#f59e0b", label: "Analytics", content: <ScreenAnalytics /> },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%" }}>
      {/* Tab switcher */}
      <div style={{ display: "flex", gap: 8, background: "#141416", border: "1px solid #2a2a30", borderRadius: 12, padding: 4 }}>
        {phones.map((p, i) => (
          <button key={p.label} onClick={() => setActive(i)} style={{
            padding: "6px 20px", borderRadius: 9, border: "none", cursor: "pointer",
            fontWeight: 600, fontSize: 13,
            background: active === i ? p.barColor : "transparent",
            color: active === i ? "#fff" : "#8888a0",
            transition: "all 0.2s",
          }}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Phone */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 220, height: 220, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.2), transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />
        <Phone
          barColor={phones[active].barColor}
          label={phones[active].label}
          style={{ transform: "none", opacity: 1, position: "relative", zIndex: 2 }}
        >
          {phones[active].content}
        </Phone>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".ab-reveal");
    if (!items) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.08 }
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.65s ease, transform 0.65s ease",
  };

  // Specialty grid: 4-col desktop, 2-col tablet, 2-col mobile (smaller cards)
  const specialtyGridCols = isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)";

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: "relative",
        padding: isMobile ? "80px 0 60px" : "130px 0",
        overflow: "hidden",
        borderTop: "1px solid #1d1d22",
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "8%", left: "-6%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "4%", right: "-6%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,170,0.07), transparent 70%)", filter: "blur(90px)", pointerEvents: "none" }} />
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(108,99,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.025) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 48px",
        position: "relative", zIndex: 2,
      }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "flex-start",
          gap: isMobile ? 48 : 72,
        }}>

          {/* ══════════════════════════════
              LEFT — text content
          ══════════════════════════════ */}
          <div className="ab-reveal" style={{
            ...revealStyle,
            flex: "1 1 460px",
            minWidth: 0,
            transitionDelay: "0.05s",
          }}>

            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 18px", borderRadius: 999,
              background: "rgba(255,255,255,0.04)", border: "1px solid #2a2a36",
              color: "#8888a0", fontSize: 11.5, letterSpacing: "0.08em",
              textTransform: "uppercase", marginBottom: 24,
            }}>
              <Sparkles size={13} color="#6c63ff" />
              About Me
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(30px,4vw,48px)",
              fontWeight: 800, color: "#fff",
              margin: "0 0 18px", lineHeight: 1.15, letterSpacing: "-0.02em",
            }}>
              Passionate About
              <span className="gradient-text"> Mobile Experiences</span>
            </h2>

            {/* Intro */}
            <p style={{ color: "#8888a0", lineHeight: 1.9, fontSize: isMobile ? 14 : 15, margin: "0 0 14px" }}>
              I craft premium Flutter applications with modern UI, smooth performance, and scalable architecture — focused on delivering exceptional user experiences that users actually love to open every day.
            </p>

            <p style={{ color: "#8888a0", lineHeight: 1.9, fontSize: isMobile ? 14 : 15, margin: "0 0 36px" }}>
              With 3+ years building production Flutter apps across e-commerce, fintech, and SaaS, I've shipped 20+ apps from concept to the Play Store and App Store. My stack spans Flutter, Firebase, Bloc, REST APIs, and custom design systems — giving every project both technical rigour and a polished finish.
            </p>

            {/* ── On mobile: phones go here (between bio and specialties) ── */}
            {isMobile && (
              <div className="ab-reveal" style={{ ...revealStyle, marginBottom: 36, transitionDelay: "0.12s" }}>
                <MobilePhones />
              </div>
            )}

            {/* Specialties */}
            <div style={{ marginBottom: 36 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginBottom: 16, color: "#6c63ff", fontWeight: 600,
                fontSize: 13, letterSpacing: "0.04em",
              }}>
                <Code2 size={15} />
                What I specialise in
              </div>
              <div style={{ display: "grid", gridTemplateColumns: specialtyGridCols, gap: isMobile ? 8 : 10 }}>
                {specialties.map((s) => (
                  <SpecialtyCard key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Closing */}
            <p style={{ color: "#8888a0", lineHeight: 1.9, fontSize: isMobile ? 14 : 15, margin: "0 0 32px" }}>
              Whether it's a startup's first MVP or a scaling product needing a performance overhaul, I bring the same focus on clean code, thoughtful architecture, and interfaces that feel native and fast on every device.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", gap: 12, flexWrap: "wrap",
              justifyContent: isMobile ? "stretch" : "flex-start",
            }}>
              <a href="#projects" style={{
                flex: isMobile ? "1 1 140px" : "0 0 auto",
                padding: "13px 24px", borderRadius: 14,
                background: "#6c63ff", color: "#fff",
                fontWeight: 700, textDecoration: "none", fontSize: 14,
                boxShadow: "0 12px 32px rgba(108,99,255,0.38)",
                display: "inline-block", textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 18px 44px rgba(108,99,255,0.52)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(108,99,255,0.38)"; }}
              >
                Deep Dive into Projects →
              </a>
              <a href="#contact" style={{
                flex: isMobile ? "1 1 140px" : "0 0 auto",
                padding: "13px 24px", borderRadius: 14,
                border: "1px solid #2a2a36", color: "#ccc",
                textDecoration: "none", fontWeight: 600, fontSize: 14,
                background: "rgba(255,255,255,0.03)",
                display: "inline-block", textAlign: "center",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#6c63ff"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a36"; (e.currentTarget as HTMLAnchorElement).style.color = "#ccc"; }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT — phones (desktop only)
          ══════════════════════════════ */}
          {!isMobile && (
            <div className="ab-reveal" style={{
              ...revealStyle,
              flex: "0 0 auto",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 18,
              position: "relative", paddingTop: 82,
              transitionDelay: "0.18s",
            }}>
              {/* Glow halo */}
              <div style={{
                position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)",
                width: 340, height: 340, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(108,99,255,0.18), transparent 70%)",
                filter: "blur(55px)", pointerEvents: "none",
              }} />

              <div style={{ display: "flex", alignItems: "flex-end", gap: 14, position: "relative", zIndex: 2 }}>
                <Phone barColor="#6c63ff" label="Dashboard" style={{ transform: "rotate(2.5deg)" }}>
                  <ScreenDashboard />
                </Phone>
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <Phone barColor="#f59e0b" label="Analytics" style={{ transform: "rotate(-1.5deg)" }}>
                  <ScreenAnalytics />
                </Phone>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}