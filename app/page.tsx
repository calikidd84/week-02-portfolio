// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center rounded-4xl border border-surface surface-strong px-6 py-20 shadow-glow backdrop-blur-xl sm:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">Hello, I'm</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Neo Clark
          </h1>
          <p className="mt-4 text-2xl font-medium text-muted sm:text-3xl">
            CS Student & Developer
          </p>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-foreground sm:text-xl">
          Results-driven Software Engineer and Scrum Master with expertise in software development, DevOps/Site Reliability Engineering, and Quality Assurance. Proven leader in optimizing system performance, reliability, and efficiency to enhance customer satisfaction. Recognized for a collaborative mindset, adaptability, and composure under pressure, with a focus on streamlining data and metadata flow across distributed services.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/projects"
            className="btn-primary"
          >
            View My Work
          </a>
          <a
            href="/about"
            className="btn-secondary"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}
