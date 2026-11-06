// Infrastructure smoke-test route ONLY. Real homepage is a separate milestone.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-6 px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-ink">Bodrock / Foundation</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Bodrock Web Design 2.0</h1>
      <p className="max-w-xl text-base leading-7 text-muted">Your Vision. Our Code. Architecture and design governance are ready for validation. This is not the final website.</p>
    </main>
  );
}
