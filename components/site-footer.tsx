import { REGISTRATION_URL, event } from '@/lib/event'

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          <span className="font-medium text-deep-foreground">{event.name}</span> · {event.dates} · BIEC, {event.city}
        </p>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep-foreground underline-offset-4 hover:underline"
        >
          Official website
        </a>
      </div>
    </footer>
  )
}
