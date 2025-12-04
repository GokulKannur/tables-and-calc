// src/app/feedback/page.tsx
import FeedbackForm from '@/components/FeedbackForm';

export default function FeedbackPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Submit Feedback</h1>
            <p className="text-center text-muted-foreground mb-8">
                Have a suggestion or found a bug? Let us know!
            </p>
            <div className="bg-card p-8 border rounded-lg shadow-sm">
                <FeedbackForm />
            </div>
        </div>
    );
}