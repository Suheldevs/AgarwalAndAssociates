import { useState } from "react";
import Slider from "react-slick";
import { Clock, Tag, ArrowRight, Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import blogPosts from '../Data/BlogData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-50">
      
      <div className="container mx-auto  sm:px-6 lg:px-6 lg:py-12 py-8 md:py-10 lg:pb-16">
      <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Recent Articals</h2>
          {/* <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover expert thoughts and project highlights on our blog
          </p>
        </div>

        <Slider {...settings}>
          {blogPosts.map(post => (
            <div key={post.id} className="px-3">
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-${hoveredId === post.id ? '90' : '60'} transition-opacity duration-500`}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center bg-red-500 px-3 py-1 rounded-full text-xs font-medium text-white">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-xl text-white mb-2 transition-all duration-300 group-hover:text-2xl group-hover:mb-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-gray-200 text-xs space-x-3">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-gray-500">
                      <button aria-label="Button"  className="flex items-center text-sm hover:text-red-500 transition-colors duration-300">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{post.likes}</span>
                      </button>
                      <button aria-label="Button" className="flex items-center text-sm hover:text-red-500 transition-colors duration-300">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{post.comments}</span>
                      </button>
                      <button aria-label="Button" className="flex items-center text-sm hover:text-red-500 transition-colors duration-300">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <button aria-label="Button" className="flex items-center text-sm hover:text-red-500 transition-colors duration-300">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 pt-6 border-t border-gray-100">
                    <Link 
                    aria-label="Blog detail"
                      to={`/blog-detail/${post.slug}`}
                      className="flex items-center justify-between w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg group-hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-medium">Read Full Article</span>
                      <ArrowRight className="h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
