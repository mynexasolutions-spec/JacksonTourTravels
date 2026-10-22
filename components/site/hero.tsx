"use client";

import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { openBooking } from "@/components/site/booking";
import { site, vehicleOptions } from "@/lib/site";

const slides = [
  {
    src: "/hero1-1600.webp",
    srcSet:
      "/hero1-800.webp 800w, /hero1-1200.webp 1200w, /hero1-1600.webp 1600w",
    alt: "White MPV driving toward an airport terminal at golden hour",
    position: "center 58%",
  },
  {
    src: "/hero2-1600.webp",
    srcSet:
      "/hero2-800.webp 800w, /hero2-1200.webp 1200w, /hero2-1600.webp 1600w",
    alt: "White vehicle on a lakeside mountain road at sunset",
    position: "center 55%",
  },
  {
    src: "/hero3-1600.webp",
    srcSet:
      "/hero3-800.webp 800w, /hero3-1200.webp 1200w, /hero3-1600.webp 1600w",
    alt: "Aeroplane and white vehicle on a scenic Himalayan road",
    position: "center 52%",
  },
];

const rise = (delay: number) =>
  ({ "--d": `${delay}ms` }) as CSSProperties;

function BookingWidget() {
  const [pickup, setPickup] = useState("Jalandhar, Punjab");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState<string>("Any vehicle");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openBooking({
      tripType: "One Way",
      pickup,
      drop,
      date,
      vehicle,
      notes: "Started from the homepage booking bar.",
    });
  };

  return (
    <div className="booking-floating hero-rise" style={rise(540)}>
      <form className="booking-bar" onSubmit={submit}>
        <div className="booking-field">
          <label htmlFor="hero-pickup">Pickup</label>
          <div className="booking-control">
            <MapPin aria-hidden="true" />
            <input
              id="hero-pickup"
              value={pickup}
              onChange={(event) => setPickup(event.target.value)}
              placeholder="Pickup city"
              autoComplete="address-level2"
            />
          </div>
        </div>

        <div className="booking-field">
          <label htmlFor="hero-drop">Drop</label>
          <div className="booking-control">
            <Navigation aria-hidden="true" />
            <input
              id="hero-drop"
              value={drop}
              onChange={(event) => setDrop(event.target.value)}
              placeholder="Where are you going?"
              autoComplete="address-level2"
            />
          </div>
        </div>

        <div className="booking-field">
          <label htmlFor="hero-date">Travel date</label>
          <div className="booking-control">
            <CalendarDays aria-hidden="true" />
            <input
              id="hero-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        <div className="booking-field">
          <label htmlFor="hero-vehicle">Vehicle</label>
          <div className="booking-control booking-control-select">
            <CarFront aria-hidden="true" />
            <select
              id="hero-vehicle"
              value={vehicle}
              onChange={(event) => setVehicle(event.target.value)}
            >
              {vehicleOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown className="booking-chevron" aria-hidden="true" />
          </div>
        </div>

        <button type="submit" className="btn btn-gold booking-submit">
          Plan my ride
          <ArrowRight aria-hidden="true" />
        </button>
      </form>

      <div className="booking-foot">
        <span>
          <Check aria-hidden="true" />
          No advance payment
        </span>
        <span>
          <MessageCircle aria-hidden="true" />
          Instant WhatsApp confirmation
        </span>
        <span className="booking-foot-extra">
          <Clock3 aria-hidden="true" />
          Local support, 24/7
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const paused = userPaused || hoverPaused;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      id="home"
      aria-label="Jackson Tour Travels"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
    >
      <div className="hero-media">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide${index === active ? " is-active" : ""}`}
            key={slide.src}
            aria-hidden={index !== active}
          >
            <img
              className="hero-slide-img"
              src={slide.src}
              srcSet={slide.srcSet}
              sizes="100vw"
              width={1600}
              height={600}
              alt={slide.alt}
              loading="eager"
              fetchPriority={index === 0 ? "high" : "low"}
              decoding="async"
              style={{ objectPosition: slide.position }}
              draggable={false}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="shell hero-inner">
        <div className="hero-copy">
          <span className="kicker hero-rise" style={rise(40)}>
            <Sparkles aria-hidden="true" />
            Jalandhar’s premier 24/7 cab network
          </span>

          <h1 className="hero-rise" style={rise(120)}>
            Travel India
            <br />
            with <em>confidence.</em>
          </h1>

          <p className="hero-sub hero-rise" style={rise(220)}>
            From smooth airport transfers to unforgettable hill journeys,
            Jackson Tour Travels keeps every mile comfortable.
          </p>

          <div className="hero-badges hero-rise" style={rise(300)}>
            <span className="hero-badge">
              <ShieldCheck aria-hidden="true" />
              Verified chauffeurs
            </span>
            <span className="hero-badge">
              <Clock3 aria-hidden="true" />
              24/7 availability
            </span>
            <span className="hero-badge">
              <MapPin aria-hidden="true" />
              All India permits
            </span>
          </div>

          <div className="hero-actions hero-rise" style={rise(380)}>
            <button
              type="button"
              className="btn btn-gold hero-book"
              onClick={() => openBooking()}
            >
              Book your ride
              <ArrowRight aria-hidden="true" />
            </button>
            <a className="btn btn-ghost" href={site.primaryPhone.href}>
              <Phone aria-hidden="true" />
              Call 24/7 · {site.primaryPhone.display}
            </a>
          </div>

          <p className="hero-note hero-rise" style={rise(450)}>
            <Check aria-hidden="true" />
            Instant confirmation on WhatsApp. No advance payment required.
          </p>

          <div className="hero-controls hero-rise" style={rise(500)}>
            <div className="hero-dots" role="group" aria-label="Choose a slide">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.src}
                  className={`hero-dot${index === active ? " is-active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                />
              ))}
            </div>
            <span className="hero-counter" aria-hidden="true">
              0{active + 1} <i>/</i> 0{slides.length}
            </span>
            <div className="hero-arrows">
              <button
                type="button"
                className="hero-arrow"
                onClick={() => goTo(active - 1)}
                aria-label="Previous slide"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hero-arrow"
                onClick={() => goTo(active + 1)}
                aria-label="Next slide"
              >
                <ChevronRight aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hero-arrow hero-pause"
                onClick={() => setUserPaused((current) => !current)}
                aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
              >
                {userPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        <BookingWidget />
      </div>
    </section>
  );
}
