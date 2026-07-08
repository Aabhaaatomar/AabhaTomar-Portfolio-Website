export default function Footer() {
  return (
    <footer className="relative border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-dim">
          Designed &amp; Developed by <span className="text-muted">Aabha Tomar</span>
        </p>
        <p className="font-mono text-xs text-dim">© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  )
}
