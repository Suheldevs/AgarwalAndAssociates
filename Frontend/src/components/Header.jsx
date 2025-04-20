import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    {
      name: "Services",
      path: "#",
      isDropdown: true,
      dropdownItems: [
        { name: "Architectural Consultant", path: "/services" },
        { name: "Interior Design", path: "/services" },
        { name: "Engineering Services", path: "/services" },
        { name: "Vastu Services", path: "/services" },
        { name: "Project Management", path: "/services" },
        { name: "Urban Planning", path: "/services" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent text-white  py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 size={28} className="" />
              <div className="ml-2">
                <h1 className="text-xl font-bold  leading-none">
                  AGARWAL <span className=" font-light">&</span>
                </h1>
                <p className="text-xs  font-light tracking-widest">
                  ASSOCIATES
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.isDropdown ? (
                    <div>
                      <button
                        className="flex items-center  transition-colors"
                        onClick={toggleServices}
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      <div
                        onMouseLeave={toggleServices}
                        className={`absolute top-full left-0 mt-2 text-black bg-white shadow-lg rounded-md py-2 w-56 transform transition-all origin-top ${
                          servicesOpen
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0"
                        }`}
                      >
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.path}
                            className="block px-4 py-1 hover:bg-slate-100 text-sm  transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={` transition-colors ${
                        item.name === "Contact Us"
                          ? "px-4 py-2 bg-primary text-white hover:bg-gray-900 rounded-md"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center">
            <Phone size={16} className="" />
            <span className="ml-2 ">+91 98765 43210</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden " onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isDropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-gray-900 py-2 hover:text-gray-900"
                      onClick={toggleServices}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-2 mt-2 transition-all ${
                        servicesOpen ? "block" : "hidden"
                      }`}
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.path}
                          className="block py-2 text-gray-600 hover:text-gray-900"
                          onClick={() => {
                            setServicesOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-2 text-gray-900 hover:text-gray-900 ${
                      item.name === "Contact Us"
                        ? "mt-4 px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-md text-center"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info - Mobile */}
          <div className="cursor-pointer flex items-center py-4 border-t border-gray-100">
            <Phone size={16} className="text-gray-900" />
            <span className="ml-2 text-gray-900">+91 98765 43210</span>
          </div>
        </div>
      </div>
    </header>
  );
}
