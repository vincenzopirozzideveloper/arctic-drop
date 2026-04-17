import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const THUMBS = [
  { src: '/img/hero-thumb-1.jpg',   alt: 'GLCR Arctic 01 detail view 1' },
  { src: '/img/hero-thumb-2.jpg',   alt: 'GLCR Arctic 01 detail view 2' },
  { src: '/img/aurora-promo.jpg',   alt: 'GLCR Aurora — promo shot' },
  { src: '/img/orbit-silver.jpg',   alt: 'GLCR Orbit Silver detail' },
  { src: '/img/stealth-black.jpg',  alt: 'GLCR Stealth Black detail' },
  { src: '/img/aurora-silver.jpg',  alt: 'GLCR Aurora Silver detail' },
  { src: '/img/glacier-white.jpg',  alt: 'GLCR Glacier White detail' },
]

const SIZES = ['S', 'M', 'L', 'XL'] as const
const SELECTED_SIZE = 'M'
const COLOURS = ['WHITE', 'SILVER'] as const
const SELECTED_COLOUR = 'WHITE'

function CircleArrowIcon(): ReactNode {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <circle cx="25" cy="25" r="24" stroke="#0E141A" strokeWidth="1.4" />
      <line x1="17" y1="32" x2="32" y2="17" stroke="#0E141A" strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="22,17 32,17 32,27" stroke="#0E141A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function InstagramIcon(): ReactNode {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="3" stroke="#F2F4F5" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3" stroke="#F2F4F5" strokeWidth="1.2" />
      <circle cx="11.5" cy="4.5" r="0.75" fill="#F2F4F5" />
    </svg>
  )
}

function FacebookIcon(): ReactNode {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5.5H10.5V3.5H9C7.619 3.5 6.5 4.619 6.5 6V7H5V9H6.5V13H8.5V9H10L10.5 7H8.5V6C8.5 5.724 8.724 5.5 9 5.5Z" stroke="#F2F4F5" strokeWidth="1.1" fill="none" strokeLinejoin="round" />
    </svg>
  )
}

function TwitterIcon(): ReactNode {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2.5L7 8.5L2 13.5H3.5L7.7 9.5L11.5 13.5H14L8.7 7.2L13.5 2.5H12L8.1 6.2L4.5 2.5H2Z" stroke="#F2F4F5" strokeWidth="1.1" fill="none" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroSection(): ReactNode {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const targets = containerRef.current?.querySelectorAll('[data-hero-anim]')
      if (!targets?.length) return

      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.15,
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="pt-[72px] w-full"
      aria-label="Hero — ARCTIC 01 Collection"
    >
      <div className="max-w-page mx-auto flex flex-col lg:flex-row min-h-[88vh]">
        <div className="flex flex-col justify-between px-4 md:px-8 lg:px-12 py-10 lg:py-14 w-full lg:w-[55%] xl:w-[50%]">
          <div>
            <div
              data-hero-anim
              className="flex gap-6 mb-8"
              aria-hidden="true"
            >
              <span
                className="font-mono text-arctic-muted uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
              >
                [ SERIES: SF0625 N.1 ]
              </span>
              <span
                className="font-mono text-arctic-muted uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
              >
                [ SERIES 01 ]
              </span>
            </div>

            <h1
              data-hero-anim
              className="font-display text-arctic-ink uppercase leading-none mb-10"
              style={{
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                letterSpacing: '-0.02em',
                lineHeight: '0.88',
              }}
            >
              COLLECTION
              <br />
              ARCTIC 01™
            </h1>
          </div>

          <div className="flex flex-col gap-6 mt-auto">
            <div data-hero-anim>
              <div
                className="flex items-center gap-4 font-mono text-arctic-inkSoft uppercase mb-3"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
              >
                <span className="text-arctic-muted">SIZE</span>
                {SIZES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={[
                      'transition-colors duration-150',
                      s === SELECTED_SIZE
                        ? 'text-arctic-ink border-b-2 border-arctic-ink pb-[1px]'
                        : 'text-arctic-muted hover:text-arctic-inkSoft',
                    ].join(' ')}
                    aria-pressed={s === SELECTED_SIZE}
                    aria-label={`Size ${s}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div
                className="flex items-center gap-4 font-mono text-arctic-inkSoft uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.18em' }}
              >
                <span className="text-arctic-muted">COLOUR</span>
                {COLOURS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={[
                      'transition-colors duration-150',
                      c === SELECTED_COLOUR
                        ? 'text-arctic-ink border-b-2 border-arctic-ink pb-[1px]'
                        : 'text-arctic-muted hover:text-arctic-inkSoft',
                    ].join(' ')}
                    aria-pressed={c === SELECTED_COLOUR}
                    aria-label={`Colour ${c}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div data-hero-anim>
              <button
                type="button"
                className="flex items-center gap-4 group"
                aria-label="Add to cart — $899.99"
              >
                <CircleArrowIcon />
                <div className="flex flex-col">
                  <span
                    className="font-mono text-arctic-ink uppercase font-semibold tracking-micro"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.18em' }}
                  >
                    ADD TO CART
                  </span>
                  <span
                    className="font-mono text-arctic-muted"
                    style={{ fontSize: '0.72rem', letterSpacing: '0.10em' }}
                  >
                    $899.99
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          data-hero-anim
          className="relative w-full lg:w-[45%] xl:w-[50%] flex-shrink-0 lg:min-h-full min-h-[60vw]"
        >
          <div
            className="absolute inset-0 bg-arctic-bgDeep"
            style={{
              backgroundImage: 'url(/img/hero-main.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
            role="img"
            aria-label="ARCTIC 01 — close-up product photography of the hero puffer jacket"
          />

          <div className="absolute top-6 right-[-10px] lg:right-[-64px] flex flex-col gap-2 z-10">
            {THUMBS.slice(0, 2).map((thumb, i) => (
              <button
                key={thumb.src}
                type="button"
                className="block border border-arctic-line hover:border-arctic-muted transition-colors"
                aria-label={`View thumbnail ${i + 1}`}
                style={{ width: '96px', height: '128px' }}
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <p
              className="font-mono text-arctic-white text-center mt-1"
              style={{ fontSize: '0.6rem', letterSpacing: '0.14em' }}
              aria-label="Thumbnail 1 of 7"
            >
              01 &nbsp;/&nbsp; 07
            </p>
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-10">
            <a
              href="#"
              aria-label="Instagram"
              className="text-arctic-white hover:opacity-70 transition-opacity"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-arctic-white hover:opacity-70 transition-opacity"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-arctic-white hover:opacity-70 transition-opacity"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
