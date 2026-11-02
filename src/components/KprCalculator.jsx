import React, { useState, useMemo } from 'react';
import { MARKETING_INFO, OFFICIAL_PRICELIST, PROMO_DETAILS } from '../data/propertyData';
import { Calculator, Percent, Award, Headphones, Send, Sparkles, CheckCircle2, WalletCards, Building2, Tag } from 'lucide-react';

export default function KprCalculator() {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [calcMode, setCalcMode] = useState('cash_bertahap'); // 'cash_bertahap' or 'kpr_bank'
  const [cashBertahapMonths, setCashBertahapMonths] = useState(60);
  const [kprTenorYears, setKprTenorYears] = useState(15);

  const currentUnit = OFFICIAL_PRICELIST[selectedUnitIndex];

  // Format IDR helper
  const formatIDR = (num) => {
    return 'Rp ' + Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // Calculations exactly matching official Cipta Group Pricelist
  const { monthlyPayment, subLabel } = useMemo(() => {
    if (calcMode === 'cash_bertahap') {
      if (cashBertahapMonths === 60) {
        // Exact match with official pricelist: (Price - 5,000,000) / 60
        return {
          monthlyPayment: currentUnit.cashBertahap60x,
          subLabel: `Cicilan Flat 60x (Booking Fee Rp 5 Jt)`
        };
      } else {
        const remaining = currentUnit.price - currentUnit.bookingFee;
        const payment = remaining / cashBertahapMonths;
        return {
          monthlyPayment: payment,
          subLabel: `Cicilan Flat ${cashBertahapMonths}x (Booking Fee Rp 5 Jt)`
        };
      }
    } else {
      // KPR Bank
      if (kprTenorYears === 15) {
        return {
          monthlyPayment: currentUnit.kprInstallments.year15,
          subLabel: `Nilai KPR: ${formatIDR(currentUnit.kprValue)} (Diskon 10%: ${formatIDR(currentUnit.discountKpr)})`
        };
      } else if (kprTenorYears === 10) {
        return {
          monthlyPayment: currentUnit.kprInstallments.year10,
          subLabel: `Nilai KPR: ${formatIDR(currentUnit.kprValue)} (Diskon 10%: ${formatIDR(currentUnit.discountKpr)})`
        };
      } else if (kprTenorYears === 5) {
        return {
          monthlyPayment: currentUnit.kprInstallments.year5,
          subLabel: `Nilai KPR: ${formatIDR(currentUnit.kprValue)} (Diskon 10%: ${formatIDR(currentUnit.discountKpr)})`
        };
      } else {
        // 20 or 25 years fallback
        const monthlyRate = 0.075 / 12;
        const totalMonths = kprTenorYears * 12;
        const payment =
          (currentUnit.kprValue * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1);
        return {
          monthlyPayment: payment,
          subLabel: `Nilai KPR: ${formatIDR(currentUnit.kprValue)}`
        };
      }
    }
  }, [calcMode, currentUnit, cashBertahapMonths, kprTenorYears]);

  const cashBertahapOptions = [
    { label: "12x (1 Thn)", months: 12 },
    { label: "24x (2 Thn)", months: 24 },
    { label: "36x (3 Thn)", months: 36 },
    { label: "48x (4 Thn)", months: 48 },
    { label: "60x (5 Thn)", months: 60, popular: true }
  ];

  const kprTenorOptions = [5, 10, 15, 20];

  const handleWhatsAppConsult = () => {
    let message = '';
    if (calcMode === 'cash_bertahap') {
      message = `Halo Frans (Marketing Buana Bukit Permata),%0A%0ASaya tertarik dengan skema *CASH BERTAHAP ${cashBertahapMonths}x (Developer)*:%0A- Tipe Unit: ${currentUnit.type} (${currentUnit.block})%0A- Harga Jual: ${formatIDR(currentUnit.price)}%0A- Booking Fee: ${formatIDR(currentUnit.bookingFee)}%0A- Estimasi Cicilan: ${formatIDR(monthlyPayment)} /bulan (Flat ${cashBertahapMonths}x)%0A%0AMohon informasi nomor kavling yang siap dibooking.`;
    } else {
      message = `Halo Frans (Marketing Buana Bukit Permata),%0A%0ASaya ingin konsultasi simulasi *KPR BANK INDENT*:%0A- Tipe Unit: ${currentUnit.type} (${currentUnit.block})%0A- Harga Jual: ${formatIDR(currentUnit.price)}%0A- Diskon 10%: ${formatIDR(currentUnit.discountKpr)}%0A- Nilai KPR: ${formatIDR(currentUnit.kprValue)}%0A- Tenor KPR: ${kprTenorYears} Tahun%0A- Estimasi Angsuran: ${formatIDR(monthlyPayment)} /bulan%0A%0AMohon info ketersediaan unit dan bank rekanan.`;
    }
    window.open(`${MARKETING_INFO.waLink}?text=${message}`, '_blank');
  };

  return (
    <section
      id="kpr-simulator"
      className="w-full py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary relative overflow-hidden"
    >
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Official Promo Package Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-secondary-fixed-variant" />
              Promo Pricelist Resmi Cipta Group
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Harga Resmi Mulai Rp 408 Juta
              </h2>
              <p className="text-sm sm:text-base text-on-primary-container leading-relaxed">
                Kemudahan kepemilikan unit di <strong>Buana Bukit Permata Tembesi</strong> dengan skema cicilan
                langsung ke <strong>Developer hingga 60x (Rp 6,7 Jutaan/bln)</strong> atau fasilitas KPR Bank dengan banjir promo bebas biaya.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3.5 bg-secondary-container/20 p-3.5 rounded-2xl backdrop-blur-sm border border-secondary-fixed/40">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <WalletCards className="w-5 h-5 text-secondary-fixed-variant" />
                </div>
                <div>
                  <span className="font-bold text-sm text-secondary-fixed block">
                    Cash Bertahap 60x: Rp 6.716.667 /bln
                  </span>
                  <span className="text-xs text-on-primary-container">
                    Booking fee Rp 5 Jt • Tanpa BI checking • Flat 5 tahun langsung developer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white/10 p-3.5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5 text-secondary-fixed-variant" />
                </div>
                <div>
                  <span className="font-bold text-sm text-secondary-fixed block">
                    Diskon 10% KPR Indent
                  </span>
                  <span className="text-xs text-on-primary-container">
                    Potongan harga hingga Rp 53,4 Juta langsung dari harga jual
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white/10 p-3.5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-secondary-fixed-variant" />
                </div>
                <div>
                  <span className="font-bold text-sm text-secondary-fixed block">
                    Bebas Biaya Surat-Surat & Akad
                  </span>
                  <span className="text-xs text-on-primary-container">
                    Free AJB, Free SHGB, Free BPHTB & Free Biaya Akad Kredit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Pricelist Simulator Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest text-on-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-surface-variant/40">
            {/* Unit Selector */}
            <div className="space-y-4 pb-5 border-b border-surface-variant/40">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-primary">
                    Simulasi Harga & Angsuran Resmi
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                    Pilih tipe unit kavling Blok Ruby di Buana Bukit Permata
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Calculator className="w-6 h-6" />
                </div>
              </div>

              {/* 3 Unit Selection Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {OFFICIAL_PRICELIST.map((unit, idx) => (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnitIndex(idx)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedUnitIndex === idx
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-surface-variant/40'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold block opacity-80">
                      {unit.position}
                    </span>
                    <span className="font-bold text-xs block leading-tight">
                      {unit.typeShort}
                    </span>
                    <span className={`text-xs font-extrabold block mt-1 ${selectedUnitIndex === idx ? 'text-secondary-fixed' : 'text-primary'}`}>
                      {formatIDR(unit.price)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mode Toggle Tabs */}
              <div className="grid grid-cols-2 p-1 bg-surface-container rounded-2xl gap-1">
                <button
                  type="button"
                  onClick={() => setCalcMode('cash_bertahap')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    calcMode === 'cash_bertahap'
                      ? 'bg-secondary text-white shadow-md'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  <WalletCards className="w-4 h-4" />
                  <span>Cash Bertahap s/d 60x</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode('kpr_bank')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                    calcMode === 'kpr_bank'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>KPR Bank Indent</span>
                </button>
              </div>
            </div>

            <div className="space-y-5 mt-6">
              {/* Unit Summary Metric Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-surface-container-low rounded-2xl border border-surface-variant/40 text-center">
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold block">Harga Jual</span>
                  <strong className="text-xs sm:text-sm text-primary font-extrabold">{formatIDR(currentUnit.price)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold block">Booking Fee</span>
                  <strong className="text-xs sm:text-sm text-secondary font-extrabold">{formatIDR(currentUnit.bookingFee)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold block">Diskon 10% KPR</span>
                  <strong className="text-xs sm:text-sm text-secondary font-extrabold">{formatIDR(currentUnit.discountKpr)}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold block">Nilai KPR</span>
                  <strong className="text-xs sm:text-sm text-primary font-extrabold">{formatIDR(currentUnit.kprValue)}</strong>
                </div>
              </div>

              {/* Tenor Selector */}
              {calcMode === 'cash_bertahap' ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant block">
                      Jangka Waktu Cicilan Cash Bertahap
                    </label>
                    <span className="text-[11px] font-bold text-secondary bg-secondary-container/40 px-2.5 py-0.5 rounded-full">
                      Pricelist Resmi: 60x (5 Tahun)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {cashBertahapOptions.map((opt) => (
                      <button
                        key={opt.months}
                        type="button"
                        onClick={() => setCashBertahapMonths(opt.months)}
                        className={`py-2.5 rounded-xl text-center text-xs font-bold transition-all relative ${
                          cashBertahapMonths === opt.months
                            ? 'bg-secondary text-white shadow-md ring-2 ring-secondary/50'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {opt.label}
                        {opt.popular && (
                          <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-error text-white text-[8px] font-extrabold rounded-full">
                            TOP
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-semibold text-on-surface-variant block">
                      Jangka Waktu KPR Bank (Asumsi 7.5%)
                    </label>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Sesuai Tabel Pricelist
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {kprTenorOptions.map((tenor) => (
                      <button
                        key={tenor}
                        type="button"
                        onClick={() => setKprTenorYears(tenor)}
                        className={`py-2.5 rounded-xl text-center text-xs sm:text-sm font-bold transition-all ${
                          kprTenorYears === tenor
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {tenor} Tahun
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Result Box */}
              <div className="p-5 rounded-2xl bg-surface-container text-center space-y-1.5 border border-surface-variant/50">
                <span className="text-[11px] uppercase tracking-wider text-on-surface-variant font-extrabold block">
                  {calcMode === 'cash_bertahap'
                    ? `Angsuran Cash Bertahap (${cashBertahapMonths}x Flat)`
                    : `Angsuran KPR Bank (${kprTenorYears} Tahun)`}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  {formatIDR(monthlyPayment)}{' '}
                  <span className="text-xs sm:text-sm font-normal text-on-surface-variant">/bulan</span>
                </div>
                <p className="text-[11px] text-on-surface-variant pt-1 leading-tight">
                  {subLabel}
                </p>
              </div>

              {/* Direct CTA */}
              <button
                type="button"
                onClick={handleWhatsAppConsult}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>
                  {calcMode === 'cash_bertahap'
                    ? `Booking Cash Bertahap ${cashBertahapMonths}x (${currentUnit.typeShort})`
                    : `Booking KPR Indent (${currentUnit.typeShort}) via WhatsApp`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
