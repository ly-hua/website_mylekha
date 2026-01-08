import ThreeBackground from '../../components/ThreeBackground'
import Navbar from './layout/Navbar'
import SiteFooter from './layout/SiteFooter'
import AboutSection from './sections/AboutSection'
import BlogSection from './sections/BlogSection'
import DownloadSection from './sections/DownloadSection'
import FeaturesSection from './sections/FeaturesSection'
import HardwareSection from './sections/HardwareSection'
import HeroSection from './sections/HeroSection'
import HowItWorksSection from './sections/HowItWorksSection'
import IntroSection from './sections/IntroSection'
import PricingSection from './sections/PricingSection'
import ReadyCtaSection from './sections/ReadyCtaSection'
import ResourcesSection from './sections/ResourcesSection'
import ServicesSection from './sections/ServicesSection'
import StatsSection from './sections/StatsSection'

export default function LandingPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />

      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ReadyCtaSection />

      <HowItWorksSection />
      <ResourcesSection />
      <BlogSection />

      <IntroSection />
      <StatsSection />
      <HardwareSection />
      <ServicesSection />
      <AboutSection />
      <DownloadSection />

      <SiteFooter />
    </>
  )
}
