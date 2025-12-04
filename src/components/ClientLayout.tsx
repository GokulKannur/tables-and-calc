// src/components/ClientLayout.tsx
"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackModal from '@/components/FeedbackModal';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <>
      <Navbar onFeedbackClick={() => setIsFeedbackModalOpen(true)} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs />
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