// src/app/terms/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | TablesAndCalc',
    description: 'Terms of Service for TablesAndCalc - Free online calculators and converters.',
};

export default function TermsOfServicePage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        By accessing and using TablesAndCalc (&quot;the Service&quot;), you agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use our Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        TablesAndCalc provides free online calculators, unit converters, and reference tables. Our tools are
                        designed to be helpful for educational, personal, and professional purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Free to Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        All our tools and resources are provided free of charge. We do not require registration or payment
                        to access our calculators and converters.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Accuracy Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        While we strive for accuracy in all our tools and calculations:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li>Results are provided &quot;as is&quot; for informational purposes only</li>
                        <li>We do not guarantee 100% accuracy for all calculations</li>
                        <li>You should verify important calculations independently</li>
                        <li>Do not rely solely on our tools for critical decisions (medical, financial, legal, etc.)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        TablesAndCalc shall not be liable for any direct, indirect, incidental, or consequential damages
                        arising from the use or inability to use our Service. This includes, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li>Errors or inaccuracies in calculations</li>
                        <li>Decisions made based on our tools</li>
                        <li>Service interruptions or unavailability</li>
                        <li>Data loss or security breaches</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Acceptable Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        You agree to use our Service only for lawful purposes. You may not:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li>Attempt to disrupt or overload our servers</li>
                        <li>Scrape or automate access to our content without permission</li>
                        <li>Use our Service for any illegal activities</li>
                        <li>Attempt to bypass any security measures</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The content, design, and code of TablesAndCalc are protected by copyright and other intellectual
                        property rights. Educational content and reference materials may be used for personal, non-commercial purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Our Service may contain links to third-party websites. We are not responsible for the content or
                        practices of these external sites.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We reserve the right to modify or discontinue any part of our Service at any time without notice.
                        We may also update these Terms of Service periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you have any questions about these Terms of Service, please contact us through our{' '}
                        <a href="/feedback" className="text-primary hover:underline">feedback page</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
