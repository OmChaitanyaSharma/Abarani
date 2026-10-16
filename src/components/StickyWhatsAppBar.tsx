"use client";

import { MessageSquare, Phone } from "lucide-react";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

interface StickyWhatsAppBarProps {
  customMessage?: string;
}

export default function StickyWhatsAppBar({ customMessage }: StickyWhatsAppBarProps) {
  const whatsappUrl = buildWhatsAppLink(
    customMessage || inquiryMessages.general()
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#F2EEE7]/95 backdrop-blur-md border-t border-navy/15 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call Action (44x44px target) */}
        <a
          href={`tel:${businessDetails.telephone}`}
          className="touch-target w-12 h-12 rounded-full border border-navy/20 bg-white flex items-center justify-center text-navy hover:text-gold hover:border-gold transition-colors flex-shrink-0 shadow-xs"
          aria-label={`Call Abarani at ${businessDetails.displayPhone}`}
        >
          <Phone className="w-5 h-5 text-gold" />
        </a>

        {/* Primary WhatsApp Conversion Trigger */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target flex-1 h-12 rounded-full bg-navy text-white border border-gold/40 flex items-center justify-center gap-2.5 font-poppins text-xs uppercase tracking-wider font-semibold shadow-md active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-gold" />
          <span>Enquire via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
