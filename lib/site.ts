export const site = {
  name: "Jackson Tour Travels",
  shortName: "Jackson",
  tagline: "Tour Travels",
  primaryPhone: {
    display: "+91 82856 81156",
    raw: "8285681156",
    href: "tel:+918285681156",
  },
  secondaryPhone: {
    display: "+91 83838 52338",
    raw: "8383852338",
    href: "tel:+918383852338",
  },
  whatsapp: "918285681156",
  email: "robin181989@gmail.com",
  address: {
    line1: "117 Datar Nagar, Rama Mandi",
    line2: "Jalandhar, Punjab",
    full: "117 Datar Nagar, Rama Mandi, Jalandhar, Punjab",
  },
  hours: "Open 24 hours · 7 days a week",
  social: {
    facebook:
      "https://www.facebook.com/share/1bo3FTeHkU/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/jackson_tour_travels_jalandhar?rpxt=OThhdWM1Y2ttcDk5&utm_source=qr",
  },
} as const;

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Routes", href: "#routes", id: "routes" },
  { label: "Tours", href: "#tours", id: "tours" },
  { label: "About", href: "#about", id: "about" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const tripTypes = [
  "One Way",
  "Round Trip",
  "Airport Transfer",
  "Local Rental",
] as const;

export type TripType = (typeof tripTypes)[number];

export const vehicleOptions = [
  "Any vehicle",
  "Sedan",
  "Premium SUV",
  "Spacious MPV",
  "Tempo Traveller",
] as const;

export const passengerOptions = [
  "1 passenger",
  "2 passengers",
  "3 passengers",
  "4 passengers",
  "5–6 passengers",
  "7+ passengers",
  "12+ passengers",
] as const;

export function whatsappLink(
  message = "Hi Jackson Tour Travels, I'd like to book a cab.",
): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
