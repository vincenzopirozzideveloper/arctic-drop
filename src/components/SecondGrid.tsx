import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ProductCard from './ProductCard'
import type { ProductCardProps } from './ProductCard'

interface GridProduct extends ProductCardProps {
  slug: string
}

const secondGridProducts: GridProduct[] = [
  {
    slug:     'glacier-white',
    name:     'Glacier White',
    subtitle: 'Insulated puffer jacket',
    price:    '$1,299.99',
    colors:   ['grey'],
    image:    '/img/glacier-white.jpg',
  },
  {
    slug:     'polar-gloss',
    name:     'Polar Gloss',
    subtitle: 'Blue puffer jacket',
    price:    '$899.99',
    colors:   ['blue gloss'],
    image:    '/img/polar-gloss.jpg',
  },
  {
    slug:     'onyx-black',
    name:     'Onyx Black',
    subtitle: 'Heavy puffer jacket',
    price:    '$899.99',
    colors:   ['navy blue', 'black'],
    image:    '/img/onyx-black.jpg',
  },
  {
    slug:     'icefield-blue',
    name:     'Icefield Blue',
    subtitle: 'Tech puffer jacket',
    price:    '$999.99',
    colors:   ['blue'],
    image:    '/img/icefield-blue.jpg',
  },
  {
    slug:     'polar-white',
    name:     'Polar White',
    subtitle: 'Shell puffer jacket',
    price:    '$1,499.99',
    colors:   ['white'],
    image:    '/img/polar-white.jpg',
  },
]

export default function SecondGrid(): ReactNode {
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
      aria-label="Full collection — second grid"
    >
      <div
        ref={gridRef}
        className="container-page py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {secondGridProducts.map((product, index) => (
          <div
            key={product.name}
            data-grid-card
            className={index === 4 && secondGridProducts.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}
          >
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
