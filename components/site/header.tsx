"use client";

import { ArrowUpRight, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, site } from "@/lib/site";
import { openBooking } from "@/components/site/booking";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progressRef = useRef<HTMLSpanElement>(null);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="top-strip">
        <div className="shell top-strip-inner">
          <span className="top-strip-message">
            <ShieldCheck aria-hidden="true" />
            Jackson Tour Travels — Jalandhar’s trusted 24/7 cab service.
          </span>
          <span className="top-strip-locations" aria-hidden="true">
            Jalandhar <i>•</i> Amritsar <i>•</i> Chandigarh <i>•</i> Delhi
            Airport
          </span>
        </div>
      </div>

      <div className="nav-bar">
        <div className="shell nav-inner">
          <a className="brand" href="#home" aria-label="Jackson Tour Travels home">
            <span className="brand-badge">
              <img
                src="/logo-160.webp"
                srcSet="/logo-160.webp 1x, /logo-320.webp 2x"
                width={56}
                height={56}
                alt="Jackson Tour Travels logo"
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="brand-copy">
              <b>JACKSON</b>
              <small>TOUR TRAVELS</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? "is-active" : ""}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-phone" href={site.primaryPhone.href}>
              <Phone aria-hidden="true" />
              <span>
                <small>24/7 booking</small>
                <b>{site.primaryPhone.display}</b>
              </span>
            </a>
            <button
              type="button"
              className="btn btn-gold nav-book"
              onClick={() => openBooking()}
            >
              Book a ride
              <ArrowUpRight aria-hidden="true" />
            </button>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
      </div>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <a href={site.primaryPhone.href} className="mobile-call">
              <Phone aria-hidden="true" />
              <span>
                <small>Call 24/7</small>
                {site.primaryPhone.display}
              </span>
            </a>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
            >
              Book your ride
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
