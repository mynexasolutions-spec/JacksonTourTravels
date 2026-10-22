"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  BusFront,
  CarFront,
  Check,
  Clock3,
  Compass,
  Headphones,
  Landmark,
  Luggage,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Mountain,
  Navigation,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import {
  BookingModal,
  openBooking,
  type BookingPrefill,
} from "@/components/site/booking";
import { FaqAccordion, type FaqItem } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { SiteHeader } from "@/components/site/header";
import { ScrollEffects } from "@/components/site/scroll-effects";
import { navItems, site, whatsappLink } from "@/lib/site";

const delay = (index: number, step = 70) =>
  ({ "--reveal-delay": `${index * step}ms` }) as CSSProperties;

const assurances: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Experienced chauffeurs",
    text: "Licensed, courteous drivers",
  },
  {
    icon: Clock3,
    title: "24/7 booking support",
    text: "A real person on the phone",
  },
  {
    icon: MapPin,
    title: "Jalandhar based",
    text: "Local knowledge, all-India reach",
  },
  {
    icon: CarFront,
    title: "Clean, AC vehicles",
    text: "Comfort checked before every trip",
  },
];

const marqueeItems = [
  "Airport transfers",
  "One-way cabs",
  "Outstation journeys",
  "All India taxi",
  "Tour packages",
  "24/7 booking support",
];

type Service = {
  icon: LucideIcon;
  title: string;
  tag: string;
  description: string;
  label: string;
  booking: BookingPrefill;
};

const services: Service[] = [
  {
    icon: Plane,
    title: "Airport Transfers",
    tag: "Most popular",
    description:
      "On-time pickups and drops for Amritsar, Chandigarh and Delhi airports, with a chauffeur who tracks your flight.",
    label: "Book a transfer",
    booking: {
      tripType: "Airport Transfer",
      notes: "Airport transfer enquiry",
    },
  },
  {
    icon: Route,
    title: "One Way Cabs",
    tag: "Best value",
    description:
      "Comfortable, direct rides between cities. You pay for the journey you take — not the return.",
    label: "Book one way",
    booking: {
      tripType: "One Way",
      notes: "One-way cab enquiry",
    },
  },
  {
    icon: Compass,
    title: "Outstation Journeys",
    tag: "All India",
    description:
      "Planned highway travel across Punjab, Himachal, Delhi NCR and beyond with a dedicated chauffeur.",
    label: "Plan an outstation trip",
    booking: {
      tripType: "Round Trip",
      notes: "Outstation journey enquiry",
    },
  },
  {
    icon: MapPin,
    title: "Local City Taxi",
    tag: "Quick dispatch",
    description:
      "Point-to-point and hourly rides around Jalandhar, Rama Mandi, Phagwara, Kapurthala and Hoshiarpur.",
    label: "Book a city ride",
    booking: {
      tripType: "Local Rental",
      drop: "Local city ride",
      notes: "Local city taxi enquiry",
    },
  },
  {
    icon: Mountain,
    title: "Tour & Pilgrimage Packages",
    tag: "Family special",
    description:
      "Curated journeys to 4 Dham, Himachal and the Golden Temple, with every road detail taken care of.",
    label: "Explore packages",
    booking: {
      tripType: "Round Trip",
      drop: "Tour package",
      notes: "Tour and pilgrimage package enquiry",
    },
  },
  {
    icon: Briefcase,
    title: "Corporate & Event Travel",
    tag: "Premium",
    description:
      "Executive cars for business meetings, weddings, VIP guests and group events — quietly professional.",
    label: "Plan corporate travel",
    booking: {
      tripType: "Local Rental",
      drop: "Corporate / event travel",
      notes: "Corporate and event travel enquiry",
    },
  },
];

const perks: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Guaranteed car & chauffeur",
    text: "Your vehicle is confirmed before the journey, not left to chance.",
  },
  {
    icon: Wallet,
    title: "Clear, upfront quotes",
    text: "Know the fare before you travel. No surprise add-ons at the end.",
  },
  {
    icon: Headphones,
    title: "Real human support",
    text: "A local team answers the phone — before, during and after your ride.",
  },
];

type RouteCard = {
  icon: LucideIcon;
  title: string;
  badge: string;
  meta: string;
  description: string;
  tags: string[];
  booking: BookingPrefill;
};

const routeCards: RouteCard[] = [
  {
    icon: Plane,
    title: "Jalandhar ↔ Delhi & IGI Airport",
    badge: "Bestseller",
    meta: "~375 km · 6–7 hrs via NH44",
    description:
      "Non-stop air-conditioned journeys to Delhi IGI Airport and NCR, with one-way drops and return travel available.",
    tags: ["Delhi NCR", "IGI Airport", "One way"],
    booking: { tripType: "One Way", drop: "Delhi / IGI Airport" },
  },
  {
    icon: Landmark,
    title: "Jalandhar ↔ Amritsar & Golden Temple",
    badge: "Golden Temple",
    meta: "~85 km · 1.5 hrs via GT Road",
    description:
      "Comfortable transfers for Golden Temple darshan, Wagah Border visits and Amritsar airport connections.",
    tags: ["Golden Temple", "Wagah Border", "ATQ Airport"],
    booking: { tripType: "One Way", drop: "Amritsar / Golden Temple" },
  },
  {
    icon: MapPinned,
    title: "Jalandhar ↔ Chandigarh & IXC Airport",
    badge: "Express",
    meta: "~150 km · 2.5–3 hrs",
    description:
      "Punctual executive cars and family cabs connecting Jalandhar with Chandigarh, Mohali and IXC Airport.",
    tags: ["Chandigarh", "Mohali", "IXC Airport"],
    booking: { tripType: "One Way", drop: "Chandigarh / IXC Airport" },
  },
  {
    icon: Route,
    title: "Jalandhar ↔ Ludhiana",
    badge: "1-hour hop",
    meta: "~62 km · 1 hr via NH44",
    description:
      "Direct doorstep pickups for business meetings, shopping trips and Ludhiana railway connections.",
    tags: ["Business travel", "Railway", "City drop"],
    booking: { tripType: "One Way", drop: "Ludhiana" },
  },
  {
    icon: Navigation,
    title: "Jalandhar ↔ Hoshiarpur",
    badge: "Local favourite",
    meta: "~45 km · 1 hr",
    description:
      "Reliable local and intercity rides for family visits, appointments and everyday travel between the two cities.",
    tags: ["Local", "Family", "Doorstep pickup"],
    booking: { tripType: "One Way", drop: "Hoshiarpur" },
  },
  {
    icon: Mountain,
    title: "Jalandhar ↔ Himachal & beyond",
    badge: "Hill escape",
    meta: "Custom multi-day itinerary",
    description:
      "Chauffeur-driven escapes to Shimla, Manali, Dharamshala and beyond, planned around your pace and stops.",
    tags: ["Shimla", "Manali", "Dharamshala"],
    booking: {
      tripType: "Round Trip",
      drop: "Himachal (Shimla / Manali / Dharamshala)",
    },
  },
];

const popularSearches = [
  "Jalandhar to Delhi",
  "Delhi to Jalandhar",
  "Jalandhar to Amritsar",
  "Jalandhar airport taxi",
  "Himachal tour package",
  "4 Dham Yatra",
];

type Tour = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  srcSet: string;
  alt: string;
  points: string[];
  cta: string;
  booking: BookingPrefill;
};

const tours: Tour[] = [
  {
    eyebrow: "Sacred journeys",
    title: "4 Dham Yatra",
    description:
      "Travel with ease on a spiritual journey across the revered Himalayan shrines, with a chauffeur who handles the mountain roads.",
    image: "/hero3-1600.webp",
    srcSet:
      "/hero3-800.webp 800w, /hero3-1200.webp 1200w, /hero3-1600.webp 1600w",
    alt: "A white vehicle on a scenic Himalayan road beneath a passing plane",
    points: ["Chauffeur-driven", "Your dates", "Family friendly"],
    cta: "Ask about the yatra",
    booking: {
      tripType: "Round Trip",
      drop: "4 Dham Yatra",
      notes: "4 Dham Yatra tour enquiry",
    },
  },
  {
    eyebrow: "Mountain escapes",
    title: "Himachal Tour Package",
    description:
      "Let the winding roads, cool air and sweeping valleys do the talking. We handle the driving while you stay present for the view.",
    image: "/hero2-1600.webp",
    srcSet:
      "/hero2-800.webp 800w, /hero2-1200.webp 1200w, /hero2-1600.webp 1600w",
    alt: "A white vehicle on a lakeside mountain road at sunset",
    points: ["Flexible stops", "Hill-ready cars", "Custom itinerary"],
    cta: "Plan my holiday",
    booking: {
      tripType: "Round Trip",
      drop: "Himachal Tour Package",
      notes: "Himachal tour package enquiry",
    },
  },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wallet,
    title: "Clear, upfront quotes",
    text: "Know the fare before you travel. No surprise add-ons at the end.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced chauffeurs",
    text: "Courteous, licensed drivers who know Punjab’s roads and highway etiquette.",
  },
  {
    icon: Sparkles,
    title: "Clean, AC vehicles",
    text: "Comfort-checked cars with cool air conditioning and space for your luggage.",
  },
  {
    icon: Clock3,
    title: "Punctual doorstep pickup",
    text: "We plan around your schedule and arrive ready before you step out.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp booking",
    text: "Share your route, get a clear quote and confirm without downloading an app.",
  },
  {
    icon: Headphones,
    title: "24/7 local support",
    text: "A real person from our Jalandhar team is available before, during and after your ride.",
  },
];

const fleet: {
  icon: LucideIcon;
  title: string;
  seats: string;
  luggage: string;
  description: string;
}[] = [
  {
    icon: CarFront,
    title: "Sedan",
    seats: "4 passengers",
    luggage: "2 bags",
    description: "City hops, airport drops and couple-friendly comfort.",
  },
  {
    icon: CarFront,
    title: "Premium SUV",
    seats: "6–7 passengers",
    luggage: "4 bags",
    description: "Family holidays and long highway drives with room to relax.",
  },
  {
    icon: Users,
    title: "Spacious MPV",
    seats: "6 passengers",
    luggage: "3 bags",
    description: "Easy group airport runs and comfortable outstation travel.",
  },
  {
    icon: BusFront,
    title: "Tempo Traveller",
    seats: "12–17 passengers",
    luggage: "10+ bags",
    description: "Weddings, group tours and yatras that move together.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How do I book a cab with Jackson Tour Travels?",
    answer:
      "Use the booking form on this page, call +91 82856 81156 or message us on WhatsApp. Share your pickup, destination, date and group size. We’ll confirm the vehicle, chauffeur and fare before your journey.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes. We arrange airport pickups and drops for Amritsar (ATQ), Chandigarh (IXC) and Delhi (DEL), as well as local Jalandhar transfers. Add your flight details when booking and we’ll plan around your arrival.",
  },
  {
    question: "Can I book a one-way outstation cab?",
    answer:
      "Yes. One-way drops are available to Delhi, Amritsar, Chandigarh, Ludhiana, Himachal and other destinations. Tell us your route and we’ll quote for the journey you actually need.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "We can arrange sedans, premium SUVs, spacious MPVs and tempo travellers depending on your route and group size. If you have a preference, mention it in the booking form and we’ll confirm availability.",
  },
  {
    question: "How are fares calculated?",
    answer:
      "Your quote is based on the route, vehicle, travel dates and any waiting time. We confirm the fare on WhatsApp before you book, so there are no surprises. Tolls, parking and state permits can vary by route and are explained upfront.",
  },
  {
    question: "Do you organise tour packages?",
    answer:
      "Yes. We plan chauffeur-driven tours such as the 4 Dham Yatra and Himachal holidays, along with custom itineraries. Share your dates and the places you’d like to visit and we’ll put together a route.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`section-heading${align === "left" ? " is-left" : ""}`}
      data-reveal
    >
      <span className="kicker">
        <Sparkles aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                <Star />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.4h2.7V5.3h-2.7c-2.4 0-4.3 1.9-4.3 4.3v2.1H7.7v3.1h2.5V21h3.2v-6.2h2.6l.4-3.1h-3v-1.9c0-.8.5-1.4 1.1-1.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        className="float-btn float-whatsapp"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Jackson Tour Travels on WhatsApp"
      >
        <span className="float-label">WhatsApp us</span>
        <MessageCircle aria-hidden="true" />
      </a>
      <a
        className="float-btn float-call"
        href={site.primaryPhone.href}
        aria-label="Call Jackson Tour Travels"
      >
        <span className="float-label">Call 24/7</span>
        <Phone aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <Hero />
        <div className="checker-strip" aria-hidden="true" />
        <Marquee />

        <section className="assurance" aria-label="Booking assurances">
          <div className="shell assurance-grid">
            {assurances.map(({ icon: Icon, title, text }, index) => (
              <div
                className="assurance-item"
                key={title}
                data-reveal
                style={delay(index, 60)}
              >
                <span className="assurance-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <SectionHeading
              eyebrow="What we offer"
              title={
                <>
                  Premium rides for every{" "}
                  <span className="gold">kind of journey.</span>
                </>
              }
              description="Whether it’s a quick city run or a multi-day mountain escape, Jackson Tour Travels delivers clean cars, courteous drivers and clear pricing."
            />

            <div className="service-grid">
              {services.map(({ icon: Icon, title, tag, description, label, booking }, index) => (
                <article
                  className="service-card"
                  key={title}
                  data-reveal
                  style={delay(index % 3, 80)}
                >
                  <span className="service-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="service-top">
                    <span className="service-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="service-tag">{tag}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button
                    type="button"
                    className="service-link"
                    onClick={() =>
                      openBooking({
                        ...booking,
                        notes:
                          booking.notes ?? `${title} enquiry from the website.`,
                      })
                    }
                  >
                    {label}
                    <ArrowUpRight aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>

            <div className="service-perks">
              {perks.map(({ icon: Icon, title, text }, index) => (
                <div
                  className="perk-card"
                  key={title}
                  data-reveal
                  style={delay(index, 80)}
                >
                  <span className="perk-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-cta" data-reveal>
              <span className="inline-cta-glow" aria-hidden="true" />
              <div>
                <span className="mini-label">Custom itineraries</span>
                <h3>Need a route that isn’t on the list?</h3>
                <p>
                  Tell us where you’re starting and where you need to be. We’ll
                  shape the cars, chauffeurs and timing around your plans.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() =>
                  openBooking({
                    notes: "Custom route or group tour enquiry",
                  })
                }
              >
                Request a custom quote
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section className="section routes-section" id="routes">
          <div className="shell">
            <SectionHeading
              eyebrow="Popular intercity routes"
              title={
                <>
                  Go farther with a{" "}
                  <span className="gold">fare you know.</span>
                </>
              }
              description="Reliable doorstep pickups, one-way drops and airport transfers connecting Jalandhar with Punjab, Delhi NCR, Chandigarh and the hills."
            />

            <div className="route-grid">
              {routeCards.map(({ icon: Icon, title, badge, meta, description, tags, booking }, index) => (
                <article
                  className="route-card"
                  key={title}
                  data-reveal
                  style={delay(index % 3, 80)}
                >
                  <div className="route-top">
                    <span className="route-badge">{badge}</span>
                    <span className="route-icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <span className="route-meta">
                    <Clock3 aria-hidden="true" />
                    {meta}
                  </span>
                  <p>{description}</p>
                  <div className="route-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="route-footer">
                    <small>Doorstep pickup</small>
                    <button
                      type="button"
                      onClick={() =>
                        openBooking({
                          ...booking,
                          notes: `Route enquiry: ${title}`,
                        })
                      }
                    >
                      Book this route
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="route-banner" data-reveal>
              <div>
                <span className="mini-label">Across Punjab & all India</span>
                <h3>Looking for a different destination?</h3>
                <p>
                  We drive beyond the usual routes — across Himachal, Jammu,
                  Rajasthan and Delhi NCR. Send us your itinerary and we’ll
                  quote it clearly.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() =>
                  openBooking({ notes: "Enquiry for a different destination" })
                }
              >
                Request a route quote
                <ArrowRight aria-hidden="true" />
              </button>
            </div>

            <div className="route-pills-wrap" data-reveal>
              <span className="route-pills-label">
                <Star aria-hidden="true" />
                Popular searches
              </span>
              <div className="route-pills">
                {popularSearches.map((search) => (
                  <button
                    type="button"
                    className="route-pill"
                    key={search}
                    onClick={() =>
                      openBooking({
                        drop: search,
                        notes: `Popular route enquiry: ${search}`,
                      })
                    }
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section tours-section" id="tours">
          <div className="shell">
            <SectionHeading
              eyebrow="Curated for the road"
              title={
                <>
                  Go where your heart is{" "}
                  <span className="gold">calling.</span>
                </>
              }
              description="Choose a memorable pilgrimage or a refreshing mountain escape. We’ll take care of the road while you stay present for the view."
            />

            <div className="tour-grid">
              {tours.map((tour, index) => (
                <article
                  className="tour-card"
                  key={tour.title}
                  data-reveal="scale"
                  style={delay(index, 120)}
                >
                  <img
                    src={tour.image}
                    srcSet={tour.srcSet}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    width={1600}
                    height={600}
                    alt={tour.alt}
                    loading="lazy"
                    decoding="async"
                    data-parallax="0.07"
                  />
                  <div className="tour-content">
                    <span className="kicker">{tour.eyebrow}</span>
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                    <div className="tour-points">
                      {tour.points.map((point) => (
                        <span key={point}>
                          <Check aria-hidden="true" />
                          {point}
                        </span>
                      ))}
                    </div>
                    <div className="tour-footer">
                      <span className="tour-meta">
                        <BadgeCheck aria-hidden="true" />
                        Private, chauffeur-driven
                      </span>
                      <button
                        type="button"
                        className="btn btn-gold"
                        onClick={() => openBooking(tour.booking)}
                      >
                        {tour.cta}
                        <ArrowUpRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="tour-note" data-reveal>
              <span>
                <Sparkles aria-hidden="true" />
                Have another destination in mind? We build custom tour
                itineraries across North India.
              </span>
              <button
                type="button"
                onClick={() =>
                  openBooking({
                    tripType: "Round Trip",
                    notes: "Custom tour itinerary enquiry",
                  })
                }
              >
                Create my tour
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell about-grid">
            <div className="about-media" data-reveal="left">
              <img
                src="/hero1-1600.webp"
                srcSet="/hero1-800.webp 800w, /hero1-1200.webp 1200w, /hero1-1600.webp 1600w"
                sizes="(max-width: 900px) 100vw, 45vw"
                width={1600}
                height={600}
                alt="A Jackson Tour Travels vehicle heading toward an airport at sunset"
                loading="lazy"
                decoding="async"
                data-parallax="0.08"
              />
              <span className="about-badge">
                <MapPin aria-hidden="true" />
                Based in Jalandhar · Serving all India
              </span>
              <span className="about-stamp" aria-hidden="true">
                <b>J</b>
                <span>
                  JACKSON
                  <br />
                  TOUR TRAVELS
                </span>
              </span>
            </div>

            <div className="about-copy" data-reveal="right">
              <span className="kicker">The Jackson way</span>
              <h2>
                Good travel begins with a{" "}
                <span className="gold">trusted ride.</span>
              </h2>
              <p>
                Jackson Tour Travels is your Jalandhar travel partner for
                airport cabs, one-way drops, outstation taxis and inspiring road
                trips across India.
              </p>
              <p>
                We believe the best journeys feel easy — so you can focus on the
                people, places and moments ahead.
              </p>

              <div className="about-checks">
                <span>
                  <Check aria-hidden="true" />
                  Local Jalandhar knowledge
                </span>
                <span>
                  <Check aria-hidden="true" />
                  Airport & outstation specialists
                </span>
                <span>
                  <Check aria-hidden="true" />
                  Personal, 24/7 support
                </span>
              </div>

              <div className="about-contacts">
                <a href={site.primaryPhone.href}>
                  <Phone aria-hidden="true" />
                  {site.primaryPhone.display}
                </a>
                <a href={site.secondaryPhone.href}>
                  <Phone aria-hidden="true" />
                  {site.secondaryPhone.display}
                </a>
              </div>

              <div className="about-actions">
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => openBooking()}
                >
                  Book your ride
                  <ArrowRight aria-hidden="true" />
                </button>
                <a
                  className="btn btn-ghost"
                  href={whatsappLink(
                    "Hi Jackson Tour Travels, I'd like to know more about your taxi services.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section why-section" id="why-us">
          <div className="shell">
            <div className="why-grid">
              <div className="why-copy" data-reveal="left">
                <span className="kicker">Why choose Jackson</span>
                <h2>
                  Comfortable, safe and{" "}
                  <span className="gold">always on time.</span>
                </h2>
                <p>
                  Travel across North India should be simple, safe and pleasant.
                  Jackson Tour Travels delivers clean cars, courteous
                  chauffeurs and clear pricing for city and outstation journeys.
                </p>
                <div className="why-actions">
                  <button
                    type="button"
                    className="btn btn-gold"
                    onClick={() => openBooking()}
                  >
                    Book your ride
                    <ArrowRight aria-hidden="true" />
                  </button>
                  <a
                    className="btn btn-ghost"
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    WhatsApp us
                  </a>
                </div>
                <div className="why-note">
                  <ShieldCheck aria-hidden="true" />
                  <span>
                    A local team, a confirmed car and a real person to call.
                  </span>
                </div>
              </div>

              <div className="why-cards">
                {features.map(({ icon: Icon, title, text }, index) => (
                  <article
                    className="why-card"
                    key={title}
                    data-reveal
                    style={delay(index, 60)}
                  >
                    <span className="why-card-top">
                      <span className="why-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="why-index">0{index + 1}</span>
                    </span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="fleet-block" id="fleet">
              <div className="fleet-heading" data-reveal>
                <div>
                  <span className="mini-label">Our vehicle options</span>
                  <h3>Select the right car for your journey.</h3>
                  <p>
                    All vehicles are cleaned and comfort-checked before every
                    ride. Every car is driven by a polite, licensed
                    professional.
                  </p>
                </div>
                <span className="fleet-note">
                  Available on request · Subject to your route and dates
                </span>
              </div>

              <div className="fleet-grid">
                {fleet.map(({ icon: Icon, title, seats, luggage, description }, index) => (
                  <article
                    className="fleet-card"
                    key={title}
                    data-reveal
                    style={delay(index, 65)}
                  >
                    <span className="fleet-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="fleet-meta">
                      <span>
                        <Users aria-hidden="true" />
                        {seats}
                      </span>
                      <span>
                        <Luggage aria-hidden="true" />
                        {luggage}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        openBooking({
                          vehicle: title,
                          notes: `Vehicle request: ${title}`,
                        })
                      }
                    >
                      Request this vehicle
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faqs">
          <div className="shell">
            <SectionHeading
              eyebrow="Got questions? We have answers."
              title={
                <>
                  Frequently asked <span className="gold">questions.</span>
                </>
              }
              description="Everything you need to plan a smooth booking with Jackson Tour Travels, from airport transfers to outstation fares."
            />

            <FaqAccordion items={faqs} />

            <div className="faq-help" data-reveal>
              <span>Didn’t find the answer you were looking for?</span>
              <a href={site.primaryPhone.href}>
                <Phone aria-hidden="true" />
                Call {site.primaryPhone.display}
              </a>
              <a
                href={whatsappLink(
                  "Hi Jackson Tour Travels, I have a question about booking a cab.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-media" aria-hidden="true">
            <img
              src="/hero3-1600.webp"
              srcSet="/hero3-800.webp 800w, /hero3-1200.webp 1200w, /hero3-1600.webp 1600w"
              sizes="100vw"
              width={1600}
              height={600}
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>

          <div className="shell contact-grid">
            <div className="contact-copy" data-reveal>
              <span className="kicker">Let’s get you moving</span>
              <h2>
                Where would you <span className="gold">like to go?</span>
              </h2>
              <p>
                Tell us your route and travel date. We’ll confirm the right car,
                a fair quote and a chauffeur you can trust.
              </p>
              <div className="contact-actions">
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => openBooking()}
                >
                  Book your ride
                  <ArrowRight aria-hidden="true" />
                </button>
                <a className="btn btn-ghost" href={site.primaryPhone.href}>
                  <Phone aria-hidden="true" />
                  Call 24/7
                </a>
              </div>
              <p className="contact-note">
                <Check aria-hidden="true" />
                No advance payment · Instant confirmation on WhatsApp
              </p>
            </div>

            <aside className="contact-card" data-reveal="right">
              <span className="contact-status">
                <i />
                Booking desk online
              </span>
              <h3>Talk to a local, not a bot.</h3>
              <p>
                Call or message us with your route and date. We’ll take care of
                the rest.
              </p>

              <a className="contact-line" href={site.primaryPhone.href}>
                <Phone aria-hidden="true" />
                <span>
                  <small>Call us 24/7</small>
                  <b>{site.primaryPhone.display}</b>
                </span>
              </a>
              <a className="contact-line" href={site.secondaryPhone.href}>
                <Phone aria-hidden="true" />
                <span>
                  <small>Alternate number</small>
                  <b>{site.secondaryPhone.display}</b>
                </span>
              </a>
              <a
                className="contact-line"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                <span>
                  <small>WhatsApp booking</small>
                  <b>Chat with our team</b>
                </span>
              </a>
              <a className="contact-line" href={`mailto:${site.email}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Email us</small>
                  <b>{site.email}</b>
                </span>
              </a>

              <div className="contact-address">
                <MapPin aria-hidden="true" />
                <span>
                  <b>{site.address.line1}</b>
                  <br />
                  {site.address.line2}
                </span>
              </div>
              <div className="contact-hours">
                <Clock3 aria-hidden="true" />
                {site.hours}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="checker-strip" aria-hidden="true" />
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="footer-brand-head" href="#home">
              <span className="brand-badge footer-logo">
                <img
                  src="/logo-160.webp"
                  srcSet="/logo-160.webp 1x, /logo-320.webp 2x"
                  width={52}
                  height={52}
                  alt="Jackson Tour Travels logo"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="brand-copy">
                <b>JACKSON</b>
                <small>TOUR TRAVELS</small>
              </span>
            </a>
            <p>
              Taxi and cab service for all India, proudly based in Jalandhar.
              Airport transfers, outstation rides and tour packages with a
              personal touch.
            </p>
            <span className="footer-availability">
              <i />
              Available for bookings 24/7
            </span>
            <div className="socials">
              <a
                className="social-link"
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Jackson Tour Travels on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                className="social-link"
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Jackson Tour Travels on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            {navItems.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Popular routes</h4>
            <a href="#routes">Jalandhar to Delhi</a>
            <a href="#routes">Jalandhar to Amritsar</a>
            <a href="#routes">Jalandhar to Chandigarh</a>
            <a href="#routes">Jalandhar to Ludhiana</a>
            <a href="#routes">Jalandhar to Himachal</a>
            <button
              type="button"
              className="footer-route-link"
              onClick={() => openBooking({ notes: "Footer route enquiry" })}
            >
              Ask about another route
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          <div className="footer-col footer-contact">
            <h4>Reach us</h4>
            <a href={site.primaryPhone.href}>
              <Phone aria-hidden="true" />
              {site.primaryPhone.display}
            </a>
            <a href={site.secondaryPhone.href}>
              <Phone aria-hidden="true" />
              {site.secondaryPhone.display}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp
            </a>
            <address>
              <MapPin aria-hidden="true" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </address>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>
            © {new Date().getFullYear()} Jackson Tour Travels. All rights
            reserved.
          </p>
          <p className="footer-bottom-note">
            Jalandhar · Punjab · All India
          </p>
        </div>
      </footer>

      <FloatingActions />
      <BookingModal />
    </>
  );
}
