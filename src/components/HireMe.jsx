import React from "react";

const HireMe = () => {
  const handleHireMe = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kunalraj72@gmail.com&su=Project%20Inquiry%20-%20Let's%20Work%20Together",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-orange-500 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 md:px-12 md:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between text-white">
              <div className="text-left mb-6 md:mb-0 flex-1">
                <h5 className="text-2xl md:text-2xl font-bold mb-2">
                  Hire Me For Your Project
                </h5>
                <p className="text-lg opacity-90">
                  Anything from complex logic requirements to complex designs
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={handleHireMe}
                  className="bg-white text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Hire Me!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
