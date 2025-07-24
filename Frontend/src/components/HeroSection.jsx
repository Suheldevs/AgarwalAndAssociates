// import React, { useState, useEffect } from "react";
// import { ArrowRight, Award, Users, Clock, ChevronDown } from "lucide-react";
// import InquiryModal from "./InquiryModal";
// import { Link } from "react-router-dom";
// import first from '../assets/banner/1.webp'
// import second from '../assets/banner/2.webp'
// import third from '../assets/banner/3.webp'
// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   // Featured projects with Lorem Picsum images
//   const featuredProjects = [
//     {
//       id: 1,
//       imageUrl: third
//     },
//     {
//       id: 2,
//       imageUrl: second
//     },
//     {
//       id: 3,
//       imageUrl: first
//     }
//   ];

//   // Auto-rotate slides
//   useEffect(() => {
//     setIsVisible(true);
    
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
//     }, 5000);
    
//     return () => clearInterval(slideInterval);
//   }, []);

//   // Stats for the firm
//   const stats = [
//     { icon: <Clock size={20} />, value: "25+", label: "Years Experience" },
//     { icon: <Award size={20} />, value: "120+", label: "Projects Completed" },
//     { icon: <Users size={20} />, value: "45+", label: "Team Members" },
//   ];

//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <>
//     <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 w-full h-full">
//         {featuredProjects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 bg-black/40 z-10" />
//             <img
//             loading="eager"
//               src={project.imageUrl}
//               alt={project.title}
//               className="object-cover  w-full h-full"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="relative z-20 h-full">
//         <div className="container mx-auto lg:mt-10 px-4 lg:px-8 h-full flex flex-col justify-center">
//           {/* Animated text content */}
//           <div 
//             className={`max-w-3xl mt-12 transition-all duration-1000 transform translate-y-0 opacity-100 `}
//           >
//             <h2 className="text-white text-lg md:text-xl font-light mb-2 tracking-wider">
//               AGARWAL & ASSOCIATES
//             </h2>
//             <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                 Crafting <span className="relative">
//                   <span className="relative z-10">Architectural</span>
//                   <span className="absolute bottom-2 left-0 w-full h-4 bg-black/70 -rotate-1 z-0"></span>
//                 </span> Excellence
//               </h1>
//             <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl">
//               We transform visions into iconic structures, blending aesthetic brilliance with functional design to create spaces that inspire.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-10">
//               <Link aria-label="Projects" to='/projects' className="px-6 py-3 bg-black hover:bg-black text-slate-200 font-medium rounded flex items-center justify-center transition-all group">
//                 Explore Our Projects
//                 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </Link>
//               <button aria-label="get a consultation"  onClick={() => setModalOpen(true)} className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/50 font-medium rounded transition-all">
//                 Get a Consultation
//               </button>
//             </div>

            
//           </div>
//         </div>
//       </div>

//       {/* Slide Navigation Dots */}
//       <div className="absolute hidden lg:block bottom-32 right-8 z-30">
//         <div className="flex flex-col gap-2">
//           {featuredProjects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-8 rounded-full transition-all ${
//                 index === currentSlide ? "bg-primary" : "bg-white/30 h-2"
//               }`}
//               aria-label={`Go to project slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import InquiryModal from "./InquiryModal";
import { Link } from "react-router-dom";
import heroVideo from '../assets/hero.mp4'
export default function VideoHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Stats for the firm
  const stats = [
    { icon: <Clock size={20} />, value: "25+", label: "Years Experience" },
    { icon: <Award size={20} />, value: "120+", label: "Projects Completed" },
    { icon: <Users size={20} />, value: "45+", label: "Team Members" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <InquiryModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
      <div className="relative lg:h-screen h-[95vh] w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source 
              src={heroVideo}
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Container */}
        <div className="relative mt-12 z-20 h-full flex items-center justify-center">
          <div className="container px-4 lg:px-8 text-center max-w-4xl mx-auto">
            {/* Animated text content */}
            <div className={`transition-all mt-20 duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-white text-lg md:text-xl font-light mb-2 tracking-wider">
                AGARWAL & ASSOCIATES
              </h2>
              <h1 className="text-white text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
                Crafting <span className="relative inline-block">
                  <span className="relative z-10">Architectural</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-black/70 -rotate-1 z-0"></span>
                </span> Excellence
              </h1>
              <p className="hidden lg:block text-gray-200 text-lg md:text-xl mb-8 mx-auto">
                We transform visions into iconic structures, blending aesthetic brilliance with functional design to create spaces that inspire.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
                <Link 
                  aria-label="Projects" 
                  to='/projects' 
                  className="px-8 py-4 bg-black/10 border hover:bg-black/40 text-white font-medium flex items-center justify-center transition-all group"
                >
                  Explore Our Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#services" 
                  aria-label="get a consultation"  
                  className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/50 font-medium  transition-all"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Stats Row */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 transition-all hover:bg-black/40"
                  >
                    <div className="mr-3 text-red-400">
                      {stat.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-bold text-2xl">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-1"></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}