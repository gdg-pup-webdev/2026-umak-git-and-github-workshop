"use client";

import { useRef } from "react";
import { motion, useInView, type Easing } from "framer-motion";
import { ShinyButton } from "@/components/ui/ShinyButton";

export function HeroSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
      style={{ zIndex: 50, paddingBottom: "20vh" }}
    >
      
      {/* Subheading prefix */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as Easing }}
        className="leading-none select-none"
        style={{
          fontSize: "clamp(1rem, 3vw, 1.8rem)",
          fontWeight: 700,
          letterSpacing: "0.45em",
          color: "rgba(255,255,255,0.65)",
          textTransform: "uppercase",
          marginBottom: "1.5rem"
        }}
      >
        UMAK CCIS Week presents
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] as Easing }}
        className="font-black leading-none select-none px-4"
        style={{
          fontSize: "clamp(3rem, 10vw, 7.5rem)",
          letterSpacing: "-0.01em",
          background: "linear-gradient(160deg, #ffffff 30%, #a8daff 65%, #5ec4ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 70px rgba(0,180,255,0.55))",
        }}
      >
        Git & GitHub<br />Study Jam
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.34, ease: "easeOut" as Easing }}
        className="text-white/70 text-center mt-6 px-4"
        style={{
          fontSize: "clamp(0.85rem, 2vw, 1.2rem)",
          letterSpacing: "0.08em",
          lineHeight: 1.8,
          maxWidth: "45ch",
        }}
      >
        Commit to learning. Push your boundaries. Merge with the community.
        Join us and showcase your newly learned skills!
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/30 text-[0.55rem] uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px bg-white/25"
          style={{ height: 28 }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as Easing }}
        />
      </motion.div>
    </section>
  );
}
