import { slugify, normalizeSearchToken } from "@/utils/slugify";

export interface UniformItem {
  id: string;
  name: string;
  category: "Shirts" | "Bottoms" | "Outerwear" | "Accessories" | "Daily/Ethnic";
  description: string;
  inStock: boolean;
  tags?: string[];
}

export interface School {
  id: string;
  name: string;
  slug: string;
  catchment: string;
  aliases: string[];
  board?: string;
  gender: "Co-ed" | "Boys" | "Girls";
  level: "Primary" | "Secondary" | "Higher Secondary" | "K-12";
  uniforms: UniformItem[];
}

export const CATCHMENTS = [
  "All",
  "Alipurduar Town",
  "Baneshwar",
  "Samuktala",
  "Kamakhyaguri",
  "Sonapur",
  "Falakata",
  "Tapsikhata",
  "Additional Dooars",
] as const;

export type CatchmentType = (typeof CATCHMENTS)[number];

const defaultUniformItems = (schoolName: string): UniformItem[] => [
  {
    id: "shirt-half",
    name: `${schoolName} Boys & Girls Half Sleeve Shirt`,
    category: "Shirts",
    description: "Standard fit cotton-blend breathable uniform shirt with school monogram crest.",
    inStock: true,
    tags: ["shirt", "half sleeve", "summer uniform", "cotton"],
  },
  {
    id: "shirt-full",
    name: `${schoolName} Full Sleeve Regular Shirt`,
    category: "Shirts",
    description: "Full sleeve tailored uniform shirt for formal institutional assembly.",
    inStock: true,
    tags: ["shirt", "full sleeve", "formal", "assembly"],
  },
  {
    id: "pant-trouser",
    name: `${schoolName} Regular Fit Trousers / Pants`,
    category: "Bottoms",
    description: "Durable wrinkle-resistant institutional fabric trousers with reinforced waistband.",
    inStock: true,
    tags: ["trousers", "pants", "full pant", "boys pant"],
  },
  {
    id: "skirt-tunic",
    name: `${schoolName} Pleated Skirt / School Tunic`,
    category: "Bottoms",
    description: "High-grade box pleated skirt or tunic with secure side zip and comfort waist.",
    inStock: true,
    tags: ["skirt", "tunic", "pinafore", "girls uniform", "pleated"],
  },
  {
    id: "winter-sweater",
    name: `${schoolName} V-Neck Winter Knit Sweater`,
    category: "Outerwear",
    description: "Soft wool-blend warm knit sweater with authentic dual-color collar trim.",
    inStock: true,
    tags: ["sweater", "winter", "pullover", "v-neck"],
  },
  {
    id: "school-blazer",
    name: `${schoolName} Official Institutional Blazer`,
    category: "Outerwear",
    description: "Bespoke tailored woollen blazer with official embroidered school crest.",
    inStock: true,
    tags: ["blazer", "coat", "winter formal", "crest"],
  },
  {
    id: "school-tie",
    name: `${schoolName} Woven Crest Tie`,
    category: "Accessories",
    description: "School colors woven striped necktie with anti-fray reinforced tips.",
    inStock: true,
    tags: ["tie", "necktie", "accessories"],
  },
  {
    id: "school-belt",
    name: `${schoolName} Embossed Metal Buckle Belt`,
    category: "Accessories",
    description: "Adjustable heavy-duty webbed belt with official engraved school buckle.",
    inStock: true,
    tags: ["belt", "buckle", "accessories"],
  },
  {
    id: "school-socks",
    name: `${schoolName} Cotton Ribbed Socks (Pack of 3)`,
    category: "Accessories",
    description: "Sweat-absorbent combed cotton socks with contrast school stripe bands.",
    inStock: true,
    tags: ["socks", "cotton socks", "accessories"],
  },
  {
    id: "school-badge",
    name: `${schoolName} Metal Chest Badge & Patch`,
    category: "Accessories",
    description: "Official brass pin-back chest crest badge and iron-on embroidered pocket monogram.",
    inStock: true,
    tags: ["badge", "monogram", "crest", "pin"],
  },
];

interface RawSchoolData {
  name: string;
  catchment: string;
  aliases: string[];
  gender?: "Co-ed" | "Boys" | "Girls";
  level?: "Primary" | "Secondary" | "Higher Secondary" | "K-12";
}

const RAW_SCHOOLS: RawSchoolData[] = [
  // 1. Alipurduar Town (11)
  {
    name: "Kendriya Vidyalaya APD Jn",
    catchment: "Alipurduar Town",
    aliases: ["KV", "K.V.", "KV APD", "KVS", "Kendriya Vidyalaya", "Kendriya Vidayala", "Central School", "KV Alipurduar"],
    level: "K-12",
  },
  {
    name: "Delhi Public School",
    catchment: "Alipurduar Town",
    aliases: ["DPS", "D.P.S", "Delhi Public", "DPS Alipurduar", "Delhi Public School APD"],
    level: "K-12",
  },
  {
    name: "Balika Shikkha Mandir",
    catchment: "Alipurduar Town",
    aliases: ["BSM", "Balika Siksha Mandir", "Balika Vidyalaya", "Girls School APD"],
    gender: "Girls",
    level: "Higher Secondary",
  },
  {
    name: "Bright Star Model School",
    catchment: "Alipurduar Town",
    aliases: ["BSMS", "Bright Star", "Bright Star School"],
    level: "Secondary",
  },
  {
    name: "C.S.C Bal Vidyalaya (Pranamananda)",
    catchment: "Alipurduar Town",
    aliases: ["CSC", "C.S.C", "CSC Bal Vidyalaya", "Bal Vidyalaya", "Pranamananda", "CSC School"],
    level: "Secondary",
  },
  {
    name: "Gems Kinder Land School",
    catchment: "Alipurduar Town",
    aliases: ["Gems", "Gems Kinderland", "GKLS", "Kinder Land"],
    level: "Primary",
  },
  {
    name: "Manimala Primary School",
    catchment: "Alipurduar Town",
    aliases: ["Manimala", "MPS", "Manimala Primary", "Manimala School"],
    level: "Primary",
  },
  {
    name: "Okland Public School",
    catchment: "Alipurduar Town",
    aliases: ["OPS", "Okland Public", "Oakland", "Oakland Public School"],
    level: "Secondary",
  },
  {
    name: "Railway High School",
    catchment: "Alipurduar Town",
    aliases: ["RHS", "Railway School", "Railway High", "Alipurduar Railway High School", "Railway School APD"],
    level: "Higher Secondary",
  },
  {
    name: "Sacred Heart Public School",
    catchment: "Alipurduar Town",
    aliases: ["SHPS", "Sacred Heart", "Sacred Heart School"],
    level: "Higher Secondary",
  },
  {
    name: "Shem Ford Little Star School",
    catchment: "Alipurduar Town",
    aliases: ["Shemford", "Shem Ford", "Little Star", "Shem Ford School"],
    level: "Primary",
  },
  {
    name: "Tiny Tots English Medium School",
    catchment: "Alipurduar Town",
    aliases: ["Tiny Tots", "TTEMS", "Tiny Tots School", "Tiny Tots APD"],
    level: "Primary",
  },

  // 2. Baneshwar (5)
  {
    name: "Aarati Devi Memorial School",
    catchment: "Baneshwar",
    aliases: ["ADMS", "Aarati Devi", "Arati Devi", "Aarati Memorial"],
    level: "Secondary",
  },
  {
    name: "Anandamarg Baneshwar",
    catchment: "Baneshwar",
    aliases: ["Ananda Marg Baneshwar", "AM Baneshwar", "Ananda Marga"],
    level: "Primary",
  },
  {
    name: "Don Queen Nursery School",
    catchment: "Baneshwar",
    aliases: ["DQNS", "Don Queen", "Don Queen School", "Don Queen Nursery"],
    level: "Primary",
  },
  {
    name: "Dooars International Public School",
    catchment: "Baneshwar",
    aliases: ["DIPS", "Dooars International", "DIPS Baneshwar"],
    level: "Secondary",
  },
  {
    name: "Himayat Guru of Education",
    catchment: "Baneshwar",
    aliases: ["HGE", "Himayat Guru", "Himayat School", "Guru of Education"],
    level: "Secondary",
  },

  // 3. Samuktala (8)
  {
    name: "Convent Mission School",
    catchment: "Samuktala",
    aliases: ["CMS", "Convent Mission", "Convent Samuktala"],
    level: "Secondary",
  },
  {
    name: "Foot Hill Public School",
    catchment: "Samuktala",
    aliases: ["FHPS", "Foot Hill", "Foothill Public", "Foot Hills"],
    level: "Secondary",
  },
  {
    name: "Gyanmarg Path Bhaban",
    catchment: "Samuktala",
    aliases: ["GMPB", "Gyanmarg", "Path Bhaban", "Gyanmarg Path Bhavan"],
    level: "Secondary",
  },
  {
    name: "Hessed English School",
    catchment: "Samuktala",
    aliases: ["HES", "Hessed", "Hessed English"],
    level: "Secondary",
  },
  {
    name: "Samuktala Sharada Sishutirtha (Dharsi)",
    catchment: "Samuktala",
    aliases: ["SSSS", "Sharada Sishutirtha Dharsi", "Samuktala Sishutirtha", "Dharsi Sishutirtha"],
    level: "Primary",
  },
  {
    name: "Vivekananda Sishuniketan",
    catchment: "Samuktala",
    aliases: ["VSN", "VKV", "Vivekananda Sishuniketan", "Vivekananda School", "Vivekananda Samuktala"],
    level: "Secondary",
  },
  {
    name: "Grace Academy (Mahakal Guri)",
    catchment: "Samuktala",
    aliases: ["Grace Academy", "Mahakal Guri", "Grace Mahakalguri"],
    level: "Secondary",
  },
  {
    name: "Stepping Stone Model School (Mahakal Dham)",
    catchment: "Samuktala",
    aliases: ["SSMS", "Stepping Stone", "Stepping Stone Model", "Mahakal Dham"],
    level: "Secondary",
  },

  // 4. Kamakhyaguri (6)
  {
    name: "Anandamarg Kamakhyaguri",
    catchment: "Kamakhyaguri",
    aliases: ["Ananda Marg Kamakhyaguri", "AM Kamakhyaguri"],
    level: "Primary",
  },
  {
    name: "Eternal Light School",
    catchment: "Kamakhyaguri",
    aliases: ["ELS", "Eternal Light", "Eternal Light Kamakhyaguri"],
    level: "Secondary",
  },
  {
    name: "G.S Model School (Barabisha)",
    catchment: "Kamakhyaguri",
    aliases: ["GSMS", "GS Model", "Barabisha", "GS Model Barabisha"],
    level: "Secondary",
  },
  {
    name: "Jahar Nabadaya Vidyalay (Barobisha)",
    catchment: "Kamakhyaguri",
    aliases: ["JNV", "J.N.V", "Jawahar Navodaya", "Jahar Nabadaya", "Barobisha JNV", "Navodaya Barobisha", "JNV Barobisha"],
    level: "K-12",
  },
  {
    name: "Sister Nivedita Convent School",
    catchment: "Kamakhyaguri",
    aliases: ["SNCS", "Sister Nivedita Convent", "Nivedita Convent"],
    level: "Secondary",
  },
  {
    name: "Vedanta Academy (Kumar Gram)",
    catchment: "Kamakhyaguri",
    aliases: ["Vedanta", "Vedanta Academy", "Kumar Gram", "Kumargram Vedanta"],
    level: "Secondary",
  },

  // 5. Sonapur (8)
  {
    name: "Gurudayal Jay Sundari Sharada Sishutirtha",
    catchment: "Sonapur",
    aliases: ["GJSSSS", "Gurudayal Sishutirtha", "Jay Sundari", "Gurudayal School"],
    level: "Primary",
  },
  {
    name: "Netaji Sishuniketan (Silbari Hat)",
    catchment: "Sonapur",
    aliases: ["NSN", "Netaji Sishuniketan Silbari Hat", "Silbari Hat", "Netaji Silbari"],
    level: "Primary",
  },
  {
    name: "Netaji Sishusadan (Salbari)",
    catchment: "Sonapur",
    aliases: ["NSS", "Netaji Sishusadan Salbari", "Salbari", "Netaji Salbari"],
    level: "Primary",
  },
  {
    name: "Path Inclusive Model School",
    catchment: "Sonapur",
    aliases: ["PIMS", "Path Inclusive", "Path Model School"],
    level: "Secondary",
  },
  {
    name: "Peter Bell School (Sonapur Chowpathy)",
    catchment: "Sonapur",
    aliases: ["PBS", "Peter Bell", "Sonapur Chowpathy", "Peter Bell School"],
    level: "Secondary",
  },
  {
    name: "Sonapur B.K High School",
    catchment: "Sonapur",
    aliases: ["SBKHS", "BK High School", "Sonapur High", "Sonapur BK"],
    level: "Higher Secondary",
  },
  {
    name: "Sonapur Next Children Model School",
    catchment: "Sonapur",
    aliases: ["Next Children Model", "Sonapur Model", "Next Children"],
    level: "Primary",
  },
  {
    name: "Sonapur Sishutirtha (Naya Sonapur Chowpathy)",
    catchment: "Sonapur",
    aliases: ["Sonapur Sishutirtha", "Naya Sonapur", "Naya Sonapur Chowpathy"],
    level: "Primary",
  },

  // 6. Falakata & Dooars West (7)
  {
    name: "Falakata High School",
    catchment: "Falakata",
    aliases: ["FHS", "Falakata High", "Falakata School"],
    level: "Higher Secondary",
  },
  {
    name: "Gyanankur (Birpara)",
    catchment: "Falakata",
    aliases: ["Gyanankur Birpara", "Birpara Gyanankur", "Gyanankur School"],
    level: "Secondary",
  },
  {
    name: "Sishu Sadan (Birpara)",
    catchment: "Falakata",
    aliases: ["Sishu Sadan Birpara", "Birpara Sishu Sadan"],
    level: "Primary",
  },
  {
    name: "Sri Sri Gyanmandir School (Birpara)",
    catchment: "Falakata",
    aliases: ["Gyanmandir Birpara", "SSGS", "Sri Sri Gyanmandir"],
    level: "Secondary",
  },
  {
    name: "Galaxy English Medium School (Kalchini)",
    catchment: "Falakata",
    aliases: ["GEMS Kalchini", "Galaxy School", "Kalchini Galaxy", "Galaxy English Medium"],
    level: "Secondary",
  },
  {
    name: "Holly Cross English School (Hashimara)",
    catchment: "Falakata",
    aliases: ["Holy Cross", "Holly Cross", "Hashimara Holy Cross", "Holy Cross Hashimara", "HCES"],
    level: "Higher Secondary",
  },
  {
    name: "Jaigaon Sukanto Vidyapeeth",
    catchment: "Falakata",
    aliases: ["JSV", "Jaigaon Sukanto", "Sukanto Vidyapeeth", "Sukanta Vidyapith"],
    level: "Secondary",
  },

  // 7. Tapsikhata (8)
  {
    name: "Little Flowers",
    catchment: "Tapsikhata",
    aliases: ["Little Flowers School", "LFS", "Little Flowers Tapsikhata"],
    level: "Primary",
  },
  {
    name: "Pakritola Vibekananda Sishuniketan",
    catchment: "Tapsikhata",
    aliases: ["Pakritola Sishuniketan", "PVSN", "Pakritola Vivekananda"],
    level: "Primary",
  },
  {
    name: "Techno India Tapsikhata",
    catchment: "Tapsikhata",
    aliases: ["TIT", "Techno", "Techno India", "Techno Tapsikhata", "Techno India Group"],
    level: "Secondary",
  },
  {
    name: "Anandamarg Salsalabari",
    catchment: "Tapsikhata",
    aliases: ["Ananda Marg Salsalabari", "AM Salsalabari", "Salsalabari"],
    level: "Primary",
  },
  {
    name: "Tapaban Sishuniketan",
    catchment: "Tapsikhata",
    aliases: ["Tapaban", "TSN", "Tapaban School"],
    level: "Primary",
  },
  {
    name: "Frances Academy",
    catchment: "Tapsikhata",
    aliases: ["Frances", "Francis Academy", "Frances School"],
    level: "Secondary",
  },
  {
    name: "Little Star Nursery School (Bonchuka Mari)",
    catchment: "Tapsikhata",
    aliases: ["Little Star Bonchuka Mari", "Bonchuka Mari"],
    level: "Primary",
  },
  {
    name: "Children Growup Academy (Uttar Patkapara)",
    catchment: "Tapsikhata",
    aliases: ["CGA", "Children Growup", "Uttar Patkapara"],
    level: "Primary",
  },

  // 8. Additional Dooars Catchments (71)
  {
    name: "G.D Goenka (Park Road)",
    catchment: "Additional Dooars",
    aliases: ["GD Goenka", "G.D. Goenka", "Goenka", "GD Goenka Alipurduar", "GDGPS"],
    level: "K-12",
  },
  {
    name: "Kidzee",
    catchment: "Additional Dooars",
    aliases: ["Kidzee APD", "Kidzee School", "Kidzee Alipurduar"],
    level: "Primary",
  },
  {
    name: "Euro Kids",
    catchment: "Additional Dooars",
    aliases: ["EuroKids", "Euro Kids APD", "Euro Kids School"],
    level: "Primary",
  },
  {
    name: "A.G Mission School (Dhalkar)",
    catchment: "Additional Dooars",
    aliases: ["AG Mission", "Dhalkar AG Mission", "AGMS"],
    level: "Secondary",
  },
  {
    name: "Alokdoot & Alokdoot Sishu Vidyalaya (Jam Tala / Chaporer Par)",
    catchment: "Additional Dooars",
    aliases: ["Alokdoot", "Alokdoot Sishu Vidyalaya", "Jam Tala", "Chaporer Par"],
    level: "Primary",
  },
  {
    name: "Anandamarg (Jora Dukan)",
    catchment: "Additional Dooars",
    aliases: ["Ananda Marg Jora Dukan", "AM Jora Dukan"],
    level: "Primary",
  },
  {
    name: "Assembly of Angel (Babupara)",
    catchment: "Additional Dooars",
    aliases: ["Assembly of God", "Assembly of Angel", "Babupara School", "AOAB"],
    level: "Secondary",
  },
  {
    name: "B.S Memorial English School (Tur Turi)",
    catchment: "Additional Dooars",
    aliases: ["BS Memorial", "Tur Turi", "BSMES"],
    level: "Secondary",
  },
  {
    name: "Bidhan Chandra Ray Vidyapeeth (Natabari)",
    catchment: "Additional Dooars",
    aliases: ["BCR Vidyapeeth", "Natabari School", "Bidhan Chandra Roy"],
    level: "Higher Secondary",
  },
  {
    name: "Binapani Sishuniketan",
    catchment: "Additional Dooars",
    aliases: ["Binapani", "BPSN", "Binapani School"],
    level: "Primary",
  },
  {
    name: "Children Paradise",
    catchment: "Additional Dooars",
    aliases: ["Children Paradise School", "CPS"],
    level: "Primary",
  },
  {
    name: "Creative English School (Kokrajhar)",
    catchment: "Additional Dooars",
    aliases: ["CES", "Creative English", "Kokrajhar School"],
    level: "Secondary",
  },
  {
    name: "Dangi Mission English School",
    catchment: "Additional Dooars",
    aliases: ["Dangi Mission", "DMES", "Dangi School"],
    level: "Secondary",
  },
  {
    name: "Dream Light Academy (Pagli Bhutan)",
    catchment: "Additional Dooars",
    aliases: ["Dream Light", "Pagli Bhutan", "DLA"],
    level: "Secondary",
  },
  {
    name: "Gyandeep Sishu Niketan (Bokali Math)",
    catchment: "Additional Dooars",
    aliases: ["Gyandeep", "Bokali Math", "GSN"],
    level: "Primary",
  },
  {
    name: "Holly Orchid Public School",
    catchment: "Additional Dooars",
    aliases: ["Holy Orchid", "Holly Orchid", "HOPS"],
    level: "Secondary",
  },
  {
    name: "Janadip Sishuniketan",
    catchment: "Additional Dooars",
    aliases: ["Janadip", "JSN", "Janadip School"],
    level: "Primary",
  },
  {
    name: "K.M Academy",
    catchment: "Additional Dooars",
    aliases: ["KM Academy", "KMA"],
    level: "Secondary",
  },
  {
    name: "Kiddy Cloud Nursery School",
    catchment: "Additional Dooars",
    aliases: ["Kiddy Cloud", "KCNS"],
    level: "Primary",
  },
  {
    name: "Kolkakuli Adarsha Vidyalaya",
    catchment: "Additional Dooars",
    aliases: ["Kolkakuli", "KAV"],
    level: "Primary",
  },
  {
    name: "Little Angel School (Hamiltonganj)",
    catchment: "Additional Dooars",
    aliases: ["Little Angel", "Hamiltonganj", "LAS"],
    level: "Primary",
  },
  {
    name: "Little Genius",
    catchment: "Additional Dooars",
    aliases: ["Little Genius School", "LGS"],
    level: "Primary",
  },
  {
    name: "Little Star Public School (Marich Bari)",
    catchment: "Additional Dooars",
    aliases: ["Little Star Marich Bari", "LSPS"],
    level: "Primary",
  },
  {
    name: "Maa Sarada Sishu Tirtha",
    catchment: "Additional Dooars",
    aliases: ["Maa Sarada", "MSST", "Sarada Sishutirtha"],
    level: "Primary",
  },
  {
    name: "Maa Sharada Vidyapeeth (Ghargharia)",
    catchment: "Additional Dooars",
    aliases: ["Maa Sharada Vidyapeeth", "Ghargharia", "MSVG"],
    level: "Primary",
  },
  {
    name: "Morning Star English School (Rydak T.E)",
    catchment: "Additional Dooars",
    aliases: ["Morning Star", "Rydak", "MSES"],
    level: "Secondary",
  },
  {
    name: "Mount Olive Nursery (Kohar Danga)",
    catchment: "Additional Dooars",
    aliases: ["Mount Olive", "Kohar Danga", "MON"],
    level: "Primary",
  },
  {
    name: "Mount Zion English School (Mathura)",
    catchment: "Additional Dooars",
    aliases: ["Mount Zion", "Mathura", "MZES"],
    level: "Secondary",
  },
  {
    name: "Mountain Dooars Nursery School (Chapani Halt)",
    catchment: "Additional Dooars",
    aliases: ["Mountain Dooars", "Chapani Halt", "MDNS"],
    level: "Primary",
  },
  {
    name: "Nabadaya Sishuniketan",
    catchment: "Additional Dooars",
    aliases: ["Nabadaya Sishu Niketan", "NSN"],
    level: "Primary",
  },
  {
    name: "Oasis School",
    catchment: "Additional Dooars",
    aliases: ["Oasis", "Oasis Public School"],
    level: "Secondary",
  },
  {
    name: "Orchas Model Public School",
    catchment: "Additional Dooars",
    aliases: ["Orchas Model", "OMPS"],
    level: "Secondary",
  },
  {
    name: "Pranabananda Vidyamandir (Polash Bari)",
    catchment: "Additional Dooars",
    aliases: ["Pranabananda Polash Bari", "PVM"],
    level: "Secondary",
  },
  {
    name: "Pratibha Adarsha Vidyalaya (Loharpul)",
    catchment: "Additional Dooars",
    aliases: ["Pratibha Adarsha", "Loharpul", "PAV"],
    level: "Primary",
  },
  {
    name: "Rabindra Sishu Niketan (Chandlirpar)",
    catchment: "Additional Dooars",
    aliases: ["Rabindra Sishu Niketan", "Chandlirpar", "RSN"],
    level: "Primary",
  },
  {
    name: "Rabindra Sishu Tirtha (Tot Para)",
    catchment: "Additional Dooars",
    aliases: ["Rabindra Sishu Tirtha", "Tot Para", "RST"],
    level: "Primary",
  },
  {
    name: "Rabindranath Sharada Sishu Tirtha",
    catchment: "Additional Dooars",
    aliases: ["Rabindranath Sharada", "RSST"],
    level: "Primary",
  },
  {
    name: "Rainbow Kindergarden",
    catchment: "Additional Dooars",
    aliases: ["Rainbow Kindergarten", "RK"],
    level: "Primary",
  },
  {
    name: "Ramkrishna Sharadaya Gyanpeeth (Chachakhata Jn)",
    catchment: "Additional Dooars",
    aliases: ["Ramkrishna Sharadaya", "Chachakhata", "RSG"],
    level: "Secondary",
  },
  {
    name: "Ramkrishna Sishu Shikkha Mandir",
    catchment: "Additional Dooars",
    aliases: ["RK", "Ramkrishna", "RKM", "Ramkrishna Sishu", "RSSM"],
    level: "Primary",
  },
  {
    name: "Ratan Biswas Memorial School (Jaldapara)",
    catchment: "Additional Dooars",
    aliases: ["Ratan Biswas", "Jaldapara", "RBMS"],
    level: "Secondary",
  },
  {
    name: "Rathindranath Sharada Sishutirtha (Atialguri)",
    catchment: "Additional Dooars",
    aliases: ["Rathindranath Sharada", "Atialguri", "RSS"],
    level: "Primary",
  },
  {
    name: "Rising Sun Nursery School (Ghagra)",
    catchment: "Additional Dooars",
    aliases: ["Rising Sun", "Ghagra", "RSNS"],
    level: "Primary",
  },
  {
    name: "Rose Valley Model School (Joso Danga)",
    catchment: "Additional Dooars",
    aliases: ["Rose Valley", "Joso Danga", "RVMS"],
    level: "Primary",
  },
  {
    name: "S.T Lawrence Advance School (Tukumari)",
    catchment: "Additional Dooars",
    aliases: ["ST Lawrence", "St Lawrence", "Tukumari", "SLAS"],
    level: "Secondary",
  },
  {
    name: "S.T Mother Teresa English School (Khoar Danga)",
    catchment: "Additional Dooars",
    aliases: ["Mother Teresa", "St Mother Teresa", "Khoar Danga", "MTES"],
    level: "Secondary",
  },
  {
    name: "S.T. Xaviers (Panialguri)",
    catchment: "Additional Dooars",
    aliases: ["St Xaviers", "ST Xaviers", "St. Xavier", "Panialguri", "SX"],
    level: "Secondary",
  },
  {
    name: "Sarada Sishutirtha (Ananda Nagar & Bhangapul)",
    catchment: "Additional Dooars",
    aliases: ["Sarada Sishutirtha Ananda Nagar", "Bhangapul", "SST"],
    level: "Primary",
  },
  {
    name: "Sharada Sishutirtha (Mathura Road & Porerpar)",
    catchment: "Additional Dooars",
    aliases: ["Sharada Sishutirtha Mathura", "Porerpar", "SST"],
    level: "Primary",
  },
  {
    name: "Shyam Sundar Sishuniketan (Vatla Guri)",
    catchment: "Additional Dooars",
    aliases: ["Shyam Sundar", "Vatla Guri", "SSSN"],
    level: "Primary",
  },
  {
    name: "Sishumahal",
    catchment: "Additional Dooars",
    aliases: ["Sishu Mahal", "SM"],
    level: "Primary",
  },
  {
    name: "Sishu Vikas Model School (Bhatibari)",
    catchment: "Additional Dooars",
    aliases: ["Sishu Vikas", "Bhatibari", "SVMS"],
    level: "Secondary",
  },
  {
    name: "Sister Nivedita & Sister Nivedita Sishuniketan (Joso Danga)",
    catchment: "Additional Dooars",
    aliases: ["Sister Nivedita Joso Danga", "Nivedita Sishuniketan"],
    level: "Primary",
  },
  {
    name: "Sister Nivedita Sishuvidyalaya (Chaporer Par)",
    catchment: "Additional Dooars",
    aliases: ["Sister Nivedita Chaporer Par", "Nivedita Sishuvidyalaya"],
    level: "Primary",
  },
  {
    name: "Spring Valley E.M Public School (Kokrajhar)",
    catchment: "Additional Dooars",
    aliases: ["Spring Valley", "Kokrajhar Spring Valley", "SVEMPS"],
    level: "Secondary",
  },
  {
    name: "Sri Sri Gyanmandir School (Saheb Pota)",
    catchment: "Additional Dooars",
    aliases: ["Gyanmandir Saheb Pota", "Saheb Pota"],
    level: "Primary",
  },
  {
    name: "Star Kid Learner Academy",
    catchment: "Additional Dooars",
    aliases: ["Star Kid", "Star Kid Learner", "SKLA"],
    level: "Primary",
  },
  {
    name: "Sunshine Mission (Poro Basti)",
    catchment: "Additional Dooars",
    aliases: ["Sunshine Mission", "Poro Basti", "SM"],
    level: "Secondary",
  },
  {
    name: "Sunshine Model School (Khoska Danga)",
    catchment: "Additional Dooars",
    aliases: ["Sunshine Model", "Khoska Danga", "SMS"],
    level: "Primary",
  },
  {
    name: "Bear Ideal Academy (Bhatibari)",
    catchment: "Additional Dooars",
    aliases: ["Bear Ideal", "Bhatibari Bear Ideal", "BIA"],
    level: "Secondary",
  },
  {
    name: "Tirtha Nath Sen Smriti Model School (Uttar Panialguri)",
    catchment: "Additional Dooars",
    aliases: ["Tirtha Nath Sen", "Uttar Panialguri", "TNSSMS"],
    level: "Secondary",
  },
  {
    name: "Vivekananda Sishutirtha",
    catchment: "Additional Dooars",
    aliases: ["Vivekananda Sishutirtha APD", "VST", "VKV Sishutirtha"],
    level: "Primary",
  },
  {
    name: "Vivekananda Sishusadan (Betlaguri)",
    catchment: "Additional Dooars",
    aliases: ["Vivekananda Betlaguri", "VSS Betlaguri"],
    level: "Primary",
  },
  {
    name: "Vivekananda Vidyapeeth (Rampur & Saheb Pota)",
    catchment: "Additional Dooars",
    aliases: ["Vivekananda Vidyapeeth", "Rampur", "Saheb Pota", "VVR"],
    level: "Secondary",
  },
];

// Transform raw list into fully structured School records with unique IDs and slugs
export const ALL_SCHOOLS: School[] = RAW_SCHOOLS.map((raw, idx) => {
  const slug = slugify(raw.name);
  return {
    id: `school-${idx + 1}-${slug}`,
    name: raw.name,
    slug,
    catchment: raw.catchment,
    aliases: raw.aliases,
    gender: raw.gender || "Co-ed",
    level: raw.level || "Secondary",
    uniforms: defaultUniformItems(raw.name),
  };
});

/**
 * Helper to fetch all schools
 */
export function getAllSchools(): School[] {
  return ALL_SCHOOLS;
}

/**
 * Helper to lookup a school by its URL slug
 */
export function getSchoolBySlug(slug: string): School | undefined {
  return ALL_SCHOOLS.find((school) => school.slug === slug);
}

/**
 * Helper to filter schools by catchment
 */
export function getSchoolsByCatchment(catchment: CatchmentType): School[] {
  if (catchment === "All") return ALL_SCHOOLS;
  return ALL_SCHOOLS.filter((school) => school.catchment === catchment);
}

/**
 * High-precision acronym, alias, and fuzzy-tolerant search function.
 * Matches input against:
 * 1. Normalized alias acronyms (e.g., "KV", "K.V.", "DPS", "JNV")
 * 2. School full title substring
 * 3. Catchment / locality substring
 * 4. Tokenized phonetic variants
 */
export function searchSchools(query: string, catchment?: CatchmentType): School[] {
  const cleanQuery = query.trim();
  const normalizedQuery = normalizeSearchToken(query);

  let pool = ALL_SCHOOLS;
  if (catchment && catchment !== "All") {
    pool = pool.filter((s) => s.catchment === catchment);
  }

  if (!cleanQuery) return pool;

  return pool.filter((school) => {
    // 1. Direct school name match
    if (school.name.toLowerCase().includes(cleanQuery.toLowerCase())) {
      return true;
    }

    // 2. Normalized school name match (e.g. without punctuation)
    const normName = normalizeSearchToken(school.name);
    if (normName.includes(normalizedQuery)) {
      return true;
    }

    // 3. Catchment match
    if (school.catchment.toLowerCase().includes(cleanQuery.toLowerCase())) {
      return true;
    }

    // 4. Aliases / Acronym match (e.g. KV matches Kendriya Vidyalaya, DPS matches Delhi Public School)
    const matchesAlias = school.aliases.some((alias) => {
      const normAlias = normalizeSearchToken(alias);
      return (
        normAlias === normalizedQuery ||
        normAlias.startsWith(normalizedQuery) ||
        normAlias.includes(normalizedQuery) ||
        alias.toLowerCase().includes(cleanQuery.toLowerCase())
      );
    });

    return matchesAlias;
  });
}
