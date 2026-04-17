import type { ReactNode } from 'react'

function SmallCircleArrow(): ReactNode {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <circle cx="14" cy="14" r="13" stroke="#F2F4F5" strokeWidth="1.2" />
      <line x1="9" y1="18" x2="18" y2="9" stroke="#F2F4F5" strokeWidth="1.2" strokeLinecap="round" />
      <polyline points="12,9 18,9 18,15" stroke="#F2F4F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function AuroraPromoCard(): ReactNode {
  return (
    <article
      className="relative aspect-[4/5] overflow-hidden bg-arctic-bgDeep"
      aria-label="Aurora promo — reflective puffer jacket feature"
    >
      <img
        src="/img/aurora-promo.jpg"
        alt="AURORA — Reflective puffer jacket product photography"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arctic-ink/30" aria-hidden="true" />

      <div
        className="absolute top-4 right-4 font-display text-arctic-ink uppercase select-none pointer-events-none"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '-0.02em',
          lineHeight: '0.88',
          mixBlendMode: 'multiply',
          opacity: 0.88,
        }}
        aria-hidden="true"
      >
        AURORA™
      </div>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 right-6 flex justify-end px-4">
        <button
          type="button"
          className="flex items-center gap-2 group"
          aria-label="Add Aurora to cart — $1,999"
        >
          <SmallCircleArrow />
          <div className="flex flex-col">
            <span
              className="font-mono text-arctic-white uppercase"
              style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
            >
              ADD TO CART
            </span>
            <span
              className="font-mono text-arctic-silver"
              style={{ fontSize: '0.6rem', letterSpacing: '0.10em' }}
            >
              $1,999
            </span>
          </div>
        </button>
      </div>

      <div
        className="absolute bottom-4 left-4"
        aria-hidden="true"
      >
        <span
          className="font-display text-arctic-ink uppercase"
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
            letterSpacing: '0.06em',
            lineHeight: 1,
            mixBlendMode: 'multiply',
            opacity: 0.75,
          }}
        >
          FROZN
        </span>
      </div>
    </article>
  )
}
