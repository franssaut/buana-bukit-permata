import React, { useState } from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { Phone, MessageCircle, Calendar, Send, CheckCircle2, Clock, MapPin, User, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    surveyDate: '',
    paymentMethod: 'Cash Bertahap 60x Developer',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 }
      });
    } catch {
      // Ignore if confetti fails
    }

    setSubmitted(true);

    const message = `Halo Frans (Marketing Buana Bukit Permata),%0A%0ASaya ingin konsultasi & jadwalkan survey lokasi:%0A- Nama: ${encodeURIComponent(formData.name)}%0A- No WhatsApp: ${encodeURIComponent(formData.whatsapp)}%0A- Rencana Survey: ${encodeURIComponent(formData.surveyDate || 'Segera / Menyesuaikan')}%0A- Rencana Pembayaran: ${encodeURIComponent(formData.paymentMethod)}%0A- Catatan: ${encodeURIComponent(formData.notes || 'Mohon info kavling terbaik yang tersedia.')}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(`${MARKETING_INFO.waLink}?text=${message}`, '_blank');
    }, 400);
  };

  return (
    <section id="kontak-booking" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Marketing Persona Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-xl border border-surface-variant/40 space-y-5 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-md shrink-0">
                  F
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] uppercase font-extrabold mb-1">
                    Official Marketing Executive
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary leading-tight">
                    {MARKETING_INFO.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    {MARKETING_INFO.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-on-surface italic bg-surface-container-low p-4 rounded-2xl border-l-4 border-secondary leading-relaxed">
                "Ingin melihat langsung lokasi blok favorit Anda di Buana Bukit Permata? Hubungi saya kapan saja
                untuk jadwal pendampingan survey, pengecekan nomor kavling hook/standar, dan bantuan konsultasi berkas
                KPR tanpa dipungut biaya."
              </blockquote>

              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${MARKETING_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-primary font-bold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Telepon Langsung: {MARKETING_INFO.phone}</span>
                </a>

                <a
                  href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya ingin tanya ketersediaan unit Buana Bukit Permata.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary-container/30 hover:bg-secondary-container/50 transition-colors text-secondary font-bold text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>WhatsApp: {MARKETING_INFO.phone} (Respon Cepat)</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl text-on-surface-variant text-xs">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Layanan Survey: {MARKETING_INFO.workingHours}</span>
                </div>
              </div>

              {/* Developer Stamp */}
              <div className="pt-4 flex items-center justify-between border-t border-surface-variant/40">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-on-surface-variant font-bold">
                    Pengembang Resmi
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-primary">
                    CIPTA GROUP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Terpercaya di Batam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Site Visit Booking Form */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-surface-variant/40">
            <div className="space-y-1.5 mb-6">
              <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-secondary" />
                Booking Jadwal Survey Bebas Ribet
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Formulir Kunjungan & Brosur Unit
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Isi formulir di bawah ini. Frans akan segera menghubungi Anda via WhatsApp untuk mengonfirmasi jadwal survey
                dan mengirimkan e-katalog denah lengkap.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-secondary-container/40 border border-secondary/40 flex items-center gap-3 text-secondary-fixed-variant">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-xs font-bold">
                  Terima kasih! Kami sedang menghubungkan Anda ke WhatsApp Marketing Frans...
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary block" htmlFor="name">
                    Nama Lengkap *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm shadow-sm border border-surface-variant/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary block" htmlFor="whatsapp">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm shadow-sm border border-surface-variant/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary block" htmlFor="surveyDate">
                    Rencana Tanggal Survey
                  </label>
                  <input
                    id="surveyDate"
                    name="surveyDate"
                    type="date"
                    value={formData.surveyDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm shadow-sm border border-surface-variant/40"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary block" htmlFor="paymentMethod">
                    Rencana Cara Bayar
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm shadow-sm border border-surface-variant/40"
                  >
                    <option value="Cash Bertahap 60x Developer">Cash Bertahap s/d 60x (Langsung Developer - Tanpa BI Checking)</option>
                    <option value="Cash Bertahap 12x - 48x">Cash Bertahap 12x - 48x</option>
                    <option value="KPR Bank">KPR Bank (Cicilan Tenor Panjang s/d 25 Thn)</option>
                    <option value="Cash Keras">Cash Keras (Diskon Spesial)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block" htmlFor="notes">
                  Pertanyaan / Kebutuhan Khusus
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Tuliskan jika ingin request kavling hadap matahari pagi, posisi hook/standar, atau simulasi bank tertentu..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm shadow-sm border border-surface-variant/40"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-primary hover:bg-primary-container text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-secondary-fixed" />
                <span>Kirim & Hubungkan ke WhatsApp Frans</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

              <p className="text-[11px] text-on-surface-variant text-center pt-1">
                🔒 Data Anda terjamin aman dan hanya digunakan untuk keperluan konsultasi perumahan Buana Bukit Permata Batam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
