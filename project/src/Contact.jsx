import React from "react";

/* Contact page with a form */

export const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-gray-100 text-black pt-20 pb-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
          <h2 className="text-2xl font-medium mb-10 text-center">
            Questions, Comments, Concerns? Reach out!
          </h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                name="message"
                rows="8"
                required
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
