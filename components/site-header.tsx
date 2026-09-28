import { ArrowUpRight } from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/event'

const links = [
  { href: '#about', label: 'About' },
  { href: '#programme', label: 'Programme' },
  { href: '#audience', label: 'Who attends' },
  { href: '#venue', label: 'Venue' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/90 text-deep-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-semibold tracking-tight">
          <span aria-hidden="true" className="grid size-7 place-items-center rounded-md bg-white text-xs font-bold text-deep">
            BTS
          </span>
          <span>
            Bengaluru Tech Summit <span className="text-deep-muted">2026</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-deep-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-deep transition-colors hover:bg-white/90"
        >
          Register
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
