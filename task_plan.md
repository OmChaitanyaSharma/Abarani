# Task Plan: Abarani Cloth Shop Heritage Showcase & Direct-Booking Platform (v2.0)

## Project Overview
- **Client**: Abarani Cloth Shop (Founded in 1960)
- **Location**: Marwari Patty, FGJF+5JM, Rishi Rd, Alipurduar, West Bengal 736121
- **Domain**: Institutional tailoring partner & school uniform supplier for 124+ institutions
- **Architecture**: Next.js 16+ (App Router, SSG), Tailwind CSS 4, WCAG 2.2 AA mobile-first ergonomics, zero-backend direct conversion (WhatsApp, Click-to-Call, Maps).

---

## Phases & Active Execution Roadmap

### Phase 0: Specification Sign-off & On-Disk State Initialization
- [x] Enforce Phase 0 Stop-Gate (No application JSX/CSS/component code until approved)
- [x] Initialize on-disk tracking files (`task_plan.md`, `findings.md`, `progress.md`)
- [x] Output Showcase Decision Register (SDR-001 through SDR-008) populated with confirmed defaults
- [x] Receive User Confirmation / Sign-off on SDR-001 through SDR-008 (CONFIRMED)
- [x] Integrate Acronym/Alias Search Requirement (e.g., "KV" matches Kendriya Vidyalaya, "DPS" matches Delhi Public School)

### Phase 1: Design Tokens, Typography & Layout Scaffolding
- [x] Scaffold Next.js project with App Router, TypeScript, and Tailwind CSS in `x:\projects\ABARANI2`
- [x] Install UI dependencies (`lucide-react`)
- [x] Configure Tailwind theme tokens:
  - Surface Ivory: `#FCF9EB`, `#F8F2DF`
  - Deep Royal Navy: `#0A192F`, `#071224`
  - Champagne Gold: `#D4AF37`, `#C5A059`
  - Accessible Antique Gold: `#8C6809` (4.88:1 WCAG contrast on Ivory)
  - Pearl Off-White: `#FDFBF7`
  - Charcoal Body: `#2D3748` (10.4:1 WCAG AAA contrast on Ivory)
- [x] Configure Google Fonts in `src/app/layout.tsx`: `Playfair Display`, `Poppins`, `Inter`
- [x] Build `src/utils/slugify.ts` (deterministic ASCII slug engine & search token normalizer)
- [x] Build `src/config/schools.ts` with 124+ institutions, catchments, and multi-alias search indexing
- [x] Build `src/config/seo.ts` with metadata and `LocalBusiness` JSON-LD schema
- [x] Create `LotusEmblem.tsx` (crisp inline Gold Lotus SVG) and `Logo.tsx` (strict bilingual brand stack)
- [x] Build `Header.tsx` with desktop links and accessible mobile drawer (`100dvh`, 44x44px touch targets)
- [x] Build `Footer.tsx` with NAP details, business hours, and 8-catchment index
- [x] Build `StickyWhatsAppBar.tsx` (thumb-friendly mobile conversion bar)
- [x] Verify baseline layout stability (zero horizontal scroll on 360px width, `overflow-x: clip`)

### Phase 2: Core Components & Programmatic Catalog Assembly
- [x] Build Asymmetric Heritage Hero Section in `src/app/page.tsx` with proof metrics and quick search
- [x] Build Interactive School Directory (`/schools`) with real-time acronym/alias filtering
- [x] Build Programmatic Static School Detail Routes (`/schools/[schoolSlug]/page.tsx`) with `generateStaticParams`
- [x] Build School Uniform Checklist card with "Always In Stock" and bespoke tailoring fallback
- [x] Implement Direct Conversion Engine (pre-filled WhatsApp queries per school and item)
- [x] Build Institutional Accessories Showcase (`/accessories`: badges, ties, belts, socks)
- [x] Build Traditional Daily & Ethnic Wear Catalog (`/daily-ethnic`: Bengali dhotis, kids sarees)
- [x] Build Physical Store Routing Page (`/contact` with Google Maps pin and directions)

### Phase 3: Diagnostics, Copy Sanitization & Production Hardening
- [x] Verify LocalBusiness JSON-LD injection in root layout
- [x] Run `unslop` copy sanitization across all customer-facing text and documentation
- [x] Audit touch targets (min 44x44px) and color contrast ratios (WCAG 2.2 AA)
- [x] Run `secure-skill` comprehensive audit (Pass 1 & Pass 2, .gitignore, secrets isolation, CSP)
- [x] Run `shannon` adversarial penetration test suite (XSS, BOLA, SSRF, ReDoS probes)
- [x] Run `npm run build` and verify that all 124+ school routes are generated as static SSG pages
- [x] Verify port rules: run on 3000 or 5174 (strictly never 5173)

---

## Hard Architectural Invariants
1. **Zero Ghost Backend**: No databases, no auth, no Stripe, no Supabase. Direct client conversions only.
2. **Port Constraint**: Never bind to `localhost:5173` (reserved exclusively for Daily Tracker).
3. **No Dynamic Price Lists**: Only product names and specifications; dynamic pricing routed to WhatsApp.
4. **Ergonomic Baseline**: 360px viewport priority, 44x44px minimum touch targets, 16px minimum form inputs.
5. **Dynamic SSG**: Every school route statically generated ahead of time via `generateStaticParams`.
6. **Alias-Aware Search**: Acronyms (e.g., KV, DPS, JNV, TIT, CSC) and phonetic variations match instantly.
