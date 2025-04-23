import React, { useState, useEffect } from "react";
import { ArrowRight, Award, Users, Clock, ChevronDown } from "lucide-react";
import InquiryModal from "./InquiryModal";
import { Link } from "react-router-dom";
import first from '../assets/banner/1.webp'
import second from '../assets/banner/2.webp'
import third from '../assets/banner/3.webp'
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Featured projects with Lorem Picsum images
  const featuredProjects = [
    {
      id: 1,
      title: "Urban Harmony Tower",
      location: "Mumbai, India",
      imageUrl: third
    },
    {
      id: 2,
      title: "Serenity Gardens Complex",
      location: "Bangalore, India",
      imageUrl: second
    },
    {
      id: 3,
      title: "Azure Sky Residences",
      location: "Delhi, India",
      imageUrl: first
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    setIsVisible(true);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, []);

  // Stats for the firm
  const stats = [
    { icon: <Clock size={20} />, value: "25+", label: "Years Experience" },
    { icon: <Award size={20} />, value: "120+", label: "Projects Completed" },
    { icon: <Users size={20} />, value: "45+", label: "Team Members" },
  ];

  // const scrollToProjects = () => {
  //   const projectsSection = document.getElementById("projects");
  //   if (projectsSection) {
  //     projectsSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
            loading="eager"
              src={project.imageUrl}
              alt={project.title}
              className="object-cover  w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto lg:mt-10 px-4 lg:px-8 h-full flex flex-col justify-center">
          {/* Animated text content */}
          <div 
            className={`max-w-3xl mt-12 transition-all duration-1000 transform translate-y-0 opacity-100 `}
          >
            <h2 className="text-white text-lg md:text-xl font-light mb-2 tracking-wider">
              AGARWAL & ASSOCIATES
            </h2>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crafting <span className="text-primari">Architectural</span> Excellence
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
              We transform visions into iconic structures, blending aesthetic brilliance with functional design to create spaces that inspire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link aria-label="Projects" to='/projects' className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded flex items-center justify-center transition-all group">
                Explore Our Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button aria-label="get a consultation"  onClick={() => setModalOpen(true)} className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/50 font-medium rounded transition-all">
                Get a Consultation
              </button>
            </div>

            
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute hidden lg:block bottom-32 right-8 z-30">
        <div className="flex flex-col gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-8 rounded-full transition-all ${
                index === currentSlide ? "bg-primary" : "bg-white/30 h-2"
              }`}
              aria-label={`Go to project slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}