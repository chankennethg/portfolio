export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Kenneth Chan</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}
