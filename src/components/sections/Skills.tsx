const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: [
      "PHP",
      "Laravel",
      "Filament 3",
      "Symfony",
      "Vue.js",
      "Typescript",
      "Hono.js",
      "Node.js",
      "MySQL / MariaDB",
      "Redis",
    ],
  },
  {
    label: "Databases / Caching",
    skills: [
      "MariaDB / MySQL",
      "Postgres",
      "Redis",
      "Typesense"
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS SES",
      "AWS Cognito",
      "DigitalOcean",
      "Cloudflare",
      "Docker",
      "CI/CD",
      "Github Actions",
      "Vercel",
      "Railway",
      "Supabase",
      "soketi"
    ],
  },
  {
    label: "Tools & Others",
    skills: [
      "Git",
      "PHPUnit / Pest",
      "Cypress",
      "Technical Architecture",
      "Agile / Scrum",
      "OpenAI",
      "Claude",
      "Claude Code",
      "Agentic Coding"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-12">
          Skills
        </h2>
        <div className="grid sm:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-[var(--muted)] border border-[var(--border)] px-3 py-1.5 rounded-md hover:border-zinc-600 hover:text-[var(--foreground)] transition-colors"
                  >
                    {skill}
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
