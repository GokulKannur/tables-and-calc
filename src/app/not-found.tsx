// src/app/not-found.tsx
import Link from 'next/link';
import { Home, Calculator, FolderSearch } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="max-w-md text-center">
                {/* 404 Display */}
                <div className="relative mb-8">
                    <span className="text-[150px] font-extrabold text-primary/10 leading-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FolderSearch className="w-20 h-20 text-primary/50" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Don&apos;t worry, you can find plenty of other tools on our site.
                </p>

                {/* Navigation Options */}
                <div className="space-y-3">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Go to Homepage
                    </Link>

                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            href="/calculators"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                        >
                            <Calculator className="w-4 h-4" />
                            Calculators
                        </Link>
                        <Link
                            href="/converters"
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                        >
                            Converters
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
