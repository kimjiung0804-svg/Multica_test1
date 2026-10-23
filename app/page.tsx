import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WorkGrid } from "@/components/work-grid"

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Intro />
      <WorkGrid />
      <Pricing />
      <Contact />
      <SiteFooter />
    </main>
  )
}
