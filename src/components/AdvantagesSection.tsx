"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();

    function update(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * value));
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    }
    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AdvantagesSection() {
  return (
    <section id="about" className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto">
      
      {/* Split Advantages Card Container (Matches haidigi.com Section 4) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] sm:rounded-[44px] overflow-hidden bg-white border border-slate-200/70 shadow-[0_15px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12"
      >
        
        {/* Left Side: Vibrant Royal Blue Panel with Doctor & Floating Tags */}
        <div className="lg:col-span-5 bg-[#1E5BF9] text-white p-8 sm:p-12 lg:p-14 pb-0 sm:pb-0 lg:pb-0 relative flex flex-col justify-between overflow-hidden min-h-[580px] lg:min-h-[680px]">
          
          {/* Subtle Ambient Radial Light */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
          
          {/* Top Heading & Badge */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.08]">
              Why
              <br />
              choose us
            </h2>

            <div className="mt-4 inline-flex items-center gap-1.5 bg-white/15 border border-white/25 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-blue-50">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>PROVIDED BY: LICENSED MEDICAL EXPERTS</span>
            </div>
          </div>

          {/* Bottom Doctor Cutout & Floating Tags: Takes full presence anchored to bottom */}
          <div className="relative z-10 mt-auto flex justify-center items-end self-end w-full">
            
            {/* Cutout Image of Dr. Ruchita */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[340px] sm:w-[420px] lg:w-[460px] xl:w-[490px] max-w-full origin-bottom translate-y-1"
            >
              <Image
                src="/images/dr-ruchita-inner-border.png"
                alt="Dr. Ruchita Sontakke, Chief Eye Surgeon"
                width={560}
                height={780}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            {/* Floating Tag 1: • MAMC Pedigree */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-6px] sm:left-2 top-[35%] pointer-events-auto z-20"
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                MAMC Pedigree
              </div>
            </motion.div>

            {/* Floating Tag 2: • Certified Clinic */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute left-[-10px] sm:left-0 bottom-[18%] pointer-events-auto z-20"
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Certified Clinic
              </div>
            </motion.div>

            {/* Floating Tag 3: • Modern Equipment */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute right-[-6px] sm:right-2 top-[48%] pointer-events-auto z-20"
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Modern Equipment
              </div>
            </motion.div>

          </div>

        </div>

        {/* Right Side: Clean White Background with 2x2 Stats Grid */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          
          {/* Top Pill Tag */}
          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
            <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
            <span className="text-[#1E5BF9]">&#123; ADVANTAGES &#125;</span>
          </div>

          {/* 2x2 Statistics Grid with Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                <Counter value={12} suffix="+" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Years of surgical experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Dedicated ophthalmic clinical practice since 2014, with residency at MAMC New Delhi, elevating diagnostic precision and surgical outcomes.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                <Counter value={6} suffix="+" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Sub-Specialty domains
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                From micro-incision cataract surgery to functional oculoplasty, dry eye tear rehabilitation, and pediatric eye screenings.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                <Counter value={98} suffix="%" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Satisfied patients
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Documented positive patient feedback based on empathetic consultations, clear communication, and rapid visual recovery.
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                <Counter value={99} suffix="%" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Diagnostic accuracy
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Backed by authentic Goldmann applanation tonometry, 40x slit-lamp biomicroscopy, and computerized objective refraction.
              </p>
            </motion.div>

          </div>

          {/* Bottom Trust Guarantee Strip */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1E5BF9]" />
              Evidence-based medicine
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1E5BF9]" />
              NABH standards compliant
            </span>
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1E5BF9]" />
              Evening OPD convenience (6:30 - 9:30 PM)
            </span>
          </div>

        </div>

      </motion.div>

      {/* Statement Quote Banner (Matches haidigi.com underneath Advantages) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 sm:mt-24 text-center px-4"
      >
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-slate-950 max-w-4xl mx-auto">
          Medicine <span className="text-slate-400 font-bold">starts with</span> science,{" "}
          <span className="text-slate-400 font-bold">but true healing</span>{" "}
          <span className="relative inline-block text-slate-950">
            begins with trust
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1E5BF9]/40 rounded-full" />
          </span>
        </h3>
      </motion.div>

    </section>
  );
}
