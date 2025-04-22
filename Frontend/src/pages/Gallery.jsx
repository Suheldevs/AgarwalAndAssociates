import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

// Sample image data - replace with your actual images
const galleryImages = [
  { id: 1, src: "https://picsum.photos/800/600?random=1", alt: "Gallery Image 1" },
  { id: 2, src: "https://picsum.photos/800/600?random=2", alt: "Gallery Image 2" },
  { id: 3, src: "https://picsum.photos/800/600?random=3", alt: "Gallery Image 3" },
  { id: 4, src: "https://picsum.photos/800/600?random=4", alt: "Gallery Image 4" },
  { id: 5, src: "https://picsum.photos/800/600?random=5", alt: "Gallery Image 5" },
  { id: 6, src: "https://picsum.photos/800/600?random=6", alt: "Gallery Image 6" },
  { id: 7, src: "https://picsum.photos/800/600?random=7", alt: "Gallery Image 7" },
  { id: 8, src: "https://picsum.photos/800/600?random=8", alt: "Gallery Image 8" },
  { id: 9, src: "https://picsum.photos/800/600?random=10", alt: "Gallery Image 9" },
  { id: 9, src: "https://picsum.photos/800/600?random=11", alt: "Gallery Image 9" },
  { id: 9, src: "https://picsum.photos/800/600?random=12", alt: "Gallery Image 9" },
  { id: 9, src: "https://picsum.photos/800/600?random=13", alt: "Gallery Image 9" },
  { id: 9, src: "https://picsum.photos/800/600?random=14", alt: "Gallery Image 9" },
  { id: 9, src: "https://picsum.photos/800/600?random=15", alt: "Gallery Image 9" },
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
    <div className="min-h-screen bg-gray-100 lg:p-8 p-4">
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
                  className="max-h-screen max-w-full object-contain rounded-md  shadow-2xl"
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