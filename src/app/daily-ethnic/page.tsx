import { Metadata } from "next";
import { Sparkles, MessageSquare, Phone, CheckCircle2, HeartHandshake } from "lucide-react";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Traditional Bengali Dhotis & Kids Sarees | Abarani Cloth Shop Alipurduar",
  description:
    "Explore traditional Bengali ethnic wear: pure cotton border dhotis, pandit dhotis, silk puja dhotis, and ready-to-wear festival sarees for young girls. Handpicked fabrics at Marwari Patty, Alipurduar.",
  alternates: {
    canonical: "https://abarani.in/daily-ethnic",
  },
};

interface EthnicItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

const ETHNIC_COLLECTION: EthnicItem[] = [
  {
    id: "pandit-dhoti",
    name: "Traditional Bengali Pandit Dhoti",
    category: "Men's Traditional Dhotis",
    description: "Finely spun 100% pure cotton dhoti crafted for puja ceremonies, Vedic rituals, and formal auspicious gatherings.",
    highlights: [
      "Ultra-soft fine cotton with exceptional breathability",
      "Traditional red and marigold contrast woven borders",
      "Full standard length (4.5 meters) for traditional Bengali draping",
      "Starch-free comfortable feel",
    ],
  },
  {
    id: "cotton-border-dhoti",
    name: "Classic Cotton Zari Border Dhoti",
    category: "Men's Traditional Dhotis",
    description: "Traditional cream and unbleached cotton dhoti bordered with elegant gold and temple-weave motifs.",
    highlights: [
      "Authentic Bengal handloom-inspired texture",
      "Tarnish-resistant fine metallic zari border",
      "Comfortable for day-long festival celebrations",
      "Pairs naturally with traditional Bengali kurtas",
    ],
  },
  {
    id: "silk-puja-dhoti",
    name: "Silk Puja & Wedding Dhoti Set",
    category: "Festive & Ceremonial",
    description: "Premium art-silk dhoti and matching uttorio set tailored for Durga Puja pushpanjali, weddings, and sacred rites.",
    highlights: [
      "Subtle golden sheen with rich heritage drape",
      "Complete set including formal ceremonial uttorio",
      "Crease-resistant fabric maintaining sharp pleats",
      "Available in cream, ivory, and soft gold tones",
    ],
  },
  {
    id: "kids-festival-saree",
    name: "Young Girls Ready-to-Wear Festival Saree",
    category: "Kids Ethnic Sarees",
    description: "Pre-stitched traditional cotton saree designed specifically for young schoolgirls attending Saraswati Puja and cultural recitals.",
    highlights: [
      "Pre-pleated with adjustable comfort waistband",
      "No complex draping required; fits in seconds",
      "Pure lightweight cotton ensuring ease of movement",
      "Vibrant traditional yellow, red, and basanti shades",
    ],
  },
  {
    id: "cultural-cotton-saree",
    name: "Traditional Lal-Par White Cotton Saree (Girls)",
    category: "Kids Ethnic Sarees",
    description: "The iconic Bengali red-border white cotton saree sized for students participating in Rabindra Jayanti and school cultural dance programmes.",
    highlights: [
      "Classic Bengali red temple border on pristine white base",
      "Breathable fabric tested for dance and stage performances",
      "Junior and senior girls sizing available in stock",
      "Gentle skin-friendly dyes",
    ],
  },
  {
    id: "daily-cotton-fabrics",
    name: "Daily Wear Cotton Shirting & Kurta Fabrics",
    category: "Daily Wear",
    description: "Premium unstitched and ready-tailored cotton garments for daily tropical comfort in Alipurduar and Dooars weather.",
    highlights: [
      "100% natural cotton fibers offering maximum summer cooling",
      "Color-fast checks, plains, and subtle woven textures",
      "In-house tailor service for bespoke everyday shirts and kurtas",
      "Durable against daily monsoon and tropical wear",
    ],
  },
];

export default function DailyEthnicPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Deep Royal Navy Hero Banner */}
      <section className="bg-navy py-16 sm:py-20 text-center text-white border-b border-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Traditional Bengali Dhotis &amp; Ethnic Wear
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Beyond school uniforms, Abarani has preserved the tradition of pure cotton ceremonial dhotis, pandit dhotis, and festive young girls sarees for Alipurduar families since 1960.
          </p>
        </div>
      </section>

      {/* Main Catalog Content */}
      <div className="w-full bg-background min-h-screen py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heritage Note Banner */}
          <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 mb-12 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_2px_8px_rgba(10,25,47,0.04)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-navy flex-shrink-0">
                <HeartHandshake className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h2 className="font-serif text-sm font-bold text-navy">
                  Authentic Handloom Feel &amp; Ready Stock
                </h2>
                <p className="text-xs text-charcoal font-sans">
                  Seasonal collections for Saraswati Puja, Durga Puja, weddings, and cultural assemblies.
                </p>
              </div>
            </div>
            <a
              href={buildWhatsAppLink(inquiryMessages.dailyEthnic("Full Bengali Traditional Wear Collection"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-navy text-xs flex-shrink-0 w-full sm:w-auto text-center"
            >
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ETHNIC_COLLECTION.map((item) => {
              const whatsappLink = buildWhatsAppLink(
                inquiryMessages.dailyEthnic(item.name)
              );

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-7 sm:p-8 flex flex-col justify-between shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F2EEE7] text-navy border border-navy/12">
                      {item.category}
                    </span>
                    <span className="text-xs font-poppins font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-charcoal font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-charcoal font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs font-poppins text-navy/70 font-medium">
                    Marwari Patty Store
                  </span>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-pearl text-xs font-poppins font-semibold hover:bg-gold hover:text-navy transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* In-store Tailoring Consultation */}
        <div className="bg-navy text-pearl rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-gold">
              Bespoke Fitting &amp; Pre-Stitched Options
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pearl">
              Custom Festive Fittings for Young Children
            </h2>
            <p className="text-sm text-pearl/80 font-sans max-w-2xl mx-auto leading-relaxed">
              Draping traditional sarees and dhotis on children can be challenging during busy festival mornings. We provide custom pre-stitched pleating and elastic waistband tailoring so children can wear authentic garments with total comfort.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink("Hi Abarani, I would like to enquire about pre-stitched kids festival sarees / traditional dhotis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-gold"
              >
                <MessageSquare className="w-4 h-4 text-navy" />
                <span>Enquire via WhatsApp</span>
              </a>
              <a
                href={`tel:${businessDetails.telephone}`}
                className="btn-pill btn-pill-outline !text-pearl !border-pearl/30 hover:!border-gold hover:!text-gold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Store ({businessDetails.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
