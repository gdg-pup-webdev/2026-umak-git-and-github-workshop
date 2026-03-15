"use client";

import { useRef } from "react";
import { motion, useInView, type Easing } from "framer-motion";

export function FunFactSection({ participantCount, groupCount }: { participantCount: number, groupCount: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const customStats = [
    { value: participantCount.toString(), label: "Participants", sub: "Eager to learn Git" },
    { value: groupCount.toString(), label: "Study Groups", sub: "Collaborative learning" },
    { value: "100%", label: "Hands-on", sub: "Real-world workflow" },
    { value: "∞", label: "Commits", sub: "Pushed to GitHub" }
  ];

  return (
    <section
      ref={ref}
      className="relative w-full px-4 sm:px-6 md:px-16 py-16 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #170d23 0%, #2E1A47 50%, #4B3078 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2269.28203230275509%22_viewBox=%220_0_40_69.28203230275509%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M40_17.32050807568877l-20_11.547005383792515L0_17.32050807568877V-5.773502691896257l20-11.547005383792515_20_11.547005383792515V17.32050807568877zM40_51.96152422706631l-20_11.547005383792515L0_51.96152422706631V28.867513459481282l20-11.547005383792515_20_11.547005383792515V51.96152422706631z%22_fill=%22%23ffffff%22_fill-opacity=%220.03%22_fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(75,48,120,0.4) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as Easing }}
        >
          <p
            className="uppercase font-semibold mb-3 tracking-widest"
            style={{ fontSize: "0.6rem", color: "#E6E6FA" }}
          >
            Repository Stats
          </p>
          <h2
            className="font-black text-white"
            style={{
               fontSize: "clamp(2rem, 6vw, 3.5rem)",
               letterSpacing: "0.02em",
               textShadow: "0 0 60px rgba(230,230,250,0.3)",
            }}
          >
            Project Master Branch
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] mx-4 md:mx-0"
          style={{
            border: "1px solid rgba(230,230,250,0.14)",
            boxShadow: "0 8px 60px rgba(46,26,71,0.5)",
          }}
        >
          {customStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 * i, ease: "easeOut" as Easing }}
              whileHover={{ background: "rgba(230,230,250,0.08)" }}
              className="flex flex-col gap-3 p-9 text-center backdrop-blur-md"
              style={{
                background: "linear-gradient(180deg, rgba(46,26,71,0.6), rgba(23,13,35,0.8))",
                borderRight: i < 3 ? "1px solid rgba(230,230,250,0.10)" : undefined,
                borderBottom: "1px solid rgba(230,230,250,0.10)",
              }}
            >
              <p
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#57CAFF",
                  textShadow: "0 0 40px rgba(87,202,255,0.5)",
                }}
              >
                {s.value}
              </p>
              <p
                className="font-bold uppercase text-white"
                style={{ fontSize: "0.68rem", letterSpacing: "0.2em" }}
              >
                {s.label}
              </p>
              <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "rgba(230,230,250,0.6)" }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
