export default function Experience() {
  return (
    <section id="experience" className="section border-t border-slate-800">
      <h2 className="section-title">Experience & Education</h2>

      <div className="mt-6 space-y-6 text-sm">
        {/* Durga Analytics */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold text-slate-100">
                Project Intern – Durga Analytics (ETRM Platform)
              </h3>
              <p className="text-xs text-slate-400">Remote • Sept 2025 – Present</p>
            </div>
            <p className="text-xs text-sky-400">Full Stack · Security · APIs</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300">
            <li>
              Built a full-stack authentication system with MFA/2FA, JWT, and
              OTP-based password recovery using React.js and FastAPI.
            </li>
            <li>
              Designed REST APIs for user registration, email verification,
              login, and role-based access control (RBAC) with SYSTEM_ADMIN
              escalation.
            </li>
            <li>
              Implemented secure password hashing with bcrypt and PostgreSQL
              JSONB columns for flexible user attributes.
            </li>
            <li>
              Developed an email notification service (SMTP) for OTP delivery
              and account verification workflows.
            </li>
          </ul>
        </div>

        {/* CSIR-CSIO */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold text-slate-100">
                Intern – CSIR Central Scientific Instruments Organisation
              </h3>
              <p className="text-xs text-slate-400">
                Chandigarh • Jul 2024 – Dec 2024
              </p>
            </div>
            <p className="text-xs text-sky-400">Embedded · Robotics · Control</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300">
            <li>
              Designed a remotely operated weapon control system using Arduino
              Nano and ESP32 with 360° servo control.
            </li>
            <li>
              Built a Python-based GUI for real-time navigation and live video
              streaming over ESP32.
            </li>
            <li>
              Focused on autonomous control, safety mechanisms, and modular
              system scalability.
            </li>
          </ul>
        </div>

        {/* Bosch */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="font-semibold text-slate-100">
                Summer Intern – Bosch India
              </h3>
              <p className="text-xs text-slate-400">
                Faridabad • May 2024 – Jun 2024
              </p>
            </div>
            <p className="text-xs text-sky-400">Automotive · Diagnostics</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300">
            <li>
              Analyzed and integrated mechanical, electrical, and electronic
              systems in modern automobiles.
            </li>
            <li>
              Used diagnostic equipment to interpret sensor data, control
              modules, and engine performance.
            </li>
            <li>
              Worked with a team to troubleshoot and optimize vehicle
              performance and functionality.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="font-semibold text-slate-100">Education</h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>
              <span className="font-medium text-slate-100">
                B.Tech in Mechatronics
              </span>{" "}
              – Banasthali Vidyapith (2021 – 2025), 74%
            </li>
            <li>
              Higher Secondary (XII) – Woodbine Modern School, Darbhanga (2020),
              70%
            </li>
            <li>
              Secondary (X) – Holy Cross School, Darbhanga (2018), 89%
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}