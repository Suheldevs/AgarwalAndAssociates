import React from "react";

function DirectorSection() {
  return (
    <div className="container mx-auto lg:px-6 px-4">
      <div
        className={` transition-all duration-1000 delay-600 transform opacity-100 translate-y-0`}
      >
        <div className="flex flex-col lg:flex-row items-center  rounded-xl overflow-hidden ">
          {/* Founder's Photo */}
          <div className="lg:w-2/5 h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
            <div className="absolute inset-0 bg-yellow-500 opacity-20 z-0 transition-opacity group-hover:opacity-30"></div>
            <img
              src="https://picsum.photos/id/1005/400/350"
              alt="director"
              className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-white text-2xl font-bold">Amit Agarwal</h3>
              <p className="text-yellow-300">Founder & Principal Architect</p>
              {/* <p className="text-white/70 mt-2 text-sm">{coreTeam[0].education}</p> */}
              <p className="text-white/70 text-sm">25+ years</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:w-3/5 md:p-8 p-4 lg:p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-6">Director's Message</h3>
              <div className="relative pl-6 border-l-2 border-yellow-400">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-4 -translate-y-3 w-8 h-8 text-yellow-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-gray-600 italic leading-relaxed">
                  Architecture is not just about creating buildings; it's about
                  crafting experiences that transform lives and communities. Our
                  mission has always been to blend innovation with
                  functionality, creating spaces that inspire and endure.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h4 className="font-bold text-lg mb-3">Our Approach</h4>
                <p className="text-gray-600">
                  We begin each project by deeply understanding our client's
                  vision, the site's context, and the community's needs. This
                  holistic approach ensures our designs are not just visually
                  striking but also functional, sustainable, and meaningful.
                </p>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-bold text-lg mb-3">Our Promise</h4>
                <p className="text-gray-600">
                  When you work with Agarwal & Associates, you're not just
                  getting a design service; you're gaining a dedicated partner
                  committed to bringing your architectural vision to life with
                  precision, passion, and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorSection;
