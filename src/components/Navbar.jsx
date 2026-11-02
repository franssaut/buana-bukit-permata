import React, { useState, useEffect } from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { Phone, MessageCircle, Menu, X, Home, MapPin, Sparkles, Video, Calculator, Calendar, Receipt, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check section in view
      const sections = ['beranda', 'spesifikasi-unit', 'lokasi-akses', 'fasilitas', 'video-progress', 'daftar-harga', 'kpr-simulator', 'faq', 'kontak-booking'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#beranda', icon: Home },
    { id: 'spesifikasi-unit', label: 'Tipe Rumah', href: '#spesifikasi-unit', icon: Home },
    { id: 'lokasi-akses', label: 'Lokasi Strategis', href: '#lokasi-akses', icon: MapPin },
    { id: 'fasilitas', label: 'Fasilitas & RBA', href: '#fasilitas', icon: Sparkles },
    { id: 'video-progress', label: 'Video Progres', href: '#video-progress', icon: Video },
    { id: 'daftar-harga', label: 'Daftar Harga', href: '#daftar-harga', icon: Receipt },
    { id: 'kpr-simulator', label: 'Simulasi Bayar', href: '#kpr-simulator', icon: Calculator },
    { id: 'faq', label: 'FAQ', href: '#faq', icon: HelpCircle },
    { id: 'kontak-booking', label: 'Survey Lokasi', href: '#kontak-booking', icon: Calendar },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-[0_4px_20px_rgba(10,77,78,0.08)] py-3'
          : 'bg-surface/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-white text-[22px]">apartment</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl text-primary tracking-tight leading-tight group-hover:text-primary-container transition-colors">
              Buana Bukit Permata
            </span>
            <span className="text-[11px] uppercase tracking-wider text-secondary font-bold leading-none">
              by CIPTA GROUP
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-surface-container/60 p-1 rounded-full border border-surface-variant/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Marketing Contact Call/WA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={MARKETING_INFO.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-secondary-fixed-variant" />
            <span>
              Marketing:{' '}
              <strong className="underline underline-offset-2">0823-9105-9216</strong> ({MARKETING_INFO.name})
            </span>
          </a>

          {/* Mobile WA mini button */}
          <a
            href={MARKETING_INFO.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container shadow-sm"
            aria-label="Chat WhatsApp Marketing"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-variant shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}

            {/* Mobile Contact Quick Card */}
            <div className="pt-3 border-t border-surface-variant/40 mt-3 space-y-2">
              <div className="p-3 bg-surface-container-low rounded-xl">
                <p className="text-xs text-on-surface-variant font-medium">Official Marketing Frans:</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-primary text-sm">0823-9105-9216</span>
                  <a
                    href={MARKETING_INFO.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-lg shadow-sm"
                  >
                    Chat Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
