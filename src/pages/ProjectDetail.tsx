import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/404" replace />

  return (
    <div className="container-site pt-16 sm:pt-20">
      <Link to="/projects" className="font-mono text-xs text-ink3 hover:text-accent transition-colors">
        ← All Projects
      </Link>

      <div className="mt-6">
        <p className="t-label">{project.category} · {project.year} · {project.role}</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink2">{project.tagline}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-rule bg-rule">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-bg2 p-4 text-center">
            <p className="font-display text-xl font-bold tabular-nums text-accent sm:text-2xl">{m.value}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink3">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="t-label mb-3">Problem</h2>
          <p className="max-w-3xl text-[15.5px] leading-relaxed text-ink2">{project.problem}</p>
        </section>

        <section>
          <h2 className="t-label mb-3">Approach</h2>
          <p className="max-w-3xl text-[15.5px] leading-relaxed text-ink2">{project.approach}</p>
        </section>

        <section>
          <h2 className="t-label mb-3">Outcome</h2>
          <p className="max-w-3xl text-[15.5px] leading-relaxed text-ink2">{project.outcome}</p>
        </section>

        <section>
          <h2 className="t-label mb-3">Key Insights</h2>
          <ul className="space-y-2">
            {project.insights.map((insight, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {insight}
              </li>
            ))}
          </ul>
        </section>

        {project.gallery.length > 0 && (
          <section>
            <h2 className="t-label mb-3">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <figure key={i} className="overflow-hidden rounded-2xl border border-rule bg-bg2">
                  <img src={img.src} alt={img.caption} className="w-full object-cover" />
                  <figcaption className="p-3 font-mono text-[11px] text-ink3">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-12 flex gap-3 border-t border-rule pt-8">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live Dashboard ↗
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}
