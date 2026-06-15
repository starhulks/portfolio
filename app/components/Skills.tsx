"use client";

import { useEffect, useRef } from "react";
import {
  Sparkles,
  Code2,
  Wrench,
  Database,
  ShieldCheck,
} from "lucide-react";
import { skills } from "../data/portfolio";

/* ─────────────────────────────────────────
   SkillBar
───────────────────────────────────────── */
function SkillBar({
  name,
  level,
  label,
}: {
  name: string;
  level: number;
  label: string;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && barRef.current) {
            const fill = barRef.current.querySelector(
              ".sk-bar-fill"
            ) as HTMLElement;
            if (fill) {
              setTimeout(() => {
                fill.style.width = `${level}%`;
              }, 250);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef} className="sk-bar-card">
      <div className="sk-bar-top">
        <div>
          <div className="sk-bar-name">{name}</div>
          <div className="sk-bar-label">{label}</div>
        </div>
        <div className="sk-bar-pct">{`${level}%`}</div>
      </div>
      <div className="sk-bar-track">
        <div className="sk-bar-fill" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SkillGroup
───────────────────────────────────────── */
function SkillGroup({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="sk-group">
      <div className="sk-group-glow" />
      <div className="sk-group-header">
        <div className="sk-group-icon">{icon}</div>
        <div className="sk-group-title">{title}</div>
      </div>
      <div className="sk-group-tags">
        {items.map((item) => (
          <span key={item} className="sk-tag">{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Skills (main)
───────────────────────────────────────── */
export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="skills" ref={ref} className="sk-root">
      {/* Glow A */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 480,
          height: 480,
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

      <div className="sk-inner">

        {/* ── HEADER ── */}
        <div className="section-reveal sk-header">
          <div className="sk-eyebrow">
            <Sparkles size={14} color="#6c63ff" />
            Expertise
          </div>

          <h2 className="sk-heading">
            {"Skills & "}
            <span
              style={{
                background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="sk-subheading">
            Specialized in Flutter ecosystem, scalable architecture,
            state management, backend integrations, and performance
            optimization.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="sk-grid">

          {/* LEFT — bars */}
          <div className="section-reveal sk-left">
            <div className="sk-left-intro">
              <div className="sk-left-intro-title">
                <Code2 size={18} color="#6c63ff" />
                <span>Core Proficiency</span>
              </div>
              <p className="sk-left-intro-desc">
                Strong expertise in Flutter development, scalable
                architecture, performance optimization, and clean
                code principles.
              </p>
            </div>

            {skills.primary.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}

            {/* Debugging card */}
            <div className="sk-debug-card">
              <div className="sk-debug-glow" />
              <div className="sk-debug-header">
                <div className="sk-debug-icon">
                  <ShieldCheck size={20} color="#fff" />
                </div>
                <div>
                  <div className="sk-debug-title">Debugging Expertise</div>
                  <div className="sk-debug-sub">
                    Performance profiling & issue resolution
                  </div>
                </div>
              </div>
              <p className="sk-debug-desc">
                Expert in Flutter DevTools, widget inspection,
                memory profiling, rendering optimization,
                async debugging, and fixing complex state
                management issues in production applications.
              </p>
              <div className="sk-group-tags">
                {[
                  "Flutter DevTools",
                  "Memory Profiling",
                  "Widget Inspector",
                  "Performance Overlay",
                  "Async Debugging",
                ].map((t) => (
                  <span key={t} className="sk-tag sk-tag-light">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — groups */}
          <div className="section-reveal sk-right">
            <SkillGroup
              title="State Management"
              items={skills.stateManagement}
              icon={<Code2 size={18} />}
            />
            <SkillGroup
              title="Backend & APIs"
              items={skills.backend}
              icon={<Database size={18} />}
            />
            <SkillGroup
              title="Databases & Storage"
              items={skills.databases}
              icon={<Database size={18} />}
            />
            <SkillGroup
              title="Tools & DevOps"
              items={skills.tools}
              icon={<Wrench size={18} />}
            />
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="section-reveal sk-bottom">
          <SkillGroup
            title="Testing"
            items={skills.testing}
            icon={<ShieldCheck size={18} />}
          />
          <SkillGroup
            title="Platforms"
            items={skills.platforms}
            icon={<Code2 size={18} />}
          />
          <SkillGroup
            title="Architecture & Other"
            items={skills.other}
            icon={<Sparkles size={18} />}
          />
        </div>
      </div>

      <style>{`
        /* ── Root ──────────────────────────────────── */
        .sk-root {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
          border-top: 1px solid #1d1d22;
        }

        /* ── Inner container ───────────────────────── */
        .sk-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        /* ── Header ────────────────────────────────── */
        .sk-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .sk-eyebrow {
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

        .sk-heading {
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }

        .sk-subheading {
          color: #8888a0;
          max-width: 680px;
          margin: 18px auto 0;
          line-height: 1.8;
          font-size: 15px;
        }

        /* ── Main grid ─────────────────────────────── */
        .sk-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        /* ── Left col ──────────────────────────────── */
        .sk-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sk-left-intro {
          margin-bottom: 4px;
        }

        .sk-left-intro-title {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #fff;
          font-weight: 700;
          font-size: 17px;
        }

        .sk-left-intro-desc {
          color: #8888a0;
          line-height: 1.8;
          font-size: 14px;
          margin: 0;
        }

        /* ── Skill bar card ────────────────────────── */
        .sk-bar-card {
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          border-radius: 20px;
          padding: 20px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .sk-bar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .sk-bar-name {
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        .sk-bar-label {
          color: #8888a0;
          font-size: 12px;
        }

        .sk-bar-pct {
          font-size: 19px;
          font-weight: 700;
          background: linear-gradient(135deg, #6c63ff, #00d4aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
        }

        .sk-bar-track {
          height: 11px;
          background: #111114;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid #2a2a30;
        }

        .sk-bar-fill {
          width: 0%;
          height: 100%;
          border-radius: 999px;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(90deg, #6c63ff 0%, #00d4aa 100%);
          box-shadow: 0 0 16px rgba(108,99,255,0.4);
        }

        /* ── Debugging card ────────────────────────── */
        .sk-debug-card {
          position: relative;
          margin-top: 6px;
          background: linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,170,0.08));
          border: 1px solid rgba(108,99,255,0.2);
          border-radius: 24px;
          padding: 26px;
          overflow: hidden;
        }

        .sk-debug-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07), transparent 70%);
          pointer-events: none;
        }

        .sk-debug-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .sk-debug-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sk-debug-title {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 3px;
        }

        .sk-debug-sub {
          color: #d8d8e2;
          font-size: 12.5px;
        }

        .sk-debug-desc {
          color: #d0d0d8;
          line-height: 1.9;
          font-size: 13.5px;
          margin: 0 0 18px;
          position: relative;
          z-index: 2;
        }

        /* ── Skill group ───────────────────────────── */
        .sk-group {
          position: relative;
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          border-radius: 24px;
          padding: 26px;
          overflow: hidden;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .sk-group-glow {
          position: absolute;
          top: -70px;
          right: -70px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.12), transparent 70%);
          pointer-events: none;
        }

        .sk-group-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .sk-group-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 12px;
          background: rgba(108,99,255,0.12);
          border: 1px solid rgba(108,99,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c63ff;
        }

        .sk-group-title {
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.02em;
        }

        .sk-group-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        /* ── Tags ──────────────────────────────────── */
        .sk-tag {
          padding: 9px 14px;
          border-radius: 999px;
          background: #18181c;
          border: 1px solid #2a2a30;
          color: #d0d0d8;
          font-size: 12.5px;
          font-weight: 500;
        }

        .sk-tag-light {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
        }

        /* ── Right col ─────────────────────────────── */
        .sk-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Bottom row ────────────────────────────── */
        .sk-bottom {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 28px;
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

        /* ── Tablet  ≤ 960px ───────────────────────── */
        @media (max-width: 960px) {
          .sk-inner {
            padding: 0 32px;
          }
          .sk-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .sk-header {
            margin-bottom: 56px;
          }
        }

        /* ── Mobile  ≤ 640px ───────────────────────── */
        @media (max-width: 640px) {
          .sk-root {
            padding: 80px 0;
          }
          .sk-inner {
            padding: 0 20px;
          }
          .sk-header {
            margin-bottom: 44px;
          }
          .sk-subheading {
            font-size: 14px;
          }
          .sk-bar-card {
            padding: 16px;
          }
          .sk-bar-pct {
            font-size: 16px;
          }
          .sk-group {
            padding: 20px;
          }
          .sk-debug-card {
            padding: 20px;
          }
          .sk-bottom {
            grid-template-columns: 1fr;
          }
        }

        /* ── Very small  ≤ 360px ───────────────────── */
        @media (max-width: 360px) {
          .sk-inner {
            padding: 0 14px;
          }
          .sk-tag {
            font-size: 11.5px;
            padding: 7px 11px;
          }
        }
      `}</style>
    </section>
  );
}