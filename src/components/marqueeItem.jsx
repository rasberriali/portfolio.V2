import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((icon, index) => {
          return (
            <div
              className="h-12 w-32  flex justify-center items-center" // Modified height and width
              key={index}
            >
              {icon} {/* Render the icon directly */}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((icon, index) => {
          return (
            <div
              className="h-12 w-32 flex justify-center items-center" // Modified height and width
              key={index}
            >
              {icon} {/* Render the icon directly */}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
