import { Metadata } from "next";
import { ShieldCheck, MessageSquare, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Official School Accessories: Belts, Ties, Badges & Socks | Abarani Cloth Shop",
  description:
    "Institutional school accessories in Alipurduar. Custom embroidered badges, woven crest ties, embossed buckle belts, ribbed cotton socks, and uniform monogram patches for 124+ schools.",
  alternates: {
    canonical: "https://abarani.in/accessories",
  },
};

interface AccessoryItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  features: string[];
}

const ACCESSORIES_LIST: AccessoryItem[] = [
  {
    id: "embossed-belts",
    name: "Custom Embossed Crest School Belts",
    category: "Belts & Buckles",
    specs: "Adjustable heavy-duty webbed nylon or formal faux-leather strap with custom laser-engraved school crest brass/nickel buckle.",
    features: [
      "Scratch-resistant electroplated buckle",
      "Reinforced prong & ratchet mechanisms",
      "Available in standard Junior (24-30) and Senior (32-40) sizes",
      "Custom buckle embossing for bulk institution orders",
    ],
  },
  {
    id: "woven-ties",
    name: "Institutional Woven Jacquard Neckties",
    category: "Ties & Ribbons",
    specs: "High-density micro-polyester woven ties with authentic institution stripe angles and optional embroidered crest tips.",
    features: [
      "Stain-resistant micro-twill weave",
      "Anti-curl wool interlining for sharp knot hold",
      "Available in standard self-tie and quick-clip elastic junior styles",
      "House color varieties (Red, Blue, Green, Yellow) in stock",
    ],
  },
  {
    id: "uniform-socks",
    name: "Combed Cotton Ribbed Uniform Socks",
    category: "Socks & Hosiery",
    specs: "Breathable combed cotton socks with elastane arch support and contrast school stripe bands.",
    features: [
      "Reinforced heel and toe padding for extended wear",
      "Sweat-absorbing anti-odor cotton yarn",
      "Available in ankle-length, crew, and knee-high lengths",
      "Navy, White, Grey, and Black bases with twin-stripe collars",
    ],
  },
  {
    id: "crest-badges",
    name: "Metal Enamelled Chest Badges & Crests",
    category: "Badges & Monograms",
    specs: "Official brass-cast enamelled crest badges with polished gold edges and secure safety-pin or magnetic backings.",
    features: [
      "Color-accurate hard enamel filling",
      "Rust-proof protective clear lacquer coat",
      "Prefect, Captain, House Leader, and Standard Crest badges",
      "Comfort rounded edges preventing uniform fabric tears",
    ],
  },
  {
    id: "embroidered-patches",
    name: "High-Definition Embroidered Monogram Patches",
    category: "Badges & Monograms",
    specs: "Precision computer-embroidered school monograms ready for sew-on or heat-press application on shirt pockets and blazers.",
    features: [
      "Tight thread density preserving sharp school motto text",
      "Non-fray heat-sealed merrowed borders",
      "Color-fast polyester threads resistant to repeated laundry cycles",
      "Standard blazer and shirt pocket sizes in stock",
    ],
  },
  {
    id: "lanyards",
    name: "Institutional Printed ID Card Lanyards",
    category: "Institutional",
    specs: "Silky smooth sublimation-printed lanyards with school name, motto, and heavy-duty swivel snap hooks.",
    features: [
      "Child-safe quick-breakaway clip option",
      "Durable non-fade heat transfer printing",
      "Standard 16mm and 20mm widths",
      "Bulk institutional orders with card holders available",
    ],
  },
];

export default function AccessoriesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Deep Royal Navy Hero Banner */}
      <section className="bg-navy py-16 sm:py-20 text-center text-white border-b border-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Official Uniform Accessories
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            From laser-engraved metal buckle belts to color-fast jacquard ties and high-thread-count crest badges, Abarani produces and stocks complete accessory bundles for schools across Alipurduar.
          </p>
        </div>
      </section>

      {/* Main Catalog Content */}
      <div className="w-full bg-background min-h-screen py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Notice */}
          <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 mb-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_2px_8px_rgba(10,25,47,0.04)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-sm font-bold text-navy">
                  Always In Stock &amp; Direct Pricing
                </h2>
                <p className="text-xs text-charcoal font-sans">
                  Accessories are available individually or bundled with complete uniform sets.
                </p>
              </div>
            </div>
            <a
              href={buildWhatsAppLink(inquiryMessages.accessories("General Accessory Bundle"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-navy text-xs flex-shrink-0 w-full sm:w-auto text-center"
            >
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Accessories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ACCESSORIES_LIST.map((item) => {
              const whatsappLink = buildWhatsAppLink(
                inquiryMessages.accessories(item.name)
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
                    {item.specs}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-charcoal font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs font-poppins text-navy/70 font-medium">
                    Available at Store
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

        {/* Institutional Bulk Order Banner */}
        <div className="bg-navy text-pearl rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-gold">
              For Schools &amp; Academy Administrators
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pearl">
              Bulk Accessory Manufacturing with Custom Logo Dies
            </h2>
            <p className="text-sm text-pearl/80 font-sans max-w-2xl mx-auto leading-relaxed">
              We design and cast custom metal dies for new school crest belt buckles, woven jacquard tie patterns, and embroidered patches with strict color accuracy and institutional volume discounts.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink("Hi Abarani, I would like to enquire about bulk accessory manufacturing (custom belts, ties, badges) for my school.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-gold"
              >
                <MessageSquare className="w-4 h-4 text-navy" />
                <span>Discuss Institutional Order</span>
              </a>
              <a
                href={`tel:${businessDetails.telephone}`}
                className="btn-pill btn-pill-outline !text-pearl !border-pearl/30 hover:!border-gold hover:!text-gold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Institutional Desk ({businessDetails.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
