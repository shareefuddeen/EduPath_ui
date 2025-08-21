import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">EduPath</h3>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="space-x-4">
          <a href="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </a>
          <a
            href="/institutions"
            className="text-sm text-gray-300 hover:text-white"
          >
            Institutions
          </a>
          <a href="/careers" className="text-sm text-gray-300 hover:text-white">
            Careers
          </a>
          <a href="/contact" className="text-sm text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
