import React, { useState } from 'react';
import { OFFICIAL_PRICELIST, PROMO_DETAILS, MARKETING_INFO } from '../data/propertyData';
import { Receipt, CheckCircle2, ShieldCheck, Tag, Sparkles, MessageCircle, Info, Calendar, FileText } from 'lucide-react';

export default function OfficialPricelist() {
  const [selectedUnitId, setSelectedUnitId] = useState('standart-72');

  const formatIDR = (num) => {
    return 'Rp ' + Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const selectedUnit = OFFICIAL_PRICELIST.find(u => u.id === selectedUnitId) || OFFICIAL_PRICELIST[0];

  return (
    <section id="daftar-harga" className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-surface-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold shadow-sm">
            <Receipt className="w-4 h-4 text-secondary-fixed-variant" />
            <span>Pricelist Resmi • Periode Oktober 2026</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Daftar Harga & Simulasi Angsuran Resmi
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Perumahan <strong>Buana Bukit Permata Tembesi</strong> (Blok Ruby). Transparansi harga langsung dari pengembang resmi PT Buana Cipta Propertindo (Cipta Group).
          </p>
        </div>

        {/* 3 Unit Cards Grid for Quick Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {OFFICIAL_PRICELIST.map((unit) => {
            const isSelected = selectedUnitId === unit.id;
            return (
              <div
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between relative border ${
                  isSelected
                    ? 'bg-surface-container-lowest border-secondary shadow-xl ring-2 ring-secondary/40 -translate-y-1'
                    : 'bg-surface-container-lowest/80 border-surface-variant/60 hover:bg-surface-container-lowest hover:shadow-md'
                }`}
              >
                {unit.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-secondary text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    Paling Diminati (Best Seller)
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                        {unit.position}
                      </span>
                      <h3 className="font-extrabold text-lg text-primary leading-tight">
                        {unit.type}
                      </h3>
                      <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                        {unit.block}
                      </p>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="p-3.5 bg-surface-container-low rounded-2xl border border-surface-variant/40">
                    <span className="text-[11px] text-on-surface-variant font-semibold block">
                      Harga Jual Resmi:
                    </span>
                    <div className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
                      {formatIDR(unit.price)}
                    </div>
                    <div className="flex items-center justify-between text-xs text-secondary font-bold mt-1.5 pt-1.5 border-t border-surface-variant/30">
                      <span>Booking Fee:</span>
                      <span className="text-on-surface font-extrabold">{formatIDR(unit.bookingFee)}</span>
                    </div>
                  </div>

                  {/* Angsuran Comparison */}
                  <div className="space-y-2 pt-1">
                    <div className="p-3 rounded-xl bg-secondary-container/20 border border-secondary/30 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-secondary block leading-tight">
                          Cash Bertahap 60x:
                        </span>
                        <span className="text-[10px] text-on-surface-variant">Cicilan Flat Developer</span>
                      </div>
                      <span className="font-extrabold text-sm sm:text-base text-secondary">
                        {formatIDR(unit.cashBertahap60x)} <span className="text-[10px] font-normal text-on-surface-variant">/bln</span>
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-primary block leading-tight">
                          KPR 15 Tahun:
                        </span>
                        <span className="text-[10px] text-on-surface-variant">Nilai KPR: {formatIDR(unit.kprValue)}</span>
                      </div>
                      <span className="font-extrabold text-sm sm:text-base text-primary">
                        {formatIDR(unit.kprInstallments.year15)} <span className="text-[10px] font-normal text-on-surface-variant">/bln</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-surface-variant/40 flex items-center justify-between">
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    STB: <strong>{unit.stb}</strong>
                  </span>
                  <a
                    href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent(`Halo Frans, saya ingin booking unit ${unit.type} (${unit.block}) seharga ${formatIDR(unit.price)}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-colors shadow-sm"
                  >
                    <span>Pilih Unit</span>
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Official Table */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-xl border border-surface-variant/40 overflow-hidden mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-surface-variant/40 gap-2">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl text-primary">
                Tabel Rincian Harga & Angsuran Resmi
              </h3>
              <p className="text-xs text-on-surface-variant">
                Surat Keputusan Resmi PT Buana Cipta Propertindo (Cipta Group Batam)
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-extrabold w-fit">
              STB: Oktober 2028
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-surface-container text-primary font-bold border-b border-surface-variant">
                  <th className="p-3 whitespace-nowrap">Tipe Rumah</th>
                  <th className="p-3 whitespace-nowrap">Blok / Nomor</th>
                  <th className="p-3 whitespace-nowrap">Harga Jual</th>
                  <th className="p-3 whitespace-nowrap">Booking Fee</th>
                  <th className="p-3 whitespace-nowrap text-secondary font-bold">Diskon 10% KPR</th>
                  <th className="p-3 whitespace-nowrap">Nilai KPR</th>
                  <th className="p-3 whitespace-nowrap">KPR 10 Thn</th>
                  <th className="p-3 whitespace-nowrap">KPR 15 Thn</th>
                  <th className="p-3 whitespace-nowrap bg-secondary-container/40 text-secondary-fixed-variant font-extrabold">
                    Cash Bertahap 60x
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant/40">
                {OFFICIAL_PRICELIST.map((u, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-3 font-extrabold text-primary whitespace-nowrap">
                      {u.type}
                    </td>
                    <td className="p-3 text-on-surface whitespace-nowrap">
                      {u.block}
                    </td>
                    <td className="p-3 font-extrabold text-primary whitespace-nowrap">
                      {formatIDR(u.price)}
                    </td>
                    <td className="p-3 text-on-surface whitespace-nowrap">
                      {formatIDR(u.bookingFee)}
                    </td>
                    <td className="p-3 text-secondary font-extrabold whitespace-nowrap">
                      {formatIDR(u.discountKpr)}
                    </td>
                    <td className="p-3 text-on-surface font-semibold whitespace-nowrap">
                      {formatIDR(u.kprValue)}
                    </td>
                    <td className="p-3 text-on-surface whitespace-nowrap">
                      {formatIDR(u.kprInstallments.year10)}
                    </td>
                    <td className="p-3 text-primary font-bold whitespace-nowrap">
                      {formatIDR(u.kprInstallments.year15)}
                    </td>
                    <td className="p-3 bg-secondary-container/20 font-extrabold text-secondary whitespace-nowrap">
                      {formatIDR(u.cashBertahap60x)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Official Promo & Payment System Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Promo Packages Left */}
          <div className="lg:col-span-6 space-y-6">
            {/* KPR Indent Promo */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-surface-variant/40 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                  <Tag className="w-5 h-5 text-secondary-fixed-variant" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-primary">
                    Promo Spesial KPR Indent / Ekspress
                  </h4>
                  <span className="text-xs text-secondary font-bold">Keuntungan Berlimpah Pembeli KPR</span>
                </div>
              </div>

              <ul className="space-y-2 pt-1 text-xs sm:text-sm text-on-surface">
                {PROMO_DETAILS.kprPromos.map((promo, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-container-low">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-semibold">{promo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cash Bertahap Promo */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-surface-variant/40 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-secondary-fixed" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-primary">
                    Promo Cash Bertahap 60x Developer
                  </h4>
                  <span className="text-xs text-on-surface-variant">Solusi Praktis Tanpa Perbankan</span>
                </div>
              </div>

              <ul className="space-y-2 pt-1 text-xs sm:text-sm text-on-surface">
                {PROMO_DETAILS.cashBertahapPromos.map((promo, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-container-low">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-semibold">{promo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sistem Pembayaran Resmi Right */}
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm border border-surface-variant/40 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-surface-variant/40">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-base sm:text-lg text-primary">
                  Sistem & Ketentuan Pembayaran Resmi
                </h4>
                <span className="text-xs text-on-surface-variant">PT Buana Cipta Propertindo (Cipta Group)</span>
              </div>
            </div>

            <ol className="space-y-2.5 text-xs text-on-surface-variant leading-relaxed">
              {PROMO_DETAILS.paymentTerms.map((term, i) => (
                <li key={i} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors">
                  <span className="w-5 h-5 rounded-full bg-surface-container text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ol>

            <div className="p-3.5 bg-secondary-container/20 rounded-2xl border border-secondary/30 text-xs text-secondary-fixed-variant font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
              <span>Transaksi sah hanya melalui kasir resmi PT Buana Cipta Propertindo dengan kwitansi asli Cipta Group.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
