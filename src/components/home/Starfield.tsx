"use client";

import { STARS, SHOOTING_STARS } from "@/lib/constants";

export function Starfield() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2269.28203230275509%22_viewBox=%220_0_40_69.28203230275509%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath_d=%22M40_17.32050807568877l-20_11.547005383792515L0_17.32050807568877V-5.773502691896257l20-11.547005383792515_20_11.547005383792515V17.32050807568877zM40_51.96152422706631l-20_11.547005383792515L0_51.96152422706631V28.867513459481282l20-11.547005383792515_20_11.547005383792515V51.96152422706631z%22_fill=%22%23ffffff%22_fill-opacity=%220.03%22_fill-rule=%22evenodd%22/%3E%3C/svg%3E')]"
      style={{
        backgroundColor: "#2E1A47",
        backgroundImage:
          "linear-gradient(180deg, rgba(75,48,120,0.4) 0%, rgba(46,26,71,0.8) 100%)",
      }}
    >
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.5); }
        }
        @keyframes shootingStar {
          0%   { transform: translateX(0) translateY(0); opacity: 0; width: 0px; }
          8%   { opacity: 0.9; }
          100% { transform: translateX(-420px) translateY(86px); opacity: 0; width: 130px; }
        }
        @keyframes horizonPulse {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.42; }
        }
      `}</style>

      {STARS.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}

      {SHOOTING_STARS.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            top: s.top,
            right: "6%",
            height: "1px",
            width: 0,
            background:
              "linear-gradient(to left, transparent 0%, rgba(255,255,255,0.85) 100%)",
            animation: `shootingStar ${s.duration} ease-in ${s.delay} infinite`,
          }}
        />
      ))}

      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "60%",
          height: "26%",
          background:
            "radial-gradient(ellipse 90% 50% at 50% 50%, rgba(230,230,250,0.15) 0%, transparent 100%)",
          animation: "horizonPulse 7s ease-in-out infinite",
        }}
      />
    </div>
  );
}
