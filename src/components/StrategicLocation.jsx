import React from 'react';
import { COMMUTE_DESTINATIONS, MARKETING_INFO } from '../data/propertyData';
import { MapPin, Navigation, ExternalLink, CheckCircle2, Eye, Compass } from 'lucide-react';

export default function StrategicLocation({ onOpenModal }) {
  return (
    <section id="lokasi-akses" className="w-full py-16 lg:py-24 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center gap-1.5 mb-1">
              <Compass className="w-4 h-4 text-secondary" />
              Konektivitas Tanpa Batas di Batam
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Akses Super Cepat 1 — 5 Menit
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl leading-relaxed">
              Berada di poros emas segitiga Tembesi — Batu Aji — Barelang. Menghemat waktu perjalanan harian Anda
              untuk bekerja, belanja, dan sekolah.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-lowest text-primary text-xs sm:text-sm font-bold shadow-sm border border-surface-variant/40">
              <Navigation className="w-4 h-4 text-secondary" />
              Jl. Trans Barelang / Jl. Letjen Suprapto
            </span>
          </div>
        </div>

        {/* 6 Commute Destination Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {COMMUTE_DESTINATIONS.map((dest, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group border border-surface-variant/40 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/25 flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">{dest.icon}</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold mb-1.5 ${dest.badgeColor}`}>
                {dest.time}
              </span>
              <h3 className="font-bold text-xs sm:text-sm text-primary leading-tight">
                {dest.name}
              </h3>
              <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                {dest.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Map & Strategic Value Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-surface-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Denah Lokasi Visual Poster */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-base sm:text-lg text-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Peta Koordinat & Skema Akses Kawasan
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Tembesi / Sagulung, Batam
                </span>
              </div>

              {/* Visual Map with Click to Zoom */}
              <div
                onClick={() =>
                  onOpenModal(
                    '/images/denah-lokasi.png',
                    'Denah Lokasi Buana Bukit Permata',
                    'Akses strategis diapit Jl. Letjen Suprapto, SP Plaza, Top 100, Putera Batam & Bundaran Barelang.'
                  )
                }
                className="w-full rounded-2xl overflow-hidden shadow-inner relative group cursor-pointer border border-surface-variant/60"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-surface-container">
                  <img
                    src="/images/denah-lokasi.png"
                    alt="Denah Lokasi Buana Bukit Permata Tembesi Batam"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />

                  {/* Pin Indicator Badge */}
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-2 border border-surface-variant/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping" />
                    <span className="text-xs font-bold text-primary">
                      Lokasi Proyek: Buana Bukit Permata
                    </span>
                  </div>

                  <button
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                    aria-label="Perbesar Denah Lokasi"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-on-surface-variant italic">
                *Diapit oleh Jalan Protokol Trans Barelang & Jl. Letjen Suprapto. Mobilitas super cepat ke Batam Center, Mukakuning, maupun Bandara Hang Nadim.
              </p>
            </div>

            {/* Right: Why this location is valuable */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-variant/40 space-y-2">
                <h3 className="font-bold text-base sm:text-lg text-primary">
                  Mengapa Lokasi Ini Begitu Bernilai?
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Kawasan Tembesi — Batu Aji telah menjadi episentrum pertumbuhan hunian dan komersial baru di Batam.
                  Didukung oleh kemudahan akses logistik industri dan ekspansi infrastruktur jalan lingkar.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container-low transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>
                    <strong>5 Menit</strong> ke Kawasan Industri Batindo Mukakuning
                  </span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container-low transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>
                    <strong>7 Menit</strong> ke Mall Panbil & Hotel Best Western
                  </span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container-low transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>
                    <strong>Dikelilingi</strong> fasilitas sekolah negeri & swasta unggulan
                  </span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-xl hover:bg-surface-container-low transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>
                    <strong>Potensi Sewa Tinggi</strong> untuk profesional industri Mukakuning
                  </span>
                </li>
              </ul>

              {/* Direct Maps Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Buana+Bukit+Permata+Batam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya ingin dibagikan share lokasi GPS akurat Buana Bukit Permata.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-all border border-surface-variant/40"
                >
                  <span>Minta Shareloc WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
