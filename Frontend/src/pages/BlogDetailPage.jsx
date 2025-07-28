import React, { useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import Breadcrumb from "../components/Breadcrumb";

const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const BlogDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { blogData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [dispatch, blogData.length]);

  const blog = blogData.find((item) => item.slug === slug);
  const relatedBlogs = blogData.filter((item) => item.slug !== blog?.slug);

  if (status === "loading")
    return <div className="text-neutral-800 text-xl my-24  font-semibold text-center">Loading...</div>;

  if (error)
    return <div className="text-red-600 text-xl  my-24 font-semibold text-center">{error}</div>;

  if (!blog)
    return <div className="text-red-600 text-xl my-24  font-semibold text-center">Blog Not Found!</div>;

  return (
    <div className="bg-white/90">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Blog Detail"
        items={[
          { name: "Blogs", path: "/blog" },
          { name: blog?.title, path: `/blog-details/${blog?.slug}` },
        ]}
      />

      {/* Blog Content */}
      <div className="container  mx-auto px-4 pb-4 pt-10 lg:pt-14 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Blog Details */}
        <div className="lg:col-span-3">
          <div className="border rounded-2xl border-gray-300 p-4 bg-gray-50">

          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-[380px]  rounded-2xl shadow-md"
            />
            </div>
          <div className="flex justify-between">
          <p className="text-neutral-700 text-sm mt-4">{formattedDate(blog.updatedAt)}</p>
          <p className="text-neutral-700 text-sm mt-4">{blog.category}</p>

          </div>
          <h1 className="lg:text-2xl text-xl font-semibold mt-2">{blog.title}</h1>
          <div
            className="mt-4 text-justify lg:text-lg text-neutral-950 blog"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />

          {/* Back to Blogs Button */}
          <Link
            to="/blogs"
            className="mt-6 inline-block bg-primary-btn text-white px-6 py-3 hover:bg-[#7A5F4D] transition-all duration-300"
          >
            Back to Blogs
          </Link>
        </div>

        {/* Related Blogs */}
        <div className="lg:col-span-1 border p-2 border-neutral-100">
          <h2 className="text-2xl font-semibold mb-4 messiri">Other Blogs</h2>
          <div className="space-y-4 overflow-y-auto">
            {relatedBlogs.length === 0 ? (
              <p>No other blogs available.</p>
            ) : (
              relatedBlogs?.map((relatedBlog) => (
                <Link
                  to={`/blog/${relatedBlog.slug}`}
                  key={relatedBlog.slug}
                  className="block p-4  border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={relatedBlog.imageUrl}
                    alt={relatedBlog.title}
                    className="w-full h-28 object-contain bg-white border border-gray-100"
                  />
                  <p className="text-neutral-500 text-sm mt-2">{formattedDate(relatedBlog.updatedAt)}</p>
                  <h3 className="text-lg font-semibold mt-1 line-clamp-1">{relatedBlog.title}</h3>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;