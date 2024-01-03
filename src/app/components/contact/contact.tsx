import React from 'react';

interface ContactProps {
  onCloseContactForm: () => void;
}

const Contact: React.FC<ContactProps> = ({ onCloseContactForm }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your logic for handling form submission
  };

  return (
    <div>
      <section className="text-white relative font-mono">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white font-medium">
              I'm eager to learn more about internships autumn 2024, alternatively employment possibilites.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* Email Input */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* Message Textarea */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
       
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <button className="text-gray-500" onClick={onCloseContactForm}>
                Close Contact Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
