import React from "react";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-white text-black p-9">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-4xl font-light">Isaiah Maxwell</div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-gray-400 text-2xl">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400 text-2xl">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400 text-2xl">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400 text-2xl">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
