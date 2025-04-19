import { useState, useEffect } from 'react';
import { MapPin, Calendar, ChevronLeft, ArrowRight, ExternalLink, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import projectsData from '../Data/ProjectData';
import Breadcrumb from '../components/Breadcrumb';
// Mock project data - in a real app, this would come from a data source
// const projectsData = [
//   {
//     id: 1,
//     title: 'Urban Renewal Center',
//     slug: 'urban-renewal-center',
//     category: 'public',
//     location: 'New York, USA',
//     year: '2023',
//     image: 'https://picsum.photos/800/600?random=1',
//     description: 'A community-focused development revitalizing an underutilized urban space.'
//   },
//   {
//     id: 2,
//     title: 'Evergreen Corporate Park',
//     slug: 'evergreen-corporate-park',
//     category: 'commercial',
//     location: 'Bangalore, India',
//     year: '2022',
//     image: 'https://picsum.photos/800/600?random=2',
//     description: 'Biophilic design principles integrated into a modern office campus.',
//     // details: {
//     //   client: 'Evergreen Technologies Ltd.',
//     //   size: '120,000 sq ft',
//     //   services: ['Architectural Design', 'Interior Design', 'Landscape Design', 'Sustainability Consulting'],
//     //   challenge: 'Creating a corporate environment that promotes employee wellbeing and productivity while meeting ambitious sustainability goals in a dense urban context.',
//     //   solution: 'Our approach centered on biophilic design principles that bring nature into the workplace. The campus features extensive green spaces, natural materials, abundant daylight, and living walls throughout the complex. The building's orientation maximizes natural light while minimizing heat gain, and advanced smart building systems optimize energy and water usage.',
//     //   result: 'The completed project achieved LEED Platinum certification and has become a landmark example of sustainable commercial architecture in Bangalore. Post-occupancy surveys show a 27% increase in employee satisfaction and a 15% reduction in absenteeism compared to the client's previous facilities.',
//     //   images: [
//     //     'https://picsum.photos/800/600?random=21',
//     //     'https://picsum.photos/800/600?random=22',
//     //     'https://picsum.photos/800/600?random=23',
//     //     'https://picsum.photos/800/600?random=24',
//     //     'https://picsum.photos/800/600?random=25'
//     //   ]
//     // }
//   },
//   {
//     id: 3,
//     title: 'Seaside Residences',
//     slug: 'seaside-residences',
//     category: 'residential',
//     location: 'Melbourne, Australia',
//     year: '2024',
//     image: 'https://picsum.photos/800/600?random=3',
//     description: 'Luxury apartments designed to harmonize with their coastal surroundings.'
//   },
//   {
//     id: 4,
//     title: 'Green Valley School',
//     slug: 'green-valley-school',
//     category: 'educational',
//     location: 'Portland, USA',
//     year: '2021',
//     image: 'https://picsum.photos/800/600?random=4',
//     description: 'A net-zero energy educational facility designed for 21st-century learning.'
//   }
// ];

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Find the current project by slug
    const currentProject = projectsData.find(project => project.slug === slug);
    setProject(currentProject);
    
    // Reset active image when project changes
    setActiveImageIndex(0);
    
    // Get related projects from the same category
    if (currentProject) {
      const otherProjects = projectsData
        .filter(item => item.id !== currentProject.id && item.category === currentProject.category)
        .slice(0, 3);
        
      if (otherProjects.length < 3) {
        // If not enough projects in the same category, add some from other categories
        const moreProjects = projectsData
          .filter(item => item.id !== currentProject.id && item.category !== currentProject.category)
          .slice(0, 3 - otherProjects.length);
          
        setRelatedProjects([...otherProjects, ...moreProjects]);
      } else {
        setRelatedProjects(otherProjects);
      }
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  const projectDetails = project.details || {
    client: 'Information not available',
    size: 'Information not available',
    services: ['Architectural Design'],
    challenge: 'Information not available',
    solution: 'Information not available',
    result: 'Information not available',
    images: [project.image]
  };

  return (
    <>
    <Breadcrumb 
          title="Project Detail" 
          items={[
            { name: "Projects", path: "/Projects" },
            { name: "Project Detail", path: `/project/${slug}` },
          ]}
        //   bgImage="/path-to-your-image.jpg"
        />
   
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link to="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 group transition-all">
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to all projects
      </Link>
      
      {/* Project Header */}
      <div className="mb-10">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">{project.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{project.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-8">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Client:</span>
            <span className="ml-2">{projectDetails.client}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Size:</span>
            <span className="ml-2">{projectDetails.size}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Project Gallery - Takes 2/3 of the space on desktop */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden mb-6">
            <img 
              src={projectDetails.images[activeImageIndex]} 
              alt={`${project.title} - Image ${activeImageIndex + 1}`} 
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {projectDetails.images.length > 1 && (
            <div className="grid grid-cols-5 gap-3">
              {projectDetails.images.map((image, index) => (
                <button 
                  key={index}
                  className={`rounded-lg overflow-hidden ${activeImageIndex === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Project Info - Takes 1/3 of the space on desktop */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab('services')}
              >
                Services
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'overview' && (
                <>
                  <p className="text-lg leading-relaxed">{project.description}</p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Challenge</h3>
                      <p>{projectDetails.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solution</h3>
                      <p>{projectDetails.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Result</h3>
                      <p>{projectDetails.result}</p>
                    </div>
                  </div>
                </>
              )}
              
              {activeTab === 'details' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Client</h3>
                    <p>{projectDetails.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p>{project.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Year</h3>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Size</h3>
                    <p>{projectDetails.size}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Category</h3>
                    <p className="capitalize">{project.category}</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'services' && (
                <div>
                  <h3 className="font-semibold mb-3">Services Provided</h3>
                  <ul className="space-y-2">
                    {projectDetails.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                Request Similar Project
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors flex items-center justify-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share Project
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Projects Section */}
      <div className="mt-24">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">Similar Projects</h2>
          <Link to="/projects" className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
            View all projects
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <div key={project.id} className="group">
              <Link to={`/project/${project.slug}`} className="block">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-blue-600 capitalize">{project.category}</span>
                <h3 className="font-bold text-xl mt-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              </Link>
              <div className="flex items-center mt-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}