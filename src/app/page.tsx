export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="mb-6 text-6xl font-bold tracking-widest">
        CHAOS
      </h1>

      <p className="mb-8 text-xl">
        Stability: 100%
      </p>

      <button className="rounded-lg border border-black px-8 py-4 text-xl transition hover:bg-black hover:text-white">
        DON'T CLICK
      </button>
    </main>
  );
}