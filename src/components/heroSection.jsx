import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For menu and close icons
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import Marquee from "../components/marquee";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Added icons for the sidebar

// Aurora Color Set
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroSection = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Track if sidebar is open
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#1A1A29]"
    >
      {/* Aurora Effect */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {/* Navbar */}
      <div className="relative z-10 w-full max-w-5xl text-purple-200 flex justify-between items-center p-4">
        <div className="text-xl font-bold p-4 cursor-pointer">AE</div>
        
        {/* Menu Button for Small Screens */}
        <div className="lg:hidden">
          {isSidebarOpen ? (
            <FiX className="text-3xl cursor-pointer" onClick={toggleSidebar} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" onClick={toggleSidebar} />
          )}
        </div>

        {/* Navbar Links (Hidden on Small Screens) */}
        <div className="hidden lg:flex flex-row gap-4">
          <div className="p-4 cursor-pointer">Home</div>
          <div className="p-4 cursor-pointer">About</div>
          <div className="p-4 cursor-pointer">Project</div>
          <div className="p-4 cursor-pointer">Contact</div>
        </div>
      </div>

      {/* Sidebar/Tooltip Menu */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-16 right-4 bg-[#2c2f3e] text-purple-200 rounded-lg shadow-lg py-2 px-4 w-48"
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col justify-center items-start mt-4 p-6 py-20">
        <div className="text-lg mb-6 font-medium text-purple-200">Hello, I'm</div>
        <strong className="text-8xl font-bold mb-6 text-purple-700">Alysa Emilio</strong>
        <div className="w-full text-lg max-w-md mb-6 leading-relaxed text-slate-500">
          Freelancer, Computer Engineer & Aspiring FullStack Web Developer. I
          self-paced and I love what I do.
        </div>

        {/* Buttons */}
        <div className="w-full max-w-64 flex justify-between text-purple-200">
          <button className="px-8 py-2 ring-1 rounded-md ring-purple-700">About</button>
          <button className="px-8 py-2 ring-1 rounded-md ring-purple-700">Resume</button>
        </div>
      </div>

      {/* Marquee with Icons */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col justify-center items-start text-white mt-4 overflow-hidden">
        <Marquee />
      </div>
    </motion.div>
  );
};

export default HeroSection;
