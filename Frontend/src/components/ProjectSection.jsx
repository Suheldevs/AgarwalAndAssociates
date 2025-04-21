import { useState } from 'react';
import { ArrowRight, ExternalLink, Camera, Tag, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '../Data/ProjectData';
import { FaLocationPin } from 'react-icons/fa6';

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'institutional', name: 'Institutional' },
    { id: 'urban', name: 'Urban Planning' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-8 lg:py-12 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Diagonal Line - UNCHANGED */}
        <div className="relative mb-10">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-900 px-6">Our Projects</h2>
          </div>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Transforming visions into architectural masterpieces that redefine spaces and experiences.
          </p>
        </div>

        {/* Filter Tabs - UNCHANGED */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 border border-gray-100 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* UPDATED: Featured Project with Modern Design */}
        {filteredProjects.some(project => project.featured) && (
          <div className="mb-16">
            {filteredProjects
              .filter(project => project.featured)
              .slice(0, 1)
              .map(project => (
                <div 
                  key={project.id}
                  className="relative rounded-2xl overflow-hidden shadow-xl group"
                  onMouseEnter={() => setHoveredProject('featured')}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-96 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      
                      {/* Animated tags that slide up on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out group-hover:translate-y-0 translate-y-4">
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center backdrop-blur-sm bg-opacity-90 shadow-lg">
                            <Tag size={14} className="mr-2" /> {project.category}
                          </span>
                          <span className="bg-gray-900 bg-opacity-80 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center backdrop-blur-sm shadow-lg">
                            <Calendar size={14} className="mr-2" /> {project.year}
                          </span>
                          <span className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center backdrop-blur-sm shadow-lg">
                            <FaLocationPin size={14} className="mr-2"/> {project.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 bg-white flex flex-col justify-center relative overflow-hidden">
                      {/* Decorative element */}
                      <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500 transform transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-5"></div>
                      
                      <div className="mb-4 flex items-center">
                        <div className="h-px w-12 bg-yellow-500 mr-4"></div>
                        <h3 className="text-sm font-medium text-yellow-500 uppercase tracking-wider">Featured Project</h3>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">{project.title}</h2>
                      
                      <p className="text-gray-600 mb-6 text-lg line-clamp-3">{project.description}</p>
                      
                      <p className="text-gray-500 mb-8 flex items-center">
                        <FaLocationPin className="mr-2" size={16} />
                        <span className="font-medium">{project.location}</span>
                      </p>
                      
                      <Link 
                        to={`/project/${project.slug}`} 
                        className="self-start flex items-center font-medium text-gray-800 hover:text-yellow-500 transition-all duration-300 relative group/btn"
                      >
                        <span className="relative z-10">View Project Details</span>
                        <span className="ml-2 transition-all duration-300 group-hover/btn:translate-x-1 relative z-10">
                          <ArrowRight size={18} />
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover/btn:w-full"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* UPDATED: Projects Grid with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects
    .filter(project => !project.featured || activeFilter !== 'all')
    .map(project => (
      <div 
        key={project.id}
        className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Card content wrapper */}
        <div className="relative h-96">
          {/* Image */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" 
          />
          
          {/* Gradient overlay that darkens on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-30 group-hover:opacity-80 transition-all duration-500"></div>
          
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 transform origin-left transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100"></div>
          
          {/* Category Badge - Always visible */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center">
              <Tag size={12} className="mr-1.5" /> {project.category}
            </span>
          </div>
          
          {/* Content that slides up on hover */}
          <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-36 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            
            {/* Project Description - Appears on hover */}
            <p className="text-white/90 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {project.description || "Modern architectural design embracing functionality and aesthetics for an enhanced living experience."}
            </p>
            
            {/* Project Details */}
            <div className="flex flex-wrap gap-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center">
                <Calendar size={12} className="mr-1.5" /> {project.year}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center">
                <FaLocationPin size={12} className="mr-1.5"/> {project.location}
              </span>
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              <Link 
                to={`/project/${project.slug}`} 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:pl-5"
              >
                View Details
                <ArrowRight size={16} className="ml-2 transition-all duration-300" />
              </Link>
              
              <Link 
                to={`/project/${project.slug}`} 
                className="bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

        {/* View All Projects Button - Slightly Updated */}
        <div className="mt-12 text-center">
          <Link  
            to="/projects" 
            className="inline-flex items-center px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-medium rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore All Projects</span>
            <ArrowRight size={18} className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}