import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-slate-800">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        No tutorial clones. These are projects where I had to design,
        debug, and ship working solutions.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}