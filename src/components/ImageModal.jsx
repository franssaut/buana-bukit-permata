import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, title, desc }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-primary text-on-primary">
          <div>
            <h3 className="font-bold text-lg leading-tight">{title || 'Preview Gambar'}</h3>
            {desc && <p className="text-xs text-on-primary-container opacity-90 mt-0.5">{desc}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            aria-label="Tutup Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content */}
        <div className="relative max-h-[75vh] flex items-center justify-center bg-black/5 overflow-auto p-2">
          <img
            src={imageSrc}
            alt={title || 'Preview'}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 bg-surface-container-low flex items-center justify-between">
          <span className="text-xs text-on-surface-variant font-medium">
            Buana Bukit Permata • Cipta Group Batam
          </span>
          <div className="flex items-center gap-3">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Buka Tab Baru
            </a>
            <a
              href={imageSrc}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-container text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Unduh Gambar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
