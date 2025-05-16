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
                    <div key={post.id} className="px-3">
                      <div className="bg-white aspect-square flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                        {/* Image section */}
                        <div className="h-1/2 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content section */}
                        <div className="p-4 flex flex-col flex-grow">
                          {/* Date and Category row */}
                          <div className="flex justify-between items-center mb-3 text-xs">
                            <div className="flex items-center text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                            <div className="inline-flex items-center bg-black px-2 py-1 rounded-sm text-xs font-medium text-white">
                              <Tag className="h-3 w-3 mr-1" />
                              {post.category}
                            </div>
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-bold text-lg text-black mb-2 line-clamp-1">
                            {post.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                            {post.description}
                          </p>
                          
                          {/* Read More button */}
                          <div className="mt-auto">
                            <Link 
                              to={`/blog-detail/${post.slug}`}
                              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors duration-300"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </div>
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