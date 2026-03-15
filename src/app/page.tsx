"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { Starfield } from "@/components/home/Starfield";
import { FloatingShapes } from "@/components/home/FloatingShapes";
import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FunFactSection } from "@/components/home/FunFactSection";

// Import student components
import Student1 from "@/components/attendees/Student1";
import Student2 from "@/components/attendees/Student2";
import Student3 from "@/components/attendees/Student3";
import Student4 from "@/components/attendees/Student4";
import Student5 from "@/components/attendees/Student5";

import { Fragment, ReactNode } from "react";
import { motion } from "framer-motion";

// Object at the top of the landing page containing group as key and an array of components as value.
const attendeesData: Record<string, ReactNode[]> = {
  "Group 1": [
    <Student1 />,
    <Student1 />,
    <Student1 />,
    <Student1 />,
    <Student1 />,
    <Student1 />,
    <Student1 />,
    <Student1 />,
  ],
  "Group 2": [
    <Student2 />,
  ],
  "Group 3": [
    <Student3 />,
  ],
  "Group 4": [
    <Student4 />,
  ],
  "Group 5": [
    <Student5 />,
  ],
};

export default function Home() {
  const parallax = useParallax();

  const participantCount = Object.values(attendeesData).reduce((acc, group) => acc + group.length, 0);
  const groupCount = Object.keys(attendeesData).length;

  return (
    <div className="relative overflow-x-hidden">
      <Starfield />

      <main className="relative w-full">
        {/* ── Hero viewport ── */}
        <div className="relative w-full h-[80svh] min-h-[600px] md:h-[100vh]">
          {/* Background atmosphere image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
            <Image
              // src="/parallax/background.jpg"

              src="/parallax/multiverse-bg.jpg"
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
              background: "linear-gradient(to bottom, transparent 0%, #2E1A47 100%)",
            }}
          />

          <FloatingShapes />


          <Navbar />
          <HeroSection />
        </div>

        {/* ── Below-hero sections ── */}
        <div className="relative w-full" style={{ zIndex: 50 }}>

          {/* Attendees Gallery Section */}
          <section id="attendees" className="relative w-full px-4 sm:px-6 md:px-16 py-16 sm:py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #2E1A47 0%, #170d23 100%)" }}>
            {/* Adding Nebula Glows to the section */}
            <div className="absolute rounded-full blur-[100px] z-[1] pointer-events-none bg-[#4B3078]/40 w-[60vw] h-[60vw] top-0 left-[-20vw]" />
            <div className="absolute rounded-full blur-[100px] z-[1] pointer-events-none bg-[#57CAFF]/20 w-[50vw] h-[50vw] bottom-[-10vw] right-[-10vw]" />

            <div className="relative max-w-6xl mx-auto z-10">
              <div className="text-center mb-16 bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] rounded-[2rem] p-6 lg:p-8 mx-4 md:mx-0">
                <p className="uppercase font-semibold mb-3 tracking-widest text-[#E6E6FA]/80 text-xs">
                  Branch Out Your Network
                </p>
                <h2 className="font-black text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em", textShadow: "0 0 60px rgba(230,230,250,0.3)" }}>
                  Git to Know the Community
                </h2>
                <p className="mt-4 mx-auto" style={{ maxWidth: "45ch", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(230,230,250,0.7)" }}>
                  Our awesome participants organized into their designated study groups. We've pushed a ton of fresh faces to main! Let's commit to building an amazing local developer ecosystem.
                </p>
              </div>

              <div className="flex flex-col gap-20">
                {Object.entries(attendeesData).map(([groupName, members], groupIndex) => (
                  <div key={groupName} className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-[rgba(230,230,250,0.2)] pb-4 inline-block">
                      <span className="text-[#57CAFF] mr-3">#0{groupIndex + 1}</span>
                      {groupName}
                    </h3>

                    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-4 sm:px-0">
                      {members.map((Component, memberIndex) => (
                        <motion.div
                          key={`member-${memberIndex}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                        >
                          <Fragment key={memberIndex}>
                            {Component}
                          </Fragment>
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
            className="relative text-center py-10 border-t w-full overflow-hidden"
            style={{
              borderColor: "rgba(230,230,250,0.12)",
              background: "linear-gradient(to bottom, #170d23, #0a0512)",
            }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2269.28203230275509%22_viewBox=%220_0_40_69.28203230275509%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M40_17.32050807568877l-20_11.547005383792515L0_17.32050807568877V-5.773502691896257l20-11.547005383792515_20_11.547005383792515V17.32050807568877zM40_51.96152422706631l-20_11.547005383792515L0_51.96152422706631V28.867513459481282l20-11.547005383792515_20_11.547005383792515V51.96152422706631z%22_fill=%22%23ffffff%22_fill-opacity=%220.03%22_fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col text-left gap-1">
                <span className="font-bold text-white text-lg tracking-wide shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)] bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] px-4 py-2 mb-2 inline-block">Lead. Elevate. Innovate.</span>
                <span className="text-[0.7rem] uppercase tracking-widest text-[#E6E6FA]/80">Git & GitHub Study Jam 2026 | UMAK CCIS Week</span>
              </div>
              <div className="flex items-center gap-4 text-[0.7rem] uppercase tracking-widest text-white/50">
                <span>In partnership with</span>
                <span className="font-semibold text-white/90 border border-white/20 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]">GDG on Campus PUP</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
