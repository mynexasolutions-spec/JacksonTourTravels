"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      revealNodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    const parallaxNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -viewportHeight * 0.25 || rect.top > viewportHeight * 1.25) {
          return;
        }
        const speed = Number(node.dataset.parallax || 0.06);
        const progress =
          (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const offset = Math.max(-42, Math.min(42, progress * speed * -180));
        node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
    };
  }, []);

  return null;
}
