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
      className="absolute inset-0 flex flex-col items-center justify-center text-center pt-20 md:pt-0"
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
        UMak CCIS Student Council presents
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
          background: "linear-gradient(160deg, #ffffff 30%, #E6E6FA 65%, #57CAFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 70px rgba(87,202,255,0.55))",
        }}
      >
        Git & GitHub<br />Study Jam
      </motion.h1>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60vh] max-w-3xl pointer-events-none opacity-40 mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2269.28203230275509%22_viewBox=%220_0_40_69.28203230275509%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M40_17.32050807568877l-20_11.547005383792515L0_17.32050807568877V-5.773502691896257l20-11.547005383792515_20_11.547005383792515V17.32050807568877zM40_51.96152422706631l-20_11.547005383792515L0_51.96152422706631V28.867513459481282l20-11.547005383792515_20_11.547005383792515V51.96152422706631z%22_fill=%22%23ffffff%22_fill-opacity=%220.03%22_fill-rule=%22evenodd%22/%3E%3C/svg%3E')]" />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.34, ease: "easeOut" as Easing }}
        className="text-[#E6E6FA]/80 text-center mt-6 py-4 px-6 w-[92%] max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] rounded-[2rem]"
        style={{
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          letterSpacing: "0.08em",
          lineHeight: 1.8,
        }}
      >
        Deploy your first digital universe. We're here to guide you through the web-building galaxy. 
        <strong className="text-white ml-2">Commit to learning, push your boundaries, and merge with the community!</strong>
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
