"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, School as SchoolIcon, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { School, CATCHMENTS, CatchmentType, searchSchools } from "@/config/schools";
import { buildWhatsAppLink, inquiryMessages } from "@/config/seo";

interface SchoolSearchProps {
  initialCatchment?: CatchmentType;
  showFilters?: boolean;
  limit?: number;
  featuredOnly?: boolean;
}

export default function SchoolSearch({
  initialCatchment = "All",
  showFilters = true,
  limit,
}: SchoolSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCatchment, setSelectedCatchment] = useState<CatchmentType>(initialCatchment);

  const filteredSchools = useMemo(() => {
    const results = searchSchools(searchQuery, selectedCatchment);
    return limit ? results.slice(0, limit) : results;
  }, [searchQuery, selectedCatchment, limit]);

  return (
    <div className="w-full">
      {/* Search Input Bar */}
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-navy/50 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for your school (e.g. KV, DPS, JNV, Balika)..."
            className="w-full pl-12 pr-12 py-4 rounded-full bg-white border-[1.5px] border-navy/20 text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition-all shadow-[0_2px_8px_rgba(10,25,47,0.04)] font-sans text-base"
            aria-label="Search schools by name or acronym"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="touch-target absolute right-3 p-1.5 text-navy/50 hover:text-navy transition-colors flex items-center justify-center rounded-full"
              aria-label="Clear search input"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Acronym Suggestion Pills */}
        <div className="flex items-center flex-wrap gap-2 mt-3 px-1 text-xs text-charcoal font-sans">
          <span className="font-semibold text-navy">Popular shortcuts:</span>
          {["KV", "DPS", "JNV", "TIT", "CSC", "Falakata"].map((shortcut) => (
            <button
              key={shortcut}
              type="button"
              onClick={() => setSearchQuery(shortcut)}
              className="touch-target px-3.5 py-1.5 rounded-full bg-white hover:bg-gold/15 text-navy font-poppins font-medium border border-navy/15 shadow-xs transition-colors"
            >
              {shortcut}
            </button>
          ))}
        </div>
      </div>

      {/* Catchment Horizontal Filter Scroll */}
      {showFilters && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none max-w-full">
          {CATCHMENTS.map((catchment) => {
            const isSelected = selectedCatchment === catchment;
            return (
              <button
                key={catchment}
                type="button"
                onClick={() => setSelectedCatchment(catchment)}
                className={`touch-target px-4 py-2.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                  isSelected
                    ? "bg-navy text-white shadow-sm border border-navy"
                    : "bg-white text-navy border border-navy/18 hover:border-gold hover:text-navy shadow-xs"
                }`}
              >
                {catchment}
              </button>
            );
          })}
        </div>
      )}

      {/* Result Count Status */}
      <div className="flex items-center justify-between mb-6 px-1">
        <p className="text-sm font-sans text-charcoal">
          Showing <span className="font-bold text-navy">{filteredSchools.length}</span> institutional directories
          {selectedCatchment !== "All" && (
            <span> in <strong className="text-navy">{selectedCatchment}</strong></span>
          )}
          {searchQuery && (
            <span> matching &ldquo;<strong className="text-navy">{searchQuery}</strong>&rdquo;</span>
          )}
        </p>

        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCatchment("All");
            }}
            className="touch-target px-3 py-1.5 text-xs font-poppins font-semibold text-gold-antique hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Schools Card Grid */}
      {filteredSchools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => {
            const whatsappLink = buildWhatsAppLink(
              inquiryMessages.schoolUniform(school.name)
            );

            return (
              <div
                key={school.id}
                className="bg-white rounded-3xl border-[1.5px] border-navy/18 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(10,25,47,0.04)] hover:border-gold hover:shadow-[0_8px_24px_rgba(10,25,47,0.08)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F2EEE7] text-navy border border-navy/12">
                      {school.catchment}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-poppins font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded">
                      <ShieldCheck className="w-3 h-3 text-emerald-700" />
                      <span>Always In Stock</span>
                    </span>
                  </div>

                  {/* School Name */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy group-hover:text-gold-dark transition-colors leading-snug mb-2.5">
                    <Link href={`/schools/${school.slug}`}>
                      {school.name}
                    </Link>
                  </h3>

                  {/* Acronym / Aliases Tags */}
                  {school.aliases.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {school.aliases.slice(0, 3).map((alias) => (
                        <span
                          key={alias}
                          className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#F2EEE7] text-navy border border-navy/10"
                        >
                          {alias}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-charcoal font-sans leading-relaxed mb-5">
                    Complete institutional uniform set: shirts, trousers, pleated skirts, knit sweaters, official blazers, crest ties, and embossed buckle belts.
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-2 mt-auto">
                  <Link
                    href={`/schools/${school.slug}`}
                    className="touch-target inline-flex items-center gap-1.5 text-xs font-poppins font-bold uppercase tracking-wider text-gold-antique hover:text-navy transition-colors"
                  >
                    <span>View Uniforms</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-navy text-white text-xs font-poppins font-semibold hover:bg-gold hover:text-navy transition-colors min-h-[44px]"
                    aria-label={`Enquire on WhatsApp about ${school.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-pearl rounded-2xl border border-navy/10 max-w-xl mx-auto">
          <SchoolIcon className="w-12 h-12 text-navy/30 mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-navy mb-2">
            No institutions found
          </h3>
          <p className="text-sm text-charcoal mb-6 font-sans">
            We partner with 124+ institutions across Alipurduar and Dooars. If your school is not listed, our bespoke institutional tailoring workshop can manufacture your exact school pattern.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCatchment("All");
              }}
              className="btn-pill btn-pill-outline text-xs"
            >
              Clear Search Filter
            </button>
            <a
              href={buildWhatsAppLink(inquiryMessages.bespokeTailoring())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-navy text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold" />
              <span>Request Custom Tailoring</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
