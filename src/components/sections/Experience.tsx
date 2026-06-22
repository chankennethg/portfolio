const roles = [
  {
    title: "Lead Developer & Technical Architect",
    company: "Indoxnito",
    period: "Apr 2024 — Present",
    bullets: [
      "Architected a crypto-focused social platform on Laravel and AWS from the ground up",
      "Designed a multi-identity persona system enabling users to operate under distinct on-chain identities",
      "Built community groups, voting mechanics, and real-time features via REST APIs",
      "Established cloud infrastructure standards on AWS for reliability and cost efficiency",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "CC.Talent",
    period: "May 2023 — Dec 2025",
    bullets: [
      "Maintained and extended football media platforms serving 4.75M monthly users",
      "Led adoption of Filament 3 for internal admin tooling, cutting development time on back-office features",
      "Integrated third-party sports data providers (Opta, Sportmonks) for live match and statistics feeds",
      "Standardized local and staging environments with Docker, eliminating environment-specific bugs",
    ],
  },
  {
    title: "Backend API Consultant",
    company: "Freelance",
    period: "Mar 2022 — May 2023",
    bullets: [
      "Designed and built a hospital reservation system on Laravel and AWS",
      "Reduced API response times from 20–30 seconds to under 1 second using Laravel Queues and async processing",
      "Integrated AWS SES for transactional email, Cognito for patient authentication, and S3 for document storage",
    ],
  },
  {
    title: "Technical Team Lead",
    company: "Cafe24 Philippines",
    period: "Sep 2016 — Jan 2023",
    bullets: [
      "Led engineering teams of up to 30 developers on a large-scale SaaS e-commerce platform",
      "Delivered platform features for 100,000+ active merchants across Southeast Asia",
      "Established code review processes, sprint planning, and technical onboarding programs",
      "Drove architecture decisions across backend services, APIs, and database layers",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-12">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)] hidden sm:block" />

          <div className="flex flex-col gap-12">
            {roles.map((role, i) => (
              <div key={i} className="sm:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)] hidden sm:block" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {role.title}
                    </h3>
                    <p className="text-[var(--accent)] text-sm font-medium">
                      {role.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[var(--muted)] whitespace-nowrap">
                    {role.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
