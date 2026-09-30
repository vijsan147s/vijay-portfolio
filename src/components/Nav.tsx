import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/80 backdrop-blur-xl">
      <div className="container-site flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-[10px] font-bold text-onaccent">
            VP
          </span>
          <span className="hidden sm:inline">Vijay Patel</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  isActive ? 'text-accent font-medium' : 'text-ink2 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-3 !py-1.5 !text-xs">
            Hire Me
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-rule md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule bg-bg2/95 p-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-[15px] transition-colors ${
                  isActive ? 'bg-bg3 text-accent font-medium' : 'text-ink2 hover:bg-bg3'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
