import React, { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, Building, MapPin, ChevronRight, ExternalLink, Plus } from "lucide-react";

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const sectionRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.2 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);
useEffect(() => {
    setIsVisible(true);
  }, []);
  const milestones = [
    { year: "1998", title: "Firm Established", description: "Founded in Mumbai by Amit Agarwal" },
    { year: "2005", title: "First Major Project", description: "Completed the award-winning Horizon Tower" },
    { year: "2012", title: "International Expansion", description: "Opened our first international office in Dubai" },
    { year: "2018", title: "Sustainability Focus", description: "Launched eco-friendly design initiative" },
    { year: "2022", title: "Digital Transformation", description: "Pioneered VR architecture visualization" }
  ];

  // Core team members with placeholder images
  const coreTeam = [
    {
      name: "Amit Agarwal",
      position: "Founder & Principal Architect",
      image: "https://picsum.photos/id/1005/400/500",
      education: "M.Arch, Harvard University",
      experience: "25+ years",
      quote: "Architecture is not just about creating buildings; it's about crafting experiences that transform lives and communities. Our mission has always been to blend innovation with functionality, creating spaces that inspire and endure."
    },
    {
      name: "Priya Sharma",
      position: "Design Director",
      image: "https://picsum.photos/id/1011/400/500",
      education: "B.Arch, SPA Delhi",
      experience: "18+ years"
    },
    {
      name: "Rajiv Mehta",
      position: "Technical Director",
      image: "https://picsum.photos/id/1074/400/500",
      education: "MSc. Structural Engineering, IIT Mumbai",
      experience: "20+ years"
    }
  ];

  const stats = [
    { icon: <Users size={24} />, value: "45+", label: "Team Members" },
    { icon: <Building size={24} />, value: "120+", label: "Completed Projects" },
    { icon: <MapPin size={24} />, value: "12", label: "Countries" },
    { icon: <Award size={24} />, value: "28", label: "Awards" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className={`text-yellow-500 font-medium mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>ABOUT AGARWAL & ASSOCIATES</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            A Legacy of <span className="text-yellow-500">Architectural</span> Excellence
          </h2>
          <p className={`text-gray-600 text-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            For over two decades, we've been shaping skylines and transforming spaces with our commitment to innovative design, 
            technical precision, and sustainable practices.
          </p>
        </div>

        {/* Vision & Mission Tabs */}
        <div className={`mb-24 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row">
            {/* Tab Navigation */}
            <div className="md:w-1/3 bg-gray-900 text-white p-8 space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Our Foundation</h3>
              <button 
                onClick={() => setActiveTab("vision")}
                className={`w-full text-left py-4 px-4 rounded-lg transition-all flex items-center justify-between ${activeTab === "vision" ? "bg-yellow-400 text-gray-900" : "hover:bg-gray-800"}`}
              >
                <span className="font-medium">Our Vision</span>
                {activeTab === "vision" && <ChevronRight size={20} />}
              </button>
              <button 
                onClick={() => setActiveTab("mission")}
                className={`w-full text-left py-4 px-4 rounded-lg transition-all flex items-center justify-between ${activeTab === "mission" ? "bg-yellow-400 text-gray-900" : "hover:bg-gray-800"}`}
              >
                <span className="font-medium">Our Mission</span>
                {activeTab === "mission" && <ChevronRight size={20} />}
              </button>
              <button 
                onClick={() => setActiveTab("values")}
                className={`w-full text-left py-4 px-4 rounded-lg transition-all flex items-center justify-between ${activeTab === "values" ? "bg-yellow-400 text-gray-900" : "hover:bg-gray-800"}`}
              >
                <span className="font-medium">Our Values</span>
                {activeTab === "values" && <ChevronRight size={20} />}
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="md:w-2/3 p-10 relative">
              <div className={`transition-all duration-500 h-full ${activeTab === "vision" ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To redefine architectural boundaries through innovative design that harmonizes aesthetics, functionality, and sustainability,
                  creating spaces that inspire human connection and elevate experiences.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <Building size={20} className="text-yellow-600" />
                    </div>
                    <span className="font-medium">Design Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <Users size={20} className="text-yellow-600" />
                    </div>
                    <span className="font-medium">Human-Centered</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-10 relative">

              <div className={`transition-all duration-500 h-full ${activeTab === "mission" ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To deliver architectural solutions that exceed client expectations through collaborative processes, technical excellence, and unwavering 
                  attention to detail, while championing environmental responsibility and community engagement.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-yellow-500">
                      <Plus size={16} />
                    </div>
                    <p>Creating sustainable designs that minimize environmental impact</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-yellow-500">
                      <Plus size={16} />
                    </div>
                    <p>Fostering innovation through research and technology integration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-yellow-500">
                      <Plus size={16} />
                    </div>
                    <p>Cultivating meaningful relationships with clients and communities</p>
                  </li>
                </ul>
              </div>
              </div>
              
              <div className={`transition-all duration-500 h-full ${activeTab === "values" ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                <h3 className="text-3xl font-bold mb-4">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2">Integrity</h4>
                    <p className="text-gray-600">Maintaining the highest ethical standards in all our professional relationships and practices.</p>
                  </div>
                  <div className="p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2">Excellence</h4>
                    <p className="text-gray-600">Striving for exceptional quality in every aspect of our design and execution process.</p>
                  </div>
                  <div className="p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2">Innovation</h4>
                    <p className="text-gray-600">Embracing creativity and technological advancements to pioneer new architectural solutions.</p>
                  </div>
                  <div className="p-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                    <p className="text-gray-600">Prioritizing environmentally responsible design principles and practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Message */}
        <div className={`mb-24 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl overflow-hidden shadow-xl">
            {/* Founder's Photo */}
            <div className="lg:w-2/5 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
              <div className="absolute inset-0 bg-yellow-500 opacity-20 z-0 transition-opacity group-hover:opacity-30"></div>
              <img 
                src={coreTeam[0].image} 
                alt={coreTeam[0].name}
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-white text-2xl font-bold">{coreTeam[0].name}</h3>
                <p className="text-yellow-300">{coreTeam[0].position}</p>
                <p className="text-white/70 mt-2 text-sm">{coreTeam[0].education}</p>
                <p className="text-white/70 text-sm">{coreTeam[0].experience}</p>
              </div>
            </div>
            
            {/* Message Content */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-6">Director's Message</h3>
                <div className="relative pl-6 border-l-2 border-yellow-400">
                  <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-3 w-8 h-8 text-yellow-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-600 italic leading-relaxed">
                    {coreTeam[0].quote}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h4 className="font-bold text-lg mb-3">Our Approach</h4>
                  <p className="text-gray-600">
                    We begin each project by deeply understanding our client's vision, the site's context, and the community's needs. 
                    This holistic approach ensures our designs are not just visually striking but also functional, sustainable, and meaningful.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="font-bold text-lg mb-3">Our Promise</h4>
                  <p className="text-gray-600">
                    When you work with Agarwal & Associates, you're not just getting a design service; you're gaining a dedicated partner 
                    committed to bringing your architectural vision to life with precision, passion, and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-24 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Leadership Team</h3>
            <p className="text-gray-600 mt-4">Meet the creative minds behind our architectural innovations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                    <p className="text-white/90 font-medium">{member.education}</p>
                    <p className="text-white/90">{member.experience}</p>
                    <button className="mt-4 inline-flex items-center text-yellow-300 hover:text-yellow-400 transition-colors">
                      View Profile <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>
                  
                  {/* Image */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Info box */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-yellow-600">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors">
              Meet Our Complete Team <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
        
        {/* Company Timeline */}
        <div className={`mb-24 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Journey</h3>
            <p className="text-gray-600 mt-4">A timeline of defining moments that shaped our firm</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline events */}
            <div className="flex flex-col">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex mb-16 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative group">
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${
                        index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                      } bg-white rotate-45 z-0 group-hover:bg-yellow-50 transition-colors`}></div>
                      <div className="relative z-10">
                        <span className="text-yellow-500 font-bold">{milestone.year}</span>
                        <h4 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 border-4 border-white shadow-md flex items-center justify-center z-10 transition-transform hover:scale-110">
                      <Clock size={20} className="text-gray-900" />
                    </div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className={`transition-all duration-1000 delay-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gray-900 rounded-2xl py-16 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mx-auto mb-4 text-yellow-400 transition-transform group-hover:scale-110 group-hover:bg-yellow-400/30">
                    {stat.icon}
                  </div>
                  <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}