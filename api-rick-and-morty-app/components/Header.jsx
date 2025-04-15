import Link from 'next/link';
export default function Footer() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">Rick & Morty App</h1>
      <nav className="flex gap-4 text-sm">
        <Link href="/" className="hover:text-blue-500">Inicio</Link>
        <Link href="/compare" className="hover:text-blue-500">Comparar</Link>
      </nav>
    </header>
    );
  }
  