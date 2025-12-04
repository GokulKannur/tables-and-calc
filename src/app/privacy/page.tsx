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
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Welcome to TablesAndCalc. Your privacy is important to us. This Privacy Policy explains how we collect,
                        use, and protect your information when you use our website and services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

                    <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li><strong>Feedback submissions:</strong> When you submit feedback through our form, we collect the message content to improve our services.</li>
                        <li><strong>Newsletter:</strong> If you subscribe to our newsletter, we collect your email address.</li>
                    </ul>

                    <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li><strong>Usage data:</strong> We may collect anonymous usage statistics to understand how our tools are used.</li>
                        <li><strong>Device information:</strong> Basic information like browser type and screen size to optimize user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>To provide and maintain our free tools and services</li>
                        <li>To improve and optimize our website</li>
                        <li>To respond to your feedback and inquiries</li>
                        <li>To send occasional updates about new features (only if you subscribed)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        All calculations and conversions are performed locally in your browser. We do not store your calculation
                        inputs or results on our servers. Your data stays on your device.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We use minimal cookies for essential functionality:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li><strong>Theme preference:</strong> To remember your light/dark mode choice</li>
                        <li><strong>Analytics:</strong> Anonymous usage statistics to improve our services</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We may use third-party services for analytics and hosting. These services have their own privacy policies
                        governing their data practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                        <li>Access information we have about you</li>
                        <li>Request deletion of your data</li>
                        <li>Opt out of newsletters at any time</li>
                        <li>Disable cookies in your browser settings</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you have questions about this Privacy Policy, please contact us through our{' '}
                        <a href="/feedback" className="text-primary hover:underline">feedback page</a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes
                        by posting the new policy on this page.
                    </p>
                </section>
            </div>
        </div>
    );
}
