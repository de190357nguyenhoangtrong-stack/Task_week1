import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPropertiesSection } from '@/components/sections/FeaturedPropertiesSection'
import { CuratedLivingSection } from '@/components/sections/CuratedLivingSection'
import { ExploreLifestyleSection } from '@/components/sections/ExploreLifestyleSection'
import { ClientStoriesSection } from '@/components/sections/ClientStoriesSection'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { FooterSection } from '@/components/sections/FooterSection'

export async function generateMetadata({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params: _params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  return {
    title: 'Homevia | Exceptional Homes for Modern Living',
    description: 'Curating exceptional homes and experiences for modern living.',
  }
}

export default function LandingPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params: _params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedPropertiesSection />
      <CuratedLivingSection />
      <ExploreLifestyleSection />
      <ClientStoriesSection />
      <CTABannerSection />
      <FooterSection />
    </main>
  )
}
