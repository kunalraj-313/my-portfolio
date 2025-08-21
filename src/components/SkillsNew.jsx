import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Vue.js", level: 75, color: "bg-green-500" },
    { name: "Python", level: 70, color: "bg-purple-500" },
    { name: "Tailwind CSS", level: 88, color: "bg-teal-500" },
  ];

  const techStack = [
    { name: "React", icon: "/src/assets/react-icon.png" },
    { name: "Vue.js", icon: "/src/assets/vue-icon.png" },
    { name: "JavaScript", icon: "/src/assets/js-icon.png" },
    { name: "Python", icon: "/src/assets/python icon.png" },
    { name: "HTML5", icon: "/src/assets/html-icon.png" },
    { name: "CSS3", icon: "/src/assets/css-icon.png" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary text-lg font-semibold mb-2">Skills</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I have expertise in various modern technologies and frameworks,
            enabling me to create robust and scalable web applications.
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 p-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
