export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #27272a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-mono text-[var(--accent)] mb-4 tracking-widest uppercase">
          Available for Remote Work
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-4">
          Kenneth Chan
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted)] font-medium mb-3">
          Senior Backend Engineer &amp; Technical Lead
        </p>
        <p className="text-base text-[var(--muted)] mb-10 max-w-xl mx-auto">
          10+ years building scalable backend systems with PHP, Laravel, and AWS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:chankennethg@gmail.com"
            className="px-6 py-3 bg-[var(--accent)] text-zinc-950 font-semibold rounded-md text-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/chankennethg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-md text-sm hover:border-[var(--muted)] transition-colors"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--muted)]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
