// src/app/privacy/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | TablesAndCalc',
    description: 'Privacy policy for TablesAndCalc - Free online calculators and converters.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                <section className="bg-secondary/30 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">The Short Version</h2>
                    <p className="text-foreground leading-relaxed font-medium">
                        We don&apos;t collect your personal data. Period. All calculations happen in your browser,
                        and we don&apos;t store anything about you or what you calculate.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What We Don&apos;t Collect</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>We don&apos;t collect your name, email, or any personal information</li>
                        <li>We don&apos;t track what calculations you perform</li>
                        <li>We don&apos;t store your inputs or results</li>
                        <li>We don&apos;t require you to create an account</li>
                        <li>We don&apos;t sell or share any data (because we don&apos;t have any)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">How Our Tools Work</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        All calculations, conversions, and tools run <strong>entirely in your browser</strong>.
                        When you use our calculators or converters, the processing happens on your device —
                        nothing is sent to our servers. Your data never leaves your computer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Local Storage</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We use your browser&apos;s local storage only to remember your theme preference (light/dark mode).
                        This stays on your device and is never transmitted anywhere.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Analytics</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We use Google Analytics to understand general website traffic (like which pages are popular).
                        This is a third-party service that may collect anonymous data such as:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li>Pages visited</li>
                        <li>Time spent on site</li>
                        <li>General geographic region</li>
                        <li>Device type and browser</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                        <strong>We have no control over what Google Analytics collects.</strong> This data is processed
                        by Google according to their own privacy policy. If you want to opt out, you can use browser
                        extensions like &quot;Google Analytics Opt-out&quot; or enable &quot;Do Not Track&quot; in your browser.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Hosting</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our website is hosted on third-party infrastructure that may automatically log basic
                        request information (IP addresses, request times) as part of standard web server operations.
                        We don&apos;t access or use these logs.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">No Cookies (From Us)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We don&apos;t set any cookies ourselves. However, Google Analytics may set cookies as part of
                        their tracking. You can block these using your browser settings or privacy extensions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Questions? Reach out through our{' '}
                        <a href="/feedback" className="text-primary hover:underline">feedback page</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
