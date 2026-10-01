"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Heart, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    let animId: number;

    function update(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * value));
      if (progress < 1) {
        animId = requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    }
    animId = requestAnimationFrame(update);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AdvantagesSection() {
  return (
    <section id="about" className="px-4 sm:px-8 lg:px-12 my-6 sm:my-20 w-full max-w-[1600px] mx-auto">

      {/* Split Advantages Card Container (Matches haidigi.com Section 4) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[28px] sm:rounded-[44px] overflow-hidden bg-white border border-slate-200/70 shadow-[0_15px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12"
      >

        {/* Left Side: Real Clinical Photo Background - Rural Eye Camp */}
        <div className="lg:col-span-5 relative text-white overflow-hidden min-h-[340px] sm:min-h-[520px] lg:min-h-[680px]">

          {/* Real Photo: Dr. Ruchita at rural eye camp outreach */}
          <Image
            src="/images/dr-ruchita-eye-camp.jpg"
            alt="Dr. Ruchita Sontakke conducting free rural eye camp outreach in Maharashtra"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
            priority
          />

          {/* Subtle ambient radial light */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

          {/* Content over photo */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-12 lg:p-14">

            {/* Top: Heading & Badge */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.08]">
                Why
                <br />
                choose us
              </h2>

              <div className="mt-4 inline-flex items-center gap-1.5 bg-white/15 border border-white/25 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-blue-50">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>PROVIDED BY: LICENSED MEDICAL EXPERTS</span>
              </div>
            </div>

            {/* Bottom: Community outreach callout + floating tags */}
            <div className="mt-auto">
              {/* Floating trust pills */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                <span className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  MAMC Pedigree
                </span>
                <span className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Certified Clinic
                </span>
                <span className="bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                  Modern Equipment
                </span>
              </div>

              {/* Community outreach card — hidden on mobile */}
              <div className="hidden sm:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Free Rural Eye Camp Outreach</p>
                  <p className="text-[11px] text-blue-100 mt-0.5 leading-relaxed">
                    Dr. Ruchita regularly conducts free eye screenings in rural Maharashtra — bringing expert ophthalmic care to those without access.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 font-semibold mt-1.5">
                    <MapPin className="w-3 h-3" />
                    Rural Maharashtra Outreach
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Clean White Background with 2x2 Stats Grid */}
        <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-between">


          {/* 2x2 Statistics Grid with Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 text-center sm:text-left">

            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                <Counter value={6} suffix="+" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Years of surgical experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Dedicated ophthalmic clinical practice and surgical residency at MAMC New Delhi, elevating diagnostic precision and surgical outcomes.
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
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-slate-500">
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
        className="mt-8 sm:mt-24 text-center px-4"
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
