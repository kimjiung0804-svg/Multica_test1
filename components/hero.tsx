import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { site, works } from "@/lib/site"
import { cn } from "@/lib/utils"

const hero = works.find((item) => item.id === "hero")!

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-ken"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="animate-fade-up mb-4 text-xs tracking-[0.22em] text-white/75 uppercase">
          {site.tagline}
        </p>
        <h1 className="animate-fade-up font-heading text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] tracking-tight text-white [animation-delay:80ms]">
          {site.name}
        </h1>
        <p className="animate-fade-up mt-5 max-w-md text-sm leading-relaxed text-white/85 md:text-base [animation-delay:140ms]">
          Portraits and places, photographed with patience and care.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:200ms]">
          <a
            href="#work"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 rounded-none bg-white px-5 text-xs tracking-[0.16em] text-neutral-900 uppercase hover:bg-white/90"
            )}
          >
            View work
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 rounded-none border-white/50 bg-transparent px-5 text-xs tracking-[0.16em] text-white uppercase hover:bg-white/10 hover:text-white"
            )}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
