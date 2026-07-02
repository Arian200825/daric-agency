/**
 * INDUSTRIES — Daric's industry-specific website solutions.
 * Drives the home showcase, the /solutions hub, and each /solutions/[slug]
 * service page. This is the heart of Daric's positioning: premium,
 * industry-focused websites.
 *
 * Add a new industry here and its solution page + showcase card appear
 * automatically. When a demo ships, set status "live" + a demoUrl.
 */

export interface Industry {
  slug: string;
  name: string;
  category: string;
  status: "live" | "coming-soon";
  /** One-line hook for cards. */
  tagline: string;
  /** Short paragraph for the showcase card. */
  description: string;
  /** Live demo URL (present when status === "live"). */
  demoUrl?: string;
  gradient: [string, string];
  tags: string[];
  /** Solution (service) page content. */
  page: {
    intro: string;
    challenges: { title: string; body: string }[];
    solutions: { title: string; body: string }[];
    benefits: { stat: string; label: string }[];
  };
}

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    category: "Hospitality",
    status: "live",
    tagline: "Fine dining, online.",
    description:
      "Luxury restaurant websites with interactive menus, reservations, and story-led design — built to fill tables.",
    demoUrl: "https://arian200825.github.io/daric-restaurant/",
    gradient: ["#3a2c1c", "#0c0a09"],
    tags: ["Interactive menu", "Reservations", "Signature dishes"],
    page: {
      intro:
        "A restaurant's website is its digital front door. We build sites that make premium restaurants look as good online as the plate looks on the table — and turn browsers into bookings.",
      challenges: [
        { title: "Menus buried in PDFs", body: "Guests bounce when the menu is a slow, unreadable PDF that breaks on mobile." },
        { title: "Reservations lost to friction", body: "Every extra click between craving and booking is a table you don't fill." },
        { title: "Generic, templated looks", body: "A fine-dining room deserves better than a cookie-cutter theme that looks like everyone else." },
      ],
      solutions: [
        { title: "Interactive, filterable menus", body: "Beautiful menus with dietary filters and signature-dish highlights — editable in minutes, fast on every device." },
        { title: "Frictionless reservations", body: "A prominent booking flow (your provider or ours) that turns intent into confirmed covers." },
        { title: "Bespoke, story-led design", body: "Atmospheric, brand-true design that photographs and converts — never a template." },
      ],
      benefits: [
        { stat: "24/7", label: "Bookings while you're closed" },
        { stat: "2 wks", label: "Typical launch time" },
        { stat: "100%", label: "Custom, mobile-first design" },
      ],
    },
  },
  {
    slug: "hotels",
    name: "Hotels & Resorts",
    category: "Hospitality",
    status: "live",
    tagline: "Direct bookings, elevated.",
    description:
      "Cinematic hotel & resort websites with room explorers, spa, experiences, and a premium booking flow — built to win direct bookings.",
    demoUrl: "https://arian200825.github.io/daric-platform/",
    gradient: ["#15687e", "#0a0b0e"],
    tags: ["Room explorer", "Booking flow", "Spa & experiences"],
    page: {
      intro:
        "Hotels lose 15–25% of every OTA booking to commission. We build direct-booking machines: cinematic, calm, and engineered to convert lookers into guests who book with you.",
      challenges: [
        { title: "OTA commission drain", body: "Booking.com and Expedia take a cut of every reservation you could have owned." },
        { title: "Flat, lifeless galleries", body: "A resort is an escape — a static gallery doesn't sell the feeling." },
        { title: "Clunky booking journeys", body: "Guests abandon slow, confusing availability checks and book elsewhere." },
      ],
      solutions: [
        { title: "Conversion-first booking", body: "A prominent availability bar and low-friction flow that funnels guests to book direct." },
        { title: "Cinematic, spacious design", body: "Large landscape photography, slow motion, and room/suite explorers that sell the stay." },
        { title: "The full property, showcased", body: "Dining, spa, experiences, and reviews — everything that justifies the rate, beautifully presented." },
      ],
      benefits: [
        { stat: "0%", label: "Commission on direct bookings" },
        { stat: "14", label: "Sections, fully configurable" },
        { stat: "95+", label: "Performance-focused build" },
      ],
    },
  },
  {
    slug: "healthcare",
    name: "Dental & Healthcare",
    category: "Healthcare",
    status: "live",
    tagline: "Trust, booked.",
    description:
      "Calm, credible websites for dental and healthcare practices — designed to build trust and drive new-patient bookings.",
    demoUrl: "https://arian200825.github.io/daric-medical/",
    gradient: ["#1f6f6b", "#0a0f10"],
    tags: ["New-patient booking", "Trust & credibility", "Treatments"],
    page: {
      intro:
        "In healthcare, the website is the first appointment. We build calm, credible sites that reassure patients and make booking effortless — so practices grow with the right patients.",
      challenges: [
        { title: "Low trust, high anxiety", body: "Dated, cluttered sites make nervous patients hesitate instead of booking." },
        { title: "Phone-only booking", body: "Patients who won't call after hours are patients you never see." },
        { title: "Unclear treatments & pricing", body: "Confusion about services and cost stops patients before they start." },
      ],
      solutions: [
        { title: "Reassuring, professional design", body: "Clean, calm, credibility-first design with real reviews and clear credentials." },
        { title: "Online booking & enquiry", body: "Simple new-patient booking and enquiry flows that work around the clock." },
        { title: "Clear treatment pages", body: "Well-structured services and transparent guidance that answer questions and reduce friction." },
      ],
      benefits: [
        { stat: "24/7", label: "New-patient enquiries" },
        { stat: "1st", label: "Impression that builds trust" },
        { stat: "SEO", label: "Found by local patients" },
      ],
    },
  },
  {
    slug: "automotive",
    name: "Automotive",
    category: "Automotive",
    status: "coming-soon",
    tagline: "Showroom, online.",
    description:
      "High-impact websites for dealerships and premium auto brands — inventory, test drives, and lead capture that sells.",
    gradient: ["#2b2f36", "#0a0b0d"],
    tags: ["Inventory showcase", "Test-drive booking", "Lead capture"],
    page: {
      intro:
        "Car buyers research online long before they visit. We build showroom-grade websites that showcase inventory, capture leads, and book test drives — turning attention into forecourt visits.",
      challenges: [
        { title: "Inventory that looks cheap", body: "Premium vehicles deserve better than a grid that feels like a classifieds page." },
        { title: "Leads that leak away", body: "No clear path from interest to test drive means lost sales to competitors." },
        { title: "Slow, heavy sites", body: "Image-heavy dealer sites that crawl on mobile drive buyers away." },
      ],
      solutions: [
        { title: "Cinematic inventory & models", body: "High-impact vehicle showcases that make the metal look as good as the forecourt." },
        { title: "Test-drive & finance leads", body: "Prominent, low-friction booking and enquiry flows engineered to capture intent." },
        { title: "Fast, mobile-first builds", body: "Performance-tuned so buyers browse the range without waiting." },
      ],
      benefits: [
        { stat: "24/7", label: "Test-drive requests" },
        { stat: "Fast", label: "Mobile-first performance" },
        { stat: "Lead", label: "Capture built into every page" },
      ],
    },
  },
];

export const liveIndustries = industries.filter((i) => i.status === "live");

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
