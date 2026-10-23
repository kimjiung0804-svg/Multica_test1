import Link from "next/link"

import { site } from "@/lib/site"

const links = [
  { href: "#intro", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className="font-heading text-lg tracking-wide text-white mix-blend-difference"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-xs tracking-[0.18em] text-white/90 uppercase mix-blend-difference md:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
