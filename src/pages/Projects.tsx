import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="container-site pt-16 sm:pt-24">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-[15px] text-ink2">
        A selection of data analysis, machine learning, and visualization projects.
        Each one follows the same process: clean data, explore, build, communicate.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="card card-hover group flex flex-col"
          >
            <div className="mb-3 aspect-[16/8] overflow-hidden rounded-xl bg-bg3">
              {p.cover !== '/placeholder.svg' ? (
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-[1.04]" />
              ) : (
                <div className="grid h-full place-items-center font-mono text-xs text-ink3">
                  [ Screenshot ]
                </div>
              )}
            </div>
            <p className="t-label">{p.category} · {p.year}</p>
            <h3 className="t-h3 mt-1 group-hover:text-accent transition-colors">{p.title}</h3>
            <p className="mt-1 flex-1 text-[14.5px] text-ink2">{p.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 3).map((s) => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
            <div className="mt-4 border-t border-rule pt-3">
              <div className="grid grid-cols-3 gap-2">
                {p.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-display text-sm font-bold tabular-nums text-accent">{m.value}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-ink3">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
