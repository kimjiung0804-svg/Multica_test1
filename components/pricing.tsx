import { pricing, site } from "@/lib/site"
import { Separator } from "@/components/ui/separator"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/70 bg-muted/35">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Sessions
          </p>
          <h2 className="font-heading text-4xl tracking-tight md:text-5xl">
            Pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Clear starting points. Travel and print packages are quoted
            separately — write anytime and we can shape a day that fits.
          </p>
        </div>

        <div className="space-y-0">
          {pricing.map((tier, index) => (
            <div key={tier.name}>
              {index > 0 ? <Separator className="bg-border/80" /> : null}
              <div className="grid gap-6 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,1.2fr)] md:items-start md:gap-10">
                <div>
                  <h3 className="font-heading text-2xl tracking-tight md:text-3xl">
                    {tier.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                </div>
                <p className="font-heading text-3xl tracking-tight md:pt-1">
                  {tier.price}
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Questions about a session?{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Email {site.email}
          </a>
        </p>
      </div>
    </section>
  )
}
