import React, { useState, useRef } from 'react';
import { MARKETING_INFO } from '../data/propertyData';
import { Video, Play, Pause, Volume2, VolumeX, MessageCircle, Building2, Waves, Eye } from 'lucide-react';

export default function VideoProgress() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videos = [
    {
      id: "view-kota",
      title: "Video 1 — View Kota",
      badge: "Panorama View Kota",
      tag: "City Skyline View",
      desc: "Menikmati lanskap pemandangan kota Batam yang mempesona dari ketinggian bukit kawasan Buana Bukit Permata.",
      src: "/videos/video-progress-1.mp4",
      icon: Building2,
      accentColor: "bg-primary"
    },
    {
      id: "view-laut",
      title: "Video 2 — View Laut",
      badge: "Panorama View Laut",
      tag: "Ocean & Coastal View",
      desc: "Keindahan panorama laut lepas dan hembusan angin perbukitan yang sejuk menenangkan di Buana Bukit Permata.",
      src: "/videos/video-progress-2.mp4",
      icon: Waves,
      accentColor: "bg-secondary"
    }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSelectVideo = (index) => {
    setActiveVideoIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentVid = videos[activeVideoIndex];
  const CurrentIcon = currentVid.icon;

  return (
    <section id="video-progress" className="w-full py-16 lg:py-24 bg-surface-container-low border-t border-surface-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest text-secondary font-extrabold flex items-center justify-center gap-1.5">
            <Video className="w-4 h-4 text-secondary" />
            Dokumentasi Video Lapangan Aktual
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Video Panorama View Kota & View Laut
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Saksikan langsung keistimewaan kontur perbukitan Buana Bukit Permata dengan panorama spektakuler <strong>View Kota</strong> dan <strong>View Laut</strong> tanpa rekayasa.
          </p>
        </div>

        {/* Video Player & Controller Card */}
        <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-3xl p-4 sm:p-6 shadow-xl border border-surface-variant/40">
          {/* Main Video Box */}
          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center group shadow-md">
            <video
              ref={videoRef}
              src={currentVid.src}
              className="w-full h-full object-contain"
              playsInline
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Top Badge overlay */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                <CurrentIcon className="w-3.5 h-3.5 text-secondary-fixed" />
                <span>{currentVid.badge}</span>
              </span>
            </div>

            {/* Overlay Play Button when paused */}
            {!isPlaying && (
              <button
                onClick={handleTogglePlay}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-10"
                aria-label="Putar Video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-secondary-fixed fill-current" />
              </button>
            )}

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between text-white opacity-95 transition-opacity z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? 'Jeda' : 'Putar'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <button
                  onClick={handleToggleMute}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-xs font-bold hidden sm:inline text-white/90">
                  {currentVid.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-extrabold shadow-sm">
                  {currentVid.tag}
                </span>
              </div>
            </div>
          </div>

          {/* Video Switcher Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {videos.map((vid, idx) => {
              const IconComp = vid.icon;
              const isActive = activeVideoIndex === idx;
              return (
                <button
                  key={vid.id}
                  onClick={() => handleSelectVideo(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-primary-container text-white border-primary shadow-md ring-2 ring-secondary/40'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface border-surface-variant/40'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-secondary text-white shadow-sm' : 'bg-surface-container-lowest text-primary shadow-sm'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-sm sm:text-base leading-snug">{vid.title}</h4>
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-surface-container text-on-surface-variant'
                        }`}
                      >
                        {vid.badge}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                        isActive ? 'text-on-primary-container' : 'text-on-surface-variant'
                      }`}
                    >
                      {vid.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-5 pt-4 border-t border-surface-variant/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-on-surface-variant text-center sm:text-left">
              Ingin survey kavling dengan posisi <strong>View Kota</strong> atau <strong>View Laut</strong>? Hubungi Frans.
            </p>
            <a
              href={`${MARKETING_INFO.waLink}?text=${encodeURIComponent(`Halo Frans, saya ingin survey lokasi unit Buana Bukit Permata yang memiliki ${currentVid.badge}. Mohon info nomor blok yang tersedia.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white hover:bg-secondary-fixed hover:text-on-secondary-fixed text-xs font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pilih Unit {currentVid.badge} via WA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
