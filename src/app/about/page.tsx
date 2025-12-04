import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About | TablesAndCalc",
    description: "TablesAndCalc is a passion project offering free, accurate, and user-friendly online calculators, converters, and reference tools for everyone.",
    keywords: ['about tablesandcalc', 'free calculators', 'online tools', 'unit converters', 'reference tables'],
};

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    About TablesAndCalc
                </h1>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                {/* Mission */}
                <p>
                    TablesAndCalc is a dedicated resource for free, accurate, and user-friendly online tools.
                    My mission is to make a comprehensive suite of calculators, converters, and reference
                    materials accessible to everyone—from students to professionals—without any fees or
                    subscriptions, now and always.
                </p>

                <p>
                    This project is a passion project, developed and maintained by a single individual
                    dedicated to the world of numbers and data. The goal is simple: to create a clean,
                    reliable, and powerful toolkit that helps you solve problems without the clutter of
                    paid services.
                </p>

                <p>
                    I am committed to the continuous growth of TablesAndCalc. You can expect regular
                    updates with more materials on the way, including new calculators, expanded data
                    tables, and in-depth educational resources on a variety of topics. My aim is to
                    evolve this platform into an indispensable tool for your daily needs.
                </p>

                <p>
                    Thank you for using TablesAndCalc. I hope you find it valuable and look forward
                    to this platform being your trusted resource for all things calculation.
                </p>
            </div>

            {/* What We Offer */}
            <div className="mt-12 bg-secondary/30 p-8 rounded-2xl border border-border">
                <h2 className="text-xl font-semibold mb-4">What You Get</h2>
                <ul className="space-y-3">
                    {[
                        "100% Free to use, forever",
                        "No registration or sign-up required",
                        "Works great on mobile and desktop",
                        "Accurate, verified formulas",
                        "No tracking or ads"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-sm">✓</div>
                            <span className="font-medium text-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Privacy & Contact */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-xl border shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Privacy</h2>
                    <p className="text-muted-foreground">
                        I respect your privacy. This site does not collect personal data, store your
                        calculations, or sell information to third parties. All calculations are
                        performed locally in your browser.
                    </p>
                </div>

                <div className="bg-card p-8 rounded-xl border shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground mb-6">
                        Have a suggestion for a new tool? Found a bug? I&apos;d love to hear from you.
                    </p>
                    <a
                        href="/feedback"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                        Send Feedback
                    </a>
                </div>
            </div>
        </div>
    );
}