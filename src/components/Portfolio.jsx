import React from "react";
import folio1 from "../assets/folio-1.jpg";
import folio2 from "../assets/folio-2.jpg";
import folio3 from "../assets/folio-3.jpg";
import folio4 from "../assets/folio-4.jpg";
import folio5 from "../assets/folio-5.jpg";
import folio6 from "../assets/folio-6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Image Editor",
      description:
        "A web-based image editing tool built with React and Canvas API",
      image: folio1,
      github: "https://github.com/kunalraj-313/image-editor",
      live: "https://image-editor-313.vercel.app/",
      technologies: ["React", "Canvas API", "JavaScript"],
    },
    {
      id: 2,
      title: "Tetris",
      description: "Fully functional Tetris game with score tracking",
      image: folio2,
      github: "https://github.com/kunalraj-313/tetris",
      live: "https://tetris-blond-two.vercel.app/",
      technologies: ["React", "Supabase", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Space Shooter",
      description: "A 3D space shooter game ",
      image: folio3,
      github: "https://github.com/kunalraj-313/threejs-test",
      live: "https://threejs-test-pearl-nu.vercel.app/",
      technologies: ["React","Three JS","React Three Fiber"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: folio4,
      github: "#",
      live: "#",
      technologies: ["React", "API Integration", "CSS3"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design",
      image: folio5,
      github: "#",
      live: "#",
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging app with multiple room support",
      image: folio6,
      github: "#",
      live: "#",
      technologies: ["React", "Socket.io", "Express"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary text-lg font-semibold mb-2">Portfolio</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Check My Wonderful Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h5>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-700 transition-colors duration-300 text-sm"
                  >
                    <span className="mr-1">📁</span>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 bg-primary text-white text-center py-2 rounded hover:bg-opacity-90 transition-colors duration-300 text-sm"
                  >
                    <span className="mr-1">🔗</span>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
