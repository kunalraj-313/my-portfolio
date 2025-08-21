import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with focus on user experience",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building responsive and performant web applications using modern technologies",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Ensuring your website looks perfect on all devices and screen sizes",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description:
        "Optimizing websites for speed, SEO, and better search engine rankings",
    },
  ];

  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-primary text-lg font-semibold mb-2">Services</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What I Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive web development services to help bring your
            ideas to life with modern, efficient, and user-friendly solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h5 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h5>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
