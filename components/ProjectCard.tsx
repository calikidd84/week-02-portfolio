type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-surface surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full surface-strong px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.18em] text-foreground ring-1 ring-surface"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
