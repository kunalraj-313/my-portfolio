import React from "react";
import avatarImage from "../assets/avatar.jpeg";
import kunalCV from "../assets/Kunal CV.pdf";

const About = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = kunalCV;
    link.download = 'Kunal_Raj_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                Passionate front-end developer with 4+ years of experience
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
                className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg text-sm sm:text-base mt-[20px]"
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
