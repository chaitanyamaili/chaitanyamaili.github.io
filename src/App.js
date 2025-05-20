// src/App.js
import React from "react";

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="py-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <p className="mt-4 text-lg">
            I'm a Full Stack Developer with a passion for creating web applications. With experience in React, Node.js, and Tailwind CSS, I love building clean and functional user interfaces.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="mt-4">A description of the project.</p>
              <a href="https://github.com" className="mt-4 text-blue-600 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">Contact</h2>
          <p className="mt-4 text-lg text-center">
            You can reach me at <a href="mailto:example@example.com" className="text-blue-600 hover:underline">example@example.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;