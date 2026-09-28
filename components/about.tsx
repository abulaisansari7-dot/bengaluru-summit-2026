import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1fr_1.4fr] md:px-6 md:py-28">
        <SectionHeading eyebrow="About the summit" title="Focused on AI and emerging technologies" />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            <strong className="font-semibold text-foreground">Bengaluru Tech Summit 2026</strong> is a technology
            and innovation summit focused on AI and emerging technologies.
          </p>
          <p>
            Over three days at the Bangalore International Exhibition Centre, the summit brings together a
            multitrack conference, an international exhibition, B2B and B2G partnering, product launches,
            industry roundtables, startup and investor activities, and networking.
          </p>
        </div>
      </div>
    </section>
  )
}
