// src/components/FeedbackModal.tsx
"use client";

import { useEffect, useRef } from 'react';
import FeedbackForm from './FeedbackForm';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Close the modal if the user clicks on the backdrop
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={handleBackdropClick} className="p-0 rounded-lg shadow-xl backdrop:bg-black/50">
      <div className="w-full max-w-md p-6 bg-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Submit Feedback</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-light">&times;</button>
        </div>
        <FeedbackForm />
      </div>
    </dialog>
  );
}