import { useState } from 'react';
import { Users, Building2, Award, Globe } from 'lucide-react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const stats = [
    { 
      icon: <Building2 size={24} />,
      count: '150+',
      title: 'Projects Completed',
      description: 'Across residential, commercial, and institutional spaces'
    },
    { 
      icon: <Users size={24} />,
      count: '25+',
      title: 'Team Members',
      description: 'Architects, interior designers, and project managers'
    },
    { 
      icon: <Award size={24} />,
      count: '18',
      title: 'Design Awards',
      description: 'Recognition for innovation and sustainable design'
    },
    { 
      icon: <Globe size={24} />,
      count: '12',
      title: 'Countries',
      description: 'Global presence across continents'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">About Agarwal & Associates</h2>
          {/* <div className="w-24 h-1 bg-blue-500 mx-auto"></div> */}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Creating Spaces That Inspire</h3>
            <p className="text-gray-600">
              Founded in 2005, Agarwal & Associates is an award-winning architectural firm dedicated to creating thoughtful, 
              innovative spaces that elevate human experience. We blend aesthetic excellence with functional precision, 
              ensuring each project meets the unique needs of our clients while pushing the boundaries of design.
            </p>
            <p className="text-gray-600">
              Our multidisciplinary team brings together expertise in architecture, interior design, urban planning, 
              and sustainable development to deliver comprehensive solutions for projects of all scales. With a 
              collaborative approach, we transform visions into meticulously crafted realities.
            </p>
            <div className="pt-4">
              <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300">
                Our Portfolio
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Agarwal & Associates Studio" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20 hover:bg-opacity-10 transition duration-300"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`text-blue-500 mb-4 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</h4>
              <h5 className="text-lg font-medium text-gray-800 mb-2">{stat.title}</h5>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-t-4 border-blue-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Design Excellence</h4>
              <p className="text-gray-600">We pursue innovative design solutions that challenge conventions while maintaining functionality and aesthetic harmony.</p>
            </div>
            <div className="p-6 border-t-4 border-blue-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Sustainability</h4>
              <p className="text-gray-600">Environmental responsibility guides our approach, integrating sustainable practices across all aspects of our design process.</p>
            </div>
            <div className="p-6 border-t-4 border-blue-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Client Partnership</h4>
              <p className="text-gray-600">We build lasting relationships with our clients, treating each project as a collaborative journey toward realizing shared goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}