import React from "react";
import { FaReact, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaJava, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiDjango } from "react-icons/di";
import { SiAmazondynamodb, SiVite, SiMongodb, SiJira, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiVercelFill } from "react-icons/ri";  
import { RiTailwindCssFill } from "react-icons/ri";
import { FiFramer } from "react-icons/fi";
import MarqueeItem from "../components/marqueeItem";


const Marquee = () => {
  const upperMarquee = [
    <FaReact size={32} className="text-blue-500" />, // React: blue
    <FaGithub size={32} className="text-black" />, // Github: black
    <FaAws size={32} className="text-orange-500" />, // AWS: orange
    <FaHtml5 size={32} className="text-orange-600" />, // HTML5: dark orange
    <FaCss3Alt size={32} className="text-blue-600" />, // CSS3: blue
    <VscVscode size={32} className="text-blue-800" />, // VSCode: dark blue
    <FaJava size={32} className="text-yellow-500" />, // Java: yellow
    <DiDjango size={32} className="text-blue-800" />, // VSCode: dark blue
    <SiAmazondynamodb size={32} className="text-yellow-500" />, // Java: yellow
    <RiVercelFill  size={32} className="text-yellow-500" />, // Java: yellow
  ];

  const lowerMarquee = [
    <FiFramer size={32} className="text-blue-500" />, // React: blue
    <FaFigma size={32} className="text-violet-600" />, // Github: black
    <RiTailwindCssFill size={32} className="text-orange-500" />, // AWS: orange
    <SiVite size={32} className="text-orange-600" />, // HTML5: dark orange
    <SiMongodb size={32} className="text-blue-600" />, // CSS3: blue
    <FaNodeJs size={32} className="text-blue-800" />, // VSCode: dark blue
    <FaPython size={32} className="text-yellow-500" />, // Java: yellow
    <SiJira size={32} className="text-blue-600" />, // CSS3: blue
    <SiMysql size={32} className="text-blue-800" />, // VSCode: dark blue
    <IoLogoJavascript size={32} className="text-blue-800" />, // VSCode: dark blue
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
