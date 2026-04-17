import type { ReactNode } from 'react'

const FOOTER_LINKS = ['CATALOG', 'PUFFERS', 'BOOTS', 'STORES'] as const

export default function SiteFooter(): ReactNode {
  return (
    <footer
      className="w-full border-t border-arctic-line mt-8"
      aria-label="Site footer"
    >
      <div className="container-page h-[120px] flex items-center justify-between gap-6">
        <div className="flex flex-col gap-1 flex-shrink-0">
          <span
            className="font-display text-arctic-ink uppercase"
            style={{ fontSize: '0.82rem', letterSpacing: '0.14em' }}
          >
            GLCR
          </span>
          <span
            className="font-mono text-arctic-muted"
            style={{ fontSize: '0.58rem', letterSpacing: '0.12em' }}
          >
            ARCTIC 01™ &mdash; Series · SF0625 N.1
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="hidden md:flex items-center gap-6" role="list">
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="font-mono text-arctic-muted hover:text-arctic-ink transition-colors duration-150"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
                >
                  [ {label} ]
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p
          className="font-mono text-arctic-mutedSoft text-right max-w-[300px]"
          style={{ fontSize: '0.55rem', letterSpacing: '0.10em', lineHeight: '1.5' }}
        >
          &copy; 2026 GLCR Studio. Study project &mdash; brand, imagery and copy are invented for research purposes.
        </p>
      </div>
    </footer>
  )
}
