import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/propertyData';
import { Image, Eye, Sparkles } from 'lucide-react';

export default function VisualGallery({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS.filter(item => item.type === 'image')
    : GALLERY_ITEMS.filter(item => item.type === 'image' && item.category === filter);

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'facade', label: 'Fasad Unit 36+/72' },
    { id: 'facility', label: 'Fasilitas & RBA' },
    { id: 'location', label: 'Denah & Brosur Lokasi' }
  ];

  return (
    <section id="galeri-visual" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center justify-center gap-1.5">
            <Image className="w-4 h-4 text-secondary" />
            Galeri Visual & Dokumentasi Resmi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Koleksi Foto & Brosur Proyek
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Eksplorasi tampilan visual arsitektur, fasilitas taman bermain, denah kawasan, dan materi promosi Buana Bukit Permata.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-variant/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenModal(item.src, item.title, item.desc)}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-variant/40 group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-primary leading-snug group-hover:text-primary-container transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-surface-variant/30 flex items-center justify-between text-[11px] text-secondary font-bold">
                  <span>Lihat Detail Resolusi Tinggi</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
