import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-wider text-white"
        >
          CS <span className="text-orange-500">STATS</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Inicio
          </Link>

          <Link
            href="/stats"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Estadísticas
          </Link>

          <Link
            href="/quiz"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}