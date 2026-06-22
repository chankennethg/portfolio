const projects = [
  {
    name: "Indoxnito",
    status: "Live",
    description:
      "Crypto-focused social platform built for on-chain identity and community. Supports multi-identity personas, community groups, and voting mechanics.",
    stack: ["Laravel v10", "MariaDB", "Redis", "Soketi", "AWS"],
    highlight: "Multi-identity persona system with on-chain social graph",
  },
  {
    name: "Hospital Reservation System",
    status: "Live",
    description:
      "End-to-end hospital appointment and reservation system. Delivered a 95%+ reduction in API response times through queue-based architecture.",
    stack: ["Laravel", "AWS SES", "AWS Cognito", "S3", "Laravel Queues"],
    highlight: "Response time reduced from 20–30s to under 1s",
  },
  {
    name: "Kariro",
    status: "In Progress",
    description:
      "AI-powered job application tracker that automates status updates, surfaces insights, and keeps candidates organized throughout their job search.",
    stack: [
      "Hono",
      "Next.js 15",
      "BullMQ",
      "Upstash Redis",
      "Drizzle ORM",
      "Supabase",
      "Gemini",
    ],
    highlight: "AI-assisted application tracking with background job processing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {project.name}
                </h3>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${
                    project.status === "Live"
                      ? "border-emerald-800 text-emerald-400"
                      : "border-amber-800 text-amber-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                {project.description}
              </p>

              <p className="text-xs text-[var(--accent)] font-mono leading-relaxed">
                {project.highlight}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[var(--muted)] bg-zinc-900 border border-[var(--border)] px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
