import { useState } from 'react';
import { Award, Compass, Clock, PenTool, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeItem, setActiveItem] = useState(1);
  
  const reasons = [
    {
      id: 1,
      icon: <Compass />,
      title: "Innovative Vision",
      description: "We transform abstract concepts into groundbreaking architectural solutions that challenge conventional design paradigms."
    },
    {
      id: 2,
      icon: <Award />,
      title: "Award-Winning Designs",
      description: "Our portfolio showcases internationally recognized projects that set new standards in architectural excellence."
    },
    {
      id: 3,
      icon: <Clock />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and consistently deliver exceptional work within the agreed timeframe."
    },
    {
      id: 4,
      icon: <PenTool />,
      title: "Attention to Detail",
      description: "Every element of our designs is meticulously crafted, ensuring both aesthetic appeal and functional precision."
    },
    {
      id: 5,
      icon: <Users />,
      title: "Collaborative Approach",
      description: "We believe in fostering strong client relationships through transparent communication and collaborative design processes."
    }
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header with subtle animation */}
        <div className="mb-10 text-center">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl  font-bold">
              Why Choose Us
            </h2>
            {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full"></div> */}
          </div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Architectural Excellence With Unparalleled Vision
          </p>
        </div>
        
        
        {/* Alternative: Interactive Feature List */}
        <div className="mt-10 hidden lg:block">
          <div className="flex">
            {/* Navigation */}
            <div className="w-1/3 pr-8 border-r border-gray-800">
              {reasons.map((reason) => (
                <div 
                  key={reason.id}
                  className={`mb-4 flex items-center cursor-pointer group transition-all duration-300 ${
                    activeItem === reason.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveItem(reason.id)}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    activeItem === reason.id ? 'bg-red-500 text-black' : 'bg-gray-800 text-gray-400 group-hover:text-red-500'
                  } transition-colors duration-300`}>
                    {reason.icon}
                  </div>
                  <h4 className={`ml-4 text-lg font-medium ${
                    activeItem === reason.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  } transition-colors duration-300`}>
                    {reason.title}
                  </h4>
                </div>
              ))}
            </div>
            
            {/* Content Display */}
            <div className="w-2/3 pl-8">
              {reasons.map((reason) => (
                activeItem === reason.id && (
                  <div key={reason.id} className="animate-fadeIn">
                    <h3 className="text-3xl font-bold text-red-500 mb-6">{reason.title}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">{reason.description}</p>
                    <div className="p-6 bg-white rounded-lg border-l-4 border-red-500">
                      <p className="text-gray-900 italic">
                        "Our {reason.title.toLowerCase()} approach has transformed how clients experience the architectural process, creating both stunning outcomes and memorable journeys."
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}