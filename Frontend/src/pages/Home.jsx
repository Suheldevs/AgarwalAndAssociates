import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutUsSection = lazy(() => import('../components/AboutSection'));
const DirectorSection = lazy(() => import('../components/DirectorSection'));
const ServiceSection = lazy(() => import('../components/ServiceSection'));
const ProjectSection = lazy(() => import('../components/ProjectSection'));
const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const CTASection = lazy(() => import('../components/CTASection'));
const BlogSection = lazy(() => import('../components/BlogSection'));

const Spinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function Home() {
  return (
    <div>
      <HeroSection />
      
      <Suspense fallback={<Spinner />}>
        <AboutUsSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <DirectorSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <ServiceSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HowWeWork/>
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <ProjectSection />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <WhyChooseUs />
      </Suspense>

      
      <Suspense fallback={<Spinner />}>
        <TestimonialSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <BlogSection />
      </Suspense>
    </div>
  );
}

export default Home;
