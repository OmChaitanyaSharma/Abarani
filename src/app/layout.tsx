import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsAppBar from "@/components/StickyWhatsAppBar";
import { generateLocalBusinessSchema, businessDetails } from "@/config/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abarani.in"),
  title: "Abarani Cloth Shop (আবরনী) — School Uniforms & Institutional Tailoring | Alipurduar (Estd. 1960)",
  description:
    "Alipurduar's primary school uniform supplier & institutional tailoring partner for 124+ schools. Founded in 1960 at Marwari Patty, Rishi Road. Official uniforms, accessories, and traditional Bengali wear.",
  keywords: [
    "Abarani Cloth Shop",
    "Abarani Alipurduar",
    "school uniforms Alipurduar",
    "institutional tailoring West Bengal",
    "Marwari Patty cloth store",
    "Rishi Road uniform shop",
    "Kendriya Vidyalaya APD uniform",
    "Dooars school dress supplier",
    "Bengali dhotis Alipurduar",
  ],
  authors: [{ name: "Abarani Cloth Shop" }],
  creator: "Abarani Cloth Shop",
  publisher: "Abarani Cloth Shop",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Abarani Cloth Shop (আবরনী) — School Uniforms & Tailoring | Alipurduar",
    description:
      "Alipurduar's premier school uniform supplier for 124+ institutions since 1960. Always in stock guarantee and bespoke tailoring at Marwari Patty.",
    url: "https://abarani.in",
    siteName: "Abarani Cloth Shop",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 559,
        alt: "Abarani Cloth Shop Official Brand Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://abarani.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="bg-ivory text-charcoal font-sans antialiased min-h-screen flex flex-col selection:bg-gold/30 selection:text-navy">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <StickyWhatsAppBar />
      </body>
    </html>
  );
}
