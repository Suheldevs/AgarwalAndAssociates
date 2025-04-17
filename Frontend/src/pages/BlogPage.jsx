import { useState } from "react";
import { Clock, Tag, ArrowRight, Heart, MessageSquare, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Architecture",
      slug: "future-sustainable-architecture",
      category: "Architecture",
      description: "Exploring the latest trends in green building design and how sustainability is shaping modern architecture.",
      image: "https://picsum.photos/600/400?random=1",
      date: "April 15, 2025",
      readTime: "8 min read",
      likes: 243,
      comments: 42
    },
    {
      id: 2,
      title: "Mastering Space Optimization in Modern Homes",
      slug: "space-optimization-modern-homes",
      category: "Interior Design",
      description: "A deep dive into designing functional and aesthetic spaces, especially in urban homes where every square foot matters.",
      image: "https://picsum.photos/600/400?random=3",
      date: "April 10, 2025",
      readTime: "12 min read",
      likes: 189,
      comments: 35
    },
    {
      id: 3,
      title: "Design Principles for Landmark Buildings",
      slug: "design-principles-landmarks",
      category: "Design Strategy",
      description: "A guide to crafting architectural designs that not only stand out but also define a city’s identity for generations.",
      image: "https://picsum.photos/600/400?random=4",
      date: "April 5, 2025",
      readTime: "6 min read",
      likes: 156,
      comments: 28
    },
    {
      id: 4,
      title: "The Art of Creating Timeless Facades",
      slug: "art-creating-facades",
      category: "Architectural Aesthetics",
      description: "How thoughtful material selection and proportion can lead to enduring, iconic building facades.",
      image: "https://picsum.photos/600/400?random=5",
      date: "March 29, 2025",
      readTime: "9 min read",
      likes: 123,
      comments: 31
    },
    {
      id: 5,
      title: "Optimizing Your Construction Workflow",
      slug: "optimizing-construction-workflow",
      category: "Project Management",
      description: "Techniques to streamline collaboration between architects, engineers, and contractors to deliver projects on time and budget.",
      image: "https://picsum.photos/600/400?random=9",
      date: "March 25, 2025",
      readTime: "7 min read",
      likes: 178,
      comments: 23
    },
    {
      id: 6,
      title: "Integrating Smart Technology into Home Design",
      slug: "smart-technology-home-design",
      category: "Smart Homes",
      description: "Exploring how IoT and automation are transforming modern homes into efficient, intuitive living spaces.",
      image: "https://picsum.photos/600/400?random=10",
      date: "March 20, 2025",
      readTime: "10 min read",
      likes: 211,
      comments: 47
    }
  ];
  
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const getCategoryColor = (category) => {
    const colorMap = {
      "Technology": "bg-blue-500 hover:bg-blue-600",
      "React": "bg-cyan-500 hover:bg-cyan-600",
      "Design": "bg-purple-500 hover:bg-purple-600",
      "Writing": "bg-green-500 hover:bg-green-600",
      "Productivity": "bg-orange-500 hover:bg-orange-600",
      "AI": "bg-red-500 hover:bg-red-600"
    };
    
    return colorMap[category] || "bg-gray-500 hover:bg-gray-600";
  };
  
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
              <div className="h-48 overflow-hidden">
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
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`}>
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
              <p className="text-gray-600 mb-6 line-clamp-3">{post.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-gray-500">
                  <button className="flex items-center text-sm hover:text-red-500 transition-colors duration-300">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center text-sm hover:text-blue-500 transition-colors duration-300">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center text-sm hover:text-green-500 transition-colors duration-300">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                
                <button className="flex items-center text-sm hover:text-purple-500 transition-colors duration-300">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to={`/blog-detail/${post.slug}`}
                  className="flex items-center justify-between w-full px-6 py-3  bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg group-hover:shadow-md transition-all duration-300"
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