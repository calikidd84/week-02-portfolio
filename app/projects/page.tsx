"use client";

import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Gap Finder",
    description: "A full-stack application that identifies and visualizes gaps in DirecTV schedules for correction.",
    tags: ["JavaScript", "CSS", "Web Development"],
  },
  {
    id: 2,
    title: "Account/Profile Dashboard",
    description: "Designed and implemented a responsive customer's account/profile information page with dynamic data fetching and polished UI interactions.",
    tags: ["JavaScript", "CSS", "Web Development"],
  },
  {
    id: 3,
    title: "Task Management Scheduler",
    description: "Engineered a centralized task scheduler orchestrating workflows between computer vision and machine learning systems in an AI-powered recycling sorting solution.",
    tags: ["Python", "Next.js", "TypeScript", "Web Development", "LLM Tools", "AI", "Problem Solving"],
  },
  {
    id: 4,
    title: "Ordnances Accuracy Dashboard",
    description: "Developed a dashboard page to visualize the accuracy of ordnancess on a provided map",
    tags: ["C#", "JavaScript", "CSS", "Web Development", "UI/UX Design", "ASP.NET MVC"],
  }
];

const tags = ["All", ...Array.from(new Set(projects.flatMap((project) => project.tags)))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <main className="min-h-screen bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Selected work
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Filter through a few highlighted projects to see how I apply JavaScript, CSS, and Python to solve real problems and build polished experiences.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeFilter === tag
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="mt-3 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 ring-1 ring-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
