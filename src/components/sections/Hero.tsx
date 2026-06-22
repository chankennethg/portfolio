export default function Hero() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-3">
          Kenneth Chan
        </h1>
        <p className="text-lg text-[var(--muted)] mb-2">
          Senior Backend Engineer &amp; Technical Lead
        </p>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-lg">
          10+ years building scalable backend systems with PHP, Laravel, and AWS.
          Based in the Philippines, open to remote work.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:chankennethg@gmail.com"
            className="px-5 py-2.5 bg-[var(--accent)] text-zinc-950 font-semibold rounded text-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/chankennethg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-[var(--border)] text-[var(--foreground)] font-medium rounded text-sm hover:border-zinc-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
