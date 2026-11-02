import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import UnitSpecs from './components/UnitSpecs';
import StrategicLocation from './components/StrategicLocation';
import Facilities from './components/Facilities';
import VideoProgress from './components/VideoProgress';
import VisualGallery from './components/VisualGallery';
import OfficialPricelist from './components/OfficialPricelist';
import KprCalculator from './components/KprCalculator';
import FAQSection from './components/FAQSection';
import ContactBookingForm from './components/ContactBookingForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ImageModal from './components/ImageModal';

export default function App() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    desc: ''
  });

  const handleOpenModal = (imageSrc, title, desc) => {
    setModalData({
      isOpen: true,
      imageSrc,
      title,
      desc
    });
  };

  const handleCloseModal = () => {
    setModalData(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-primary-container selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenModal={handleOpenModal} />
        <QuickHighlights />
        <UnitSpecs onOpenModal={handleOpenModal} />
        <StrategicLocation onOpenModal={handleOpenModal} />
        <Facilities onOpenModal={handleOpenModal} />
        <VideoProgress />
        <VisualGallery onOpenModal={handleOpenModal} />
        <OfficialPricelist />
        <KprCalculator />
        <FAQSection />
        <ContactBookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Call to Action */}
      <FloatingWhatsApp />

      {/* Lightbox Modal for High-Resolution Visual Inspection */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        imageSrc={modalData.imageSrc}
        title={modalData.title}
        desc={modalData.desc}
      />
    </div>
  );
}
