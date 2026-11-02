import React, { useState } from 'react';
import { MARKETING_INFO, TECHNICAL_SPECS, HIGHLIGHT_SPECS } from '../data/propertyData';
import { Sparkles, Calendar, FileText, CheckCircle2, Eye, Layers } from 'lucide-react';

export default function UnitSpecs({ onOpenModal }) {
  const [selectedAngle, setSelectedAngle] = useState(0);

  const angleOptions = [
    {
      title: "Tampak Depan",
      src: "/images/facade-highlight.png",
      tag: "Fasad Minimalis Modern"
    },
    {
      title: "Perspektif Sudut",
      src: "/images/facade-angle.png",
      tag: "Arsitektur Kontemporer"
    },
    {
      title: "4 Sudut Pandang",
      src: "/images/type36-72-specs.png",
      tag: "Multi-Angle Spesifikasi"
    }
  ];

  return (
    <section id="spesifikasi-unit" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-secondary" />
            Pilihan Cerdas Keluarga Idaman
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Spesifikasi Unit Tipe 36+(45) / 72, 96 & 115.2
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Unit Blok Ruby dengan tata ruang fungsional, pencahayaan alami optimal, dan sirkulasi udara tropis menyejukkan.
            Harga resmi mulai <strong>Rp 408 Juta</strong> (STB Oktober 2028).
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Visual Gallery Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest border border-surface-variant/40 group relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                <img
                  src={angleOptions[selectedAngle].src}
                  alt={angleOptions[selectedAngle].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 cursor-pointer"
                  onClick={() =>
                    onOpenModal(
                      angleOptions[selectedAngle].src,
                      `Buana Bukit Permata - ${angleOptions[selectedAngle].title}`,
                      angleOptions[selectedAngle].tag
                    )
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-extrabold w-fit mb-2 shadow-sm">
                    {angleOptions[selectedAngle].tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    Tipe 36+ / 72 (6m x 12m)
                  </h3>
                  <p className="text-xs text-on-primary-container mt-1">
                    Denah fleksibel dengan halaman belakang yang dapat dikembangkan sewaktu-waktu (Rumah Tumbuh).
                  </p>
                </div>

                {/* Click to zoom icon */}
                <button
                  onClick={() =>
                    onOpenModal(
                      angleOptions[selectedAngle].src,
                      `Buana Bukit Permata - ${angleOptions[selectedAngle].title}`,
                      angleOptions[selectedAngle].tag
                    )
                  }
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                  aria-label="Perbesar Gambar"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Angle Switcher Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {angleOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAngle(i)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                    selectedAngle === i
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container border-surface-variant/60'
                  }`}
                >
                  {opt.title}
                </button>
              ))}
            </div>

            {/* Quick Visit Action Card */}
            <div className="bg-surface-container-high p-4 rounded-2xl flex items-center justify-between gap-3 border border-surface-variant/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm text-primary block leading-tight">
                    Cek Langsung ke Lokasi
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    Marketing siap dampingi setiap hari
                  </span>
                </div>
              </div>
              <a
                href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya ingin jadwalkan survey unit Buana Bukit Permata Tembesi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2 rounded-full bg-primary text-white font-semibold text-xs hover:bg-primary-container transition-all shadow-sm"
              >
                Jadwalkan Survey
              </a>
            </div>
          </div>

          {/* Right Column: Spec Metrics & Material Standards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Room Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {HIGHLIGHT_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl shadow-sm flex flex-col items-center text-center ${
                    spec.highlight
                      ? 'bg-secondary-container/95 text-on-secondary-container ring-1 ring-secondary/30 col-span-2 sm:col-span-1'
                      : 'bg-surface-container-lowest text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[26px] mb-1 ${spec.highlight ? 'text-secondary' : 'text-primary'}`}>
                    {spec.icon}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant">
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-primary mt-0.5">
                    {spec.value}
                  </span>
                  <span className={`text-[10px] mt-0.5 ${spec.highlight ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
                    {spec.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed Technical Material Specs */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm border border-surface-variant/40 space-y-5">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-surface-variant/40 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-primary">
                    Kualitas Material Bangunan Cipta Group
                  </h3>
                </div>
                <span className="px-3 py-1 bg-surface-container text-primary rounded-full text-xs font-bold">
                  Standar SNI & Kokoh
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TECHNICAL_SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3.5 rounded-xl transition-colors ${
                      spec.special
                        ? 'md:col-span-2 bg-secondary-container/20 border border-secondary/30'
                        : 'bg-surface-container-low/50 hover:bg-surface-container-low'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[24px] shrink-0 mt-0.5 ${spec.special ? 'text-secondary font-bold' : 'text-secondary'}`}>
                      {spec.icon}
                    </span>
                    <div>
                      <strong className={`block text-xs sm:text-sm font-bold ${spec.special ? 'text-secondary-fixed-variant' : 'text-primary'}`}>
                        {spec.title}
                      </strong>
                      <span className="text-xs text-on-surface-variant leading-relaxed block mt-0.5">
                        {spec.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floor Layout Note & Brochure CTA */}
              <div className="p-4 rounded-2xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-primary block leading-tight">
                      Butuh Denah Lengkap & Ukuran Kavling?
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Dapatkan e-brochure denah resmi Buana Bukit Permata via WhatsApp.
                    </span>
                  </div>
                </div>
                <a
                  href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya minta e-brochure denah dan layout Buana Bukit Permata Tembesi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-5 py-2.5 rounded-full bg-secondary text-white font-bold text-xs hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-sm"
                >
                  Minta E-Brochure Denah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
