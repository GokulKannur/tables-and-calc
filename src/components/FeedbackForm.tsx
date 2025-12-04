// src/components/FeedbackForm.tsx
"use client";

import { useState } from 'react';

export default function FeedbackForm() {
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        (e.target as HTMLFormElement).reset();
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (_error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email (Optional)</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full p-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary/50 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
      {responseMessage && <p className="text-center mt-4 text-muted-foreground">{responseMessage}</p>}
    </form>
  );
}