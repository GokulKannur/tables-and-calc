import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                TC
              </div>
              <span className="text-xl font-bold tracking-tight">TablesAndCalc</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your go-to destination for free online calculators, unit converters, and engineering reference tables. Simple, accurate, and professional.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/GokulKannur/tables-and-calc" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:contact@tablesandcalc.online" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculators" className="text-muted-foreground hover:text-primary transition-colors">Calculators</Link>
              </li>
              <li>
                <Link href="/converters" className="text-muted-foreground hover:text-primary transition-colors">Converters</Link>
              </li>
              <li>
                <Link href="/tables" className="text-muted-foreground hover:text-primary transition-colors">Reference Tables</Link>
              </li>
              <li>
                <Link href="/symbols" className="text-muted-foreground hover:text-primary transition-colors">Symbols</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Learning Resources</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified when new tools are added.
            </p>
            <Link
              href="/coming-soon"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TablesAndCalc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}