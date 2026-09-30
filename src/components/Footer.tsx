import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-8">
      <div className="container-site flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink3">
          Built with React, Vite and Tailwind.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/vijsan147s" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-rule transition-colors hover:border-accent hover:text-accent" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.63 13.63h-2.37V9.9c0-.88-.02-2.02-1.23-2.02-1.24 0-1.43.96-1.43 1.96v3.79H6.23V6h2.27v1.04h.03c.32-.6 1.1-1.23 2.24-1.23 2.4 0 2.86 1.58 2.86 3.64v4.18zM3.56 4.96a1.38 1.38 0 1 1 0-2.76 1.38 1.38 0 0 1 0 2.76zM4.75 13.63H2.37V6h2.38v7.63z"/></svg>
          </a>
          <a href="https://github.com/vijsan147s" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-rule transition-colors hover:border-accent hover:text-accent" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <a href="mailto:vijay9920669042@gmail.com" className="grid h-9 w-9 place-items-center rounded-full border border-rule transition-colors hover:border-accent hover:text-accent" aria-label="Email">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="12" height="10" rx="2"/><path d="m2 5 6 4 6-4"/></svg>
          </a>
        </div>
        <Link to="/" className="font-mono text-xs text-ink3 hover:text-accent transition-colors">
          ↑ Back to top
        </Link>
      </div>
    </footer>
  )
}
