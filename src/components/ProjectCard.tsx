import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-100">
            {project.title}
          </h3>
          {project.period && (
            <span className="text-[10px] uppercase tracking-wide text-slate-400">
              {project.period}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs text-slate-300">
          {project.description}
        </p>

        <p className="mt-2 text-xs text-sky-300">{project.highlight}</p>

        <ul className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-200">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-slate-800 px-2.5 py-1"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sky-500 px-4 py-1 text-sky-300 hover:bg-sky-500 hover:text-slate-950"
          >
            Live demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-4 py-1 text-slate-200 hover:border-sky-400 hover:text-sky-400"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}