import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenisGsap(): void {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false })

    const onScroll = (): void => {
      ScrollTrigger.update()
    }

    lenis.on('scroll', onScroll)

    const raf = (time: number): void => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', onScroll)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
