import { useState } from 'react';
import { ArrowRight, ExternalLink, Camera, Tag, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'institutional', name: 'Institutional' },
    { id: 'urban', name: 'Urban Planning' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Azure Heights Residences',
      slug: 'azure-heights-residences',
      category: 'residential',
      location: 'Mumbai, India',
      year: '2023',
      image: 'https://picsum.photos/800/600?random=1',
      description: 'A luxury apartment complex featuring sustainable design and panoramic city views.',
      featured: true
    },
    {
      id: 2,
      title: 'Evergreen Corporate Park',
      slug: 'evergreen-corporate-park',
      category: 'commercial',
      location: 'Bangalore, India',
      year: '2022',
      image: 'https://picsum.photos/800/600?random=2',
      description: 'Biophilic design principles integrated into a modern office campus.'
    },
    {
      id: 3,
      title: 'Heritage Public Library',
      slug: 'heritage-public-library',
      category: 'institutional',
      location: 'Delhi, India',
      year: '2021',
      image: 'https://picsum.photos/800/600?random=2',
      description: 'Contemporary interpretation of traditional Indian architectural elements.'
    },
    {
      id: 4,
      title: 'Riverside Promenade',
      slug: 'riverside-promenade',
      category: 'urban',
      location: 'Ahmedabad, India',
      year: '2023',
      image: 'https://picsum.photos/800/600?random=3',
      description: 'Revitalization of urban waterfront connecting historical districts.'
    },
    {
      id: 5,
      title: 'Harmony Villas',
      slug: 'harmony-villas',
      category: 'residential',
      location: 'Goa, India',
      year: '2022',
      image: 'https://picsum.photos/800/600?random=4',
      description: 'Eco-friendly luxury villas embracing the coastal landscape.'
    },
    {
      id: 8,
      title: 'Harmony Villas',
      slug: 'harmony-villas',
      category: 'residential',
      location: 'Goa, India',
      year: '2022',
      image: 'https://picsum.photos/800/600?random=8',
      description: 'Eco-friendly luxury villas embracing the coastal landscape.'
    },
    {
      id: 6,
      title: 'Horizon Tech Center',
      slug: 'horizon-tech-center',
      category: 'commercial',
      location: 'Hyderabad, India',
      year: '2021',
      image: 'https://picsum.photos/800/600?random=6',
      description: 'Smart building design with innovative energy management systems.',
      featured: true
    }
  ];
  

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Breadcrumb 
  title="Latest Projects" 
  items={[
    { name: "Project", path: "/projects" },
  ]}
  />
   
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Diagonal Line */}
        {/* <div className="relative mb-16">
          <div className="flex items-center">
            <div className="h-px bg-blue-500 flex-grow max-w-md"></div>
            <h2 className="text-4xl font-bold text-gray-900 px-6">Our Projects</h2>
            <div className="h-px bg-blue-500 flex-grow"></div>
          </div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Transforming visions into architectural masterpieces that redefine spaces and experiences.
          </p>
        </div> */}

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Project (Conditional) */}
        {filteredProjects.some(project => project.featured) && (
          <div className="mb-16">
            {filteredProjects
              .filter(project => project.featured)
              .slice(0, 1)
              .map(project => (
                <div 
                  key={project.id}
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  onMouseEnter={() => setHoveredProject('featured')}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-96 lg:h-auto overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredProject === 'featured' ? 'scale-110' : 'scale-100'
                        }`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Tag size={14} className="mr-1" /> {project.category}
                        </span>
                        <span className="bg-gray-900 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Calendar size={14} className="mr-1" /> {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                      <div className="mb-2 flex items-center">
                        <div className="h-px w-12 bg-blue-500 mr-4"></div>
                        <h3 className="text-sm font-medium text-blue-500 uppercase tracking-wider">Featured Project</h3>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                      <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                      <p className="text-gray-500 mb-8">
                        <span className="font-medium">Location:</span> {project.location}
                      </p>
                      <Link to={`/project/${project.slug}`} className={`group self-start flex items-center font-medium text-blue-500 hover:text-blue-700 transition-all duration-300 ${
                        hoveredProject === 'featured' ? 'translate-x-2' : ''
                      }`}>
                        View Project Details
                        <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter(project => !project.featured || activeFilter !== 'all')
            .map(project => (
              <div 
                key={project.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center">
                      <Tag size={12} className="mr-1" /> {project.category}
                    </span>
                    <span className="bg-gray-900 bg-opacity-70 text-white px-3 py-1 rounded-full text-xs flex items-center">
                      <Calendar size={12} className="mr-1" /> {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white rounded-full p-2 shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
                      <Camera size={16} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="group flex items-center font-medium text-blue-500 hover:text-blue-700 transition-all duration-300">
                      Details
                      <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-blue-500 transform transition-transform duration-500 ${
                  hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            ))}
        </div>

        {/* View All Projects Button */}
        {/* <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Explore All Projects
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div> */}
      </div>
    </section>
    </>
  );
}