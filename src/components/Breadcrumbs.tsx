"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Fragment } from 'react';

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show breadcrumbs on home page
    if (pathname === '/') return null;

    const segments = pathname.split('/').filter(Boolean);

    // Generate breadcrumb items
    const breadcrumbItems = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        return { href, label };
    });

    // Schema.org JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://tablesandcalc.online"
            },
            ...breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://tablesandcalc.online${item.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 text-sm text-muted-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center gap-2">
                <li>
                    <Link href="/" className="flex items-center hover:text-foreground transition-colors">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;
                    return (
                        <Fragment key={item.href}>
                            <li aria-hidden="true">
                                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                            </li>
                            <li>
                                {isLast ? (
                                    <span className="font-medium text-foreground" aria-current="page">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link href={item.href} className="hover:text-foreground transition-colors">
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
