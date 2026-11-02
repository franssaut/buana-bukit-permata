import React from 'react';
import { ShieldCheck, Coins, Trees, Navigation } from 'lucide-react';

export default function QuickHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Sertifikat HGB & PBG",
      desc: "Legalitas terjamin resmi Cipta Group",
      color: "text-primary"
    },
    {
      icon: Coins,
      title: "Cash Bertahap s/d 60x",
      desc: "Langsung ke developer tanpa BI checking",
      color: "text-secondary"
    },
    {
      icon: Trees,
      title: "Ruang Bermain Anak",
      desc: "Fasilitas RBA terpadu ramah keluarga",
      color: "text-primary"
    },
    {
      icon: Navigation,
      title: "Jantung Tembesi",
      desc: "1 Menit ke Bundaran Barelang",
      color: "text-primary"
    }
  ];

  return (
    <section className="w-full bg-surface-container-low border-y border-surface-variant/40 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y-0">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-surface-container transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm sm:text-base text-primary leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
