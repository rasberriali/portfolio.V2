import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react"; // Import Hamburger from hamburger-react
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the hamburger menu state

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#1A1A29]">
      {/* Navbar */}
      <div className="relative z-10 w-full max-w-5xl flex justify-between items-center p-4 text-purple-200">
        <div className="text-xl font-bold cursor-pointer">AE</div>

        {/* Large Screen Navbar Links */}
        <div className="hidden lg:flex space-x-4">
          <div className="cursor-pointer p-2 hover:text-purple-500">Home</div>
          <div className="cursor-pointer p-2 hover:text-purple-500">About</div>
          <div className="cursor-pointer p-2 hover:text-purple-500">Projects</div>
          <div className="cursor-pointer p-2 hover:text-purple-500">Contact</div>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="#ffffff"
            rounded
            size={24}
          />
        </div>
      </div>

      {/* Tooltip Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-16 right-4 bg-[#2c2f3e] text-purple-200 rounded-lg shadow-lg py-2 px-4"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-500">
              <FaHome />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-500">
              <FaInfoCircle />
              <span>About</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-500">
              <FaProjectDiagram />
              <span>Projects</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-500">
              <FaEnvelope />
              <span>Contact</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
