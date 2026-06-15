"use client";

import {
  Code2,
  Heart,
  GitFork,
  Link2,
  Mail,
  Sparkles,
} from "lucide-react";

import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #1d1d22",
        background: "#0b0b0d",
      }}
    >
      {/* Glow A */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.10), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Glow B */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.08), transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid Overlay */}
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

      {/* Inner wrapper */}
      <div className="ft-inner">

        {/* TOP SECTION */}
        <div className="ft-top">

          {/* LEFT — branding */}
          <div className="ft-left">

            {/* Logo */}
            <div className="ft-logo-row">
              <div
                style={{
                  width: 52,
                  height: 52,
                  flexShrink: 0,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 36px rgba(108,99,255,0.26)",
                }}
              >
                <Code2 size={24} color="#fff" />
              </div>

              <div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: 5,
                  }}
                >
                  Flutter
                  <span
                    style={{
                      background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Dev
                  </span>
                </div>
                <div style={{ color: "#8888a0", fontSize: 12 }}>
                  Mobile App Developer
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="ft-desc">
              Passionate Flutter developer focused on crafting premium mobile
              applications with modern UI, scalable architecture, and exceptional
              user experiences.
            </p>

            {/* Badge */}
            <div className="ft-badge">
              <Sparkles size={14} color="#6c63ff" />
              Building premium Flutter experiences
            </div>
          </div>

          {/* RIGHT — connect */}
          <div className="ft-right">
            <div className="ft-connect-label">Connect</div>
            <div className="ft-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-social"
                aria-label="GitHub"
              >
                <GitFork size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-social"
                aria-label="LinkedIn"
              >
                <Link2 size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="ft-social"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(108,99,255,0.22), transparent)",
            marginBottom: 26,
          }}
        />

        {/* BOTTOM BAR */}
        <div className="ft-bottom">
          <div className="ft-bottom-copy">
            {`© ${year} ${personalInfo.name}. All rights reserved.`}
          </div>

          <div className="ft-bottom-center">
            Built with
            <Heart size={13} color="#ff6b9d" fill="#ff6b9d" />
            using Next.js & Flutter
          </div>

          <div className="ft-bottom-right">
            {`Designed & Developed by ${personalInfo.name}`}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Inner container ─────────────────────── */
        .ft-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px 38px;
          box-sizing: border-box;
        }

        /* ── Top row ─────────────────────────────── */
        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          margin-bottom: 48px;
        }

        /* ── Left col ────────────────────────────── */
        .ft-left {
          flex: 1;
          min-width: 0;
          max-width: 440px;
        }

        .ft-logo-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .ft-desc {
          color: #8888a0;
          line-height: 1.85;
          font-size: 13.5px;
          margin: 0 0 22px;
        }

        .ft-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 999px;
          background: #141416;
          border: 1px solid #2a2a30;
          color: #d0d0d8;
          font-size: 12.5px;
          font-weight: 500;
        }

        /* ── Right col ───────────────────────────── */
        .ft-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
          flex-shrink: 0;
        }

        .ft-connect-label {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-align: right;
        }

        .ft-socials {
          display: flex;
          gap: 12px;
        }

        /* ── Social icons ────────────────────────── */
        .ft-social {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: rgba(20,20,22,0.92);
          border: 1px solid #2a2a30;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8888a0;
          text-decoration: none;
          transition: transform 0.3s ease, border-color 0.3s ease,
                      color 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .ft-social:hover {
          transform: translateY(-4px);
          border-color: rgba(108,99,255,0.4);
          color: #7d75ff;
          box-shadow: 0 12px 36px rgba(108,99,255,0.2);
        }

        /* ── Bottom bar ──────────────────────────── */
        .ft-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ft-bottom-copy {
          color: #8888a0;
          font-size: 12.5px;
        }

        .ft-bottom-center {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8888a0;
          font-size: 12.5px;
        }

        .ft-bottom-right {
          color: #5c5c70;
          font-size: 12px;
        }

        /* ── Tablet  ≤ 900px ─────────────────────── */
        @media (max-width: 900px) {
          .ft-inner {
            padding: 52px 32px 32px;
          }
          .ft-left {
            max-width: 100%;
          }
        }

        /* ── Mobile  ≤ 640px ─────────────────────── */
        @media (max-width: 640px) {
          .ft-inner {
            padding: 44px 20px 28px;
          }
          .ft-top {
            flex-direction: column;
            align-items: stretch;
            gap: 32px;
            margin-bottom: 36px;
          }
          .ft-left {
            max-width: 100%;
          }
          .ft-right {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          .ft-connect-label {
            text-align: left;
          }
          .ft-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }
          .ft-bottom-right {
            display: none;
          }
        }

        /* ── Very small  ≤ 360px ─────────────────── */
        @media (max-width: 360px) {
          .ft-inner {
            padding: 36px 16px 24px;
          }
          .ft-social {
            width: 44px;
            height: 44px;
          }
          .ft-socials {
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}