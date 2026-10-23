import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-heading text-base tracking-wide text-foreground">
          {site.name}
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <a
          href={`mailto:${site.email}`}
          className="transition-opacity hover:text-foreground hover:opacity-80"
        >
          {site.email}
        </a>
      </div>
    </footer>
  )
}
