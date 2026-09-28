import { About } from '@/components/about'
import { Audience } from '@/components/audience'
import { Hero } from '@/components/hero'
import { Programme } from '@/components/programme'
import { RegisterCta } from '@/components/register-cta'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Venue } from '@/components/venue'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programme />
        <Audience />
        <Venue />
        <RegisterCta />
      </main>
      <SiteFooter />
    </>
  )
}
