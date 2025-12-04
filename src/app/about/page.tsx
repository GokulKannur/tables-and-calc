import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About | TablesAndCalc",
    description: "TablesAndCalc - Free calculators and converters built by one person.",
};

export default function AboutPage() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">About</h1>

            <div className="space-y-6 text-muted-foreground">
                <p>
                    I built TablesAndCalc because I got tired of cluttered calculator websites
                    full of ads and paywalls. So I made my own.
                </p>

                <p>
                    It&apos;s just me working on this. I add new tools when I have time,
                    fix bugs when I find them, and try to keep everything simple and fast.
                </p>

                <p>
                    Everything here is free. No accounts, no subscriptions, no tracking.
                    Your calculations stay in your browser.
                </p>
            </div>

            {/* What you get */}
            <div className="mt-10 p-6 bg-secondary/30 rounded-xl">
                <h2 className="font-semibold mb-4">What you get:</h2>
                <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Free forever</li>
                    <li>✓ No sign-up needed</li>
                    <li>✓ Works on mobile</li>
                    <li>✓ No ads</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="mt-10 p-6 bg-card border rounded-xl">
                <h2 className="font-semibold mb-3">Found a bug? Have an idea?</h2>
                <p className="text-muted-foreground mb-4">
                    Let me know and I&apos;ll try to fix it.
                </p>
                <a
                    href="/feedback"
                    className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90"
                >
                    Send Feedback
                </a>
            </div>
        </div>
    );
}