import { ArrowUpRight } from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/event'

export function RegisterCta() {
  return (
    <section id="register" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col items-start gap-8 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-end md:justify-between md:p-12">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Register for Bengaluru Tech Summit 2026
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
              Registration and delegate information are available on the official Bengaluru Tech Summit website.
            </p>
          </div>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Visit bengalurutechsummit.com
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
