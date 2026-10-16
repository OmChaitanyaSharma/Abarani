"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, MapPin } from "lucide-react";
import Logo from "./Logo";
import { businessDetails, buildWhatsAppLink, inquiryMessages } from "@/config/seo";

const NAV_LINKS = [
  { label: "School Uniforms", href: "/schools" },
  { label: "Accessories", href: "/accessories" },
  { label: "Daily & Ethnic", href: "/daily-ethnic" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F2EEE7]/95 backdrop-blur-md border-b border-navy/15 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo Stack */}
          <div className="flex-shrink-0 py-2">
            <Logo size="md" variant="dark" href="/" />
          </div>

          {/* Desktop Navigation Links (Apple-Style Pill Buttons) */}
          <nav className="hidden lg:flex items-center gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`touch-target px-5 py-2.5 border-[1.5px] rounded-full font-poppins text-xs font-semibold uppercase tracking-[1.2px] transition-all duration-200 ${
                    isActive
                      ? "bg-navy text-pearl border-navy shadow-sm"
                      : "border-navy/20 text-navy hover:border-gold hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>



          {/* Mobile Menu Hamburger (44x44px touch target) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target p-2 rounded-lg text-navy hover:text-gold transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer (100dvh safe height, zero address bar displacement) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex justify-end bg-navy/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm bg-[#F2EEE7] h-[100dvh] flex flex-col shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top */}
            <div className="flex items-center justify-between pb-4 border-b border-navy/10">
              <Logo size="sm" variant="dark" href="/" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target p-2 text-navy hover:text-gold transition-colors flex items-center justify-center rounded-lg"
                aria-label="Close navigation drawer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links in Drawer */}
            <nav className="flex flex-col py-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`touch-target px-4 py-3 rounded-lg font-poppins text-sm uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-navy text-pearl"
                        : "text-navy hover:bg-navy/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Bottom Actions */}
            <div className="mt-auto pt-6 border-t border-navy/10 space-y-3">
              <a
                href={buildWhatsAppLink(inquiryMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-navy w-full text-center"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${businessDetails.telephone}`}
                className="btn-pill btn-pill-outline w-full text-center"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Store ({businessDetails.displayPhone})</span>
              </a>

              <a
                href={businessDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target flex items-center justify-center gap-2 text-xs font-poppins text-navy/70 hover:text-navy py-2"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Marwari Patty, Alipurduar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
