import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { REGISTRATION_URL, event } from '@/lib/event'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-deep text-deep-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 md:px-6 md:pb-28 md:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-deep-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
          AI &amp; Emerging Technologies
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Bengaluru Tech Summit 2026
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-deep-muted md:text-xl">
          A technology and innovation summit bringing together a multitrack conference, an international
          exhibition, partnering, launches and networking.
        </p>

        <dl className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <CalendarDays className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div>
              <dt className="text-xs uppercase tracking-widest text-deep-muted">When</dt>
              <dd className="mt-1 font-medium">{event.dates}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div>
              <dt className="text-xs uppercase tracking-widest text-deep-muted">Where</dt>
              <dd className="mt-1 font-medium">BIEC, Bengaluru</dd>
            </div>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-deep transition-colors hover:bg-white/90"
          >
            Register on the official website
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#programme"
            className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {"See what's happening"}
          </a>
        </div>
      </div>
    </section>
  )
}
