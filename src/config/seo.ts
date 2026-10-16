import type { School } from "./schools";

export const businessDetails = {
  name: "Abarani Cloth Shop",
  bengaliName: "আবরনী",
  legalName: "Abarani Cloth Shop",
  establishedYear: 1960,
  address: "Marwari Patty, FGJF+5JM, Rishi Rd, Alipurduar, West Bengal 736121",
  streetAddress: "Marwari Patty, Rishi Road",
  addressLocality: "Alipurduar",
  addressRegion: "West Bengal",
  postalCode: "736121",
  addressCountry: "IN",
  plusCode: "FGJF+5JM",
  googleMapsUrl: "https://share.google/5BjKqnTebwRea1bhZ",
  telephone: "+91-9876543210",
  whatsappNumber: "919876543210",
  displayPhone: "+91 98765 43210",
  email: "contact@abarani.in",
  openingHours: "Mo-Su 09:00-21:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  rating: "4.8",
  reviewCount: "125",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
};

export const seoKeywords = {
  primary: [
    "Abarani Cloth Shop",
    "Abarani Alipurduar",
    "school uniforms Alipurduar",
    "institutional tailoring West Bengal",
    "Marwari Patty cloth store",
    "Rishi Road uniform shop",
    "Dooars school dress supplier",
    "Bengali dhotis Alipurduar",
  ],
  catchments: [
    "Alipurduar Junction",
    "Court More",
    "Babupara",
    "Baneshwar",
    "Samuktala",
    "Kamakhyaguri",
    "Sonapur",
    "Falakata",
    "Tapsikhata",
    "Barobisha",
    "Birpara",
    "Kalchini",
    "Hashimara",
    "Jaigaon",
  ],
};

/**
 * Builds a sanitized, URI-encoded WhatsApp deep-link.
 */
export function buildWhatsAppLink(message: string): string {
  const cleanPhone = businessDetails.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-formatted WhatsApp inquiry messages.
 */
export const inquiryMessages = {
  schoolUniform: (schoolName: string, item?: string) =>
    item
      ? `Hi Abarani, I would like to enquire about school uniforms for ${schoolName}, specifically "${item}".`
      : `Hi Abarani, I would like to enquire about the school uniform set for ${schoolName}.`,
  bespokeTailoring: (schoolName?: string) =>
    schoolName
      ? `Hi Abarani, I would like to enquire about bespoke tailoring services for ${schoolName} uniform.`
      : `Hi Abarani, I would like to enquire about bespoke tailoring and made-to-measure institutional wear.`,
  accessories: (item: string) =>
    `Hi Abarani, I would like to enquire about institutional accessories: "${item}".`,
  dailyEthnic: (item: string) =>
    `Hi Abarani, I am interested in your traditional Bengali wear collection: "${item}".`,
  general: () =>
    `Hi Abarani, I would like to check product availability and store timings at Marwari Patty, Alipurduar.`,
};

/**
 * Generates LocalBusiness JSON-LD schema for Google Search indexing.
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://abarani.in/#store",
    name: businessDetails.name,
    alternateName: businessDetails.bengaliName,
    description:
      "Founded in 1960, Abarani Cloth Shop is Alipurduar's primary school uniform manufacturer and institutional tailoring partner for 124+ schools and institutions across Dooars, West Bengal.",
    url: "https://abarani.in",
    telephone: businessDetails.telephone,
    priceRange: businessDetails.priceRange,
    currenciesAccepted: businessDetails.currenciesAccepted,
    paymentAccepted: businessDetails.paymentAccepted,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: businessDetails.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.4919",
      longitude: "89.5271",
    },
    openingHoursSpecification: businessDetails.openingHoursSpecification,
    hasMap: businessDetails.googleMapsUrl,
    founder: {
      "@type": "Person",
      name: "Abarani Heritage Tailors",
    },
    foundingDate: "1960",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Alipurduar District",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dooars Region",
      },
      {
        "@type": "AdministrativeArea",
        name: "West Bengal",
      },
    ],
  };
}

/**
 * Generates Product/Collection JSON-LD schema for an individual school.
 */
export function generateSchoolPageSchema(school: School) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${school.name} Official School Uniforms`,
    description: `Official school uniform garments, sweaters, blazers, belts, ties, and badges for ${school.name} (${school.catchment}, Alipurduar). Handled by Abarani Cloth Shop with 'Always In Stock' availability and bespoke tailoring.`,
    brand: {
      "@type": "Brand",
      name: businessDetails.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "ClothingStore",
        name: businessDetails.name,
      },
    },
  };
}
