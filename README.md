# Abarani Cloth Shop (আবরনী) — Digital Showcase & Programmatic Catalog (v2.0)

A bespoke showcase and programmatic catalog site for **Abarani Cloth Shop** (Founded 1960 — Marwari Patty, Rishi Road, Alipurduar, West Bengal 736121).

Abarani is Alipurduar's primary school uniform manufacturer and institutional tailoring partner, serving 124+ schools and institutions across the Dooars region.

## Architectural Principles

1. **Zero Ghost Backend**: No databases, no user accounts, and no third-party checkout ledgers. All conversions route directly to physical retail visits, phone calls, or WhatsApp chats with pre-filled inquiries.
2. **Dynamic SSG via `generateStaticParams`**: Every one of the 124+ school uniform catalog pages is statically generated at build time.
3. **Acronym & Synonym Search Indexing**: Instant client-side search matching shorthand acronyms (e.g., `KV` for Kendriya Vidyalaya APD Jn, `DPS` for Delhi Public School, `JNV` for Jahar Nabadaya Vidyalay) alongside full names and catchments.
4. **Mobile Ergonomics (WCAG 2.2 AA)**:
   - Formatted for 360px viewport baseline.
   - Root container set to `overflow-x: clip` to eliminate horizontal scroll.
   - Mobile drawers use `100dvh` to prevent mobile address bar displacement.
   - Minimum 44x44px touch targets on all interactive triggers.
   - Sticky conversion bar in the bottom thumb zone for one-touch WhatsApp inquiries.
5. **Bilingual Brand Identity**:
   - Gold Lotus emblem (inline vector).
   - English display: `ABARANI` (`Playfair Display`, bold serif).
   - Bengali script: `আবরনী`.
   - Monogram sub-brand: `HERITAGE | CLOTHING | UNIFORMS` (`Poppins` uppercase tracking).

---

## Color Tokens & Design System

- **Surface Background**: Warm Heritage Ivory (`#FCF9EB`, `#F8F2DF`)
- **Deep Contrast / Surfaces**: Deep Royal Navy (`#0A192F`, `#071224`)
- **Accents & Borders**: Champagne Gold (`#D4AF37`, `#C5A059`)
- **Light Contrast**: Warm Pearl Off-White (`#FDFBF7`)
- **Body Copy**: Deep Charcoal (`#4A5568`)

---

## Directory Structure

```
├── public/                 # Static brand assets (lotus-logo.png, logo.png)
├── src/
│   ├── app/
│   │   ├── accessories/    # Official school accessories catalog
│   │   ├── contact/        # Showroom address, Plus Code, directions
│   │   ├── daily-ethnic/   # Traditional Bengali dhotis & festival sarees
│   │   ├── schools/        # 124+ school directory with acronym filtering
│   │   │   └── [schoolSlug]/ # Programmatic SSG school detail template
│   │   ├── globals.css     # Tailwind 4 theme, layout clipping, buttons
│   │   ├── layout.tsx      # Root layout, Google fonts, LocalBusiness JSON-LD
│   │   └── page.tsx        # Homepage with 4-tile asymmetric hero & search
│   ├── components/
│   │   ├── Footer.tsx      # NAP details, business hours, catchment index
│   │   ├── Header.tsx      # Desktop nav & 100dvh mobile slide-over drawer
│   │   ├── Logo.tsx        # Strict bilingual brand stack
│   │   ├── LotusEmblem.tsx # Crisp inline SVG Gold Lotus motif
│   │   ├── SchoolSearch.tsx# Acronym-aware search & catchment filter
│   │   └── StickyWhatsAppBar.tsx # Mobile persistent conversion bar
│   ├── config/
│   │   ├── schools.ts      # 124+ institutions, catchments, uniform profiles, aliases
│   │   └── seo.ts          # Metadata, schema generator, WhatsApp URL builders
│   └── utils/
│       └── slugify.ts      # Deterministic ASCII slug generator & token normalizer
├── findings.md             # On-disk business data & search indexing specifications
├── progress.md             # Verification log and production build status
├── task_plan.md            # Active roadmap and milestone checklist
└── next.config.ts          # Strict CSP, security headers, production settings
```

---

## Local Catchment Coverage (124+ Institutions)

- **Alipurduar Town (11)**: Kendriya Vidyalaya APD Jn, Delhi Public School, Balika Shikkha Mandir, Bright Star Model School, C.S.C Bal Vidyalaya, Gems Kinder Land, Manimala Primary, Okland Public, Railway High School, Sacred Heart Public, Shem Ford Little Star, Tiny Tots.
- **Baneshwar (5)**: Aarati Devi Memorial, Anandamarg Baneshwar, Don Queen Nursery, Dooars International Public, Himayat Guru of Education.
- **Samuktala (8)**: Convent Mission, Foot Hill Public, Gyanmarg Path Bhaban, Hessed English, Samuktala Sharada Sishutirtha, Vivekananda Sishuniketan, Grace Academy, Stepping Stone Model.
- **Kamakhyaguri (6)**: Anandamarg Kamakhyaguri, Eternal Light, G.S Model (Barabisha), Jahar Nabadaya Vidyalay, Sister Nivedita Convent, Vedanta Academy.
- **Sonapur (8)**: Gurudayal Jay Sundari Sharada Sishutirtha, Netaji Sishuniketan, Netaji Sishusadan, Path Inclusive Model, Peter Bell School, Sonapur B.K High School, Sonapur Next Children Model, Sonapur Sishutirtha.
- **Falakata & Dooars West (7)**: Falakata High School, Gyanankur, Sishu Sadan, Sri Sri Gyanmandir, Galaxy English Medium, Holly Cross English, Jaigaon Sukanto Vidyapeeth.
- **Tapsikhata (8)**: Little Flowers, Pakritola Vibekananda Sishuniketan, Techno India Tapsikhata, Anandamarg Salsalabari, Tapaban Sishuniketan, Frances Academy, Little Star Nursery, Children Growup Academy.
- **Additional Dooars Catchments (71)**: G.D Goenka, Kidzee, Euro Kids, Ramkrishna Sishu Shikkha Mandir, St. Xaviers, and regional schools across rural Dooars.

---

## Development & Build Commands

> **Important**: This project runs on port `3000` (or `5174`). Never bind to port `5173`.

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
# Starts on http://localhost:3000
```

### Production Build & Static Site Generation
```bash
npm run build
```
Generates 125 static HTML routes (homepage, 4 catalog routes, 124+ programmatic school pages) ahead of time.
