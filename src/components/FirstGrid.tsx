import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import AuroraPromoCard from './AuroraPromoCard'
import ProductCard from './ProductCard'
import type { ProductCardProps } from './ProductCard'

interface GridProduct extends ProductCardProps {
  slug: string
}

const firstGridProducts: GridProduct[] = [
  {
    slug:     'aurora-silver',
    name:     'Aurora Silver',
    subtitle: 'Reflective puffer jacket',
    price:    '$999.99',
    colors:   ['white', 'blue'],
    image:    '/img/aurora-silver.jpg',
  },
  {
    slug:     'orbit-silver',
    name:     'Orbit Silver',
    subtitle: 'High-gloss puffer',
    price:    '$1,299.99',
    colors:   ['silver'],
    image:    '/img/orbit-silver.jpg',
  },
  {
    slug:     'stealth-black',
    name:     'Stealth Black',
    subtitle: 'Heavy shield puffer',
    price:    '$1,199.99',
    colors:   ['black', 'white'],
    image:    '/img/stealth-black.jpg',
  },
]

export default function FirstGrid(): ReactNode {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll('[data-grid-card]')
      if (!cards?.length) return

      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        },
      )
    },
    { scope: gridRef },
  )

  return (
    <section
      className="w-full border-t border-arctic-lineSoft"
      aria-label="Featured products — first grid"
    >
      <div
        ref={gridRef}
        className="container-page py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-3"
      >
        <div data-grid-card className="md:col-span-1 lg:col-span-1">
          <AuroraPromoCard />
        </div>

        {firstGridProducts.map((product) => (
          <div key={product.name} data-grid-card>
            <ProductCard
              image={product.image}
              name={product.name}
              subtitle={product.subtitle}
              price={product.price}
              colors={product.colors}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
