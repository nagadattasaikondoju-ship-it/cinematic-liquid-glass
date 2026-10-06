import { useState } from 'react';
import { AsmeHeroSection } from './sections/AsmeHeroSection';
import { AgencyHeroAndCapabilities } from './sections/AgencyHeroAndCapabilities';
import { PrismaStudioSection } from './sections/PrismaStudioSection';
import { ShowreelModal } from './components/ShowreelModal';
import { InquiriesModal } from './components/InquiriesModal';
import { ExperienceController } from './components/ExperienceController';

export function App() {
  const [activeView, setActiveView] = useState<'all' | 'asme' | 'agency' | 'prisma'>('all');
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
    <div className="min-h-screen bg-black text-white relative selection:bg-white/20 selection:text-white">
      {/* View Rendering */}
      {activeView === 'all' && (
        <main>
          <AsmeHeroSection
            onExploreClick={() => setActiveView('agency')}
            onShowManifesto={handleOpenManifesto}
          />
          <AgencyHeroAndCapabilities
            onStartProject={handleOpenInquiries}
            onWatchShowreel={() => setShowreelOpen(true)}
          />
          <PrismaStudioSection
            onJoinLab={handleOpenInquiries}
            onInquiriesClick={handleOpenInquiries}
          />
        </main>
      )}

      {activeView === 'asme' && (
        <main>
          <AsmeHeroSection
            onExploreClick={() => setActiveView('agency')}
            onShowManifesto={handleOpenManifesto}
          />
        </main>
      )}

      {activeView === 'agency' && (
        <main>
          <AgencyHeroAndCapabilities
            onStartProject={handleOpenInquiries}
            onWatchShowreel={() => setShowreelOpen(true)}
          />
        </main>
      )}

      {activeView === 'prisma' && (
        <main>
          <PrismaStudioSection
            onJoinLab={handleOpenInquiries}
            onInquiriesClick={handleOpenInquiries}
          />
        </main>
      )}

      {/* Floating Controller */}
      <ExperienceController
        activeView={activeView}
        onSelectView={setActiveView}
        onOpenShowreel={() => setShowreelOpen(true)}
      />

      {/* Modals */}
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
