import { buttonVariants } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="font-heading text-4xl tracking-tight md:text-5xl">
            Let&apos;s talk about a day of shooting
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Share a few notes about the place, the people, and the feeling you
            want to keep. I usually reply within two business days.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-11 rounded-none px-6 text-xs tracking-[0.16em] uppercase"
              )}
            >
              Email me
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-heading text-2xl tracking-tight text-foreground underline-offset-4 transition-opacity hover:opacity-70 hover:underline md:text-3xl"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
