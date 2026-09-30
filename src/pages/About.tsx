import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container-site pt-16 sm:pt-24">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">About</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-[15px] leading-relaxed text-ink2">
        <p>
          I'm Vijay Patel, a B.Tech IT student at Rajkiya Engineering College Mirzapur ('27 batch).
          I work with Python, SQL, and Excel to clean, analyze, and visualize data, and I'm actively
          building projects to strengthen my skills in analytics and dashboards.
        </p>
        <p>
          Recently, I've been exploring <strong className="text-ink">Generative AI with Google Cloud's Gemini</strong>,
          applying concepts like prompt engineering and multimodal RAG to practical use cases. I've also
          participated in hackathons such as Paranox 2.0, which helped me improve my problem-solving and
          teamwork abilities.
        </p>
        <p>
          I'm currently looking for internship opportunities in data analytics, where I can contribute,
          learn from experienced professionals, and grow into a strong data analyst.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: '📊', title: 'Data Analysis', desc: 'Python, Pandas, SQL, R — cleaning, transforming, and exploring data to find actionable insights.' },
          { icon: '📈', title: 'Visualization', desc: 'Power BI, Tableau, Excel — building dashboards and charts that tell clear stories.' },
          { icon: '🤖', title: 'AI & GenAI', desc: 'Prompt engineering, multimodal RAG, Google Cloud Gemini — applying AI to practical use cases.' },
          { icon: '🗄️', title: 'Databases', desc: 'SQL filtering, grouping, aggregation — writing efficient queries for analysis.' },
          { icon: '🐍', title: 'Python & R', desc: 'Pandas, NumPy, R — automation, statistical analysis, and data processing.' },
          { icon: '🔧', title: 'Tools', desc: 'Power BI, Tableau, Excel, Jupyter, Git — the daily driver toolkit.' },
        ].map((s) => (
          <div key={s.title} className="card">
            <span className="text-2xl">{s.icon}</span>
            <h3 className="t-h3 mt-2">{s.title}</h3>
            <p className="mt-1 text-[14px] text-ink2">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-3">
        <Link to="/projects" className="btn-primary">See My Work</Link>
        <Link to="/contact" className="btn-outline">Contact Me</Link>
      </div>
    </div>
  )
}
