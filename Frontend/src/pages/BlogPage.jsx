import { useState } from "react";
import { Clock, Tag, ArrowRight, Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import blogPosts from '../Data/BlogData'
export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState(null);


  
  return (
    <>
    <Breadcrumb 
  title="Latest Insides" 
  items={[
    { name: "Blogs", path: "/blog" },
  ]}
//   bgImage="/path-to-your-image.jpg"
/>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      {/* Categories */}
      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium hover:bg-indigo-200 transition duration-300">
            All
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              className={`text-white px-4 py-2 rounded-full font-medium transition duration-300 ${getCategoryColor(category)}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}
      
      {/* Blog posts */}
      {/* <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest Articles</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
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
                <span className={`inline-flex items-center bg-yellow-500 px-3 py-1 rounded-full text-xs font-medium text-white `}>
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
                  <button className="flex items-center text-sm hover:text-yellow-500 transition-colors duration-300">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center text-sm hover:text-yellow-500 transition-colors duration-300">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center text-sm hover:text-yellow-500 transition-colors duration-300">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                
                <button className="flex items-center text-sm hover:text-yellow-500 transition-colors duration-300">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mt-4 pt-6 border-t border-gray-100">
                <Link 
                  to={`/blog-detail/${post.slug}`}
                  className="flex items-center justify-between w-full px-6 py-3  bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg group-hover:shadow-md transition-all duration-300"
                >
                  <span className="font-medium">Read Full Article</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform duration-500 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load more button */}
      {/* <div className="mt-12 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
          Load More Articles
        </button>
      </div> */}
    </div>
    </>
  );
}