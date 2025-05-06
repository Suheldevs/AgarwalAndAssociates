import React, { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, Building, MapPin, ChevronRight, ExternalLink, Plus, Briefcase, GraduationCap, WholeWord, LaptopMinimalCheck } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import defaultImage from '../assets/about/default.webp'

import coreTeam from '../Data/TeamData'
export default function OurTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("vision");
  const sectionRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <>
      <Breadcrumb 
        title="Our Team" 
        items={[
          { name: "Our Team", path: "/about/our-team" },
        ]}
      />
    
      <section ref={sectionRef} id="about" className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section with Architectural Background */}
       

          
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
            
          </div>
          
         </div>    

        </section>        
        </>
  )}