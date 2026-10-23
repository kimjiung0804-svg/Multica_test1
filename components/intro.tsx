import { site } from "@/lib/site"

export function Intro() {
  return (
    <section
      id="intro"
      className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <h2 className="font-heading text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          {site.intro.title}
        </h2>
        <div className="space-y-6 self-end">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.intro.body}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex text-sm tracking-wide text-foreground underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
