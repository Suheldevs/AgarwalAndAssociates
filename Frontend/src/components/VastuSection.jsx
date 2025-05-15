import React, { useState, useEffect } from 'react';
import { Wind, Droplet, Sunrise, Feather, ArrowRight } from 'lucide-react';


import v1 from '../assets/vastu-section/v1.webp'
import v2 from '../assets/vastu-section/v2.webp'
import v3 from '../assets/vastu-section/v3.webp'
import v4 from '../assets/vastu-section/v4.png'
export default function VastuSection() {
  const [activeElement, setActiveElement] = useState(0);
  
  // Auto-rotate through elements every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % vastuElements.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const vastuElements = [
    {
      name: "Air (Vayu)",
      icon: <Wind size={24} />,
      description: "Represents movement and breath in our designs, creating spaces where energy flows freely and naturally.",
      principle: "Our north-facing spaces harness positive energy flow, bringing vitality through carefully positioned windows and open floor plans.",
      image: "/api/placeholder/800/500"
    },
    {
      name: "Water (Jal)",
      icon: <Droplet size={24} />,
      description: "Embodies tranquility and purity, reflected in our water features and northeast-positioned elements.",
      principle: "Water features in the northeast bring prosperity, while carefully positioned bathrooms maintain energetic balance.",
      image: "/api/placeholder/800/500"
    },
    {
      name: "Light (Agni)",
      icon: <Sunrise size={24} />,
      description: "The sacred fire element illuminates our spaces, bringing warmth and transformation through thoughtful lighting design.",
      principle: "Southeast-facing kitchens and carefully positioned lighting systems honor the ancient principles of light and energy.",
      image: "/api/placeholder/800/500"
    },
    {
      name: "Space (Akasha)",
      icon: <Feather size={24} />,
      description: "The ether that connects all elements, represented in our designs through deliberate negative space and proportions.",
      principle: "Center spaces (Brahmasthan) remain open to facilitate energy movement throughout the structure, honoring ancient spatial wisdom.",
      image: "/api/placeholder/800/500"
    }
  ];
  
  const mythologyProjects = [
    {
      title: "Surya Pavilion",
      description: "A modern interpretation of the sun god's chariot, where seven horses transform into angular light wells drawing natural illumination through the structure.",
      location: "Karnataka, India"
    },
    {
      title: "Naga Courtyard",
      description: "Water channels inspired by serpent deities create a flowing boundary between private and public space, symbolizing protection and renewal.",
      location: "Kerala, India"
    },
    {
      title: "Garuda Tower",
      description: "A cantilevered observation deck echoes the divine eagle's wingspan, offering panoramic views while incorporating traditional proportional systems.",
      location: "Tamil Nadu, India"
    }
  ];

  return (
    <div className="bg-black text-white">
      <div className="container lg:px-8 mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-16 mb-8 md:mb-0">
         
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Ancient Wisdom,<br/><span className="font-bold">Modern Vision</span></h2>
          <p className="text-gray-300 mb-6">
            Where Vastu Shastra principles and mythological narratives inspire contemporary architectural expression.
          </p>
            <p className="text-gray-300 mb-6">
              Each design tells a story, weaving cultural significance into the very fabric of the space. We believe architecture should not only serve function but also connect people to their heritage and collective memory.
            </p>
            <p className="text-gray-400 mb-8">
              By incorporating elements from ancient texts and traditions, we create spaces that resonate on a deeper level—where proportion, alignment, and form speak to something timeless within the human experience.
            </p>
            {/* <a href="#" className="inline-flex items-center border-b border-gray-700 pb-1 hover:border-white transition-colors duration-300">
              Read our design philosophy <ArrowRight size={16} className="ml-2" />
            </a> */}
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src={v1} alt="Cultural design element" className="border border-white/50 h-48 object-cover" />
            <img src={v2} alt="Cultural design element" className="border border-white/50 h-48 object-cover mt-8" />
            <img src={v3} alt="Cultural design element" className="border border-white/50 h-48 object-cover" />
            <img src={v4} alt="Cultural design element" className="border border-white/50 h-48 object-cover mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}