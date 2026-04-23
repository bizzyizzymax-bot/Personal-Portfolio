import React from "react";

/* carasoul of images with links to github repository */

export const Projects = () => {
  return (
    <>
      <section id="projects" className="bg-gray-100 text-black pb-120 pt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p className="text-lg leading-relaxed mb-4">
                A web application that allows users to track their tasks and
                manage their time effectively.
              </p>
              <a href="" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p className="text-lg leading-relaxed mb-4">
                A mobile app that helps users find nearby restaurants and read
                reviews.
              </p>
              <a href="" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
              <p className="text-lg leading-relaxed mb-4">
                An open-source library for data visualization in JavaScript.
              </p>
              <a href="" className="text-blue-500 hover:underline">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
