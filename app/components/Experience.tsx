"use client";

import { useEffect, useRef } from "react";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("exp-visible");
        });
      },
      { threshold: 0.08 }
    );
    const els = ref.current?.querySelectorAll(".exp-entry");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .exp-section {
          position: relative;
          padding: 90px 0 100px;
          overflow: hidden;
          border-top: 1px solid #1d1d22;
        }
        .exp-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .exp-blob-1 {
          top: 8%; left: -6%;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(108,99,255,0.13), transparent 70%);
        }
        .exp-blob-2 {
          bottom: 0; right: -6%;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(0,212,170,0.09), transparent 70%);
        }
        .exp-grid-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(108,99,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .exp-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        .exp-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .exp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 999px;
          background: #141416;
          border: 1px solid #272730;
          color: #8888a0;
          font-size: 12px;
          margin-bottom: 18px;
          letter-spacing: 0.03em;
        }
        .exp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6c63ff;
          flex-shrink: 0;
        }
        .exp-title {
          font-size: clamp(26px, 5vw, 48px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .exp-grad {
          background: linear-gradient(135deg, #6c63ff, #00d4aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .exp-subtitle {
          color: #8888a0;
          font-size: 14px;
          line-height: 1.8;
          max-width: 540px;
          margin: 0 auto;
        }

        /* Timeline */
        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .exp-timeline-line {
          position: absolute;
          top: 0; bottom: 0;
          left: 19px;
          width: 2px;
          background: linear-gradient(to bottom, #6c63ff, rgba(108,99,255,0.06));
          pointer-events: none;
        }

        /* Entry */
        .exp-entry {
          position: relative;
          padding-left: 60px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .exp-entry.exp-visible {
          opacity: 1;
          transform: none;
        }
        .exp-entry:nth-child(2) { transition-delay: 120ms; }
        .exp-entry:nth-child(3) { transition-delay: 240ms; }
        .exp-entry:nth-child(4) { transition-delay: 360ms; }
        .exp-entry:nth-child(5) { transition-delay: 480ms; }

        .exp-dot {
          position: absolute;
          left: 7px; top: 28px;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: #0d0d0f;
          border: 2px solid #6c63ff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(108,99,255,0.35);
          z-index: 4;
        }
        .exp-dot-inner {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #6c63ff;
        }

        /* Card */
        .exp-card {
          position: relative;
          background: rgba(20,20,22,0.95);
          border: 1px solid #2a2a30;
          border-radius: 22px;
          padding: 24px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          transition: border-color 0.25s;
        }
        .exp-card:hover { border-color: rgba(108,99,255,0.38); }
        .exp-card-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108,99,255,0.1), transparent 70%);
          pointer-events: none;
        }

        /* Card top */
        .exp-card-top {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }
        .exp-card-identity {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .exp-icon-box {
          width: 50px; height: 50px;
          border-radius: 15px;
          background: linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,170,0.1));
          border: 1px solid rgba(108,99,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .exp-role {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.2;
        }
        .exp-company {
          font-weight: 600;
          font-size: 13px;
          background: linear-gradient(135deg, #6c63ff, #00d4aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .exp-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .exp-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #8888a0;
          font-size: 12px;
        }
        .exp-badge {
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(108,99,255,0.1);
          border: 1px solid rgba(108,99,255,0.22);
          color: #b0abff;
          font-size: 11px;
          font-weight: 600;
        }

        /* Description */
        .exp-desc {
          color: #8888a0;
          line-height: 1.85;
          font-size: 14px;
          margin: 0 0 24px;
        }

        /* Section label */
        .exp-label {
          color: #fff;
          font-size: 10px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
        }

        /* Highlights */
        .exp-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          margin-bottom: 22px;
        }
        .exp-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 11px 13px;
          background: #18181c;
          border: 1px solid #2a2a30;
          border-radius: 13px;
        }
        .exp-highlight-item span {
          color: #8888a0;
          font-size: 13px;
          line-height: 1.55;
        }

        /* Tech tags */
        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .exp-tech-tag {
          padding: 7px 12px;
          border-radius: 999px;
          background: #18181c;
          border: 1px solid #2a2a30;
          color: #d0d0d8;
          font-size: 12px;
          font-weight: 500;
          transition: border-color 0.2s, color 0.2s;
        }
        .exp-tech-tag:hover {
          border-color: #6c63ff;
          color: #fff;
        }

        /* Responsive */
        @media (min-width: 480px) {
          .exp-container { padding: 0 28px; }
          .exp-highlights {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (min-width: 640px) {
          .exp-card-top {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          .exp-meta {
            flex-direction: column;
            align-items: flex-end;
            gap: 7px;
          }
          .exp-role { font-size: 20px; }
        }
        @media (min-width: 768px) {
          .exp-container { padding: 0 40px; }
          .exp-card { padding: 28px; }
          .exp-entry { padding-left: 70px; }
        }
        @media (min-width: 1024px) {
          .exp-section { padding: 110px 0 120px; }
          .exp-container { padding: 0 48px; }
          .exp-timeline-line { left: 23px; }
          .exp-dot { left: 11px; }
          .exp-entry { padding-left: 80px; }
          .exp-card { padding: 34px; }
          .exp-role { font-size: 22px; }
          .exp-highlights {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }
        }
      `}</style>

      <section id="experience" className="exp-section">
        {/* Background blobs */}
        <div className="exp-blob exp-blob-1" />
        <div className="exp-blob exp-blob-2" />
        <div className="exp-grid-overlay" />

        <div className="exp-container" ref={ref}>
          {/* Header */}
          <div className="exp-header">
            <div className="exp-eyebrow">
              <div className="exp-eyebrow-dot" />
              Career Journey
            </div>
            <h2 className="exp-title">
              Professional{" "}
              <span className="exp-grad">Experience</span>
            </h2>
            <p className="exp-subtitle">
              4+ years of building scalable mobile applications, premium user
              experiences, and production-ready Flutter solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="exp-timeline">
            <div className="exp-timeline-line" />

            {experiences.map((exp) => (
              <div key={exp.id} className="exp-entry">
                {/* Dot */}
                <div className="exp-dot">
                  <div className="exp-dot-inner" />
                </div>

                {/* Card */}
                <div className="exp-card">
                  <div className="exp-card-glow" />

                  {/* Top row */}
                  <div className="exp-card-top">
                    {/* Left: icon + role */}
                    <div className="exp-card-identity">
                      <div className="exp-icon-box">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#6c63ff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <div className="exp-company">{exp.company}</div>
                      </div>
                    </div>

                    {/* Right: meta */}
                    <div className="exp-meta">
                      <div className="exp-meta-item">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8888a0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {exp.period}
                      </div>
                      <div className="exp-meta-item">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8888a0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </div>
                      <div className="exp-badge">
                        {exp.duration} · {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="exp-desc">{exp.description}</p>

                  {/* Highlights */}
                  <div className="exp-label">Key Contributions</div>
                  <div className="exp-highlights">
                    {exp.highlights.map((h) => (
                      <div key={h} className="exp-highlight-item">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#00d4aa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="exp-label">Technologies Used</div>
                  <div className="exp-tech-row">
                    {exp.tech.map((t) => (
                      <span key={t} className="exp-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}