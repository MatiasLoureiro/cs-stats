import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Counter-Strike Stats
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Conocé tus estadísticas.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Consultá la información disponible de tu cuenta de Counter-Strike
            ingresando tu Steam ID.
          </p>
        </div>

        <form className="w-full max-w-xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Ingresá tu Steam ID"
              className="h-12 flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-500"
            />

            <button
              type="submit"
              className="h-12 rounded-lg bg-orange-500 px-6 font-semibold text-black transition hover:bg-orange-400"
            >
              Buscar jugador
            </button>
          </div>
        </form>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/stats"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-orange-500 hover:text-white"
          >
            Ver estadísticas
          </Link>

          <Link
            href="/quiz"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-orange-500 hover:text-white"
          >
            Jugar al Quiz
          </Link>
        </div>
      </main>
    </div>
  );
}