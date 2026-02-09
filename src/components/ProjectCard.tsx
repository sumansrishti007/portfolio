import { Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-lg border p-5 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/50 ${
        project.featured
          ? "border-blue-500/30 bg-slate-800/30"
          : "border-slate-700 bg-slate-900/50"
      }`}
    >
      {project.featured && (
        <span className="absolute -top-2 right-3 rounded bg-blue-500 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{project.description}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
        {project.problem}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-700/50 px-2.5 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Github size={14} />
            Code
          </a>
        )}
      </div>
    </div>
  );
}