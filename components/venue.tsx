import { CalendarDays, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { event } from '@/lib/event'

export function Venue() {
  return (
    <section id="venue" className="scroll-mt-16 border-b border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1fr_1.4fr] md:px-6 md:py-28">
        <SectionHeading eyebrow="When & where" title="Three days in Bengaluru" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <CalendarDays className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">Dates</h3>
            <p className="mt-2 text-xl font-semibold tracking-tight">{event.dates}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">Venue</h3>
            <address className="mt-2 not-italic">
              <span className="block text-xl font-semibold tracking-tight">{event.venue}</span>
              <span className="mt-1 block text-muted-foreground">{event.city}</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
