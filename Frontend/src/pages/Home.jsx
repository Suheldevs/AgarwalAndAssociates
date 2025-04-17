import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutSection'
import DirectorSection from '../components/DirectorSection'
import ProjectSection from '../components/ProjectSection'
import TestimonialSection from '../components/TestimonialSection'
import CTASection from '../components/CTASection'
import BlogSection from '../components/BlogSection'
import ServiceSection from '../components/ServiceSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <UniqueHeroSection/> */}
      <AboutUsSection/>
      <DirectorSection/>
      <ServiceSection/>
      <ProjectSection/>
      <TestimonialSection/>
      <CTASection/>
      <BlogSection/>
    </div>
  )
}

export default Home