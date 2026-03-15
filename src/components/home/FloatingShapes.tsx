"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateTransform = (factor: number, invert = false) => {
    const offsetX = (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * factor;
    const offsetY = (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * factor;
    return {
      x: invert ? -offsetX : offsetX,
      y: invert ? -offsetY : offsetY,
    };
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Shape 1: Planet / Circle */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 bg-gradient-to-tr from-[#4B3078]/40 to-[#57CAFF]/40 backdrop-blur-sm"
        animate={{
          x: calculateTransform(0.02).x,
          y: calculateTransform(0.02).y,
          rotate: mousePosition.x * 0.05,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* Shape 2: Diamond */}
      <motion.div
        className="absolute top-[25%] right-[10%] md:right-[20%] w-16 h-16 md:w-24 md:h-24 border border-white/20 bg-gradient-to-bl from-[#E6E6FA]/20 to-[#2E1A47]/40 backdrop-blur-md"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          x: calculateTransform(0.04, true).x,
          y: calculateTransform(0.04, true).y,
          rotate: 45 + mousePosition.x * 0.02,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      />
      
      {/* Shape 3: Triangle/Polygon */}
      <motion.div
        className="absolute top-[65%] left-[5%] md:left-[15%] w-12 h-12 md:w-16 md:h-16 border border-[#57CAFF]/30 bg-[#57CAFF]/10 backdrop-blur-lg"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          x: calculateTransform(0.03).x,
          y: calculateTransform(0.03).y,
          rotate: mousePosition.y * 0.04,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      />

      {/* Shape 4: Floating Hexagon */}
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-16 h-16 md:w-20 md:h-20 border border-white/10 bg-[#4B3078]/20 backdrop-blur-md"
        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
        animate={{
          x: calculateTransform(0.05, true).x,
          y: calculateTransform(0.05, true).y,
          rotate: mousePosition.x * 0.03,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 18 }}
      />
    </div>
  );
}
