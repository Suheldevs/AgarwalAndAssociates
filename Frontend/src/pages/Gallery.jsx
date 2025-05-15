import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';


import p1 from '../assets/project/mandi-gate.png'
import p2 from '../assets/project/shoping-arcade.png'
import p3 from '../assets/project/residence-lakhimpur.png'
import p4 from '../assets/project/rohit-tower.png'
import p5 from '../assets/project/rcf-lalganj.png'
import p6 from '../assets/project/residenceatgomatinagar.png'
import p7 from '../assets/project/shoping-complex.png'
import p8 from '../assets/project/tample-gosaiganj.png'
import p9 from '../assets/project/vishwnath-academy.png'
import p10 from '../assets/project/asharam.png'
import p11 from '../assets/project/bank-madurai.png'
import p12 from '../assets/project/form-house.png'
import p13 from '../assets/project/residence-gomati.png'
import p14 from '../assets/project/five-star.png'
import p15 from '../assets/project/mrrashtogi.png'
import p16 from '../assets/project/resort.png'
import p17 from '../assets/project/ice-factory.png'
import p18 from '../assets/project/iti-college.png'

// Sample image data - replace with your actual images
const galleryImages = [
  { id: 1, src:p1, alt: "Gallery Image 1" },
  { id: 2, src:p2, alt: "Gallery Image 2" },
  { id: 3, src:p3, alt: "Gallery Image 3" },
  { id: 4, src:p4, alt: "Gallery Image 4" },
  { id: 5, src:p5, alt: "Gallery Image 5" },
  { id: 6, src:p6, alt: "Gallery Image 6" },
  { id: 7, src:p7, alt: "Gallery Image 7" },
  { id: 8, src:p8, alt: "Gallery Image 8" },
  { id: 9, src:p9, alt: "Gallery Image 9" },
  { id: 10, src:p10, alt: "Gallery Image 9" },
  { id: 11, src:p11, alt: "Gallery Image 9" },
  { id: 12, src:p12, alt: "Gallery Image 9" },
  { id: 13, src:p13, alt: "Gallery Image 9" },
  { id: 14, src:p14, alt: "Gallery Image 9" },
  { id: 15, src:p15, alt: "Gallery Image 9" },
  { id: 16, src:p16, alt: "Gallery Image 9" },
  { id: 17, src:p17, alt: "Gallery Image 9" },
  { id: 18, src:p18, alt: "Gallery Image 9" },
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
     <Breadcrumb
            title="Gallery"
            items={[
                { name: "Gallery", path: "/gallery" },
              ]}
            // bgImage="/api/placeholder/1920/600"
          />
    <div className="min-h-screen bg-gray-100 lg:p-8 lg:py-12 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden  shadow-lg bg-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30  flex items-center justify-center transition-all duration-300">
                <div className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                  <span className="text-xl font-bold"><ZoomIn size={50} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full max-h-screen p-4 flex items-center justify-center">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              <button 
                onClick={goToPrevious}
                className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next Button */}
              <button 
                onClick={goToNext}
                className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <div className="w-full flex items-center justify-center">
                <img 
                  src={galleryImages[currentImageIndex].src} 
                  alt={galleryImages[currentImageIndex].alt} 
                  className="max-h-screen max-w-full object-contain rounded-md  lg:scale-200 shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}