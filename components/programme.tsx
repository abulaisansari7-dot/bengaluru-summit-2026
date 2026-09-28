import { Handshake, Layers, Globe, Rocket, MessagesSquare, TrendingUp, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  { icon: Layers, title: 'Multitrack conference' },
  { icon: Globe, title: 'International exhibition' },
  { icon: Handshake, title: 'B2B and B2G partnering' },
  { icon: Rocket, title: 'Product launches' },
  { icon: MessagesSquare, title: 'Industry roundtables' },
  { icon: TrendingUp, title: 'Startup and investor activities' },
  { icon: Users, title: 'Networking' },
]

export function Programme() {
  return (
    <section id="programme" className="scroll-mt-16 border-b border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="What happens" title="Seven ways to take part" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title }, index) => (
            <li key={title} className="flex flex-col justify-between gap-10 bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            </li>
          ))}
          <li className="flex flex-col justify-end bg-primary p-6 text-primary-foreground">
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              All centred on AI and emerging technologies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
