import React from "react";
import reactIcon from "../assets/react-icon.png";
import vueIcon from "../assets/vue-icon.png";
import jsIcon from "../assets/js-icon.png";
import pythonIcon from "../assets/python icon.png";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";

const Skills = () => {
  const techStack = [
    { name: "React", icon: reactIcon },
    { name: "Vue.js", icon: vueIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Python", icon: pythonIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-gray-500 text-lg font-medium mb-2">Skills</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
            dignissimos. <br />
            rerum commodi corrupti, temporibus non quam.
          </p>
        </div>

        {/* Tech Stack Icons Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
