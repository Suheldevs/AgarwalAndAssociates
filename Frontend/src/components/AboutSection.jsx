import { useState } from "react";
import { Users, Building2, Award, Globe, ArrowRight } from "lucide-react";
import image from "../assets/about.webp";
import { Link } from "react-router-dom";
export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      icon: <Building2 size={24} />,
      count: "150+",
      title: "Projects Completed",
      description: "Across residential, commercial, and institutional spaces",
    },
    {
      icon: <Users size={24} />,
      count: "25+",
      title: "Team Members",
      description: "Architects, interior designers, and project managers",
    },
    {
      icon: <Award size={24} />,
      count: "18",
      title: "Design Awards",
      description: "Recognition for innovation and sustainable design",
    },
    {
      icon: <Globe size={24} />,
      count: "100%",
      title: "Client satisfaction",
      description: "Client satisfaction is our priority",
    },
  ];

  return (
    <section className="lg:pt-12 md:pt-10 py-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About Agarwal & Associates
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center mb-10">
          {/* Left Column - Text */}
          <div className="space-y-2">
            <h3 className="lg:text-2xl text-xl font-semibold text-gray-800">
              Creating Spaces That Inspire
            </h3>
            <p className="text-gray-700 text-justify">
              Founded in 2005, Agarwal & Associates is an award-winning
              architectural firm dedicated to creating thoughtful, innovative
              spaces that elevate human experience. We blend aesthetic
              excellence with functional precision, ensuring each project meets
              the unique needs of our clients while pushing the boundaries of
              design.
            </p>
            <p className="text-gray-700 text-justify">
              Our multidisciplinary team brings together expertise in
              architecture, interior design, urban planning, and sustainable
              development to deliver comprehensive solutions for projects of all
              scales. With a collaborative approach, we transform visions into
              meticulously crafted realities, ensuring exceptional quality,
              attention to detail, innovative design concepts, and
              client-focused outcomes that exceed expectations at every stage.
            </p>
            <div className="pt-2">
              <Link
              aria-label="Services"
                to="/services"
                className="px-6 inline-flex py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded items-center justify-center transition-all group"
              >
                Explore Our Services
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            <img
              src={image}
              alt="Agarwal & Associates Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-yellow-900/20 hover:bg-opacity-10 transition duration-300"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`text-yellow-500 border-2 border-yellow-500 inline-block p-2 rounded-full mb-4 transition-transform duration-300 ${
                  hoveredCard === index ? "scale-110" : ""
                }`}
              >
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.count}
              </h4>
              <h5 className="text-lg font-medium text-gray-800 mb-2">
                {stat.title}
              </h5>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-t-4 border-yellow-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">
                Design Excellence
              </h4>
              <p className="text-gray-600">
                We pursue innovative design solutions that challenge conventions
                while maintaining functionality and aesthetic harmony.
              </p>
            </div>
            <div className="p-6 border-t-4 border-yellow-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">
                Sustainability
              </h4>
              <p className="text-gray-600">
                Environmental responsibility guides our approach, integrating
                sustainable practices across all aspects of our design process.
              </p>
            </div>
            <div className="p-6 border-t-4 border-yellow-500 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-4">
                Client Partnership
              </h4>
              <p className="text-gray-600">
                We build lasting relationships with our clients, treating each
                project as a collaborative journey toward realizing shared
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
