const skills = ["Next.js", "TypeScript", "Python", "Problem Solving", "Web Development", "LLM Tools"];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foreground">
      <div className="rounded-4xl border border-surface surface-strong p-10 shadow-glow backdrop-blur-xl">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-foreground">
        I'm a passionate software engineer with a focus on building scalable and maintainable applications. I have experience in both frontend and backend development, and I enjoy solving complex problems and learning new technologies.
      </p>
      <ul className="mt-6 space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-3xl surface px-4 py-2 text-foreground">
            {skill}
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
}