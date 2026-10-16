import Link from "next/link";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";
import { CATCHMENTS } from "@/config/schools";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-pearl border-t-2 border-gold/40 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Heritage */}
          <div className="flex flex-col items-start space-y-4">
            <Logo size="md" variant="light" href="/" />
            <p className="text-sm text-pearl/80 leading-relaxed font-sans pt-2">
              Founded in 1960 in Alipurduar, Abarani Cloth Shop is the region’s premier institutional tailor and school uniform manufacturer, supplying over 124+ schools and institutions across Dooars and North Bengal.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pearl/5 border border-gold/30 text-xs font-poppins text-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Standard Fit & Always In Stock Guarantee</span>
            </div>
          </div>

          {/* Column 2: Physical Store & Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-pearl border-b border-gold/30 pb-2">
              Physical Store
            </h3>
            <ul className="space-y-3 text-sm text-pearl/80 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span>
                  {businessDetails.address}
                  <br />
                  <span className="text-xs text-gold/90 font-mono">
                    Plus Code: {businessDetails.plusCode}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Open All 7 Days: 9:00 AM – 9:00 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${businessDetails.telephone}`}
                  className="hover:text-gold transition-colors font-medium"
                >
                  {businessDetails.displayPhone}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={businessDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline text-xs !text-pearl !border-pearl/30 hover:!border-gold hover:!text-gold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Column 3: Institutional Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-pearl border-b border-gold/30 pb-2">
              Tailoring & Services
            </h3>
            <ul className="space-y-2.5 text-sm text-pearl/80 font-sans">
              <li>
                <Link
                  href="/schools"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  124+ School Uniform Directories
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Custom Monograms, Ties & Belts
                </Link>
              </li>
              <li>
                <Link
                  href="/daily-ethnic"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Traditional Bengali Dhotis & Sarees
                </Link>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink(inquiryMessages.bespokeTailoring())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Bespoke Made-to-Measure Tailoring
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink("Hi Abarani, I would like to enquire about bulk uniform supply for an educational institution.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Bulk Institutional Procurement
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Catchment Coverage Directory */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-pearl border-b border-gold/30 pb-2">
              Catchment Coverage
            </h3>
            <p className="text-xs text-pearl/70 leading-relaxed font-sans">
              Serving institutions and student families across all key catchment areas:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {CATCHMENTS.filter((c) => c !== "All").map((catchment) => (
                <Link
                  key={catchment}
                  href={`/schools?catchment=${encodeURIComponent(catchment)}`}
                  className="text-[11px] font-poppins px-2.5 py-1 rounded-full bg-pearl/10 border border-pearl/15 hover:border-gold hover:text-gold transition-colors"
                >
                  {catchment}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pearl/15 flex flex-col sm:flex-row items-center justify-between text-xs text-pearl/60 font-poppins gap-4">
          <p>
            &copy; {currentYear} Abarani Cloth Shop (আবরনী). All Rights Reserved. Marwari Patty, Alipurduar.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gold font-semibold tracking-wider">
              ESTD. 1960
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Store Directions
            </Link>
            <span>•</span>
            <a
              href={buildWhatsAppLink(inquiryMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3 text-gold" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
