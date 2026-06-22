export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-6">
          Contact
        </h2>
        <p className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-4">
          Open to remote Senior/Lead Backend roles
        </p>
        <p className="text-[var(--muted)] mb-10 max-w-md mx-auto">
          Particularly interested in Australian and Western timezone teams.
          Let&apos;s talk.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:chankennethg@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-zinc-950 font-semibold rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            chankennethg@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/chankennethg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-md text-sm hover:border-[var(--muted)] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            linkedin.com/in/chankennethg
          </a>
        </div>
      </div>
    </section>
  );
}
