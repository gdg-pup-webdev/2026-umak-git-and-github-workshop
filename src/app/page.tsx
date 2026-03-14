"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { Starfield } from "@/components/home/Starfield";
import { CloudLayers } from "@/components/home/CloudLayers";
import { Mascots } from "@/components/home/Mascots";
import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FunFactSection } from "@/components/home/FunFactSection";

// Import student components
import Student1 from "@/components/attendees/Student1";
import Student2 from "@/components/attendees/Student2";
import Student3 from "@/components/attendees/Student3";
import Student4 from "@/components/attendees/Student4";
import Student5 from "@/components/attendees/Student5";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Object at the top of the landing page containing group as key and another object as value.
// The object value contains each members name and their components.
const attendeesData: Record<string, Record<string, ReactNode>> = {
  "Group 1": {
    "Student 1": <Student1 />,
    "Student 2": <Student1 />,
    "Student 3": <Student1 />,
    "Student 4": <Student1 />,
    "Student 5": <Student1 />,
    "Student 6": <Student1 />,
    "Student 7": <Student1 />,
    "Student 8": <Student1 />,
  },
  "Group 2": {
    "Student 2": <Student2 />,
  },
  "Group 3": {
    "Student 3": <Student3 />,
  },
  "Group 4": {
    "Student 4": <Student4 />,
  },
  "Group 5": {
    "Student 5": <Student5 />,
  },
};

export default function Home() {
  const parallax = useParallax();

  const participantCount = Object.values(attendeesData).reduce((acc, group) => acc + Object.keys(group).length, 0);
  const groupCount = Object.keys(attendeesData).length;

  return (
    <div className="relative overflow-x-hidden">
      <Starfield />

      <main className="relative w-full">
        {/* ── Hero viewport ── */}
        <div className="relative w-full" style={{ height: "100vh" }}>
          {/* Background atmosphere image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            <Image
              src="/parallax/background.jpg"
              alt=""
              fill
              className="object-cover"
              style={{ opacity: 0.28 }}
              priority
            />
          </div>

          {/* Bottom bleed — feathers hero into sections below */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              zIndex: 58,
              height: "22vh",
              background: "linear-gradient(to bottom, transparent 0%, #000614 100%)",
            }}
          />

          <CloudLayers
            c2f5X={parallax.c2f5X}
            sc2b2Y={parallax.sc2b2Y}
            c2f5MY={parallax.c2f5MY}
            c2b2X={parallax.c2b2X}
            sc1f1Y={parallax.sc1f1Y}
            c2b2MY={parallax.c2b2MY}
            c1m2X={parallax.c1m2X}
            sc1m2Y={parallax.sc1m2Y}
            c1m2MY={parallax.c1m2MY}
            c1f1X={parallax.c1f1X}
            sc2f5Y={parallax.sc2f5Y}
            c1f1MY={parallax.c1f1MY}
          />

          <Mascots />

          <Navbar />
          <HeroSection />
        </div>

        {/* ── Below-hero sections ── */}
        <div className="relative w-full" style={{ zIndex: 50 }}>

          {/* Attendees Gallery Section */}
          <section id="attendees" className="relative w-full px-6 md:px-16 py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #000614 0%, #020d28 100%)" }}>
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="uppercase font-semibold mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#57CAFF" }}>
                  Git & GitHub Study Jam
                </p>
                <h2 className="font-black text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em", textShadow: "0 0 60px rgba(87,202,255,0.22)" }}>
                  Meet the Attendees
                </h2>
                <p className="mt-4 mx-auto" style={{ maxWidth: "45ch", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(180,210,255,0.6)" }}>
                  Our awesome participants organized into their designated study groups.
                </p>
              </div>

              <div className="flex flex-col gap-20">
                {Object.entries(attendeesData).map(([groupName, members], groupIndex) => (
                  <div key={groupName} className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-[rgba(87,202,255,0.2)] pb-4 inline-block">
                      <span className="text-[#57CAFF] mr-3">#0{groupIndex + 1}</span>
                      {groupName}
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {Object.entries(members).map(([memberName, Component], memberIndex) => (
                        <motion.div
                          key={memberName}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                        >
                          {Component}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FunFactSection participantCount={participantCount} groupCount={groupCount} />

          <footer
            className="relative text-center py-10 border-t w-full"
            style={{
              borderColor: "rgba(87,202,255,0.12)",
              background: "linear-gradient(to bottom, #000614, #020d28)",
            }}
          >
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-left gap-1">
                <span className="font-bold text-white text-lg tracking-wide shadow-sm">Git & GitHub Study Jam 2026</span>
                <span className="text-[0.7rem] uppercase tracking-widest text-[#57CAFF]/80">UMAK CCIS Week</span>
              </div>
              <div className="flex items-center gap-4 text-[0.7rem] uppercase tracking-widest text-white/40">
                <span>In partnership with</span>
                <span className="font-semibold text-white/80 border border-white/10 px-3 py-1.5 rounded-full bg-white/5">GDG on Campus PUP</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
