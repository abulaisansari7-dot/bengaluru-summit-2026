import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('max-w-xl', className)}>
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
