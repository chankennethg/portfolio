const skillGroups = [
  {
    label: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "RESTful API Design",
      "MySQL / MariaDB",
      "Redis",
      "Queue Systems",
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
      "Docker",
      "CI/CD",
    ],
  },
  {
    label: "Tools & Others",
    skills: [
      "Vue.js",
      "Node.js",
      "Filament",
      "Postman",
      "Git",
      "Agile / Scrum",
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
