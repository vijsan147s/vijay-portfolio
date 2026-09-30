import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="container-site pt-16 sm:pt-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Building something that needs data?
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink2">
          I'm open to Data Analyst and Data Scientist roles — internships, full-time, and freelance.
          If you have a dataset that needs answers or a dashboard that needs building, let's talk.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="tel:+919682021912" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 1h3l2 4-2 1c1 2 3 4 5 5l1-2 4 2v3c0 1-1 2-2 2C7 15 1 9 1 3c0-1 1-2 2-2z"/></svg>
            Call Me
          </a>
          <a href="mailto:vijay9920669042@gmail.com" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="12" height="10" rx="2"/><path d="m2 5 6 4 6-4"/></svg>
            Email
          </a>
          <a href="https://github.com/vijsan147s" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vijsan147s" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M13.63 13.63h-2.37V9.9c0-.88-.02-2.02-1.23-2.02-1.24 0-1.43.96-1.43 1.96v3.79H6.23V6h2.27v1.04h.03c.32-.6 1.1-1.23 2.24-1.23 2.4 0 2.86 1.58 2.86 3.64v4.18zM3.56 4.96a1.38 1.38 0 1 1 0-2.76 1.38 1.38 0 0 1 0 2.76zM4.75 13.63H2.37V6h2.38v7.63z"/></svg>
            LinkedIn
          </a>
        </div>

        <div className="mt-12">
          <h2 className="t-label mb-4">Or send a message</h2>
          {sent ? (
            <div className="card border-accent/50 bg-accent/5 p-6 text-center">
              <p className="text-lg font-medium text-accent">Message sent!</p>
              <p className="mt-1 text-sm text-ink2">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="t-label mb-1 block" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-rule bg-bg2 px-4 py-2.5 text-sm text-ink placeholder:text-ink3 focus:border-accent focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="t-label mb-1 block" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-rule bg-bg2 px-4 py-2.5 text-sm text-ink placeholder:text-ink3 focus:border-accent focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="t-label mb-1 block" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-rule bg-bg2 px-4 py-2.5 text-sm text-ink placeholder:text-ink3 focus:border-accent focus:outline-none resize-y"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
