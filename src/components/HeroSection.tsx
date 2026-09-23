"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Stethoscope, Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#F8FAFC]">
      {/* Organic Curved Blue Wave on Right Side (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 lg:w-[45%] xl:w-[43%] pointer-events-none z-0"
      >
        <svg
          viewBox="0 0 500 900"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M 120 0 
               C 20 180, 0 320, 60 480 
               C 110 610, 160 720, 220 900 
               L 500 900 
               L 500 0 Z"
            fill="#1E5BF9"
          />
        </svg>
      </motion.div>

      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Main Hero Content Grid */}
      <div className="relative z-10 px-4 sm:px-12 lg:px-20 pt-4 sm:pt-6 lg:pt-8 pb-8 lg:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">

        {/* Left Column (Headlines & CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center pt-2 lg:pt-4"
        >
          {/* Title with Glossy 3D Blue Lens in 'o' */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] font-heading"
          >
            Innovati<span className="glossy-lens-sphere mx-0.5 inline-block animate-pulse" />n
            <br />
            Clinic
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-600 max-w-md leading-relaxed"
          >
            We treat <span className="text-slate-400 font-medium">not only symptoms</span>.{" "}
            <strong className="text-slate-950 font-bold">We care</strong>{" "}
            <span className="text-slate-600">about each person.</span>
          </motion.p>

          {/* Find Doctor / Book Visit CTA Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 flex items-center gap-4"
          >
            <Link
              href="#book-appointment"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#1E5BF9] to-[#3B82F6] hover:from-[#184FD8] hover:to-[#2563EB] text-white font-semibold pl-6 sm:pl-7 pr-2.5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(30,91,249,0.32)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="text-sm sm:text-base font-semibold">Find Doctor</span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </motion.div>

        </motion.div>

        {/* Center Column: Cutout of Dr. Ruchita Sontakke & Interactive Floating Badges */}
        <div className="lg:col-span-4 xl:col-span-4 relative flex justify-center items-end self-end h-[420px] sm:h-[540px] lg:h-[720px] pointer-events-none -mb-8 lg:-mb-12 mt-4 lg:mt-0">

          {/* Soft luminous aura backdrop on mobile to anchor portrait */}
          <div className="absolute inset-x-6 bottom-0 top-12 bg-gradient-to-t from-blue-600/15 via-blue-500/5 to-transparent rounded-t-[48px] pointer-events-none lg:hidden" />

          {/* Cutout Image of Doctor with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1.05 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] sm:w-[420px] lg:w-[500px] xl:w-[560px] max-w-full origin-bottom translate-y-1 sm:translate-y-2"
          >
            <Image
              src="/images/dr-ruchita-inner-border.png"
              alt="Dr. Ruchita Sontakke, Chief Ophthalmologist at Jyoti Eye Care"
              width={560}
              height={780}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            />
          </motion.div>

          {/* Badge 1: • Reliability (Left of waist with connector line and gentle float) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-1 sm:left-4 top-[54%] z-20 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center"
            >
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Reliability
              </div>
              <div className="w-8 h-[1px] bg-slate-300 hidden sm:block" />
            </motion.div>
          </motion.div>

          {/* Badge 2: • Experience (Right of shoulder with connector line and gentle float) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute right-1 sm:right-6 top-[28%] z-20 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative flex items-center flex-row-reverse"
            >
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Experience
              </div>
              <div className="w-8 h-[1px] bg-slate-300 hidden sm:block" />
            </motion.div>
          </motion.div>

          {/* Badge 3: • Professional (Lower right near forearm and gentle float) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute right-1 sm:right-2 top-[68%] z-20 pointer-events-auto"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="relative flex items-center flex-row-reverse"
            >
              <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Professional
              </div>
              <div className="w-6 h-[1px] bg-slate-300 hidden sm:block" />
            </motion.div>
          </motion.div>

        </div>

        {/* Right Column: With Advanced Technologies (Unified Blue Card on Mobile, Direct on Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 xl:col-span-3 text-white flex flex-col justify-between h-full pt-7 sm:pt-8 lg:pt-14 pb-7 sm:pb-8 lg:pb-4 z-10 px-6 sm:px-8 lg:px-0 lg:pl-6 bg-gradient-to-br from-[#1E5BF9] to-[#1242C2] rounded-[32px] sm:rounded-[36px] lg:bg-none lg:rounded-none shadow-xl lg:shadow-none mt-4 lg:mt-0"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-[1.08] tracking-tight font-heading">
              With
              <br />
              Advanced
              <br />
              Technologies
            </h2>

            <p className="mt-4 sm:mt-5 text-sm xl:text-base text-blue-100 max-w-xs leading-relaxed font-normal">
              The latest <strong className="text-white font-semibold">generation equipment</strong>, digital diagnostics, advanced microsurgical techniques. All dedicated to your vision health.
            </p>
          </div>

          {/* Bottom Testimonial & Review Stack */}
          <div className="mt-8 lg:mt-auto pt-6 lg:pt-8 border-t border-white/15 lg:border-t-0">
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xs">
              We appreciate <strong className="text-white font-bold">every feedback</strong>, because it inspires us to <strong className="text-white font-bold">become better</strong>.
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-4">
              <Link
                href="#patient-reviews"
                aria-label="Read patient reviews"
                className="w-11 h-11 rounded-full border border-white/30 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Overlapping Patient Reviewers */}
              <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full ring-2 ring-[#1E5BF9] bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-[11px] font-bold text-slate-800 shadow-sm">
                  RS
                </div>
                <div className="w-8 h-8 rounded-full ring-2 ring-[#1E5BF9] bg-gradient-to-tr from-rose-400 to-pink-200 flex items-center justify-center text-[11px] font-bold text-slate-800 shadow-sm">
                  PK
                </div>
                <div className="w-8 h-8 rounded-full ring-2 ring-[#1E5BF9] bg-gradient-to-tr from-teal-400 to-emerald-200 flex items-center justify-center text-[11px] font-bold text-slate-800 shadow-sm">
                  AJ
                </div>
                <div className="w-8 h-8 rounded-full ring-2 ring-[#1E5BF9] bg-blue-900/80 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  4.7★
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
