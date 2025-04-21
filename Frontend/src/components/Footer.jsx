import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogData from "../Data/BlogData";
import cclogo from "../assets/ccogo-suhel.webp";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-200 lg:pt-14 md:pt-12 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <Link
                to="/about"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                About Us
              </Link>
              <Link
                to="/services"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Services
              </Link>
              <Link
                to="/projects"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Projects
              </Link>
              <Link
                to="/blog"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Our Blogs
              </Link>
              <Link
                to="/contact"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className=" block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Privacy Policy
              </Link>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2">
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Architectural Consultant
              </Link>
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Interior Design
              </Link>
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Engineering Services
              </Link>
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Vastu Services
              </Link>
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Project Management
              </Link>
              <Link
                to="/services"
                className="block hover:underline cursor-pointer underline-offset-2 hover:tracking-wide"
              >
                <ChevronRight className="inline-block " />
                Urban Planning
              </Link>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-1 inline-block">
              Latest Blogs
            </h3>
            <div className="space-y-4">
              {Array.isArray(BlogData) &&
                BlogData.length > 0 &&
                BlogData?.slice(1, 3)?.map((blog, i) => (
                  <Link
                    key={i}
                    to={`/blog-detail/${blog.slug}`}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <img
                      src={blog.image}
                      alt="news"
                      className="w-16 h-16 rounded group-hover:rounded-tl-2xl group-hover:rounded-br-2xl group-hove:scale-105 transition-all ease-in-out duration-500"
                    />
                    <div>
                      {/* <p className="text-sm text-gray-400"></p> */}
                      <p className="font-semibold text-white line-clamp-2 group-hover:text-white/70">
                        {blog.title}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-b pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <a
                href="tel:7499666661"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <Phone size={18} /> <span>+91-7499666661</span>
              </a>
              <a
                href="mailto:sgssandassociates@gmail.com"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <Mail size={18} /> <span>sgssandassociates@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/VXkYGdK97YTe3Xvq5"
                target="_blank"
                className="flex items-center space-x-3"
              >
                <MapPin size={18} />{" "}
                <span>
                  F-141, Indralok colony, Krishna Nagar, Lucknow, Uttar Pradesh
                </span>
              </a>
              <li>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61552954928198"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaXTwitter size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sgss-and-associates/"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="p-2 bg-white hover:bg-white/70 hover:scale-105 hover:rotate-12 transition-all duration-300 rounded-full text-black"
                  >
                    <FaPhone size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer Bottom */}
      <div className=" bg-black text-white  border-t border-gray-400 py-2 text-center flex lg:flex-row flex-col justify-center items-center">
        <p className=" lg:text-sm text-xs px-2">
          Copyright 2025 SGSS Architects || All Rights Reserved || Designed By
        </p>
        <Link to="https://www.codecrafter.co.in/" target="_blank">
          <img
            src={cclogo}
            className="lg:w-28 w-20 transition transform hover:scale-105"
            alt="CodeCrafter Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;
