import { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeaderNav } from './components/HeaderNav';
import { OneLoopHeroSection } from './sections/AsmeHeroSection';
import { OneLoopEngineSection } from './sections/OneLoopEngineSection';
import { CapabilitiesSection } from './sections/AgencyHeroAndCapabilities';
import { PrismaStudioSection } from './sections/PrismaStudioSection';
import { OneLoopCaseStudiesSection } from './sections/OneLoopCaseStudiesSection';
import { ShowreelAndInquiriesSection } from './sections/ShowreelAndInquiriesSection';
import { ShowreelModal } from './components/ShowreelModal';
import { InquiriesModal } from './components/InquiriesModal';

export function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    open: boolean;
    type: 'inquiries' | 'manifesto';
  }>({
    open: false,
    type: 'inquiries',
  });

  const handleOpenInquiries = () => {
    setModalState({ open: true, type: 'inquiries' });
  };

  const handleOpenManifesto = () => {
    setModalState({ open: true, type: 'manifesto' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-[#DEDBC8]/20 selection:text-white font-body">
      {/* Top Scroll Progress Line */}
      <ScrollProgressBar />

      {/* Fixed Header Navbar */}
      <HeaderNav
        onStartProject={handleOpenInquiries}
        onShowManifesto={handleOpenManifesto}
      />

      {/* Unified OneLoop Single Scroll Web Platform */}
      <main className="w-full flex flex-col">
        {/* 01: Hero Experience */}
        <OneLoopHeroSection
          onStartProject={handleOpenInquiries}
          onShowManifesto={handleOpenManifesto}
          onWatchShowreel={() => setShowreelOpen(true)}
        />

        {/* 02: The OneLoop Continuous Engine Architecture */}
        <OneLoopEngineSection
          onExploreBrief={handleOpenInquiries}
        />

        {/* 03: Global Roster & Studio Disciplines */}
        <CapabilitiesSection
          onStartProject={handleOpenInquiries}
        />

        {/* 04 & 05: OneLoop Director Narrative & Studio Toolkit */}
        <PrismaStudioSection
          onJoinLab={handleOpenInquiries}
          onInquiriesClick={handleOpenInquiries}
        />

        {/* 06: Flagship OneLoop Case Studies */}
        <OneLoopCaseStudiesSection
          onStartProject={handleOpenInquiries}
        />

        {/* 07 & 08: 4K Showreel, Brief Inquiry Form & Studio Footer */}
        <ShowreelAndInquiriesSection
          onOpenShowreelModal={() => setShowreelOpen(true)}
        />
      </main>

      {/* Interactive Overlays */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

      <InquiriesModal
        isOpen={modalState.open}
        type={modalState.type}
        onClose={() => setModalState({ open: false, type: 'inquiries' })}
      />
    </div>
  );
}

export default App;
