import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";
import projects from "../Data/ProjectData";
import { Link } from "react-router-dom";
// Sample project data
// const projects = [
//   {
//     id: 1,
//     name: "The Plus",
//     location: "MAGNOR, NORWAY",
//     year: "2022",
//     logo: "https://picsum.photos/seed/logo1/100/100",
//     mainImage: "https://picsum.photos/seed/main1/800/500",
//     client: "VESTRE A/S",
//     typology: "INFRASTRUCTURE",
//     size: "7,000 / 75,000",
//     status: "COMPLETED",
//     architect: "BIG – Bjarke Ingels Group",
//     duration: "18 months",
//     materialsUsed: ["Local Mass Timber", "Low-Carbon Concrete", "Recycled Steel"],
//     features: ["Carbon-neutral", "Public park integration", "BREEAM Outstanding"],
//     description:
//       "Designed for furniture manufacturer Vestre, The Plus is a factory, visitor center, and 300-acre park located in Magnor, Norway. It’s the largest furniture investment in Norway in decades.",
//     additionalInfo:
//       "Constructed in just 18 months, it uses local materials and is the first Nordic industrial building with a BREEAM Outstanding rating.",
//     gallery: [
//       "https://picsum.photos/seed/p1g1/600/400",
//       "https://picsum.photos/seed/p1g2/600/400",
//       "https://picsum.photos/seed/p1g3/600/400"
//     ]
//   },
//   {
//     id: 2,
//     name: "NOT A HOTEL Setouchi",
//     location: "SAGI ISLAND, JAPAN",
//     year: "2023",
//     logo: "https://picsum.photos/seed/logo2/100/100",
//     mainImage: "https://picsum.photos/seed/main2/800/500",
//     client: "SETOUCHI HOLDINGS",
//     typology: "HOSPITALITY",
//     size: "3,200 / 45,000",
//     status: "COMPLETED",
//     architect: "Kengo Kuma & Associates",
//     duration: "24 months",
//     materialsUsed: ["Local Wood", "Concrete", "Glass"],
//     features: ["Military fort restoration", "Panoramic sea views", "Sustainable systems"],
//     description:
//       "NOT A HOTEL Setouchi transforms a historic military fortress into a unique hotel experience, blending heritage with modern design.",
//     additionalInfo:
//       "The renovation respects the original structure while introducing sustainability and luxury for immersive cultural stays.",
//     gallery: [
//       "https://picsum.photos/seed/p2g1/600/400",
//       "https://picsum.photos/seed/p2g2/600/400",
//       "https://picsum.photos/seed/p2g3/600/400"
//     ]
//   },
//   {
//     id: 3,
//     name: "Athletics Las Vegas Ballpark",
//     location: "LAS VEGAS, UNITED STATES",
//     year: "2024",
//     logo: "https://picsum.photos/seed/logo3/100/100",
//     mainImage: "https://picsum.photos/seed/main3/800/500",
//     client: "ATHLETICS ORGANIZATION",
//     typology: "SPORTS",
//     size: "35,000 / 150,000",
//     status: "IN PROGRESS",
//     architect: "Populous",
//     duration: "36 months",
//     materialsUsed: ["Steel", "ETFE Roof", "Glass"],
//     features: ["Climate control dome", "Fan-centric amenities", "Sustainable design"],
//     description:
//       "A new generation ballpark focused on immersive fan experiences and year-round usability, setting sustainability benchmarks in sports venues.",
//     additionalInfo:
//       "Advanced systems combat Vegas’ climate, while design ensures comfort and views from every seat.",
//     gallery: [
//       "https://picsum.photos/seed/p3g1/600/400",
//       "https://picsum.photos/seed/p3g2/600/400",
//       "https://picsum.photos/seed/p3g3/600/400"
//     ]
//   },
//   {
//     id: 3,
//     name: "Athletics Las Vegas Ballpark",
//     location: "LAS VEGAS, UNITED STATES",
//     year: "2024",
//     logo: "https://picsum.photos/seed/logo3/100/100",
//     mainImage: "https://picsum.photos/seed/main3/800/500",
//     client: "ATHLETICS ORGANIZATION",
//     typology: "SPORTS",
//     size: "35,000 / 150,000",
//     status: "IN PROGRESS",
//     architect: "Populous",
//     duration: "36 months",
//     materialsUsed: ["Steel", "ETFE Roof", "Glass"],
//     features: ["Climate control dome", "Fan-centric amenities", "Sustainable design"],
//     description:
//       "A new generation ballpark focused on immersive fan experiences and year-round usability, setting sustainability benchmarks in sports venues.",
//     additionalInfo:
//       "Advanced systems combat Vegas’ climate, while design ensures comfort and views from every seat.",
//     gallery: [
//       "https://picsum.photos/seed/p3g1/600/400",
//       "https://picsum.photos/seed/p3g2/600/400",
//       "https://picsum.photos/seed/p3g3/600/400"
//     ]
//   },
//   {
//     id: 3,
//     name: "Athletics Las Vegas Ballpark",
//     location: "LAS VEGAS, UNITED STATES",
//     year: "2024",
//     logo: "https://picsum.photos/seed/logo3/100/100",
//     mainImage: "https://picsum.photos/seed/main3/800/500",
//     client: "ATHLETICS ORGANIZATION",
//     typology: "SPORTS",
//     size: "35,000 / 150,000",
//     status: "IN PROGRESS",
//     architect: "Populous",
//     duration: "36 months",
//     materialsUsed: ["Steel", "ETFE Roof", "Glass"],
//     features: ["Climate control dome", "Fan-centric amenities", "Sustainable design"],
//     description:
//       "A new generation ballpark focused on immersive fan experiences and year-round usability, setting sustainability benchmarks in sports venues.",
//     additionalInfo:
//       "Advanced systems combat Vegas’ climate, while design ensures comfort and views from every seat.",
//     gallery: [
//       "https://picsum.photos/seed/p3g1/600/400",
//       "https://picsum.photos/seed/p3g2/600/400",
//       "https://picsum.photos/seed/p3g3/600/400"
//     ]
//   }
// ];

export default function ProjectSection2() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length : prev - 1
      );
    }
  };

  const getAllSlides = () => {
    if (!selectedProject) return [];
    return [
      selectedProject.mainImage,
      ...selectedProject.gallery
    ];
  };

  const slides = getAllSlides();

  return (
    <div className="relative h-screen my-16 overflow-y-scroll bg-white">
      {/* Project List */}
      <div className="container mx-auto  px-4">
        <h2 className="text-3xl md:text-4xl font-bold lg:mb-12 mb-6 text-center">Featured Projects</h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <Link
            to={`/project/${project.slug}`}
              key={project.id}
              className="md:grid grid-cols-12 gap-6 cursor-pointer lg:px-52"
              >
              <div className="hidden  md:col-span-3 col-span-12 lg:flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <img src={project.image} alt={`${project.title} logo`} className="lg:w-12 border border-black/20 w-96 h-96 lg:h-12 mr-4" />
                  <div className="hover:underline underline-offset-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                  </div>
                </div>
              </div>
              <div className=" md:col-span-9 overflow-hidden">
                <div className="lg:hidden block my-4">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.location}</p>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-4 lg:mb-0 border border-black/20 h-80 object-cover transition-transform duration-700 hover:scale-90"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* {selectedProject && (
        <div className="fixed inset-0 bg-white z-50 overflow-hidden">
          <div className="flex w-full h-full">
           
            <div className="min-w-80 w-80 p-8 border-r overflow-y-auto">
              <button
                onClick={closeProject}
                className="absolute top-6 right-6 bg-black text-white p-2 rounded-full z-50"
                aria-label="Close project details"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.logo}
                alt={`${selectedProject.name} logo`}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{selectedProject.location}</p>
              <p className="text-sm text-gray-600 mb-4">{selectedProject.year}</p>
              <div className="text-sm space-y-2">
                <div>
                  <p className="text-gray-500">CLIENT</p>
                  <p>{selectedProject.client}</p>
                </div>
                <div>
                  <p className="text-gray-500">TYPOLOGY</p>
                  <p>{selectedProject.typology}</p>
                </div>
                <div>
                  <p className="text-gray-500">SIZE</p>
                  <p>{selectedProject.size}</p>
                </div>
                <div>
                  <p className="text-gray-500">STATUS</p>
                  <p>{selectedProject.status}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">SHARE</p>
                <div className="flex gap-2">
                  <Instagram size={16} />
                  <Facebook size={16} />
                  <Linkedin size={16} />
                  <Twitter size={16} />
                </div>
              </div>
            </div>

          
            <div className="relative flex-1 overflow-hidden">
              <div className="w-full h-full">
                <img
                  src={slides[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

             
              {currentImageIndex === 1 && (
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80">
                  <p className="text-lg mb-2">{selectedProject.description}</p>
                  <p className="text-lg">{selectedProject.additionalInfo}</p>
                </div>
              )}

              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
