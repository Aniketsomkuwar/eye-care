"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, UserPlus, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface DoctorMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
}

const team: DoctorMember[] = [
  {
    name: "Dr. Ruchita Sontakke",
    role: "Chief Cataract & Oculoplastic Surgeon",
    credentials: "MBBS (IGGMC) • MS (MAMC Delhi) • DNB • Ex-SR MAMC",
    image: "/images/dr-ruchita-actual.png",
  },
  {
    name: "Dr. Arjun Sharma",
    role: "Senior Optometrist & Biometry Specialist",
    credentials: "B.Optom • Specialized in Premium IOL Power Calculations",
    image: "/images/team-optometrist.jpg",
  },
  {
    name: "Sneha Patil",
    role: "Ophthalmic Surgical Coordinator & OT Lead",
    credentials: "B.Sc Nursing • Certified Ophthalmic OT Protocol Specialist",
    image: "/images/team-coordinator.jpg",
  },
];

export default function DoctorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <section id="doctor" className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto">
      
      {/* Top Brand Divider & Appointment Pill (Matches haidigi.com) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-4">
          <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
          <span>JYOTI EYE CARE</span>
          <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
        </div>

        <Link
          href="#book-appointment"
          className="group inline-flex items-center gap-3 bg-[#1E5BF9] hover:bg-[#1647C9] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full shadow-[0_8px_25px_rgba(30,91,249,0.32)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Make an appointment</span>
          <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <UserPlus className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>

      {/* Main Grid: Left Description & Controls + Right 3 Doctor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Heading, Subtext & Controls */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-6"
        >
          <div>
            {/* Small Brand Icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1E5BF9] flex items-center justify-center shadow-sm">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-900 font-heading">Jyoti Eye Care</span>
            </div>

            {/* Title with Pill Tag */}
            <div className="flex flex-wrap items-baseline gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 font-heading tracking-tight leading-[1.12]">
                Meet the people
                <br />
                who care
              </h2>
              <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 self-start mt-2">
                &#123; Our doctors &#125;
              </span>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-sm mt-3">
              Our clinical team brings together elite surgical training from MAMC New Delhi, deep empathy, and an uncompromising dedication to protecting and restoring your sight.
            </p>
          </div>

          {/* Interactive Navigation Arrows & Dots */}
          <div className="mt-8 lg:mt-12 flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Doctor"
              className="w-11 h-11 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Doctor"
              className="w-11 h-11 rounded-full bg-[#1E5BF9] hover:bg-[#1647C9] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,91,249,0.35)]"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 ml-2">
              {team.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-[#1E5BF9]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </motion.div>

        {/* Right Column: 3 Elegant Doctor Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative rounded-[28px] sm:rounded-[34px] overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(30,91,249,0.08)] ${
                index === activeIndex
                  ? "border-[#1E5BF9]/50 ring-2 ring-[#1E5BF9]/20"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              {/* Doctor Image Container */}
              <div className="relative w-full h-[320px] sm:h-[350px] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Details Overlay at Bottom of Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-heading leading-tight drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-blue-200 font-medium mt-1 leading-tight drop-shadow-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bottom Credentials Strip */}
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-[11px] text-slate-500 font-medium line-clamp-2 leading-relaxed">
                  {member.credentials}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
