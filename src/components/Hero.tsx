import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="section">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-400">
        Mechatronics • Full Stack • AI & Automation
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        I build systems that connect{" "}
        <span className="text-sky-400">hardware, software, and AI</span>.
      </h1>

      <p className="mt-4 max-w-2xl text-sm text-slate-300">
        I&apos;m a Mechatronics Engineer and Full Stack Developer with
        experience in FastAPI, React, PostgreSQL, and embedded systems
        (Arduino, ESP32). I like turning complex ideas into reliable tools –
        from robotic arm simulators to secure authentication systems and
        clean, production-ready web apps.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-xs">
        <a
          href="#projects"
          className="rounded-full bg-sky-500 px-5 py-2 font-medium text-slate-950 hover:bg-sky-400"
        >
          View projects
        </a>

        <a
          href="#experience"
          className="rounded-full border border-slate-600 px-5 py-2 font-medium text-slate-100 hover:border-sky-400"
        >
          View experience
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-300">
        <span className="text-slate-400">Find me online:</span>
        <Link
          href="https://www.linkedin.com/in/srishti-suman-2416231b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-4 py-1 hover:border-sky-400 hover:text-sky-400"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/sumansrishti007"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-4 py-1 hover:border-sky-400 hover:text-sky-400"
        >
          GitHub
        </Link>
        <Link
          href="https://leetcode.com/sumansrishti"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-4 py-1 hover:border-sky-400 hover:text-sky-400"
        >
          LeetCode
        </Link>
        <a
          href="mailto:sumansrishti007@gmail.com"
          className="rounded-full border border-slate-700 px-4 py-1 hover:border-sky-400 hover:text-sky-400"
        >
          Email
        </a>
      </div>
    </section>
  );
}