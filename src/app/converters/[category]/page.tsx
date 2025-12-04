// src/app/converters/[category]/page.tsx
import Link from "next/link";
import { converterData, popularConversions } from "@/lib/unitData";
import type { Metadata } from "next";

// Import all possible converter components
import UnitConverter from "@/components/converters/UnitConverter";
import TemperatureConverter from "@/components/converters/TemperatureConverter";
import ColorConverter from "@/components/converters/ColorConverter";
import ElectricalCalculator from "@/components/converters/ElectricalCalculator";

export async function generateStaticParams() {
    return Object.keys(converterData).map((category) => ({
        category,
    }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const categoryInfo = converterData[params.category as keyof typeof converterData];
    if (!categoryInfo) return { title: "Converter Not Found" };
    return {
        title: `${categoryInfo.name} Converters | TablesAndCalc`,
        description: `A collection of free and online ${categoryInfo.name.toLowerCase()} converters.`,
    };
}

export default function GenericCategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;
    const categoryInfo = converterData[category as keyof typeof converterData];
    const popularLinks = popularConversions.filter((c) => c.category === category);

    if (!categoryInfo) {
        return <div>Category not found</div>;
    }

    // ✨ FIX: Conditionally render the correct component based on the category
    let converterComponent;
    if (category === "temperature") {
        converterComponent = <TemperatureConverter defaultFrom="c" defaultTo="f" />;
    } else if (category === "color") {
        converterComponent = <ColorConverter />;
    } else if (category === "electrical") {
        converterComponent = <ElectricalCalculator />;
    } else {
        // This is the default case for standard unit conversions (length, weight, etc.)
        // Add a safety check to ensure units exist before rendering
        if (!categoryInfo.units || categoryInfo.units.length < 2) {
            converterComponent = <p className="text-center text-red-500">This category is not configured for conversion.</p>;
        } else {
            converterComponent = (
                <UnitConverter
                    defaultFrom={categoryInfo.units[0].id}
                    defaultTo={categoryInfo.units[1].id}
                    units={categoryInfo.units}
                    conversionFactors={categoryInfo.factors}
                />
            );
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 pb-12">
            <nav className="text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:underline">Home</Link> /{" "}
                <Link href="/converters" className="hover:underline">Converters</Link> /{" "}
                <span className="font-medium text-foreground capitalize">{categoryInfo.name}</span>
            </nav>

            <div className="bg-card p-6 border rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold text-center mb-2">{categoryInfo.name} Converter</h1>
                {converterComponent}
            </div>

            <div className="mt-8 bg-card p-6 border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Popular {categoryInfo.name} Conversions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 text-primary">
                    {popularLinks.map((link) => (
                        <Link key={link.slug} href={`/converters/${link.slug}`} className="hover:underline capitalize">
                            {link.slug.replace(`${category}/`, "").replace(/-/g, " ")}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}