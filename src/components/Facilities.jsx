import React from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { Shield, Sparkles, CheckCircle, Car, Droplets, Landmark, Eye, HeartHandshake } from 'lucide-react';

export default function Facilities({ onOpenModal }) {
  const facilityCards = [
    {
      title: "Gerbang Ruang Bermain Anak (RBA)",
      desc: "Sarana bermain outdoor eksklusif di dalam perumahan. Menunjang tumbuh kembang motorik dan sosial anak di lingkungan yang asri dan terkontrol.",
      badge: "Fasilitas Sudah Terbangun",
      badgeColor: "bg-primary/90",
      image: "/images/taman-bermain-gate.jpg",
      note: "Gerbang resmi Ruang Bermain Anak (RBA) Buana Bukit Permata"
    },
    {
      title: "Wahana Bermain & Area Santai",
      desc: "Dilengkapi aneka wahana perosotan ceria, ayunan, dan bangku santai bagi orang tua sembari mendampingi putra-putri beraktivitas.",
      badge: "Lingkungan Ramah Anak",
      badgeColor: "bg-secondary/90",
      image: "/images/taman-bermain-arena.jpg",
      note: "Area bermain luas dengan sirkulasi udara bukit yang segar"
    }
  ];

  const clusterFeatures = [
    {
      icon: Shield,
      title: "One Gate System 24 Jam",
      desc: "Satu pintu masuk terpusat dengan pos penjagaan sekuriti untuk ketenangan dan privasi keluarga.",
      color: "text-primary"
    },
    {
      icon: Car,
      title: "Jalan Cor Beton Lebar",
      desc: "Row jalan lingkungan ekstra lebar memudahkan akses persimpangan dua kendaraan mobil keluarga.",
      color: "text-primary"
    },
    {
      icon: Droplets,
      title: "Drainase Bebas Banjir",
      desc: "Kontur perbukitan alami dipadu jaringan parit tertata mencegah genangan air saat cuaca hujan lebat.",
      color: "text-primary"
    },
    {
      icon: Landmark,
      title: "Tempat Ibadah Dekat",
      desc: "Kemudahan beribadah setiap saat dengan ketersediaan sarana ibadah di dalam dan dekat kawasan.",
      color: "text-primary"
    }
  ];

  return (
    <section id="fasilitas" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center justify-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-secondary" />
            Kenyamanan & Kebahagiaan Keluarga
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Fasilitas Lengkap & Ruang Bermain Anak (RBA)
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Didesain dengan Ruang Bermain Anak (RBA) terpadu di dalam perumahan, memastikan putra-putri Anda tumbuh
            bahagia, sehat, dan aman di lingkungan yang asri dan bersahabat.
          </p>
        </div>

        {/* Real Playground Photos Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilityCards.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-lg bg-surface-container-lowest border border-surface-variant/40 group flex flex-col transition-all hover:shadow-xl"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden bg-black/5 cursor-pointer"
                onClick={() => onOpenModal(card.image, card.title, card.desc)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold backdrop-blur-md shadow-sm ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
                <button
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                  aria-label="Perbesar Foto Fasilitas"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-primary mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-surface-variant/40 flex items-center gap-2 text-secondary text-xs font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>{card.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Infrastructure Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clusterFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-surface-container-low border border-surface-variant/40 flex flex-col gap-2.5 hover:bg-surface-container transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-base text-primary leading-snug">
                  {feat.title}
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
