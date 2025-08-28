import React from "react";
import manImage from "../assets/man.png";

const Hero = () => {
  const handleHireMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kunalraj72@gmail.com&su=Your%20Subject%20Here",
      "_blank"
    );
  };

  const handleDownloadCV = () => {
    // Add CV download logic here
    console.log("Download CV clicked");
  };

  return (
    <section id="home" className="bg-gray-50 pt-16 sm:pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 sm:pt-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h6 className="text-gray-500 text-base sm:text-lg mb-2">
              hello, I'm
            </h6>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Kunal Raj
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Front End Developer
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button
                onClick={handleHireMe}
                className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg text-sm sm:text-base"
              >
                HIRE ME
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                DOWNLOAD CV
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* 3D Character Image */}
          <div className="lg:w-1/2 flex justify-center mb-12 sm:mb-16 lg:mb-0">
            <div className="relative">
              <img
                src={manImage}
                alt="Kunal Raj - 3D Character"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Stats Widget - Responsive positioning */}
        <div className="relative lg:absolute lg:-bottom-16 lg:left-1/2 lg:transform lg:-translate-x-1/2 max-w-4xl w-full px-4 -mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="py-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  4+
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  Years of Experience
                </p>
              </div>
              <div className="py-2 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  14
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                  Projects Completed
                </p>
              </div>
              <div className="py-2 border-t sm:border-t-0 border-gray-200">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                  789
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
