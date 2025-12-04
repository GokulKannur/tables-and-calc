// src/app/coming-soon/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Coming Soon | TablesAndCalc',
    description: 'This feature is under development.',
};

export default function ComingSoonPage() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="text-6xl mb-6">🚧</div>
                <h1 className="text-3xl font-bold mb-4">Under Development</h1>
                <p className="text-muted-foreground mb-8">
                    This feature isn&apos;t ready yet. Check back later!
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
