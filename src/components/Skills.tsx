const coreSkills = [
  "Python (FastAPI)",
  "React / Next.js",
  "PostgreSQL",
  "Node.js & REST APIs",
  "AI & Automation",
  "Arduino / ESP32 / IoT",
];

const supportingSkills = [
  "MATLAB & Simulink",
  "ROS2",
  "PLC Programming",
  "Control Systems",
  "HTML / CSS / JavaScript",
  "Teamwork & Communication",
];

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-slate-800">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        I focus on shipping real, working systems. These are the tools I use
        the most, not a random list of every technology I&apos;ve seen.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Core stack
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
            {coreSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-slate-800 px-3 py-1"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Supporting skills
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
            {supportingSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-slate-800 px-3 py-1"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}