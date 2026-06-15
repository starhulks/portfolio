"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Smartphone,
  Globe,
} from "lucide-react";

import { projects } from "../data/portfolio";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.06 }
    );

    const elements =
      ref.current?.querySelectorAll(".section-reveal");

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 6);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: "relative",
        padding: "120px 0",
        overflow: "hidden",
        borderTop: "1px solid #1d1d22",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.14), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,170,0.08), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid */}
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

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          className="section-reveal"
          style={{
            textAlign: "center",
            marginBottom: 70,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2a36",
              color: "#8888a0",
              fontSize: 12,
              marginBottom: 24,
            }}
          >
            <Sparkles size={13} color="#6c63ff" />
            Portfolio
          </div>

          <h2
            style={{
              fontSize: "clamp(34px,5vw,54px)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>

          <p
            style={{
              maxWidth: 720,
              margin: "22px auto 0",
              color: "#8888a0",
              lineHeight: 1.9,
              fontSize: 15,
            }}
          >
            Production-ready Flutter applications and modern web
            platforms crafted with premium UI, scalable
            architecture, and smooth user experiences.
          </p>
        </div>

        {/* Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(290px,1fr))",
            gap: 22,
          }}
        >
          {visibleProjects.map((project, i) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${showAll ? "visible" : "section-reveal"}`}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 30,
                padding: 22,
                minHeight: 320,
                textDecoration: "none",
                background:
                  "linear-gradient(180deg, rgba(18,18,24,0.96), rgba(14,14,18,0.92))",
                border: "1px solid #22222e",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${project.color}22, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Top */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 22,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 22,
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}22`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    boxShadow: `0 12px 30px ${project.color}18`,
                  }}
                >
                  {project.icon}
                </div>

                {/* Arrow */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 14,
                    background: "#18181f",
                    border: "1px solid #2a2a32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: project.color,
                  }}
                >
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.name}
                </h3>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}20`,
                    color: project.color,
                    fontSize: 11,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {project.category}
                </div>

                <p
                  style={{
                    color: "#8b8b96",
                    fontSize: 13,
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  {project.shortDesc}
                </p>

                {/* Tech */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 22,
                  }}
                >
                  {project.tech
                    .slice(0, 3)
                    .map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "7px 12px",
                          borderRadius: 999,
                          background: "#18181d",
                          border: "1px solid #2a2a32",
                          color: "#c3c3cf",
                          fontSize: 10,
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  paddingTop: 18,
                  borderTop: "1px solid #1d1d24",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#777785",
                    fontSize: 11,
                  }}
                >
                  {project.platform.includes("Web") ? (
                    <Globe size={13} />
                  ) : (
                    <Smartphone size={13} />
                  )}

                  {project.platform.join(" · ")}
                </div>

                <div
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}20`,
                    color: project.color,
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {project.status}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Read More */}
        {projects.length > 6 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 48,
            }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                height: 54,
                padding: "0 30px",
                borderRadius: 18,
                border: "1px solid #2a2a36",
                background: "rgba(255,255,255,0.03)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.25s ease",
              }}
              className="show-btn"
            >
              {showAll
                ? "Show Less Projects"
                : "Read More Projects"}
            </button>
          </div>
        )}
      </div>

      <style>{`
  .section-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.7s ease,
      transform 0.7s ease;
  }

  .section-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .project-card {
    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(108,99,255,0.24);
    box-shadow:
      0 20px 60px rgba(0,0,0,0.45),
      0 0 0 1px rgba(108,99,255,0.08);
  }

  .show-btn:hover {
    transform: translateY(-2px);
    border-color: rgba(108,99,255,0.35);
    background: rgba(108,99,255,0.08);
  }

  @media (max-width: 768px) {
    #projects {
      padding: 90px 0 !important;
    }

    #projects > div {
      padding: 0 20px !important;
    }
  }

  @media (max-width: 520px) {
    .project-card {
      min-height: auto !important;
    }
  }
`}</style>
    </section>
  );
}