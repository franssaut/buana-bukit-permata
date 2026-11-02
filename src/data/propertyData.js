export const MARKETING_INFO = {
  name: "Frans",
  role: "Official Marketing Executive",
  company: "Cipta Group Batam",
  phone: "0823-9105-9216",
  phoneRaw: "6282391059216",
  waLink: "https://wa.me/6282391059216",
  location: "Kompleks Buana Bukit Permata, Tembesi / Sagulung, Batam, Kepulauan Riau",
  workingHours: "Setiap Hari: 08:30 - 18:00 WIB"
};

export const OFFICIAL_PRICELIST = [
  {
    id: "standart-72",
    type: "36+(45)/72 - Standart",
    typeShort: "Type 36+(45)/72 Standart",
    block: "Ruby No. 41 s/d 49 & No. 52 s/d 56",
    landArea: "72 m² (6m x 12m)",
    buildingArea: "36+ (45) m²",
    position: "Standar",
    price: 408000000,
    bookingFee: 5000000,
    discountKpr: 40800000, // 10%
    kprValue: 362700000,
    kprInstallments: {
      year5: 7488424,
      year10: 4421470,
      year15: 3443268,
    },
    cashBertahap60x: 6716667,
    stb: "Oktober 2028",
    popular: true
  },
  {
    id: "hook-96",
    type: "36+(45)/96 - Hook",
    typeShort: "Type 36+(45)/96 Hook",
    block: "Ruby No. 50",
    landArea: "96 m²",
    buildingArea: "36+ (45) m²",
    position: "Hook (Posisi Sudut)",
    price: 506000000,
    bookingFee: 5000000,
    discountKpr: 50600000, // 10%
    kprValue: 450900000,
    kprInstallments: {
      year5: 9309430,
      year10: 5496667,
      year15: 4280589,
    },
    cashBertahap60x: 8350000,
    stb: "Oktober 2028",
    popular: false
  },
  {
    id: "hook-115",
    type: "36+(45)/115.2 - Hook",
    typeShort: "Type 36+(45)/115.2 Hook",
    block: "Ruby No. 51",
    landArea: "115.2 m²",
    buildingArea: "36+ (45) m²",
    position: "Hook Ekstra Luas",
    price: 534500000,
    bookingFee: 5000000,
    discountKpr: 53450000, // 10%
    kprValue: 476550000,
    kprInstallments: {
      year5: 9839008,
      year10: 5809351,
      year15: 4524095,
    },
    cashBertahap60x: 8825000,
    stb: "Oktober 2028",
    popular: false
  }
];

export const PROMO_DETAILS = {
  kprPromos: [
    "Diskon 10% dari Harga Jual (KPR Indent / Ekspress)",
    "Free Akte Jual Beli (AJB)",
    "Free Sertifikat Hak Guna Bangunan (SHGB)",
    "Free Biaya Perolehan Hak Tanah dan Bangunan (BPHTB)",
    "Free Biaya Akad Kredit"
  ],
  cashBertahapPromos: [
    "Cicilan Flat Langsung ke Developer Cipta Group 60 Kali",
    "Tanpa BI Checking & Bunga Bank 0%",
    "Booking Fee hanya Rp 5.000.000 (Langsung Mengurangi Pokok)",
    "Biaya Surat-surat ditanggung pembeli"
  ],
  paymentTerms: [
    "Booking Fee yang disetor tidak dapat diambil kembali.",
    "Pembayaran angsuran 1 (pertama) dilakukan 2 (dua) minggu setelah Booking Fee.",
    "Apabila dalam 2 minggu tidak dapat dilakukan penandatanganan perjanjian dan pembayaran angsuran, maka pembelian rumah dianggap batal dan booking fee hangus.",
    "Suku bunga KPR pada tabel ilustrasi 7.5%, selisih uang muka dilunasi sebelum akad KPR.",
    "Keterlambatan pembayaran dikenakan denda 0.5% per hari dari nilai angsuran per bulan.",
    "Penukaran atau pindah blok kavling dikenakan biaya administrasi 5% dari harga jual.",
    "Transaksi pembelian dianggap sah apabila melalui proses Kasir & dikeluarkan kwitansi asli PT Buana Cipta Propertindo (Cipta Group)."
  ]
};

export const PROPERTY_SPECS = {
  name: "Buana Bukit Permata",
  cluster: "Blok Ruby (No. 41 s/d 56)",
  type: "Type 36+(45) / 72, 96, 115.2",
  developer: "CIPTA GROUP (PT Buana Cipta Propertindo)",
  buildingArea: "36+ (45) m²",
  landArea: "72 m² s/d 115.2 m²",
  bedrooms: 2,
  bathrooms: 1,
  kitchen: "1 Dapur (Meja Dapur & Sink Siap Pakai)",
  carport: "1 Mobil + Motor (Cor Beton)",
  certificate: "Sertifikat Hak Guna Bangunan (SHGB) & PBG/IMB Resmi",
  stb: "Oktober 2028",
  priceStartingFrom: 408000000,
  bookingFee: 5000000,
  cashBertahapMonthlyStart: 6716667,
  kprMonthlyStart: 3443268,
};

export const HIGHLIGHT_SPECS = [
  { icon: "square_foot", label: "Luas Bangunan", value: "36+(45) m²", sub: "Pengembangan Maksimal" },
  { icon: "aspect_ratio", label: "Luas Tanah", value: "72 - 115.2 m²", sub: "Pilihan Standar & Hook" },
  { icon: "bed", label: "Kamar Tidur", value: "2 Kamar", sub: "Pencahayaan Alami" },
  { icon: "shower", label: "Kamar Mandi", value: "1 Kamar", sub: "Sanitair Modern" },
  { icon: "countertops", label: "Dapur Rumah", value: "1 Dapur", sub: "Sudah Siap Pakai", highlight: true },
];

export const TECHNICAL_SPECS = [
  {
    icon: "foundation",
    title: "Struktur & Pondasi",
    desc: "Beton bertulang kokoh standar SNI tahan gempa & pondasi tapak batu kali."
  },
  {
    icon: "apartment",
    title: "Dinding Rumah",
    desc: "Bata presisi diplester dan diaci halus, finishing cat weather-resistant ramah cuaca tropis luar-dalam."
  },
  {
    icon: "roofing",
    title: "Rangka Atap & Plafon",
    desc: "Baja ringan galvanis anti-karat dengan penutup genteng metal/spandek modern serta plafon gypsum rapi."
  },
  {
    icon: "door_front",
    title: "Pintu & Kusen",
    desc: "Kusen aluminium powder coating anti-rayap, daun pintu panel fabrikasi kontemporer & kaca bening aksen estetik."
  },
  {
    icon: "grid_view",
    title: "Lantai Ruangan",
    desc: "Keramik elegan 40x40 cm pada ruang tamu, ruang keluarga & kamar; keramik antislip bermotif pada kamar mandi."
  },
  {
    icon: "bolt",
    title: "Instalasi Listrik & Sanitasi",
    desc: "Listrik PLN instalasi tertanam, suplai air bersih resmi Batam, kloset duduk hemat air, & bak kontrol septic tank terencana."
  },
  {
    icon: "countertops",
    title: "Area Dapur (Sudah Ada Meja Dapur)",
    desc: "Sudah dilengkapi meja beton lapis keramik siap pakai, bak cuci piring (sink) stainless steel, dan kran air bersih — tanpa perlu biaya renovasi dapur tambahan!",
    special: true
  },
  {
    icon: "garage",
    title: "Carport & Halaman",
    desc: "Carport cor beton kapasitas 1 mobil keluarga & motor, plus halaman depan asri dan ruang terbuka belakang untuk rumah tumbuh."
  }
];

export const COMMUTE_DESTINATIONS = [
  {
    time: "1 Menit",
    name: "Bundaran Barelang",
    desc: "Simpang jalan protokol utama",
    icon: "roundabout_right",
    badgeColor: "bg-primary"
  },
  {
    time: "2 Menit",
    name: "Top 100 Tembesi",
    desc: "Supermarket, foodcourt & bioskop",
    icon: "shopping_cart",
    badgeColor: "bg-primary"
  },
  {
    time: "2 Menit",
    name: "Univ. Putera Batam",
    desc: "Pusat pendidikan tinggi favorit",
    icon: "school",
    badgeColor: "bg-primary"
  },
  {
    time: "2 Menit",
    name: "Pasar SP Plaza",
    desc: "Sentra belanja, pasar basah & niaga",
    icon: "storefront",
    badgeColor: "bg-primary"
  },
  {
    time: "2 Menit",
    name: "RS Awal Bros Batu Aji",
    desc: "Layanan medis terpadu & IGD 24 jam",
    icon: "local_hospital",
    badgeColor: "bg-primary"
  },
  {
    time: "5 Menit",
    name: "Jembatan Barelang",
    desc: "Ikon pariwisata kebanggaan Batam",
    icon: "tour",
    badgeColor: "bg-secondary"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "facade-1",
    category: "facade",
    title: "Fasad Depan Minimalis Tropis",
    desc: "Tampilan modern Type 36+(45)/72 dengan aksen batu alam, carport, dan taman hijau.",
    src: "/images/facade-highlight.png",
    type: "image"
  },
  {
    id: "facade-2",
    category: "facade",
    title: "Perspektif Sudut Elegan",
    desc: "Sudut pandang arsitektural menghadap fasad hunian dengan pencahayaan alami optimal.",
    src: "/images/facade-angle.png",
    type: "image"
  },
  {
    id: "specs-grid",
    category: "facade",
    title: "4 Sudut Pandang Unit Type 36+(45)",
    desc: "Detail tampak depan, samping, dan sudut perumahan Buana Bukit Permata.",
    src: "/images/type36-72-specs.png",
    type: "image"
  },
  {
    id: "map-denah",
    category: "location",
    title: "Denah Lokasi & Akses Kawasan",
    desc: "Skema jaringan jalan diapit Jl. Trans Barelang dan Jl. Letjen Suprapto Tembesi.",
    src: "/images/denah-lokasi.png",
    type: "image"
  },
  {
    id: "flyer-akses",
    category: "location",
    title: "Brosur Aksesibilitas 1-5 Menit",
    desc: "Ringkasan fasilitas publik sekeliling kawasan perumahan Buana Bukit Permata.",
    src: "/images/flyer-akses.png",
    type: "image"
  },
  {
    id: "rba-gate",
    category: "facility",
    title: "Gerbang Ruang Bermain Anak (RBA)",
    desc: "Fasilitas riil yang sudah terbangun di Buana Bukit Permata untuk keceriaan anak.",
    src: "/images/taman-bermain-gate.jpg",
    type: "image"
  },
  {
    id: "rba-arena",
    category: "facility",
    title: "Wahana Bermain & Santai Keluarga",
    desc: "Perosotan, ayunan, dan area terbuka ramah anak di dalam lingkungan perumahan.",
    src: "/images/taman-bermain-arena.jpg",
    type: "image"
  },
  {
    id: "video-1",
    category: "video",
    title: "Video 1 — View Kota",
    desc: "Panorama lanskap kota Batam yang memukau dari ketinggian bukit kawasan Buana Bukit Permata.",
    src: "/videos/video-progress-1.mp4",
    type: "video"
  },
  {
    id: "video-2",
    category: "video",
    title: "Video 2 — View Laut",
    desc: "Panorama keindahan laut lepas dan hembusan angin segar perbukitan di kawasan Buana Bukit Permata.",
    src: "/videos/video-progress-2.mp4",
    type: "video"
  }
];
