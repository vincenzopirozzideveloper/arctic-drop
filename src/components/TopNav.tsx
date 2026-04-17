import type { ReactNode } from 'react'

const NAV_LINKS = ['CATALOG', 'PUFFERS', 'BOOTS', 'LOOKBOOK', 'STORIES'] as const

function SearchIcon(): ReactNode {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="5.5" stroke="#0E141A" strokeWidth="1.4" />
      <line x1="11.7" y1="11.7" x2="16" y2="16" stroke="#0E141A" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function AccountIcon(): ReactNode {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="6.5" r="3" stroke="#0E141A" strokeWidth="1.4" />
      <path
        d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6"
        stroke="#0E141A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function TopNav(): ReactNode {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-arctic-bg/80 backdrop-blur-md border-b border-arctic-line"
      role="banner"
    >
      <nav
        className="container-page h-full flex items-center justify-between"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="inline-flex items-center justify-center border border-arctic-ink px-[6px] py-[2px]"
            aria-label="GLCR brand wordmark"
          >
            <span
              className="font-display text-arctic-ink uppercase"
              style={{ fontSize: '0.82rem', letterSpacing: '0.14em' }}
            >
              GLCR
            </span>
          </span>
          <span
            className="w-2 h-2 bg-arctic-ink flex-shrink-0"
            aria-hidden="true"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="font-mono text-arctic-ink hover:text-arctic-muted transition-colors duration-150"
                style={{ fontSize: '0.68rem', letterSpacing: '0.18em' }}
                aria-label={label}
              >
                [ {label} ]
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-arctic-ink hover:text-arctic-muted transition-colors"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="text-arctic-ink hover:text-arctic-muted transition-colors"
          >
            <AccountIcon />
          </button>
        </div>
      </nav>

      <div
        className="absolute left-4 bottom-[-44px] hidden lg:flex flex-col gap-[2px]"
        aria-hidden="true"
      >
        <span
          className="font-mono text-arctic-inkSoft block"
          style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
        >
          [ SERIES: SF0625 N.1 ]
        </span>
        <span
          className="font-mono text-arctic-mutedSoft block"
          style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
        >
          [ SERIES 01 ]
        </span>
      </div>
    </header>
  )
}
