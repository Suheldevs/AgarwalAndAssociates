import React, { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, Building, MapPin, ChevronRight, ExternalLink, Plus, Briefcase, GraduationCap, WholeWord, LaptopMinimalCheck } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import defaultImage from '../assets/about/default.webp'

import coreTeam from '../Data/TeamData'
export default function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const sectionRef = useRef(null);
  
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

 
 
  
  const stats = [
    { icon: <Users size={24} />, value: "27+", label: "Team Members" },
    { icon: <Building size={24} />, value: "5k+", label: "Completed Projects" },
    { icon: <LaptopMinimalCheck size={24} />, value: "100%", label: "Client Satisfaction" },
    { icon: <Award size={24} />, value: "18", label: "Awards" }
  ];

  return (
    <>
      <Breadcrumb 
        title="ABOUT AGARWAL & ASSOCIATES" 
        items={[
          { name: "About", path: "/about" },
        ]}
      />
    
      <section ref={sectionRef} id="about" className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section with Architectural Background */}
          <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <img 
              src="https://cdn.pixabay.com/photo/2014/03/04/21/26/building-279769_640.jpg" 
              alt="Architectural Design"
              className="w-full h-[30rem] object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
              <div className="max-w-2xl">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  A Legacy of <span className="text-red-500">Architectural</span> Excellence
                </h2>
                <p className={`text-gray-200 text-lg md:text-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  For over two decades, we've been shaping skylines and transforming spaces with our commitment to innovative design, 
                  technical precision, and sustainable practices.
                </p>
                <div className={`mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                  <Link to='/projects' className="px-8 py-3 bg-red-500 hover:bg-red-500 text-slate-100 font-semibold rounded-lg transition-colors shadow-lg">
                    Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Tabs - Improved UI */}
          <div className={`mb-12 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center lg:mb-12 mb-6">
              <h3 className="text-3xl font-bold">Our Foundation</h3>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Tab Navigation - Improved */}
                <div className="md:w-1/3 bg-gray-900 text-white lg:p-8 p-4 space-y-4">
                  <button 
                    onClick={() => setActiveTab("vision")}
                    className={`w-full text-left py-5 px-6 rounded-xl transition-all flex items-center justify-between ${activeTab === "vision" ? "bg-red-500 text-gray-900 shadow-lg" : "hover:bg-gray-800"}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${activeTab === "vision" ? "bg-gray-900" : "bg-white/20"} flex items-center justify-center mr-4`}>
                        <Building size={18} className='text-white' />
                      </div>
                      <span className="font-medium">Our Vision</span>
                    </div>
                    {activeTab === "vision" && <ChevronRight size={20} />}
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab("mission")}
                    className={`w-full text-left py-5 px-6 rounded-xl transition-all flex items-center justify-between ${activeTab === "mission" ? "bg-red-500 text-gray-900 shadow-lg" : "hover:bg-gray-800"}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${activeTab === "mission" ? "bg-gray-900" : "bg-white/20"} flex items-center justify-center mr-4`}>
                        <Briefcase size={18} className='text-white' />
                      </div>
                      <span className="font-medium">Our Mission</span>
                    </div>
                    {activeTab === "mission" && <ChevronRight size={20} />}
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab("values")}
                    className={`w-full text-left py-5 px-6 rounded-xl transition-all flex items-center justify-between ${activeTab === "values" ? "bg-red-500 text-gray-900 shadow-lg" : "hover:bg-gray-800 "}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${activeTab === "values" ? "bg-gray-900" : "bg-white/20"} flex items-center justify-center mr-4`}>
                        <Award size={18} className='text-white' />
                      </div>
                      <span className="font-medium">Our Values</span>
                    </div>
                    {activeTab === "values" && <ChevronRight size={20} />}
                  </button>
                </div>
                
                {/* Tab Content - Fixed positioning issues */}
                <div className="md:w-2/3 p-6 relative min-h-[410px]">
                  <div className={`absolute inset-0 p-10 lg:p-12 transition-all duration-500 ${activeTab === "vision" ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      To redefine architectural boundaries through innovative design that harmonizes aesthetics, functionality, and sustainability,
                      creating spaces that inspire human connection and elevate experiences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-center p-5 bg-red-50 rounded-xl border border-red-100">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 shrink-0">
                          <Building size={20} className="text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Design Excellence</h4>
                          <p className="text-sm text-gray-600">Creating spaces that merge beauty with purpose</p>
                        </div>
                      </div>
                      <div className="flex items-center p-5 bg-red-50 rounded-xl border border-red-100">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 shrink-0">
                          <Users size={20} className="text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Human-Centered</h4>
                          <p className="text-sm text-gray-600">Designing for people and their experiences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeTab === "mission" ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      To deliver architectural solutions that exceed client expectations through collaborative processes, technical excellence, and unwavering 
                      attention to detail, while championing environmental responsibility and community engagement.
                    </p>
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="mr-4 mt-1 text-red-500 shrink-0">
                          <Plus size={18} className="bg-red-200 rounded-full p-1" />
                        </div>
                        <p>Creating sustainable designs that minimize environmental impact while maximizing functionality and beauty</p>
                      </div>
                      <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="mr-4 mt-1 text-red-500 shrink-0">
                          <Plus size={18} className="bg-red-200 rounded-full p-1" />
                        </div>
                        <p>Fostering innovation through research and technology integration in all our architectural solutions</p>
                      </div>
                      <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-100">
                        <div className="mr-4 mt-1 text-red-500 shrink-0">
                          <Plus size={18} className="bg-red-200 rounded-full p-1" />
                        </div>
                        <p>Cultivating meaningful relationships with clients and communities to create spaces that truly serve their needs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeTab === "values" ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <h3 className="text-3xl font-bold mb-6">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-lg mb-2">Integrity</h4>
                        <p className="text-gray-600">Maintaining the highest ethical standards in all our professional relationships and practices.</p>
                      </div>
                      <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-lg mb-2">Excellence</h4>
                        <p className="text-gray-600">Striving for exceptional quality in every aspect of our design and execution process.</p>
                      </div>
                      <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-lg mb-2">Innovation</h4>
                        <p className="text-gray-600">Embracing creativity and technological advancements to pioneer new architectural solutions.</p>
                      </div>
                      <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-bold text-lg mb-2">Sustainability</h4>
                        <p className="text-gray-600">Prioritizing environmentally responsible design principles and practices.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder's Message - Improved Design */}
          <div className={`mb-12 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center lg:mb-12 mb-6">
              <h3 className="text-3xl font-bold">Director's Message</h3>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Founder's Photo - Enhanced */}
              <div className="lg:w-2/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10"></div>
                <div className="absolute inset-0  z-0 transition-opacity group-hover:opacity-30"></div>
                <img 
                  src={coreTeam[0].image} 
                  alt={coreTeam[0].name}
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 lg:p-8 p-4 z-20">
                  <h3 className="text-white text-2xl font-bold">{coreTeam[0].name}</h3>
                  <p className="text-red-300 font-medium">{coreTeam[0].position}</p>
                  <div className="flex items-center mt-4 text-white/80 text-sm">
                    <GraduationCap size={16} className="mr-2" />
                    <span>{coreTeam[0].education}</span>
                  </div>
                  <div className="flex items-center mt-2 text-white/80 text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>{coreTeam[0].experience}</span>
                  </div>
                </div>
              </div>
              
              {/* Message Content - Enhanced */}
              <div className="lg:w-3/5  p-4 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="relative pl-6 border-l-4 border-red-500 py-2">
                    <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-3 w-8 h-8 text-red-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-600 italic leading-relaxed bg-red-50 p-6 rounded-lg">
                      {coreTeam[0].quote}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-3">
                        <Building size={14} className="text-gray-900" />
                      </div>
                      Our Approach
                    </h4>
                    <p className="text-gray-600">
                      We begin each project by deeply understanding our client's vision, the site's context, and the community's needs. 
                      This holistic approach ensures our designs are not just visually striking but also functional, sustainable, and meaningful.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-4 flex items-center text-gray-800">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-3">
                        <Award size={14} className="text-gray-900" />
                      </div>
                      Our Promise
                    </h4>
                    <p className="text-gray-600">
                      When you work with Agarwal & Associates, you're not just getting a design service; you're gaining a dedicated partner 
                      committed to bringing your architectural vision to life with precision, passion, and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section - Enhanced Design */}
          <div className={`mb-12 bg-white transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold">Our Leadership Team</h3>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Meet the creative minds behind our architectural innovations who combine expertise with vision to deliver exceptional results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className="group border border-gray-200 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    {/* Hover overlay - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/90 via-red-600/70 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500 z-10 flex flex-col justify-end p-6">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center mb-2">
                          <GraduationCap size={16} className="mr-2 text-white" />
                          <p className="text-white font-medium">{member.education}</p>
                        </div>
                        <div className="flex items-center mb-3">
                          <Clock size={16} className="mr-2 text-white" />
                          <p className="text-white">{member.experience}</p>
                        </div>
                        {index <=2 ? (<Link to={`/${member.slug}`}  className=" z-20 inline-flex items-center text-white bg-black/30 hover:bg-black/50 px-4 py-2 rounded-lg transition-colors">
                          View Detail  <ExternalLink size={14} className="ml-2" />
                        </Link>):(<div></div>)}
                        
                      </div>
                    </div>
                    
                    {/* Image */}
                    <img 
                      src={defaultImage} 
                      alt={member.name}
                      className="w-full aspect-[3/4] h-56 p-4 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Info box - Enhanced */}
                  <div className="p-6">
                    <h4 className="font-bold text-xl text-gray-900">{member.name}</h4>
                    <p className="text-red-600 font-medium">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <div className="mt-12 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-500 text-gray-900 font-medium rounded-lg transition-colors shadow-lg">
                Meet Our Complete Team <ChevronRight size={16} className="ml-2" />
              </button>
            </div> */}
          </div>
          
          {/* Company Timeline - Improved Design */}
          {/* <div className={`mb-12 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold">Our Journey</h3>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">A timeline of defining moments that shaped our architectural practice and vision</p>
            </div> */}
            
            {/* <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
              
              <div className="flex flex-col">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex mb-20 md:mb-16 items-center ${index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'}`}
                  >
                    <div className={`md:w-5/12 w-full ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-6 md:mb-0`}>
                      <div className="bg-white lg:p-8 p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow relative group transform hover:-translate-y-1 hover:bg-red-50 duration-300">
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 hidden md:block ${
                          index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                        } bg-white rotate-45 z-0 group-hover:bg-red-50 transition-colors`}></div>
                        <div className="relative z-10">
                          <span className="text-red-500 font-bold text-lg">{milestone.year}</span>
                          <h4 className="text-2xl font-bold mt-2 mb-3">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/12 w-full flex justify-center relative order-first md:order-none mb-6 md:mb-0">
                      <div className="w-14 h-14 rounded-full bg-red-500 border-4 border-white shadow-xl flex items-center justify-center z-10 transition-transform hover:scale-110 hover:rotate-12">
                        <Clock size={24} className="text-gray-900" />
                      </div>
                    </div>
                    
                    <div className="md:w-5/12 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div> */}


          {/* </div> */}

          {/* Stats Counter - Enhanced Design */}
          <div className={`transition-all duration-1000 delay-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl py-16 px-8 shadow-2xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-6 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/30 group-hover:rotate-6 shadow-lg">
                      {stat.icon}
                    </div>
                    <h4 className="text-5xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{stat.value}</h4>
                    <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              {/* <div className="mt-12 text-center">
                <a href="#" className="inline-flex items-center text-red-500 hover:text-red-300 transition-colors text-lg font-medium">
                  Discover our achievements <ChevronRight size={16} className="ml-1" />
                </a>
              </div> */}
            </div>
          </div>
          
          {/* Added CTA Section */}
          {/* <div className={`mt-24 transition-all duration-1000 delay-1400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-red-50 rounded-2xl p-12 relative overflow-hidden shadow-lg">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
                <Building size={300} className="text-red-500 absolute -right-20 -top-20 transform rotate-12" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h3>
                <p className="text-gray-700 text-lg mb-8">
                  Let's collaborate to bring your architectural vision to life. Our team is ready to create spaces that inspire, function beautifully, and stand the test of time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gray-900 hover:bg-black text-white font-medium rounded-lg transition-colors shadow-lg">
                    Schedule a Consultation
                  </button>
                  <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors shadow-lg border border-gray-200"> */}

         </div>    

        </section>        
        </>
  )}