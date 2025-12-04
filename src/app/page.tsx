import Link from 'next/link';
import { ArrowRight, Calculator, RefreshCw, Table2, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
            ✨ New: Financial Calculators Added
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Calculators <br className="hidden md:block" />
            <span className="text-primary">& Converters</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Free tools. No ads. No signup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/calculators"
              className="h-11 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Explore Calculators
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/converters"
              className="h-11 px-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Converters
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            href="/calculators"
            title="Calculators"
            description="Math, finance, health, and more."
            icon={Calculator}
            color="text-blue-500"
          />
          <FeatureCard
            href="/converters"
            title="Converters"
            description="Length, weight, temperature, and other units."
            icon={RefreshCw}
            color="text-green-500"
          />
          <FeatureCard
            href="/tables"
            title="Reference Tables"
            description="Periodic table, log tables, wire gauges."
            icon={Table2}
            color="text-purple-500"
          />
          <FeatureCard
            href="/resources"
            title="Learning Resources"
            description="Guides on Ohm's law, percentages, and more."
            icon={BookOpen}
            color="text-orange-500"
          />
        </div>
      </section>

      {/* POPULAR TOOLS PREVIEW (Placeholder for now) */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Popular Tools</h2>
          <Link href="/calculators" className="text-sm text-primary hover:underline flex items-center">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/calculators/scientific-calculator" className="group rounded-lg border p-6 hover:bg-secondary/40 hover:border-primary/50 transition-all">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Scientific Calculator</h3>
            <p className="text-sm text-muted-foreground">Trig, logs, and advanced math.</p>
          </Link>
          <Link href="/calculators/bmi-calculator" className="group rounded-lg border p-6 hover:bg-secondary/40 hover:border-primary/50 transition-all">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">BMI Calculator</h3>
            <p className="text-sm text-muted-foreground">Check your body mass index.</p>
          </Link>
          <Link href="/calculators/compound-interest-calculator" className="group rounded-lg border p-6 hover:bg-secondary/40 hover:border-primary/50 transition-all">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Compound Interest</h3>
            <p className="text-sm text-muted-foreground">See how your money grows.</p>
          </Link>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
        <div className="space-y-4">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Is this free?</h3>
            <p className="text-muted-foreground">Yes. Everything is free. No hidden fees, no premium plans.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Do I need to sign up?</h3>
            <p className="text-muted-foreground">No. Just use the tools. No account needed.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Is my data saved anywhere?</h3>
            <p className="text-muted-foreground">No. All calculations happen in your browser. Nothing is stored on any server.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Can I use this for work or school?</h3>
            <p className="text-muted-foreground">Yes. Use it however you want.</p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is TablesAndCalc free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Everything is free. No hidden fees, no premium plans."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to sign up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Just use the tools. No account needed."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data saved anywhere?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. All calculations happen in your browser. Nothing is stored on any server."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

function FeatureCard({ href, title, description, icon: Icon, color }: { href: string, title: string, description: string, icon: any, color: string }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
    >
      <div className={cn("mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary", color)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}