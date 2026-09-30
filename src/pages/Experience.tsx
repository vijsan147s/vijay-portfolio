export default function Experience() {
  return (
    <div className="container-site pt-16 sm:pt-24">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Experience</h1>

      <div className="mt-10 space-y-8">
        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="t-h3">Data Analytics with AI Intern</h3>
              <p className="text-sm text-accent2 font-medium">BharatCares / IBM SkillsBuild (AICTE collaboration)</p>
            </div>
            <span className="pill">Aug 2026 — Present</span>
          </div>
          <ul className="mt-4 space-y-2 text-[15px] text-ink2">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Selected for the 6-week IBM SkillsBuild Data Analytics with AI Internship 2026, offered in collaboration with AICTE and BharatCares.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Developing practical skills in Data Analytics, Data Cleaning, EDA, Predictive Analytics, and Machine Learning.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Working with data visualization tools such as Power BI/Tableau.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Learning to generate AI-driven insights and apply analytical techniques to real-world problems.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Participating in expert-led masterclasses, mentorship sessions, and project-based learning.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Developing and presenting a final real-world data analytics project.
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="t-h3">Data Analyst Intern</h3>
              <p className="text-sm text-accent2 font-medium">Zetheta Algorithms Private Limited</p>
            </div>
            <span className="pill">Jul 2026 — Completed</span>
          </div>
          <ul className="mt-4 space-y-2 text-[15px] text-ink2">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Performed data analysis and preparation for business-focused analytical work.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Applied data cleaning, analysis, and interpretation to identify patterns and insights.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Worked with structured datasets and analytics workflows.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Strengthened Python, SQL, visualization, and analytical problem-solving skills.
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="t-h3">Virtual R Data Analyst Intern</h3>
              <p className="text-sm text-accent2 font-medium">Yuva Intern by Henry Harvin</p>
            </div>
            <span className="pill">Aug 2026 — Completed</span>
          </div>
          <ul className="mt-4 space-y-2 text-[15px] text-ink2">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Selected as a Virtual R Data Analyst Intern at YuvaIntern.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Hands-on experience with Data Cleaning, EDA, Statistical Testing & Data Visualization using R.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Worked with real-world datasets to identify patterns and communicate meaningful data insights.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              Developing practical skills in Data Analytics, R Programming, Statistics & Data Science under mentor guidance.
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="t-h3">Education</h3>
              <p className="text-sm text-accent2 font-medium">B.Tech Information Technology</p>
            </div>
            <span className="pill">Sep 2023 — Oct 2027</span>
          </div>
          <p className="mt-4 text-[15px] text-ink2">
            Samrat Ashok Rajkiya Engineering College, Mirzapur
          </p>
        </div>

        <div className="card">
          <h3 className="t-h3 mb-4">Certifications</h3>
          <div className="space-y-3">
            {[
              { name: 'Postman API Fundamentals Student Expert', issuer: 'Postman', year: '2025' },
              { name: 'Operations Job Simulation', issuer: 'Goldman Sachs', year: '2025' },
              { name: 'Data Analytics with AI Internship', issuer: 'IBM SkillsBuild', year: '2026' },
              { name: 'CodeCrafters Challenge 2025 — Final Frame', issuer: 'Participation', year: '2025' },
              { name: 'Google Gemini QuizOff 2026 — Main Quiz', issuer: 'Participation', year: '2026' },
              { name: 'Weekly Coding Challenge 15', issuer: 'Participation', year: '2025' },
            ].map((c) => (
              <div key={c.name} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium text-ink">{c.name}</p>
                  <p className="text-[13px] text-ink3">{c.issuer}</p>
                </div>
                <span className="pill flex-shrink-0">{c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
