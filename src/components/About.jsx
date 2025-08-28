import React from "react";
import avatarImage from "../assets/avatar.jpeg";

const About = () => {
  const handleDownloadCV = () => {
    // Add CV download logic here
    console.log("Download CV clicked");
  };

  return (
    <section id="about" className="pt-40 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Image */}
          <div className="lg:w-1/3">
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary to-orange-400 rounded-lg overflow-hidden shadow-lg">
              <img
                src={avatarImage}
                alt="Kunal Raj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Kunal Raj
            </h1>
            <p className="text-xl text-primary mb-6">Front End Developer</p>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Passionate front-end developer with 2+ years of experience
                creating beautiful, responsive web applications. I specialize in
                React, JavaScript, and modern CSS frameworks to bring designs to
                life with pixel-perfect precision and smooth user experiences.
              </p>
              <p>
                I enjoy solving complex problems and transforming creative ideas
                into functional, user-friendly interfaces. My goal is to write
                clean, maintainable code while staying up-to-date with the
                latest web technologies and best practices.
              </p>
            </div>

            <button
              onClick={handleDownloadCV}
              className="mt-8 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
