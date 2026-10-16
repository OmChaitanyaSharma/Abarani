import Link from "next/link";
import { 
  ShieldCheck, 
  Scissors, 
  Building2, 
  Clock, 
  MapPin, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import SchoolSearch from "@/components/SchoolSearch";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section: Deep Royal Navy & White + Gold Heritage Showcase */}
      <section className="relative bg-navy text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-navy-dark">
        {/* Subtle geometric background motif */}
        <div 
          className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heritage Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Main Headline */}
              <div>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                  Abarani Cloth Shop
                </h1>
                <span className="block font-serif text-3xl sm:text-5xl text-white font-normal mt-2">
                  আবরনী
                </span>
              </div>

              {/* Clean Subtitle */}
              <p className="font-sans text-base sm:text-lg text-white/85 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Your trusted destination for all school uniform and tailoring needs. Founded in 1960 at Marwari Patty, Alipurduar.
              </p>

              {/* Direct Action Triggers */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/schools"
                  className="touch-target px-7 py-3 rounded-full bg-[#F4EEDF] hover:bg-white text-navy font-poppins text-xs font-bold uppercase tracking-wider shadow-sm transition-all text-center w-full sm:w-auto"
                >
                  Browse Uniforms
                </Link>

                <Link
                  href="/contact"
                  className="touch-target px-7 py-3 rounded-full bg-transparent hover:bg-white/10 border border-white/40 hover:border-white text-white font-poppins text-xs font-semibold uppercase tracking-wider transition-all text-center w-full sm:w-auto"
                >
                  Visit Store
                </Link>
              </div>

              {/* Google Reviews Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-sans backdrop-blur-xs">
                  <span className="text-amber-400 font-bold tracking-widest text-sm">★★★★☆</span>
                  <span className="font-medium">4.0 / 5 on Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Soft Cream Category Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: School Uniforms */}
              <Link
                href="/schools"
                className="bg-[#F4EEDF] hover:bg-white transition-all duration-300 rounded-3xl p-6 sm:p-8 flex items-center justify-center text-center shadow-sm border border-gold/20 hover:border-gold hover:shadow-md group min-h-[140px] sm:min-h-[170px]"
              >
                <span className="font-serif sm:font-poppins text-navy font-bold text-base sm:text-lg group-hover:text-gold-dark transition-colors">
                  School Uniforms
                </span>
              </Link>

              {/* Card 2: Tailoring */}
              <Link
                href="/schools"
                className="bg-[#F4EEDF] hover:bg-white transition-all duration-300 rounded-3xl p-6 sm:p-8 flex items-center justify-center text-center shadow-sm border border-gold/20 hover:border-gold hover:shadow-md group min-h-[140px] sm:min-h-[170px]"
              >
                <span className="font-serif sm:font-poppins text-navy font-bold text-base sm:text-lg group-hover:text-gold-dark transition-colors">
                  Tailoring
                </span>
              </Link>

              {/* Card 3: Accessories */}
              <Link
                href="/accessories"
                className="bg-[#F4EEDF] hover:bg-white transition-all duration-300 rounded-3xl p-6 sm:p-8 flex items-center justify-center text-center shadow-sm border border-gold/20 hover:border-gold hover:shadow-md group min-h-[140px] sm:min-h-[170px]"
              >
                <span className="font-serif sm:font-poppins text-navy font-bold text-base sm:text-lg group-hover:text-gold-dark transition-colors">
                  Accessories
                </span>
              </Link>

              {/* Card 4: Ethnic Wear */}
              <Link
                href="/daily-ethnic"
                className="bg-[#F4EEDF] hover:bg-white transition-all duration-300 rounded-3xl p-6 sm:p-8 flex items-center justify-center text-center shadow-sm border border-gold/20 hover:border-gold hover:shadow-md group min-h-[140px] sm:min-h-[170px]"
              >
                <span className="font-serif sm:font-poppins text-navy font-bold text-base sm:text-lg group-hover:text-gold-dark transition-colors">
                  Ethnic Wear
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive School Search Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy">
              Find Your School Uniform
            </h2>
            <p className="text-sm sm:text-base text-charcoal font-sans">
              Search by official institution name or common acronyms (e.g., <strong className="text-navy">KV</strong>, <strong className="text-navy">DPS</strong>, <strong className="text-navy">JNV</strong>, <strong className="text-navy">TIT</strong>, <strong className="text-navy">CSC</strong>).
            </p>
          </div>

          {/* Quick Search Preview Widget */}
          <SchoolSearch limit={6} showFilters={true} />

          <div className="text-center mt-10">
            <Link
              href="/schools"
              className="btn-pill btn-pill-outline text-xs"
            >
              <span>View All 124+ Partner Schools</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections: 3 Core Pillars */}
      <section className="py-16 bg-background border-t border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-poppins text-xs uppercase tracking-widest text-gold-antique font-bold">
              Complete Wardrobe Solutions
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy">
              Institutional Apparel &amp; Heritage Wear
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: School Uniforms */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-[1.5px] border-navy/18 shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300">
              <div>
                <span className="text-xs font-poppins font-semibold uppercase tracking-wider text-gold-antique block mb-2">
                  Pillar 01
                </span>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Institutional Uniforms
                </h3>
                <p className="text-sm text-charcoal leading-relaxed font-sans mb-4">
                  Half &amp; full sleeve shirts, pleated skirts, tunics, trousers, blazers, and V-neck winter knit sweaters crafted from color-fast, breathable fabrics.
                </p>
                <ul className="text-xs space-y-2 text-charcoal font-sans mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Exact school pattern alignment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Reinforced stitching for daily play</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Double-needle hemmed collars &amp; pockets</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/schools"
                className="btn-pill btn-pill-navy w-full text-center text-xs"
              >
                <span>Browse School Directory</span>
              </Link>
            </div>

            {/* Pillar 2: Accessories */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-[1.5px] border-navy/18 shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300">
              <div>
                <span className="text-xs font-poppins font-semibold uppercase tracking-wider text-gold-antique block mb-2">
                  Pillar 02
                </span>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Official Accessories
                </h3>
                <p className="text-sm text-charcoal leading-relaxed font-sans mb-4">
                  Embossed school crest buckle belts, woven striped ties, ribbed cotton socks, brass pin-back chest crest badges, and embroidered monogram patches.
                </p>
                <ul className="text-xs space-y-2 text-charcoal font-sans mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Laser-engraved metal buckles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Anti-fray jacquard tie weaves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Sweat-wicking combed cotton socks</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/accessories"
                className="btn-pill btn-pill-navy w-full text-center text-xs"
              >
                <span>View Accessories Catalog</span>
              </Link>
            </div>

            {/* Pillar 3: Daily & Traditional Wear */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-[1.5px] border-navy/18 shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 flex flex-col justify-between transition-all duration-300">
              <div>
                <span className="text-xs font-poppins font-semibold uppercase tracking-wider text-gold-antique block mb-2">
                  Pillar 03
                </span>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Traditional &amp; Daily Wear
                </h3>
                <p className="text-sm text-charcoal leading-relaxed font-sans mb-4">
                  Traditional Bengali cotton border dhotis, pandit dhotis, silk puja dhotis, festival sarees for young girls, and lightweight daily cotton apparel.
                </p>
                <ul className="text-xs space-y-2 text-charcoal font-sans mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Pure Bengal handloom-feel cotton</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Traditional red &amp; gold zari borders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Comfortable ready-to-wear kids cuts</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/daily-ethnic"
                className="btn-pill btn-pill-navy w-full text-center text-xs"
              >
                <span>View Traditional Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location & Direct Contact Banner */}
      <section className="py-16 bg-navy text-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-dark rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-gold">
                Visit Us in Person
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pearl">
                Convenient Store Location at Marwari Patty
              </h2>
              <p className="text-sm sm:text-base text-pearl/80 font-sans leading-relaxed">
                Located on Rishi Road in the heart of Alipurduar’s trading center, our showroom carries complete ready-to-wear uniform inventory and experienced tailors on hand for instant size fittings.
              </p>

              <div className="space-y-2 pt-2 text-sm text-pearl/80">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{businessDetails.address} (Plus Code: {businessDetails.plusCode})</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Monday – Sunday: 9:00 AM – 9:00 PM</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={businessDetails.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-gold"
                >
                  <MapPin className="w-4 h-4 text-navy" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${businessDetails.telephone}`}
                  className="btn-pill btn-pill-outline !text-pearl !border-pearl/40 hover:!border-gold hover:!text-gold"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call {businessDetails.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="lg:col-span-5 bg-navy/80 rounded-2xl p-6 border border-gold/20 flex flex-col justify-center space-y-4 text-center">
              <h3 className="font-serif text-lg font-bold text-pearl">
                Need Instant Uniform Confirmation?
              </h3>
              <p className="text-xs text-pearl/75 font-sans leading-relaxed">
                Send us the student&apos;s class and school name on WhatsApp. Our store representatives verify sizing and reserve your set immediately.
              </p>
              <a
                href={buildWhatsAppLink(inquiryMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-gold w-full text-center"
              >
                <MessageSquare className="w-4 h-4 text-navy" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
