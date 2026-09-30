import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 18h16M4 18V10m5 8V4m5 14V8m5 10V6" strokeLinecap="round" />
    </svg>
  )
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="16" height="14" rx="2" />
      <path d="m6 8 3 3-3 3m5 0h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="10" cy="5" rx="7" ry="3" />
      <path d="M3 5v10c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
      <path d="M3 10c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </svg>
  )
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="relative">
      <div className="glow" />

      <section className="container-site pt-16 sm:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_300px]">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="pill-accent">Open to Data Analyst & Data Scientist roles</span>
              <span className="hidden items-center gap-1.5 font-mono text-[10px] text-ink3 sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent2" />
                Available
              </span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl">
              Vijay Patel
            </h1>
            <p className="mt-4 font-serif text-xl italic text-ink2 sm:text-2xl">
              I turn raw data into decisions.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink2">
              B.Tech IT student at Rajkiya Engineering College Mirzapur, passionate about using data
              to solve real-world problems. I work with Python, SQL, and Excel to clean, analyze, and
              visualize data. Currently exploring Generative AI with Google Cloud's Gemini and building
              projects in analytics and dashboards.
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink3">
              Varanasi, Uttar Pradesh · B.Tech IT '27
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                <ChartIcon className="h-4 w-4" />
                View Projects
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Resume
              </a>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="order-first mx-auto max-w-[300px] lg:order-none lg:max-w-none">
            <img
              src="/me.png"
              alt="Vijay Patel portrait"
              className="aspect-square w-full rounded-full border border-rule object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-site section">
        <h2 className="t-label mb-4">Proof of Work</h2>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-4">
          {[
            { value: '63K+', label: 'UPI Transactions Analyzed' },
            { value: '3', label: 'Internships Completed' },
            { value: '6+', label: 'Certifications Earned' },
            { value: 'AI + Data', label: 'Top Skills' },
          ].map((m) => (
            <div key={m.label} className="bg-bg2 p-4 text-center sm:p-6">
              <p className="font-display text-2xl font-bold tabular-nums text-accent sm:text-3xl">{m.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink3">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site section">
        <div className="rounded-2xl border border-rule bg-bg2 p-4 sm:p-6">
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink3">
            <TerminalIcon className="h-4 w-4 text-accent" />
            <span>data_pipeline.py</span>
          </div>
          <pre className="mt-3 overflow-x-auto font-mono text-[12px] leading-relaxed text-ink2">
            <code>{`import pandas as pd
import numpy as np

# Load and clean transaction data
df = pd.read_csv('upi_transactions.csv')
df['timestamp'] = pd.to_datetime(df['timestamp'])
df = df.dropna(subset=['amount', 'merchant_category'])

# Monthly trend analysis
monthly = df.groupby(df['timestamp'].dt.to_period('M')).agg({
    'amount': ['sum', 'mean', 'count']
})

# Output: 63K+ transactions, 12% failure rate
print(f"Processed {len(df):,} transactions")`}</code>
          </pre>
        </div>
      </section>

      <section className="container-site section">
        <div className="flex items-end justify-between">
          <h2 className="t-label">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="card card-hover group"
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
            </Link>
          ))}
        </div>
      </section>

      <section className="container-site section">
        <h2 className="t-label mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: <ChartIcon className="h-5 w-5" />, name: 'Python' },
            { icon: <DatabaseIcon className="h-5 w-5" />, name: 'SQL' },
            { icon: <ChartIcon className="h-5 w-5" />, name: 'Power BI' },
            { icon: <TerminalIcon className="h-5 w-5" />, name: 'R' },
            { icon: <DatabaseIcon className="h-5 w-5" />, name: 'Excel' },
            { icon: <ChartIcon className="h-5 w-5" />, name: 'Tableau' },
          ].map((t) => (
            <div key={t.name} className="card flex flex-col items-center gap-2 p-4 text-center">
              <span className="text-accent">{t.icon}</span>
              <span className="font-mono text-[11px] text-ink2">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
