import React, { useState } from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Berapa harga resmi rumah di Buana Bukit Permata Tembesi Batam?",
      a: "Berdasarkan pricelist resmi Cipta Group periode Oktober 2026, harga jual unit di Blok Ruby mulai dari Rp 408.000.000 untuk tipe 36+(45)/72 Standar. Tersedia juga unit posisi Hook luas 96 m² seharga Rp 506.000.000 dan Hook luas 115.2 m² seharga Rp 534.500.000 dengan Booking Fee hanya Rp 5.000.000."
    },
    {
      q: "Bagaimana skema pembayaran Cash Bertahap sampai 60x?",
      a: "Skema Cash Bertahap memungkinkan Anda mencicil langsung ke Developer Cipta Group secara flat hingga 60 kali (5 Tahun) tanpa melalui perbankan dan TANPA BI CHECKING (cukup KTP & NPWP). Untuk tipe standar Rp 408 Juta, setelah booking fee Rp 5 Juta, cicilan flat sebesar Rp 6.716.667 /bulan selama 60 bulan."
    },
    {
      q: "Apa saja promo yang didapatkan untuk pengajuan KPR?",
      a: "Untuk skema KPR Indent/Ekspress, pembeli mendapatkan paket promo banjir subsidi: Diskon 10% langsung dari harga jual (potongan hingga Rp 53,4 Juta), Free Akte Jual Beli (AJB), Free Sertifikat Hak Guna Bangunan (SHGB), Free BPHTB, dan Free Biaya Akad Kredit perbankan."
    },
    {
      q: "Di mana lokasi perumahan Buana Bukit Permata dan bagaimana aksesibilitasnya?",
      a: "Perumahan berlokasi di kawasan segitiga emas Tembesi - Batu Aji - Barelang, Batam. Hanya 1 menit ke Bundaran Simpang Barelang, 2 menit ke Top 100 Tembesi, 2 menit ke Universitas Putera Batam, 2 menit ke RS Awal Bros Batu Aji & Pasar SP Plaza, 5 menit ke Jembatan Barelang, dan 5 menit ke Kawasan Industri Batindo Mukakuning."
    },
    {
      q: "Kapan jadwal Serah Terima Bangunan (STB) unit?",
      a: "Sesuai dengan ketentuan resmi PT Buana Cipta Propertindo pada rilis pricelist Blok Ruby, Serah Terima Bangunan (STB) dijadwalkan pada bulan Oktober 2028."
    },
    {
      q: "Fasilitas apa saja yang tersedia di dalam perumahan?",
      a: "Buana Bukit Permata sudah dilengkapi fasilitas Ruang Bermain Anak (RBA) terpadu yang sudah terbangun dan siap dinikmati, keamanan One Gate System 24 jam dengan pos sekuriti, row jalan lingkungan cor beton ekstra lebar, kontur bukit alami bebas banjir, serta dekat sarana ibadah."
    },
    {
      q: "Bagaimana prosedur survey lokasi dan pemilihan nomor kavling?",
      a: "Anda dapat menghubungi Frans (Official Marketing Executive Cipta Group) di nomor 0823-9105-9216 untuk membuat janji pendampingan survey langsung ke lokasi setiap hari (08:30 - 18:00 WIB) dan mengecek ketersediaan blok kavling View Kota atau View Laut."
    }
  ];

  return (
    <section id="faq" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold shadow-sm">
            <HelpCircle className="w-4 h-4 text-secondary-fixed-variant" />
            <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Informasi Seputar Buana Bukit Permata
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Jawaban lengkap seputar harga resmi, skema cicilan Cash Bertahap 60x, promo KPR, lokasi, dan prosedur booking.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-surface-container-lowest border-secondary shadow-md'
                    : 'bg-surface-container-low hover:bg-surface-container-lowest border-surface-variant/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm sm:text-base text-primary leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-secondary text-white'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-3 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Card */}
        <div className="mt-10 p-6 rounded-3xl bg-surface-container-low border border-surface-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-base text-primary">
              Masih Memiliki Pertanyaan Lain?
            </h4>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Konsultasikan langsung dengan Marketing Resmi Frans untuk simulasi khusus atau nomor kavling.
            </p>
          </div>
          <a
            href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya ingin bertanya lebih lanjut mengenai perumahan Buana Bukit Permata Tembesi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white hover:bg-secondary-fixed hover:text-on-secondary-fixed text-xs font-bold shadow-sm transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Langsung ke Frans via WA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
