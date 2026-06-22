type Project = {
  name: string;
  status: "Live" | "In Progress" | "Archived";
  type: "personal" | "professional";
  url: string; // leave empty string to hide the link
  description: string;
  stack: string[];
  highlight: string;
};

const projects: Project[] = [
  // ── Personal Projects ──────────────────────────────────────────────────────
  {
    name: "Kariro",
    status: "In Progress",
    type: "personal",
    url: "", // e.g. "https://kariro.app"
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

  // ── Professional Projects ──────────────────────────────────────────────────
  {
    name: "Indoxnito",
    status: "Live",
    type: "professional",
    url: "", // e.g. "https://indoxnito.com"
    description:
      "Crypto-focused social platform built for on-chain identity and community. Supports multi-identity personas, community groups, and voting mechanics.",
    stack: ["Laravel v10", "MariaDB", "Redis", "Soketi", "AWS"],
    highlight: "Multi-identity persona system with on-chain social graph",
  },
  {
    name: "CC.Talent Football Media",
    status: "Live",
    type: "professional",
    url: "", // e.g. "https://cc.talent"
    description:
      "Football media platforms serving 4.75M monthly users. Integrated live sports data from Opta and Sportmonks, and led adoption of Filament 3 for back-office tooling.",
    stack: ["Laravel", "Filament 3", "Opta", "Sportmonks", "Docker"],
    highlight: "4.75M monthly users across multiple football media properties",
  },
  {
    name: "Hospital Reservation System",
    status: "Live",
    type: "professional",
    url: "", // e.g. "https://..."
    description:
      "End-to-end hospital appointment and reservation system. Delivered a 95%+ reduction in API response times through queue-based architecture.",
    stack: ["Laravel", "AWS SES", "AWS Cognito", "S3", "Laravel Queues"],
    highlight: "Response time reduced from 20-30s to under 1s",
  },
];

const statusStyles: Record<Project["status"], string> = {
  Live: "border-emerald-800 text-emerald-400",
  "In Progress": "border-amber-800 text-amber-400",
  Archived: "border-zinc-700 text-zinc-500",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 hover:border-zinc-600 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-[var(--foreground)]">
          {project.name}
        </h3>
        <span
          className={`text-xs font-mono px-2 py-0.5 rounded-full border shrink-0 ${statusStyles[project.status]}`}
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

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--accent)] hover:underline flex items-center gap-1 mt-1"
        >
          View Project
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 7h10v10M7 17 17 7" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const personal = projects.filter((p) => p.type === "personal");
  const professional = projects.filter((p) => p.type === "professional");

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-6">
              Personal
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {personal.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-6">
              Professional
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {professional.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
