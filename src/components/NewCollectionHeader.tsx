import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const META_CHIPS = ['[ NEW COLLECTION ]', '[ SERIES_01 ]', '[ PUFFERS ]'] as const
const META_LINES = ['PUFFER JACKETS', 'METAL EDITION', 'GLOSS SERIES', 'EXTREME COLD LINE'] as const

export default function NewCollectionHeader(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const heading = sectionRef.current?.querySelector('[data-nc-heading]')
      if (!heading) return

      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        },
      )

      const chips = sectionRef.current?.querySelectorAll('[data-nc-chip]')
      if (chips?.length) {
        gsap.fromTo(
          chips,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          },
        )
      }
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-arctic-line py-8 md:py-10"
      aria-label="New Collection header and filters"
    >
      <div className="container-page flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
        <div className="flex-shrink-0 lg:w-[38%]">
          <h2
            data-nc-heading
            className="font-display text-arctic-ink uppercase leading-none"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
              letterSpacing: '-0.02em',
              lineHeight: '0.9',
            }}
          >
            NEW
            <br />
            COLLECTION
          </h2>
        </div>

        <div className="flex flex-col gap-2 lg:flex-1 lg:px-8">
          {META_CHIPS.map((chip) => (
            <span
              key={chip}
              data-nc-chip
              className="font-mono text-arctic-muted block"
              style={{ fontSize: '0.62rem', letterSpacing: '0.18em' }}
              aria-hidden="true"
            >
              {chip}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col gap-1 lg:w-[22%]"
          aria-label="Collection tags"
        >
          {META_LINES.map((line) => (
            <span
              key={line}
              data-nc-chip
              className="font-mono text-arctic-mutedSoft uppercase block"
              style={{ fontSize: '0.6rem', letterSpacing: '0.16em' }}
            >
              {line}
            </span>
          ))}
        </div>

        <div className="flex-shrink-0 lg:pl-6">
          <button
            type="button"
            className="font-mono text-arctic-ink uppercase border border-arctic-ink px-4 py-2 hover:bg-arctic-ink hover:text-arctic-white transition-colors duration-200"
            style={{ fontSize: '0.62rem', letterSpacing: '0.18em', borderRadius: '2px' }}
            aria-label="Open filters"
          >
            FILTERS
          </button>
        </div>
      </div>
    </section>
  )
}
