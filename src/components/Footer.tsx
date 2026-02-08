export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950/90"
    >
      <div className="section py-10">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          The best way to reach me is by email. I&apos;m open to internship
          and full-time opportunities in software, automation, and
          mechatronics.
        </p>

        <div className="mt-5 space-y-2 text-sm text-slate-200">
          <p>
            Email:{" "}
            <a href="mailto:sumansrishti007@gmail.com">
              sumansrishti007@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/srishti-suman-2416231b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/srishti-suman-2416231b3
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/sumansrishti007"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sumansrishti007
            </a>
          </p>
          <p>
            LeetCode:{" "}
            <a
              href="https://leetcode.com/sumansrishti"
              target="_blank"
              rel="noopener noreferrer"
            >
              leetcode.com/sumansrishti
            </a>
          </p>
        </div>

        <p className="mt-8 text-[11px] text-slate-500">
          © {new Date().getFullYear()} Srishti Suman. Built with Next.js,
          TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}