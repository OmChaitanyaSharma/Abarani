import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { 
  getAllSchools, 
  getSchoolBySlug 
} from "@/config/schools";
import { 
  buildWhatsAppLink, 
  inquiryMessages, 
  generateSchoolPageSchema,
  businessDetails
} from "@/config/seo";
import { 
  ShieldCheck, 
  Scissors, 
  ArrowLeft, 
  MessageSquare, 
  Check, 
  Clock, 
  MapPin, 
  Phone,
  Sparkles
} from "lucide-react";

interface PageProps {
  params: Promise<{ schoolSlug: string }>;
}

/**
 * Programmatically generate static params for all 124+ partner schools at build time.
 */
export async function generateStaticParams() {
  const schools = getAllSchools();
  return schools.map((school) => ({
    schoolSlug: school.slug,
  }));
}

/**
 * Generate localized metadata for search indexing.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);

  if (!school) {
    return {
      title: "School Not Found | Abarani Cloth Shop",
    };
  }

  const title = `${school.name} School Uniforms & Tailoring | Abarani Alipurduar`;
  const description = `Official school uniform set for ${school.name} (${school.catchment}, Alipurduar). Standard shirts, trousers, pleated skirts, knit sweaters, official blazers, crest ties, and badges. Always in stock at Abarani Cloth Shop.`;

  return {
    title,
    description,
    keywords: [
      `${school.name} uniform`,
      `${school.name} school dress`,
      `${school.name} uniform Alipurduar`,
      ...school.aliases.map((a) => `${a} uniform`),
      `${school.catchment} school dress`,
      "Abarani uniform shop",
    ],
    openGraph: {
      title,
      description,
      url: `https://abarani.in/schools/${school.slug}`,
      siteName: "Abarani Cloth Shop",
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://abarani.in/schools/${school.slug}`,
    },
  };
}

export default async function SchoolDetailPage({ params }: PageProps) {
  const { schoolSlug } = await params;
  const school = getSchoolBySlug(schoolSlug);

  if (!school) {
    notFound();
  }

  const schoolSchema = generateSchoolPageSchema(school);
  const generalSchoolWhatsApp = buildWhatsAppLink(
    inquiryMessages.schoolUniform(school.name)
  );

  return (
    <div className="w-full bg-background min-h-screen py-8 lg:py-14">
      {/* JSON-LD Schema for this School Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schoolSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-poppins text-navy/70">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/schools" className="hover:text-gold transition-colors">
            Schools
          </Link>
          <span>/</span>
          <span className="text-navy font-semibold truncate max-w-xs sm:max-w-md">
            {school.name}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/schools"
            className="touch-target inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider text-navy/80 hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gold" />
            <span>Back to School Directory</span>
          </Link>
        </div>

        {/* School Header Card */}
        <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 sm:p-10 shadow-[0_2px_8px_rgba(10,25,47,0.04)] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-poppins font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-navy text-white">
                  {school.catchment} Catchment
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Always In Stock Guarantee</span>
                </span>
                <span className="text-xs font-poppins text-charcoal/80 px-2.5 py-1 rounded-full bg-[#F2EEE7] border border-navy/12">
                  {school.level}
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                {school.name}
              </h1>

              {/* Acronym / Aliases Tags */}
              {school.aliases.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs font-sans text-charcoal/70">Known as:</span>
                  {school.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#F2EEE7] text-navy border border-navy/12"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-sm text-charcoal font-sans leading-relaxed pt-1">
                Official uniform partner: Abarani Cloth Shop supplies all authorized garments, winter sweaters, institutional blazers, belts, ties, and embroidered monogram patches for students of {school.name}.
              </p>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="flex-shrink-0 flex flex-col gap-3 min-w-[240px]">
              <a
                href={generalSchoolWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-navy text-center w-full"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Enquire Full Uniform Set</span>
              </a>

              <a
                href={`tel:${businessDetails.telephone}`}
                className="btn-pill btn-pill-outline text-center w-full text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Store ({businessDetails.displayPhone})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Catalog Items Header & Pricing Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              Available Uniform Garments &amp; Accessories
            </h2>
            <p className="text-xs sm:text-sm text-charcoal font-sans">
              All items are manufactured to standard school regulation specifications.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gold/10 border border-gold/30 text-xs font-poppins text-navy">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Seasonal dynamic rates: Click item to enquire directly via WhatsApp</span>
          </div>
        </div>

        {/* Uniform Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {school.uniforms.map((item) => {
            const itemWhatsApp = buildWhatsAppLink(
              inquiryMessages.schoolUniform(school.name, item.name)
            );

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F2EEE7] text-navy border border-navy/12">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      <Check className="w-3 h-3 text-emerald-700" />
                      <span>Ready Stock</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-charcoal font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-poppins text-charcoal/70 px-2 py-0.5 rounded-full bg-[#F2EEE7] border border-navy/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs font-poppins font-medium text-navy/70">
                    Always In Stock
                  </span>

                  <a
                    href={itemWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-navy text-white text-xs font-poppins font-semibold hover:bg-gold hover:text-navy transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>Enquire Item</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke Tailoring Callout for this School */}
        <div className="bg-navy text-pearl rounded-3xl p-8 sm:p-10 border border-gold/40 shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-poppins font-semibold uppercase tracking-wider text-gold">
                <Scissors className="w-4 h-4" />
                <span>Made-to-Measure Guarantee</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pearl">
                Does your child need custom sizing for {school.name}?
              </h3>
              <p className="text-sm text-pearl/80 font-sans leading-relaxed">
                If off-the-rack sizes do not provide the ideal comfort or sleeve length, our master tailors at Marwari Patty provide custom stitching according to exact body measurements. We also tailor matching house sports shirts and special event dresses.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={buildWhatsAppLink(inquiryMessages.bespokeTailoring(school.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-gold text-center w-full"
              >
                <Scissors className="w-4 h-4 text-navy" />
                <span>Book Tailoring Measurement</span>
              </a>

              <a
                href={businessDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-outline !text-pearl !border-pearl/30 hover:!border-gold hover:!text-gold text-center w-full text-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Visit Fitting Room</span>
              </a>
            </div>
          </div>
        </div>

        {/* Physical Store Info Footer */}
        <div className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-poppins text-charcoal shadow-[0_2px_8px_rgba(10,25,47,0.04)]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Store Open Monday – Sunday: 9:00 AM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Marwari Patty, FGJF+5JM, Rishi Rd, Alipurduar</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <a href={`tel:${businessDetails.telephone}`} className="text-navy font-semibold hover:underline">
              {businessDetails.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
