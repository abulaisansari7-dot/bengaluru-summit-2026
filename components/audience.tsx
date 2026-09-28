import { SectionHeading } from '@/components/section-heading'

const audiences = [
  'Technology professionals',
  'Entrepreneurs',
  'Startups',
  'Investors',
  'Researchers',
  'Students',
  'Corporates',
  'Policymakers',
  'Innovation leaders',
]

export function Audience() {
  return (
    <section id="audience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="Who it's for" title="Built for everyone shaping technology" />
        <ul className="mt-12 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="rounded-full border border-border bg-secondary px-5 py-2.5 text-base font-medium text-secondary-foreground"
            >
              {audience}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
