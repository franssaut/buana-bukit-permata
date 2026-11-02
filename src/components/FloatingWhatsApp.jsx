import React from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Main Floating WhatsApp Button */}
      <a
        href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent('Halo Frans, saya melihat website Buana Bukit Permata dan ingin bertanya mengenai unit dan promo terbaru.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group ring-4 ring-[#25D366]/20"
        aria-label="Chat via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-bold text-xs sm:text-sm tracking-wide">
          Chat Frans (Marketing)
        </span>
        <span className="sm:hidden font-bold text-xs">Chat Sales</span>
      </a>
    </div>
  );
}
