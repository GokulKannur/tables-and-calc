// src/components/ClientLayout.tsx
"use client";

import { useState, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

// Lazy load the modal - it's not needed on initial render
const FeedbackModal = lazy(() => import('@/components/FeedbackModal'));

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
      {isFeedbackModalOpen && (
        <Suspense fallback={null}>
          <FeedbackModal
            isOpen={isFeedbackModalOpen}
            onClose={() => setIsFeedbackModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}