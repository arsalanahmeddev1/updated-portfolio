import React from "react";
import { FaGithub, FaLinkedinIn, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/arsalanahmed-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href="https://github.com/arsalanahmeddev1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;