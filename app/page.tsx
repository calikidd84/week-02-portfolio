// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20 sm:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Hello, I'm</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Neo Clark
          </h1>
          <p className="mt-4 text-2xl font-medium text-slate-600 sm:text-3xl">
            CS Student & Developer
          </p>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
          Results-driven Software Engineer and Scrum Master with expertise in software development, DevOps/Site Reliability Engineering, and Quality Assurance. Proven leader in optimizing system performance, reliability, and efficiency to enhance customer satisfaction. Recognized for a collaborative mindset, adaptability, and composure under pressure, with a focus on streamlining data and metadata flow across distributed services.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            View My Work
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
          >
            About Me
          </a>
        </div>
      </section>
    </main>
  );
}
