"use client";
import React from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 my-8 sm:my-14 w-full max-w-[1600px] mx-auto">
      {/* Large Rounded White Container (Matches haidigi.com Section 2) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-[32px] sm:rounded-[44px] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100"
      >
        
        {/* Subtle Brand Tag with Centered Lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-8"
        >
          <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
          <span>JYOTI EYE CARE</span>
          <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
        </motion.div>

        {/* Display Typography with Inline Badges (💡 and 👨‍⚕️👩‍⚕️) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight leading-[1.25] text-slate-950"
        >
          We combine innovative{" "}
          <motion.span
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-blue-50 text-xl sm:text-2xl mx-1 sm:mx-2 align-middle shadow-inner cursor-pointer"
            role="img"
            aria-label="Innovation lightbulb"
          >
            💡
          </motion.span>{" "}
          <span className="text-slate-400 font-bold">
            technologies with a human approach to make every patient
          </span>{" "}
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-flex items-center justify-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 text-lg sm:text-2xl mx-1 sm:mx-2 align-middle cursor-pointer"
            role="img"
            aria-label="Medical experts"
          >
            👨‍⚕️👩‍⚕️
          </motion.span>{" "}
          feel confident and calm.
        </motion.h2>

        {/* Subtext Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl mx-auto mt-6 text-sm sm:text-base text-slate-500 leading-relaxed font-normal"
        >
          Our clinic is a <strong className="text-slate-800 font-semibold">space of trust</strong>, modern microsurgical precision and ethical care, based on years of surgical experience and dedication to your vision health.
        </motion.p>

        {/* Pill Button: More about us */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="#about"
            className="group inline-flex items-center gap-3 bg-[#1E5BF9] hover:bg-[#184FD8] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full shadow-[0_8px_20px_rgba(30,91,249,0.28)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>More about us</span>
            <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <User className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
