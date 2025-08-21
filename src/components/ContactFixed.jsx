import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const emailAddress = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kunalraj72@gmail.com&su=${encodeURIComponent(
        "Message from Website"
      )}&body=${encodeURIComponent(message)}`;
      window.open(emailAddress, "_blank");
      setMessage("");
    }
  };

  const handleRequestPhone = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kunalraj72@gmail.com&su=Requesting%20Mobile%20Number%20-%20Website",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-gray-500 text-lg font-medium mb-2">Contact</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch With Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
            dignissimos. <br />
            rerum commodi corrupti, temporibus non quam.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h6 className="text-gray-500 text-sm font-medium mb-2">
                Available 24/7
              </h6>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <form onSubmit={handleSendMessage}>
                <div className="mb-6">
                  <label className="block text-gray-500 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:ring-0 resize-none bg-transparent"
                    rows="4"
                    placeholder=""
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-1">
                    Location
                  </h5>
                  <p className="text-gray-500">Chennai,India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-1">
                    Phone Number
                  </h5>
                  <button
                    onClick={handleRequestPhone}
                    className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                  >
                    Request
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-1">
                    Email Address
                  </h5>
                  <p className="text-gray-500">kunalraj72@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
