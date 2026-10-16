import { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  Compass, 
  Sparkles,
  Building,
  CheckCircle2,
  Scissors
} from "lucide-react";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

export const metadata: Metadata = {
  title: "Contact & Store Location | Abarani Cloth Shop Alipurduar",
  description:
    "Store address, live Google Map, operating hours, and direct contact for Abarani Cloth Shop (Estd. 1960). Located at Marwari Patty, FGJF+5JM, Rishi Road, Alipurduar, West Bengal 736121.",
  alternates: {
    canonical: "https://abarani.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Deep Royal Navy Hero Banner */}
      <section className="bg-navy py-16 sm:py-20 text-center text-white border-b border-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-gold/40 text-xs font-poppins font-semibold uppercase tracking-widest text-gold-light">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Store Coordinates &amp; Directions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Visit Our Showroom &amp; Tailoring Unit
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in the traditional textile commercial quarter of Alipurduar at Marwari Patty, Rishi Road. Our full inventory and master tailor fitting room are open 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full bg-background min-h-screen py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Row 1: Store Information (Left) + Interactive Google Map (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Business NAP & Direct Contact Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-8 shadow-[0_2px_8px_rgba(10,25,47,0.04)] space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy border-b border-navy/10 pb-3 mb-6">
                    Store Information
                  </h2>

                  <div className="space-y-5">
                    {/* Address Block */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-poppins text-xs uppercase tracking-wider font-bold text-navy">
                          Physical Address
                        </h3>
                        <p className="text-sm text-charcoal font-sans leading-relaxed mt-1 font-medium">
                          {businessDetails.address}
                        </p>
                        <div className="inline-block mt-2 px-2.5 py-1 rounded bg-[#F2EEE7] text-xs font-mono text-navy border border-navy/12">
                          Plus Code: {businessDetails.plusCode}
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours Block */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-poppins text-xs uppercase tracking-wider font-bold text-navy">
                          Operating Hours
                        </h3>
                        <p className="text-sm text-charcoal font-sans mt-1">
                          <strong>Monday – Sunday:</strong> 9:00 AM – 9:00 PM
                        </p>
                        <p className="text-xs text-emerald-700 font-poppins font-medium mt-1">
                          Open all 7 days during school admission season
                        </p>
                      </div>
                    </div>

                    {/* Telephone & WhatsApp Block */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-poppins text-xs uppercase tracking-wider font-bold text-navy">
                          Direct Contact Desk
                        </h3>
                        <p className="text-sm text-charcoal font-sans mt-1">
                          Telephone:{" "}
                          <a
                            href={`tel:${businessDetails.telephone}`}
                            className="font-bold text-navy hover:text-gold transition-colors"
                          >
                            {businessDetails.displayPhone}
                          </a>
                        </p>
                        <p className="text-xs text-charcoal/80 font-sans mt-0.5">
                          WhatsApp: <strong className="text-navy">{businessDetails.displayPhone}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Conversion Buttons */}
                <div className="pt-6 border-t border-navy/10 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppLink(inquiryMessages.general())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-gold w-full text-center"
                  >
                    <MessageSquare className="w-4 h-4 text-navy" />
                    <span>Instant WhatsApp Enquiry</span>
                  </a>

                  <a
                    href={`tel:${businessDetails.telephone}`}
                    className="btn-pill btn-pill-navy w-full text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Call Showroom ({businessDetails.displayPhone})</span>
                  </a>

                  <a
                    href={businessDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outline w-full text-center text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-navy" />
                    <span>Open in Google Maps Navigation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Google Map Embed */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 sm:p-8 shadow-[0_2px_8px_rgba(10,25,47,0.04)] flex flex-col justify-between space-y-4 h-full">
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-navy/10 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                      <h2 className="font-serif text-2xl font-bold text-navy">
                        Store Map Location
                      </h2>
                    </div>
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Live Map
                    </span>
                  </div>

                  <p className="text-xs text-charcoal font-sans mb-3">
                    <strong className="text-navy font-semibold">Abarani Cloth Shop (আবরনী)</strong> — Marwari Patty, Rishi Road, Alipurduar, West Bengal 736121
                  </p>
                </div>

                {/* Google Map iframe */}
                <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-navy/12 shadow-inner bg-[#F2EEE7]">
                  <iframe
                    src="https://maps.google.com/maps?q=Marwari+Patty,+Rishi+Road,+Alipurduar,+West+Bengal+736121&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Abarani Cloth Shop Store Location - Marwari Patty, Alipurduar"
                    className="w-full h-full"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal font-sans">
                  <p className="leading-relaxed">
                    Located on Rishi Road in Marwari Patty retail quarter. 3 minutes south of Court More.
                  </p>
                  <a
                    href={businessDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-navy text-xs flex-shrink-0 w-full sm:w-auto text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gold" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 (Pushed Down): How to Reach Us (Left) + Fitting Room Guarantee (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Direction Guide from Catchments */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-8 shadow-[0_2px_8px_rgba(10,25,47,0.04)] space-y-6 h-full">
                <div className="flex items-center gap-3 border-b border-navy/10 pb-3">
                  <Compass className="w-6 h-6 text-gold" />
                  <h2 className="font-serif text-2xl font-bold text-navy">
                    How to Reach Us
                  </h2>
                </div>

                <div className="space-y-4 font-sans text-sm text-charcoal">
                  {/* Route 1 */}
                  <div className="p-4 rounded-2xl bg-[#F2EEE7] border border-navy/12 space-y-1">
                    <h3 className="font-serif font-bold text-navy flex items-center gap-2">
                      <Building className="w-4 h-4 text-gold" />
                      <span>From Alipurduar Junction (APD Jn) Railway Station</span>
                    </h3>
                    <p className="text-xs text-charcoal leading-relaxed">
                      Head south along Buxa Feeder Road toward Court More. Turn onto Rishi Road toward Marwari Patty market. Approximate travel time: 8–10 minutes via auto or e-rickshaw (Toto).
                    </p>
                  </div>

                  {/* Route 2 */}
                  <div className="p-4 rounded-2xl bg-[#F2EEE7] border border-navy/12 space-y-1">
                    <h3 className="font-serif font-bold text-navy flex items-center gap-2">
                      <Building className="w-4 h-4 text-gold" />
                      <span>From Court More &amp; Newtown</span>
                    </h3>
                    <p className="text-xs text-charcoal leading-relaxed">
                      Direct 3-minute transit south down Rishi Road into the Marwari Patty retail lane. Easily accessible on foot, bicycle, or Toto from central administrative complexes.
                    </p>
                  </div>

                  {/* Route 3 */}
                  <div className="p-4 rounded-2xl bg-[#F2EEE7] border border-navy/12 space-y-1">
                    <h3 className="font-serif font-bold text-navy flex items-center gap-2">
                      <Building className="w-4 h-4 text-gold" />
                      <span>From Falakata, Samuktala &amp; Dooars Rural Hubs</span>
                    </h3>
                    <p className="text-xs text-charcoal leading-relaxed">
                      Take district buses or private transport arriving at Alipurduar Central Bus Terminus / Chowpathy. Board any local Toto directly to Marwari Patty Abarani Cloth Shop.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Store Fitting Room & Immediate Trial Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-8 shadow-[0_2px_8px_rgba(10,25,47,0.04)] space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-navy/10 pb-3">
                    <Scissors className="w-6 h-6 text-gold" />
                    <h2 className="font-serif text-2xl font-bold text-navy">
                      In-Store Fitting Room
                    </h2>
                  </div>

                  <p className="text-xs text-charcoal font-sans leading-relaxed">
                    Students can try on complete uniforms in private fitting rooms with our experienced tailors on hand for immediate adjustments.
                  </p>

                  <ul className="space-y-3 text-xs font-sans text-charcoal pt-2">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>Separate private fitting rooms for boys and girls</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>Instant waistband, hem, and sleeve adjustments</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>UPI, NetBanking, and Cash accepted</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>Immediate exchange if sizing requires adjustment</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-navy/10">
                  <a
                    href={buildWhatsAppLink(inquiryMessages.bespokeTailoring())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-navy w-full text-center text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>Ask Master Tailor on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
