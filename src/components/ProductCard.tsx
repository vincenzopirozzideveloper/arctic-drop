import type { ReactNode } from 'react'

export interface ProductCardProps {
  image: string
  name: string
  subtitle: string
  price: string
  colors: string[]
}

const SWATCH_MAP: Record<string, string> = {
  white:      '#F2F4F5',
  silver:     '#C9D3D9',
  blue:       '#4E6F8A',
  'blue gloss':'#3A6080',
  'navy blue': '#1A2E42',
  black:      '#0A0E12',
  grey:       '#8A9AA3',
}

function ColorSwatch({ label }: { label: string }): ReactNode {
  const bg = SWATCH_MAP[label.toLowerCase()] ?? '#8EA1AB'
  const isLight = ['white', 'silver', 'grey'].includes(label.toLowerCase())

  return (
    <span className="inline-flex items-center gap-[5px]">
      <span
        className="inline-block w-[10px] h-[10px] flex-shrink-0 border border-arctic-line"
        style={{ backgroundColor: bg, borderColor: isLight ? 'rgba(14,20,26,0.25)' : 'transparent' }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-arctic-mutedSoft uppercase"
        style={{ fontSize: '0.56rem', letterSpacing: '0.14em' }}
      >
        {label}
      </span>
    </span>
  )
}

export default function ProductCard({
  image,
  name,
  subtitle,
  price,
  colors,
}: ProductCardProps): ReactNode {
  return (
    <article className="group flex flex-col" aria-label={`Product: ${name}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-arctic-bgDeep">
        <img
          src={image}
          alt={`${name} — ${subtitle} product photography`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-arctic-ink opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      <div className="pt-3 pb-2 flex flex-col gap-[6px]">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p
              className="font-mono text-arctic-ink uppercase font-medium leading-tight"
              style={{ fontSize: '0.68rem', letterSpacing: '0.14em' }}
            >
              {name.toUpperCase()}
            </p>
            <p
              className="font-mono text-arctic-muted leading-tight mt-[2px]"
              style={{ fontSize: '0.6rem', letterSpacing: '0.10em' }}
            >
              {subtitle}
            </p>
          </div>
          <p
            className="font-mono text-arctic-inkSoft flex-shrink-0"
            style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}
          >
            {price}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {colors.map((c) => (
            <ColorSwatch key={c} label={c} />
          ))}
        </div>
      </div>
    </article>
  )
}
