// src/app/calculators/area-calculator/page.tsx

// Force this page to always be statically generated
export const dynamic = "force-static";

import AreaCalculatorHubPage from '@/components/calculators/AreaCalculatorHubPage';

export default function AreaCalculatorPage() {
  return <AreaCalculatorHubPage />;
}