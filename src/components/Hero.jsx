import React from 'react';
import { MARKETING_INFO, HIGHLIGHT_SPECS } from '../data/propertyData';
import { MessageCircle, Calculator, CheckCircle2, MapPin, Sparkles, Eye } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="beranda"
      className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-primary via-primary-container to-surface overflow-hidden text-on-primary"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-tertiary-fixed/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary-fixed-variant" />
                Developer Terpercaya: CIPTA GROUP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary text-white text-xs font-extrabold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Cash Bertahap s/d 60x
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-md text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-secondary-fixed" />
                Tembesi — Batu Aji, Batam
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tertiary-container text-tertiary-fixed text-xs font-semibold">
                Tipe 36+(45) / 72 Best Seller
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hunian Modern Minimalis di{' '}
                <span className="text-secondary-fixed drop-shadow-sm">Lokasi Emas</span> Tembesi — Batu Aji, Batam
              </h1>
              <p className="text-base sm:text-lg text-on-primary-container font-normal leading-relaxed max-w-2xl">
                Persembahan mahakarya <strong>Cipta Group</strong> di Blok Ruby. Harga resmi mulai <strong>Rp 408 Juta</strong> (Booking fee Rp 5 Jt) dengan cicilan <strong>Cash Bertahap 60x (Rp 6,7 Jt/bln)</strong> atau KPR Indent Diskon 10% Bebas Biaya Surat & Akad.
              </p>
            </div>

            {/* Quick Spec Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-2">
              {HIGHLIGHT_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-0.5 ${
                    spec.highlight
                      ? 'bg-secondary-container/95 text-on-secondary-container ring-1 ring-secondary/30 col-span-2 sm:col-span-1'
                      : 'bg-surface-container-lowest text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[28px] mb-1 ${spec.highlight ? 'text-secondary' : 'text-primary'}`}>
                    {spec.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                    {spec.label}
                  </span>
                  <span className="text-base font-bold text-primary leading-tight mt-0.5">
                    {spec.value}
                  </span>
                  <span className={`text-[10px] mt-0.5 font-medium ${spec.highlight ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    {spec.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya tertarik dan ingin konsultasi mengenai unit rumah Buana Bukit Permata Tembesi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi WhatsApp (Frans)</span>
              </a>
              <a
                href="#kpr-simulator"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container font-semibold text-sm shadow-md transition-all"
              >
                <Calculator className="w-5 h-5" />
                <span>Simulasi KPR & Brosur</span>
              </a>
            </div>
          </div>

          {/* Right Visual Showcase Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Image */}
              <div
                onClick={() =>
                  onOpenModal(
                    '/images/facade-highlight.png',
                    'Fasad Buana Bukit Permata Type 36+/72',
                    'Desain minimalis tropis modern persembahan Cipta Group Batam.'
                  )
                }
                className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border-2 border-white/20 group cursor-pointer relative"
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/facade-highlight.png"
                    alt="Fasad Buana Bukit Permata Type 36/72 Cipta Group Batam"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary-container/90 text-white text-[11px] font-bold backdrop-blur-md uppercase tracking-wider shadow-sm">
                      Official Masterpiece
                    </span>
                    <button
                      className="w-8 h-8 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                      title="Klik untuk memperbesar"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-secondary-fixed block font-bold mb-0.5">
                      Tipe Eksklusif Best Seller
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                      Cluster Buana Bukit Permata
                    </h3>
                    <p className="text-xs text-inverse-on-surface opacity-90 mt-1">
                      Desain fasad minimalis tropis dengan batu alam aksen vertikal & carport cor beton.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Pill */}
              <div
                onClick={() =>
                  onOpenModal(
                    '/images/type36-72-specs.png',
                    'Highlight Unit Type 36+/72',
                    '4 Sudut Pandang dan Denah Unit Buana Bukit Permata.'
                  )
                }
                className="hidden sm:flex absolute -bottom-6 -left-6 p-3 bg-surface-container-lowest rounded-2xl shadow-2xl items-center gap-3 max-w-xs border border-surface-variant/40 cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                  <img
                    src="/images/type36-72-specs.png"
                    alt="Highlight Unit Type 36/72"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase text-secondary font-extrabold tracking-wider">
                    Booking Cepat
                  </span>
                  <span className="text-sm font-bold text-primary leading-tight">
                    Cicilan Ringan s/d 60x
                  </span>
                  <span className="text-[11px] text-on-surface-variant">
                    Kavling pilihan terbatas di Tembesi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
