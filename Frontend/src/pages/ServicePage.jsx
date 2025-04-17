import React, { useState } from 'react';
import { ChevronRight, Ruler, PenTool, Wrench, Compass, ClipboardList, Building, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

// Main App Component
export default function ServicePage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeService, setActiveService] = useState(null);

  // Service data with icons, descriptions, and details
  const services = [
    {
      id: 'architectural-consultant',
      title: 'Architectural Consultant',
      icon: <Ruler className="mb-2" size={28} />,
      shortDesc: 'Expert architectural guidance for your project needs',
      description: 'Our architectural consultation services provide expert guidance throughout your project lifecycle, from concept development to final construction.',
      features: [
        'Conceptual design development',
        'Feasibility studies and site analysis',
        'Building code and regulatory consultation',
        'Design review and optimization',
        'Sustainable design strategies'
      ],
      process: [
        'Initial project assessment',
        'Design concept development',
        'Detailed consultation sessions',
        'Recommendation documentation',
        'Implementation guidance'
      ]
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      icon: <PenTool className="mb-2" size={28} />,
      shortDesc: 'Creating beautiful, functional interior spaces',
      description: 'Our interior design services transform spaces into beautiful, functional environments that reflect your vision and requirements.',
      features: [
        'Space planning and layout design',
        'Material and finish selection',
        'Custom furniture design',
        'Lighting design and specification',
        'Color and texture consultation'
      ],
      process: [
        'Space analysis and client interview',
        'Concept board development',
        'Material and finish selection',
        'Detailed design documentation',
        'Implementation oversight'
      ]
    },
    {
      id: 'service-engineering',
      title: 'Service Engineering',
      icon: <Wrench className="mb-2" size={28} />,
      shortDesc: 'Comprehensive building systems engineering',
      description: 'Our service engineering team ensures all building systems are efficiently designed, integrated, and optimized for performance.',
      features: [
        'HVAC system design and optimization',
        'Electrical systems engineering',
        'Plumbing and sanitary engineering',
        'Fire safety systems design',
        'Energy efficiency analysis'
      ],
      process: [
        'System requirements assessment',
        'Preliminary systems design',
        'Coordination with architectural plans',
        'Detailed engineering documentation',
        'Commissioning support'
      ]
    },
    {
      id: 'vastu',
      title: 'Vastu',
      icon: <Compass className="mb-2" size={28} />,
      shortDesc: 'Ancient architectural science for harmony',
      description: 'Our Vastu consulting services incorporate ancient architectural science principles to create harmonized spaces that promote well-being.',
      features: [
        'Site selection and layout analysis',
        'Building orientation optimization',
        'Room placement and zoning',
        'Element balance and energy flow',
        'Remedial solutions for existing structures'
      ],
      process: [
        'Vastu assessment and analysis',
        'Detailed recommendations report',
        'Integration with modern design principles',
        'Implementation guidance',
        'Post-implementation evaluation'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      icon: <ClipboardList className="mb-2" size={28} />,
      shortDesc: 'End-to-end project coordination and delivery',
      description: 'Our project management services ensure your architectural project is delivered on time, within budget, and to the highest quality standards.',
      features: [
        'Comprehensive project planning',
        'Budget management and cost control',
        'Contractor selection and coordination',
        'Schedule management and monitoring',
        'Quality assurance and control'
      ],
      process: [
        'Project initiation and planning',
        'Team assembly and coordination',
        'Progress monitoring and reporting',
        'Issue resolution and risk management',
        'Project closeout and evaluation'
      ]
    },
    {
      id: 'urban-planning',
      title: 'Urban Planning',
      icon: <Building className="mb-2" size={28} />,
      shortDesc: 'Strategic planning for sustainable urban development',
      description: 'Our urban planning services create sustainable, functional, and aesthetically pleasing urban environments through strategic planning and design.',
      features: [
        'Master planning and land use design',
        'Transportation and infrastructure planning',
        'Public space and landscape design',
        'Sustainability and resilience strategies',
        'Community engagement and participatory design'
      ],
      process: [
        'Site analysis and context assessment',
        'Stakeholder consultation',
        'Concept development and visualization',
        'Detailed planning documentation',
        'Implementation strategy development'
      ]
    }
  ];

  // Handle service card click
  const handleServiceClick = (serviceId) => {
    setActiveService(services.find(service => service.id === serviceId));
  };

  // Handle back button click
  const handleBackClick = () => {
    setActiveService(null);
  };

  // Service card component
  const ServiceCard = ({ service }) => (
    <div 
      className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
      onClick={() => handleServiceClick(service.id)}
    >
      <div className="text-blue-600">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.shortDesc}</p>
      <div className={`flex items-center text-blue-600 transition-all duration-300 ${hoveredService === service.id ? 'translate-x-1' : ''}`}>
        <span className="mr-2">Learn more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );

  // Service detail page component
  const ServiceDetail = ({ service }) => (
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-5xl mx-auto">
      <button 
        onClick={handleBackClick}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-all"
      >
        <ChevronRight className="rotate-180 mr-1" size={18} />
        <span>Back to all services</span>
      </button>
      
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
          {service.icon}
        </div>
        <h2 className="text-3xl font-bold">{service.title}</h2>
      </div>
      
      <p className="text-lg text-gray-700 mb-8 border-l-4 border-blue-500 pl-4">
        {service.description}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">What We Offer</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mt-1 mr-3 text-blue-600">
                  <ChevronRight size={16} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Process</h3>
          <ol className="space-y-3">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0">
                  {index + 1}
                </div>
                <span className="mt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">Ready to Get Started?</h3>
        <p className="mb-4">Contact our team to discuss how our {service.title.toLowerCase()} services can bring your vision to life.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-300">
          Request Consultation
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Breadcrumb 
  title="Our Services" 
  items={[
    { name: "Services", path: "/services" },
  ]}
  />
    <div className="min-h-screen bg-gray-50">
   

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {activeService ? (
          <ServiceDetail service={activeService} />
        ) : (
          <>
            {/* Services Hero Section */}
            <div className="text-center mb-16">
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2> */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive architectural solutions tailored to your vision, from concept to completion
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of experts is ready to help you create a tailored approach for your unique architectural project
              </p>
              <Link to='/contact' className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Contact Us Today
              </Link>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
     
    </div>
    </>
  );
}