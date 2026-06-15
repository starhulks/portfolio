"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* ───────────────────────────────────────────── */
  /* Scroll effect */
  /* ───────────────────────────────────────────── */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);


  }, []);

  /* ───────────────────────────────────────────── */
  /* Active section */
  /* ───────────────────────────────────────────── */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );


    navItems.forEach(({ href }) => {
      const el = document.getElementById(
        href.replace("#", "")
      );

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();


  }, []);

  /* ───────────────────────────────────────────── */
  /* Close mobile on resize */
  /* ───────────────────────────────────────────── */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };


    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );


  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          transition:
            "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled
            ? "rgba(10,10,14,0.82)"
            : "transparent",
          backdropFilter: scrolled
            ? "blur(18px)"
            : "none",
          borderBottom: scrolled
            ? "1px solid #1f1f28"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              height: 74,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            {/* Logo */}
            <a
              href="#home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg,#6c63ff,#00d4aa)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 30px rgba(108,99,255,0.35)",
                }}
              > <Code2 size={18} color="#fff" /> </div>

              <div
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 17,
                  letterSpacing: "-0.03em",
                }}
              >
                Flutter
                <span style={{ color: "#6c63ff" }}>
                  Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navItems.map(({ label, href }) => {
                const isActive =
                  active === href.replace("#", "");

                return (
                  <a
                    key={href}
                    href={href}
                    className="nav-link"
                    style={{
                      color: isActive
                        ? "#ffffff"
                        : "#8b8b98",
                    }}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            {/* CTA + Mobile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              {/* CTA */}
              <a
                href="#contact"
                className="hire-btn desktop-btn"
              >
                Hire Me
              </a>

              {/* Mobile Menu */}
              <button
                onClick={() => setOpen(!open)}
                className="mobile-menu-btn"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  border: "1px solid #2a2a36",
                  background: "rgba(255,255,255,0.03)",
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "0.25s ease",
                }}
              >
                {open ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`mobile-drawer ${open ? "drawer-open" : ""
            }`}
        >
          <div className="mobile-drawer-inner">
            {navItems.map(({ label, href }) => {
              const isActive =
                active === href.replace("#", "");

              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive
                      ? "#ffffff"
                      : "#8b8b98",
                  }}
                  className="mobile-link"
                >
                  {label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mobile-hire-btn"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <style>{`
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 34px;
    }

    .nav-link {
      position: relative;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: 0.25s ease;
    }

    .nav-link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -7px;
      width: 0%;
      height: 2px;
      border-radius: 99px;
      background: #6c63ff;
      transition: 0.25s ease;
    }

    .nav-link:hover {
      color: #fff !important;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .hire-btn {
      height: 46px;
      padding: 0 22px;
      border-radius: 14px;
      background: #6c63ff;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: 0.25s ease;
      box-shadow:
        0 12px 30px rgba(108,99,255,0.35);
    }

    .hire-btn:hover {
      transform: translateY(-2px);
      background: #5d54ee;
      box-shadow:
        0 16px 36px rgba(108,99,255,0.45);
    }

    .mobile-drawer {
      max-height: 0;
      overflow: hidden;
      transition:
        max-height 0.35s ease,
        border-color 0.35s ease;
      background: rgba(14,14,18,0.98);
      backdrop-filter: blur(20px);
      border-top: 1px solid transparent;
    }

    .drawer-open {
      max-height: 500px;
      border-top: 1px solid #23232c;
    }

    .mobile-drawer-inner {
      padding: 20px 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .mobile-link {
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      padding: 14px 0;
      border-bottom: 1px solid #23232c;
      transition: 0.25s ease;
    }

    .mobile-link:hover {
      color: #fff !important;
    }

    .mobile-hire-btn {
      margin-top: 12px;
      height: 50px;
      border-radius: 14px;
      background: #6c63ff;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 14px 32px rgba(108,99,255,0.35);
    }

    @media (max-width: 900px) {
      .desktop-nav,
      .desktop-btn {
        display: none !important;
      }

      .mobile-menu-btn {
        display: flex !important;
      }
    }

    @media (max-width: 600px) {
      nav > div {
        padding: 0 18px !important;
      }

      .mobile-drawer-inner {
        padding: 18px 18px 24px;
      }

      .hire-btn,
      .mobile-hire-btn {
        width: 100%;
      }
    }
  `}</style>
    </>

  );
}
