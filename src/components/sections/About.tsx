export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-8">
          About
        </h2>
        <div className="grid sm:grid-cols-3 gap-12 items-start">
          <div className="sm:col-span-2">
            <p className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] leading-snug mb-6">
              Backend specialist with a decade of shipping systems that scale.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              I design and build the infrastructure that products run on —
              high-throughput APIs, queue-driven pipelines, and cloud
              architectures that handle real traffic without drama. My focus is
              always on correctness, performance, and maintainability over
              novelty.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Beyond individual contribution, I&apos;ve led engineering teams of
              up to 30 people, setting technical direction and raising the bar
              on delivery standards. I collaborate easily across timezones and
              have a strong track record working with Australian and
              Western-based clients remotely.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-[var(--border)] rounded-lg p-5">
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">10+</p>
              <p className="text-sm text-[var(--muted)]">Years of experience</p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">30</p>
              <p className="text-sm text-[var(--muted)]">Engineers led</p>
            </div>
            <div className="border border-[var(--border)] rounded-lg p-5">
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">4.75M</p>
              <p className="text-sm text-[var(--muted)]">Monthly users served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
