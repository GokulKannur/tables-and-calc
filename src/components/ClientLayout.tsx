// src/components/ClientLayout.tsx
"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackModal from '@/components/FeedbackModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <>
      <Navbar onFeedbackClick={() => setIsFeedbackModalOpen(true)} />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
    </>
  );
}