import React from "react";

export const Experience = () => {
  return (
    <>
      <section id="experience" className="bg-gray-100 text-black  pt-10 pb-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Software Engineer at Tech Company
              </h3>
              <p className="text-lg leading-relaxed">
                Developed and maintained web applications using React and
                Node.js. Collaborated with cross-functional teams to design and
                implement new features, resulting in a 20% increase in user
                engagement.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Intern at Startup Inc.</h3>
              <p className="text-lg leading-relaxed">
                Assisted in the development of a mobile application using React
                Native. Conducted user testing and provided feedback that led to
                a more intuitive user interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
