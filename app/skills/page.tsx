import { Navigation } from '@/components/navigation'
import { SkillsSection } from '@/components/skills-section'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Md Taqi Tahmid',
  description: 'My technical skills and expertise in web development technologies.',
}

export default function SkillsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <SkillsSection />
      </div>
      <Footer />
    </>
  )
}
