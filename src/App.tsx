import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { AsmeHeroSection } from './sections/AsmeHeroSection';
import { CapabilitiesSection } from './sections/AgencyHeroAndCapabilities';
import { PrismaStudioSection } from './sections/PrismaStudioSection';
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
      {/* Fixed Header Navbar */}
      <HeaderNav
        onStartProject={handleOpenInquiries}
        onShowManifesto={handleOpenManifesto}
      />

      {/* Unified Single Scroll Landing Page */}
      <main className="w-full flex flex-col">
        {/* Section 1: Hero Experience */}
        <AsmeHeroSection
          onStartProject={handleOpenInquiries}
          onShowManifesto={handleOpenManifesto}
          onWatchShowreel={() => setShowreelOpen(true)}
        />

        {/* Section 2: Global Roster & Capabilities */}
        <CapabilitiesSection
          onStartProject={handleOpenInquiries}
        />

        {/* Section 3 & 4: Director Narrative & Studio Workflows */}
        <PrismaStudioSection
          onJoinLab={handleOpenInquiries}
          onInquiriesClick={handleOpenInquiries}
        />

        {/* Section 5, 6 & 7: 4K Showreel, Brief Inquiry Form & Footer */}
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
