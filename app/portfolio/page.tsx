import { Navigation } from '@/components/navigation'
import { PortfolioSection } from '@/components/portfolio-section'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Md Taqi Tahmid',
  description: 'Showcase of my projects and professional work in web development.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <PortfolioSection />
      </div>
      <Footer />
    </>
  )
}
