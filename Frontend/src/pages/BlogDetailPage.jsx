import { useState, useEffect } from 'react';
import { Clock, Heart, MessageCircle, ChevronLeft, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import blogData from '../Data/BlogData'
import Breadcrumb from '../components/Breadcrumb';
// Mock blog data - in a real app, this would come from a data source
// const blogData = [
//   {
//     id: 1,
//     title: "The Future of Sustainable Architecture",
//     slug: "future-sustainable-architecture",
//     category: "Architecture",
//     description: "Exploring the latest trends in green building design and how sustainability is shaping modern architecture.",
//     image: "https://picsum.photos/600/400?random=1",
//     date: "April 15, 2025",
//     readTime: "8 min read",
//     likes: 243,
//     comments: 42,
//     content: `
//       <p class="mb-4">Sustainable architecture has evolved significantly over the past decade. Today's green buildings are not just about energy efficiency but are becoming holistic ecosystems that contribute positively to their environments.</p>
      
//       <h2 class="text-2xl font-bold my-6">The Rise of Biophilic Design</h2>
//       <p class="mb-4">Biophilic design integrates natural elements into built environments, creating spaces that connect occupants with nature. This approach has proven to reduce stress, enhance creativity, and improve overall well-being.</p>
      
//       <h2 class="text-2xl font-bold my-6">Net-Zero Energy Buildings</h2>
//       <p class="mb-4">The push toward net-zero energy buildings continues to gain momentum as technology advances and costs decrease. These structures produce as much energy as they consume through a combination of energy-efficient design and renewable energy generation.</p>
      
//       <h2 class="text-2xl font-bold my-6">Innovative Materials</h2>
//       <p class="mb-4">From self-healing concrete to transparent wood, innovative materials are revolutionizing the construction industry. These materials offer enhanced durability, better insulation, and reduced environmental impact.</p>
      
//       <h2 class="text-2xl font-bold my-6">Smart Buildings</h2>
//       <p class="mb-4">IoT technology is enabling buildings to become smarter and more responsive to occupants' needs. Automated systems can optimize energy use, improve comfort, and enhance security while providing valuable data for future design improvements.</p>
//     `
//   },
//   {
//     id: 2,
//     title: "Urban Gardens: Bringing Nature to City Spaces",
//     slug: "urban-gardens-city-spaces",
//     category: "Urban Planning",
//     description: "How urban gardening initiatives are transforming concrete jungles into green oases across major cities.",
//     image: "https://picsum.photos/600/400?random=2",
//     date: "April 10, 2025",
//     readTime: "6 min read",
//     likes: 189,
//     comments: 35
//   },
//   {
//     id: 3,
//     title: "Minimalist Home Design for Modern Living",
//     slug: "minimalist-home-design",
//     category: "Interior Design",
//     description: "Embracing simplicity and functionality in contemporary home spaces.",
//     image: "https://picsum.photos/600/400?random=3",
//     date: "April 5, 2025",
//     readTime: "5 min read",
//     likes: 210,
//     comments: 28
//   },
//   {
//     id: 4,
//     title: "Revitalizing Historic Buildings for Contemporary Use",
//     slug: "revitalizing-historic-buildings",
//     category: "Preservation",
//     description: "The delicate balance of preserving architectural heritage while adapting spaces for modern needs.",
//     image: "https://picsum.photos/600/400?random=4",
//     date: "March 30, 2025",
//     readTime: "7 min read",
//     likes: 176,
//     comments: 31
//   }
// ];

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  
  useEffect(() => {
    // Find the current blog post by slug
    const currentBlog = blogData.find(blog => blog.slug === slug);
    setBlog(currentBlog);
    
    // Get other blog posts for the "More Articles" section
    if (currentBlog) {
      const otherBlogs = blogData.filter(item => item.id !== currentBlog.id).slice(0, 3);
      setRelatedBlogs(otherBlogs);
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <>
     <Breadcrumb 
      title="Blog Detail" 
      items={[
        { name: "Blogs", path: "/blog" },
        { name: "Blog Detail", path: `/blog-detail/${slug}` },
      ]}
    //   bgImage="/path-to-your-image.jpg"
    />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link to="/blog" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium mb-6 group transition-all">
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to all articles
      </Link>
      
      {/* Blog Header */}
      <div className="mb-10">
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">{blog.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{blog.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <span className="font-medium">Editorial Team</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-96 object-cover"
        />
      </div>
      
      {/* Social Share Sidebar */}
      <div className="lg:flex gap-12">
        <div className="hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <BookmarkPlus className="w-5 h-5" />
          </button>
        </div>
        
        {/* Blog Content */}
        <div className="lg:flex-1">
          <div className="prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          
          {/* Mobile Social Bar */}
          <div className="flex justify-between items-center mt-12 lg:hidden p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <span className="font-medium">{blog.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <span className="font-medium">{blog.comments}</span>
            </div>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <BookmarkPlus className="w-5 h-5" />
            </button>
          </div>
          
          {/* Author Section */}
          <div className="mt-16 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <h3 className="font-bold text-lg">Editorial Team</h3>
                <p className="text-gray-600">Experts in architecture and sustainable design with over 10 years of experience in the field.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* More Articles Section */}
      <div className="mt-24">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold">More Articles</h2>
          <Link to="/blog" className="flex items-center text-yellow-600 hover:text-yellow-800 font-medium group">
            View all 
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((article) => (
            <div key={article.id} className="group">
              <Link to={`/blog-detail/${article.slug}`} className="block">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-yellow-600">{article.category}</span>
                <h3 className="font-bold text-xl mt-2 group-hover:text-yellow-600 transition-colors">{article.title}</h3>
              </Link>
              <div className="flex items-center mt-4 text-gray-600 text-sm">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}