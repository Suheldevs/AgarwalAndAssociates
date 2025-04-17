import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";


export default function ContactUsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      details: "Monday to Friday, 9am to 6pm",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@yourcompany.com",
      details: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "100 Main Street, City",
      details: "Find us on Google Maps",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        items={breadcrumbItems}
        bgImage="/api/placeholder/1920/600"
      />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or need assistance? We're here to help.
            Reach out to us using any of the methods below.
          </p>
        </div>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border-b-4 border-transparent hover:border-indigo-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg text-indigo-600 font-medium mb-1">{method.content}</p>
              <p className="text-sm text-gray-500">{method.details}</p>
            </div>
          ))}
        </div>
        
        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="col-span-3 bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {formStatus.submitted ? (
              <div className="flex flex-col items-center justify-center h-80 text-center">
                <div className="bg-green-100 rounded-full p-4 mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank you for reaching out!</h4>
                <p className="text-gray-600 mb-6">
                  We've received your message and will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, loading: false })}
                  className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Another Message
                  <ArrowRight className="ml-2 h-4 w-4" />  
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Tell us more about your query..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center w-full md:w-auto"
                  >
                    {formStatus.loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Business Info */}
          <div className="col-span-2 space-y-8">
            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500">
              <div className="flex items-start mb-5">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-500 text-sm">When you can reach us</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-indigo-600">Closed</span>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-5">Frequently Asked Questions</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">How quickly will I get a response?</h5>
                  <p className="text-sm text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-1">Do you offer support on weekends?</h5>
                  <p className="text-sm text-gray-600">Limited support is available on Saturdays. For urgent matters, please use our priority email.</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <h5 className="font-medium text-gray-900 mb-1">Can I schedule a call with your team?</h5>
                  <p className="text-sm text-gray-600">Yes! Use our form to request a call and we'll arrange a time that works for both parties.</p>
                </div>
              </div>
              
              <button className="mt-6 text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors duration-300">
                View all FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden h-96">
            <img 
              src="/api/placeholder/1200/600" 
              alt="Map location" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}