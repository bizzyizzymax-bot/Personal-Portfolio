import React from "react";
import myself from "./assets/myself.png";

export const Hero = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-30 flex items-center justify-center pl-50 pr-45">
        <img src={myself} alt="Me" className="w-120 mr-10" />
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8">
            Hi! I'm Isaiah Maxwell, a passionate developer specializing in web
            development and design. Explore my projects and skills below!
          </p>
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            View My Projects
          </a>
        </div>
      </section>
    </>
  );
};
