import { Metadata } from "next";
import SchoolSearch from "@/components/SchoolSearch";
import { Sparkles, Scissors, MessageSquare } from "lucide-react";
import { buildWhatsAppLink, inquiryMessages } from "@/config/seo";

export const metadata: Metadata = {
  title: "124+ Partner Schools & Institutional Uniforms | Abarani Cloth Shop",
  description:
    "Browse official school uniforms, blazers, knit sweaters, ties, belts, and badges for over 124 schools across Alipurduar, Baneshwar, Samuktala, Falakata, and Dooars.",
  alternates: {
    canonical: "https://abarani.in/schools",
  },
};

export default function SchoolsDirectoryPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Deep Royal Navy Hero Banner (Matching Reference Screenshot 2) */}
      <section className="bg-navy py-16 sm:py-20 text-center text-white border-b border-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            School Uniform Collections
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            We are proud to partner with 125+ institutions across Alipurduar and surrounding areas.
            Find your school below to explore our custom-tailored uniforms.
          </p>
        </div>
      </section>

      {/* Main Directory & Search Section */}
      <div className="w-full bg-background min-h-screen py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full School Search & Directory Component */}
          <SchoolSearch showFilters={true} />

          {/* Tailoring Fallback Banner */}
          <div className="mt-16 bg-white rounded-3xl border-[1.5px] border-navy/18 p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] transition-all">
            <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-3">
              <Scissors className="w-6 h-6 text-navy" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy mb-2">
              Do You Need Custom Sizing or Non-Listed Institution Wear?
            </h2>
            <p className="text-sm text-charcoal font-sans leading-relaxed mb-6">
              Our in-house master tailors provide precision bespoke cuts and made-to-measure fittings for students with unique measurements or institutions with custom dress codes.
            </p>
            <a
              href={buildWhatsAppLink(inquiryMessages.bespokeTailoring())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-navy"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>Enquire for Bespoke Tailoring</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
