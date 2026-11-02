import React from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-surface-variant/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-[22px]">apartment</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-primary leading-tight">
                  Buana Bukit Permata
                </span>
                <span className="text-[11px] uppercase tracking-wider text-secondary font-bold">
                  CIPTA GROUP BATAM
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Kawasan hunian modern minimalis bernuansa bukit asri di Batam. Dirancang dengan presisi arsitektural dan
              kenyamanan optimal bagi keluarga modern serta potensi investasi properti bertumbuh.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Pengembang Resmi Terpercaya</span>
            </div>
          </div>

          {/* Column 2: Legalitas & Developer */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-base text-primary">
              Pengembang & Legalitas
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Dikembangkan oleh <strong>Cipta Group</strong>, salah satu pengembang properti terkemuka dan terpercaya di
              Kota Batam dengan pengalaman puluhan proyek perumahan dan ruko komersial.
            </p>
            <ul className="space-y-2 text-xs text-on-surface-variant pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Sertifikat Hak Guna Bangunan (SHGB)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Persetujuan Bangunan Gedung (PBG / IMB Resmi)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Jaminan Garansi Kualitas Struktur Bangunan</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Marketing Office */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-base text-primary">
              Kontak & Kantor Pemasaran
            </h3>
            <div className="space-y-2.5 text-xs text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{MARKETING_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${MARKETING_INFO.phoneRaw}`}
                  className="font-bold text-on-surface hover:text-primary transition-colors"
                >
                  {MARKETING_INFO.phone} ({MARKETING_INFO.name})
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href={MARKETING_INFO.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-secondary hover:underline"
                >
                  WhatsApp Fast Response
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{MARKETING_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-base text-primary">
              Navigasi Halaman
            </h3>
            <ul className="space-y-1.5 text-xs text-on-surface-variant font-medium">
              <li>
                <a href="#beranda" className="hover:text-primary transition-colors">
                  • Beranda
                </a>
              </li>
              <li>
                <a href="#spesifikasi-unit" className="hover:text-primary transition-colors">
                  • Spesifikasi Unit (Type 36+/72)
                </a>
              </li>
              <li>
                <a href="#lokasi-akses" className="hover:text-primary transition-colors">
                  • Akses & Lokasi Strategis
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-primary transition-colors">
                  • Fasilitas & Ruang Bermain Anak (RBA)
                </a>
              </li>
              <li>
                <a href="#video-progress" className="hover:text-primary transition-colors">
                  • Video Progres Lapangan
                </a>
              </li>
              <li>
                <a href="#daftar-harga" className="hover:text-primary transition-colors">
                  • Daftar Harga Resmi (Pricelist)
                </a>
              </li>
              <li>
                <a href="#kpr-simulator" className="hover:text-primary transition-colors">
                  • Simulasi Cash Bertahap & KPR
                </a>
              </li>
              <li>
                <a href="#kontak-booking" className="hover:text-primary transition-colors">
                  • Booking Survey Lokasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-surface-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>© {new Date().getFullYear()} Buana Bukit Permata. Hak Cipta Dilindungi. Dikembangkan oleh Cipta Group Batam.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://maps.google.com/?q=Buana+Bukit+Permata+Batam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Google Maps
            </a>
            <a href="#kpr-simulator" className="hover:text-primary transition-colors">
              Simulasi KPR
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-container font-bold"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
