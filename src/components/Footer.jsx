import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 fixed bottom-0  bg-gray-400 text-center text-black-600 dark:text-white-400 text-sm  left-0 w-full py-2 shadow-inner z-50">
      <p>© {new Date().getFullYear()} QuoteFlare ✨ | Built with ❤️ by Erina</p>
      <p className="mt-2"></p>
    </footer>
  );
};

export default Footer;
