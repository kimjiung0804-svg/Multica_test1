import Image from "next/image"

import { works } from "@/lib/site"

const gallery = works.filter((item) => item.id !== "hero")

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const

export function WorkGrid() {
  return (
    <section id="work" className="border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Selected work
            </p>
            <h2 className="font-heading text-4xl tracking-tight md:text-5xl">
              My work
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
            A small selection. Replace the placeholders with your own frames
            when you are ready.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {gallery.map((item, index) => (
            <li
              key={item.id}
              className={`group ${index === 1 || index === 4 ? "lg:mt-12" : ""}`}
            >
              <figure>
                <div
                  className={`relative overflow-hidden bg-muted ${aspectClass[item.aspect]}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-3">
                  <span className="font-heading text-xl tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
