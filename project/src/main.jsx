import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Contact />
  </StrictMode>
);
