import Image from "next/image";

// CHANGE THESE VARIABLES
const name = "Student 3";
const image = "/sparky.png"; // Add your image path here or use a URL

export default function StudentCard() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-[0_0_15px_rgba(87,202,255,0.1)] hover:shadow-[0_0_25px_rgba(87,202,255,0.3)] transition-all duration-300 w-full border border-[rgba(87,202,255,0.2)] group" style={{ aspectRatio: "2 / 3" }}>
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020d28] via-[#020d28]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-lg text-center tracking-wide" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
          {name}
        </h3>
      </div>
    </div>
  );
}
