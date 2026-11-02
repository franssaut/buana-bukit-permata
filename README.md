# Website Resmi Buana Bukit Permata (React.js + Tailwind CSS)

Website profil & pemasaran resmi perumahan **Buana Bukit Permata** di Tembesi – Batu Aji, Batam oleh **CIPTA GROUP**.

Dibuat menggunakan **React 19**, **Vite**, **Tailwind CSS**, dan **Lucide Icons** dengan mengadopsi Design System *"Emerald Estate"*, mengintegrasikan seluruh materi visual, denah lokasi, foto fasilitas aktual, kalkulator KPR interaktif, dan video progres kawasan.

---

## 🌟 Fitur Utama Website

1. **Header Navigasi Responsif (Glassmorphism)**
   - Sticky navbar dengan efek blur transparan.
   - Menu drawer navigasi mobile responsif.
   - Quick action tombol WhatsApp & Telepon langsung ke marketing resmi: **Frans (0823-9105-9216)**.

2. **Hero Section Imersif**
   - Headline arsitektural elegan dengan aksen emas (*Warm Contemporary Editorial*).
   - Trust badge resmi Cipta Group, lokasi Tembesi - Batu Aji, dan label Best Seller Type 36+/72.
   - Metrik spesifikasi utama: Luas Bangunan 36+ m², Luas Tanah 72 m² (6x12m), 2 Kamar Tidur, 1 Kamar Mandi, dan Dapur Siap Pakai.
   - Showcase visual interaktif fasad rumah dengan fitur zoom resolusi tinggi.

3. **Quick Value Bar**
   - Kepastian Legalitas Sertifikat HGB & PBG resmi.
   - Promo DP Sangat Ringan & Cicilan Bertahap.
   - Ruang Bermain Anak (RBA) terpadu di dalam perumahan.
   - Lokasi 1 Menit dari Bundaran Simpang Barelang.

4. **Spesifikasi Lengkap Unit (Type 36+ / 72)**
   - Pilihan sudut pandang interaktif: *Tampak Depan*, *Perspektif Sudut*, dan *4 Sudut Pandang*.
   - Rincian bento box spesifikasi material standar SNI (Pondasi batu kali, struktur beton bertulang, dinding bata diplester rapi cat tahan cuaca, rangka atap baja ringan galvanis, kusen aluminium, lantai keramik 40x40 cm).
   - **Highlight Khusus Area Dapur**: Sudah dilengkapi meja dapur cor keramik dan bak cuci piring (*kitchen sink*) tanpa perlu biaya renovasi dapur tambahan.
   - Tombol langsung untuk menjadwalkan kunjungan lokasi atau meminta e-brochure denah.

5. **Aksesibilitas & Konektivitas Strategis (1 – 5 Menit)**
   - Kartu 6 destinasi utama:
     - 1 Menit ke Bundaran Simpang Barelang
     - 2 Menit ke Top 100 Tembesi
     - 2 Menit ke Kampus Univ. Putera Batam
     - 2 Menit ke Pasar SP Plaza
     - 2 Menit ke RS Awal Bros Batu Aji
     - 5 Menit ke Jembatan Barelang
   - Peta visual Denah Lokasi interaktif dengan klik perbesar (*lightbox modal*).
   - Tombol langsung integrasi Google Maps arah navigasi.

6. **Fasilitas Kawasan & Ruang Bermain Anak (RBA)**
   - Foto riil gerbang Ruang Bermain Anak (`taman-bermain-gate.jpg`) & arena permainan (`taman-bermain-arena.jpg`).
   - Fitur keamanan One Gate System 24 jam, jalan cor beton lebar, drainase bebas banjir, dan kemudahan akses sarana ibadah.

7. **Video Panorama View Kota & View Laut (Eksklusif)**
   - Player video terintegrasi untuk melihat langsung panorama spektakuler kawasan dari ketinggian bukit:
     - **Video 1 — View Kota**: Pemandangan lanskap dan cakrawala kota Batam.
     - **Video 2 — View Laut**: Pemandangan laut lepas dan perairan Batam dengan hembusan angin segar perbukitan.
   - Kemudahan berpindah antara Video View Kota dan Video View Laut serta tombol langsung konsultasi kavling via WhatsApp.

8. **Galeri Visual & Materi Brosur**
   - Filter koleksi foto berdasarkan kategori: *Semua*, *Fasad Unit 36+/72*, *Fasilitas & RBA*, *Denah & Brosur Lokasi*.
   - Lightbox modal dengan tombol unduh dan buka tab baru.

9. **Kalkulator Simulasi KPR Interaktif**
   - Slider harga properti (Rp 250 Jt - Rp 500 Jt).
   - Slider persentase DP (5% - 30%) dengan kalkulasi nominal otomatis.
   - Pemilihan tenor fleksibel (10, 15, 20, 25 tahun).
   - Suku bunga standar 5.5% / tahun.
   - Perhitungan angsuran bulanan real-time metode anuitas.
   - Tombol *"Ajukan Simulasi Resmi via WhatsApp Frans"* yang langsung mengisi rincian kalkulasi ke pesan WhatsApp.

10. **Formulir Janji Temu Survey & Booking**
    - Form pengisian data calon pembeli (Nama, WhatsApp, Tanggal Survey, Skema Pembayaran, dan Catatan).
    - Efek konfeti perayaan saat submit form dan otomatis menghubungkan chat ke WhatsApp Frans.

11. **Floating WhatsApp Widget**
    - Tombol chat mengambang dengan efek radar berdenyut (*pulse aura*) untuk konsultasi cepat kapan saja.

---

## 🛠️ Cara Menjalankan Proyek

### 1. Menjalankan Server Development:
```bash
npm run dev
```
Akses di browser: `http://localhost:5173/`

### 2. Membangun Proyek untuk Produksi (Build):
```bash
npm run build
```
Hasil build produksi siap di-deploy berada di folder `dist/`.

### 3. Menjalankan Pratinjau Hasil Build (Preview):
```bash
npm run preview
```

---

## 📁 Struktur Direktori

```
buanabukitpermata/
├── public/
│   ├── images/
│   │   ├── facade-highlight.png      # Fasad utama Type 36+/72
│   │   ├── facade-angle.png          # Sudut pandang fasad
│   │   ├── type36-72-specs.png       # 4 sudut pandang & spesifikasi
│   │   ├── denah-lokasi.png          # Denah peta konektivitas
│   │   ├── flyer-akses.png           # Brosur destinasi 1-5 menit
│   │   ├── taman-bermain-gate.jpg    # Foto riil gerbang RBA
│   │   └── taman-bermain-arena.jpg   # Foto riil arena bermain anak
│   └── videos/
│       ├── video-progress-1.mp4      # Video progress lokasi 1
│       └── video-progress-2.mp4      # Video progress lokasi 2
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Navigasi sticky & drawer mobile
│   │   ├── Hero.jsx                  # Hero banner & value props
│   │   ├── QuickHighlights.jsx       # Baris nilai legalitas & DP
│   │   ├── UnitSpecs.jsx             # Spesifikasi unit 36+/72 & material
│   │   ├── StrategicLocation.jsx     # Destinasi 1-5 menit & denah lokasi
│   │   ├── Facilities.jsx            # Fasilitas kawasan & foto RBA
│   │   ├── VideoProgress.jsx         # Video player dokumentasi lapangan
│   │   ├── VisualGallery.jsx         # Galeri foto dengan filter & modal
│   │   ├── KprCalculator.jsx         # Simulasi KPR real-time
│   │   ├── ContactBookingForm.jsx    # Profil Frans & form booking survey
│   │   ├── FloatingWhatsApp.jsx      # Tombol WhatsApp melayang
│   │   ├── Footer.jsx                # Info legalitas, kantor, & footer
│   │   └── ImageModal.jsx            # Lightbox preview gambar HD
│   ├── data/
│   │   └── propertyData.js           # Konfigurasi data & konten properti
│   ├── App.jsx                       # Komponen root aplikasi
│   ├── index.css                     # Tailwind & custom style
│   └── main.jsx                      # Entrypoint React
├── index.html                        # Meta tag SEO & font Plus Jakarta Sans
├── tailwind.config.js                # Konfigurasi palet warna Emerald Estate
├── package.json
└── vite.config.js
```

---

## 👤 Kontak Pemasaran Resmi
- **Marketing Executive**: Frans
- **Developer**: CIPTA GROUP BATAM
- **Nomor Telepon / WhatsApp**: 0823-9105-9216
- **Lokasi Proyek**: Kompleks Buana Bukit Permata, Tembesi / Sagulung, Batam
