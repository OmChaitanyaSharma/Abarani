# Findings & Technical Context: Abarani Cloth Shop (v2.0)

## Physical Location & Identity Records
- **Legal / Business Name**: Abarani Cloth Shop (English) / আবরনী (Bengali)
- **Year Established**: 1960 (~64+ years institutional legacy in Alipurduar)
- **Address**: Marwari Patty, FGJF+5JM, Rishi Rd, Alipurduar, West Bengal 736121
- **Google Maps CID / Shortlink**: `https://share.google/5BjKqnTebwRea1bhZ` (Plus Code: `FGJF+5JM`)
- **Hours of Operation**: Monday – Sunday, 9:00 AM – 9:00 PM IST
- **Google Reviews Baseline**: 3.9★ (20+ direct reviews)

## Contact & Direct Conversion Channels
- **Primary Conversion Protocol**: Direct WhatsApp (`wa.me`) click-to-chat
- **Telephone / Call**: Direct tap-to-call links (`tel:+919876543210` configurable)
- **Physical Directions**: Google Maps direct navigation pin

## Acronym & Search Alias Architecture (Approved Requirement)
In addition to full school titles, users commonly query institutions using colloquial abbreviations and acronyms. The search engine in `src/config/schools.ts` must maintain an `aliases` array for each entry:
- `Kendriya Vidyalaya APD Jn`: `["KV", "K.V.", "KV APD", "KVS", "Kendriya Vidayala"]`
- `Delhi Public School`: `["DPS", "D.P.S", "Delhi Public"]`
- `G.D Goenka (Park Road)`: `["GD Goenka", "G.D. Goenka", "Goenka"]`
- `Jahar Nabadaya Vidyalay (Barobisha)`: `["JNV", "J.N.V", "Navodaya", "Jawahar Navodaya"]`
- `C.S.C Bal Vidyalaya (Pranamananda)`: `["CSC", "C.S.C", "Bal Vidyalaya"]`
- `Techno India Tapsikhata`: `["TIT", "Techno", "Techno India"]`
- `Vivekananda Sishuniketan / Sishutirtha`: `["VKV", "Vivekananda", "Sishuniketan"]`
- `Ramkrishna Sharadaya / Sishu Shikkha Mandir`: `["RK", "Ramkrishna", "RKM"]`

Search indexing must sanitize query tokens (stripping dots, hyphens, and whitespace) and match against `name`, `slug`, `catchment`, and all `aliases`.

## Catchment & Institutional Dataset Breakdown
A total of 124 distinct educational institutions across 8 geographic catchments in Alipurduar District:
1. **Alipurduar Town (11 institutions)**: Balika Shikkha Mandir, Bright Star Model School, C.S.C Bal Vidyalaya, Gems Kinder Land, Kendriya Vidyalaya APD Jn, Manimala Primary, Okland Public, Railway High School, Sacred Heart Public, Shem Ford Little Star, Tiny Tots English Medium.
2. **Baneshwar (5 institutions)**: Aarati Devi Memorial, Anandamarg Baneshwar, Don Queen Nursery, Dooars International Public, Himayat Guru of Education.
3. **Samuktala (8 institutions)**: Convent Mission, Foot Hill Public, Gyanmarg Path Bhaban, Hessed English School, Samuktala Sharada Sishutirtha, Vivekananda Sishuniketan, Grace Academy, Stepping Stone Model.
4. **Kamakhyaguri (6 institutions)**: Anandamarg Kamakhyaguri, Eternal Light, G.S Model (Barabisha), Jahar Nabadaya Vidyalay, Sister Nivedita Convent, Vedanta Academy.
5. **Sonapur (8 institutions)**: Gurudayal Jay Sundari Sharada Sishutirtha, Netaji Sishuniketan, Netaji Sishusadan, Path Inclusive Model, Peter Bell School, Sonapur B.K High School, Sonapur Next Children Model, Sonapur Sishutirtha.
6. **Falakata & Dooars West (7 institutions)**: Falakata High School, Gyanankur, Sishu Sadan, Sri Sri Gyanmandir, Galaxy English Medium, Holly Cross English, Jaigaon Sukanto Vidyapeeth.
7. **Tapsikhata (8 institutions)**: Little Flowers, Pakritola Vibekananda Sishuniketan, Techno India Tapsikhata, Anandamarg Salsalabari, Tapaban Sishuniketan, Frances Academy, Little Star Nursery, Children Growup Academy.
8. **Additional Catchments & Rural Dooars (71 institutions)**: Comprehensive coverage across Babupara, Bhatibari, Hamiltonganj, Kokrajhar border, etc.

## Technical & Architectural Constraints
- **Framework**: Next.js 15+ App Router with Static Site Generation (`output: 'export'` or SSG via `generateStaticParams`).
- **Styling**: Tailwind CSS with custom heritage design tokens.
- **Fonts**: `@next/font/google` with `Playfair Display`, `Poppins`, `Inter`.
- **Port Rule**: Never run on port 5173 (reserved exclusively for Daily Tracker). Run on 3000 or 5174.
