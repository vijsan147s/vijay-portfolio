import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-ink2">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-6">Go Home</Link>
    </div>
  )
}
