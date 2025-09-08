// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} TablesAndCalc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}