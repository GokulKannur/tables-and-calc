// src/components/FeedbackForm.tsx
"use client";

import { useState } from 'react';

export default function FeedbackForm() {
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace with your actual Formspree URL
  const FORMSPREE_URL = "https://formspree.io/f/meolvnoo";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setResponseMessage('Thank you for your feedback!');
            (e.target as HTMLFormElement).reset(); // Clear the form
        } else {
            setResponseMessage('Something went wrong. Please try again.');
        }
    } catch (_error) { // FIX: Added underscore to unused variable
        setResponseMessage('An error occurred. Please try again later.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Your Email (Optional)</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
      {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
    </form>
  );
}