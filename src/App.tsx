import type { ReactNode } from 'react'
import { useLenisGsap } from './hooks/useLenisGsap'
import TopNav from './components/TopNav'
import HeroSection from './components/HeroSection'
import NewCollectionHeader from './components/NewCollectionHeader'
import FirstGrid from './components/FirstGrid'
import SecondGrid from './components/SecondGrid'
import SiteFooter from './components/SiteFooter'

export default function App(): ReactNode {
  useLenisGsap()

  return (
    <main className="bg-arctic-bg text-arctic-ink min-h-screen">
      <TopNav />
      <HeroSection />
      <NewCollectionHeader />
      <FirstGrid />
      <SecondGrid />
      <SiteFooter />
    </main>
  )
}
