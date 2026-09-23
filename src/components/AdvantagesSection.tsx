"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Stethoscope, CheckCircle2 } from "lucide-react";

export default function AdvantagesSection() {
  return (
    <section id="about" className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto">
      
      {/* Split Advantages Card Container (Matches haidigi.com Section 4) */}
      <div className="rounded-[32px] sm:rounded-[44px] overflow-hidden bg-white border border-slate-200/70 shadow-[0_15px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Vibrant Royal Blue Panel with Doctor & Floating Tags */}
        <div className="lg:col-span-5 bg-[#1E5BF9] text-white p-8 sm:p-12 lg:p-14 relative flex flex-col justify-between overflow-hidden min-h-[520px] lg:min-h-[600px]">
          
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

          {/* Center/Bottom: Doctor Cutout & Floating Tags */}
          <div className="relative z-10 mt-auto pt-8 flex justify-center items-end">
            
            {/* Cutout Image of Dr. Ruchita */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px]">
              <Image
                src="/images/dr-ruchita-actual-clean.png"
                alt="Dr. Ruchita Sontakke, Chief Eye Surgeon"
                width={400}
                height={550}
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Floating Tag 1: • Experienced Surgeon */}
            <div className="absolute left-[-8px] top-[25%] pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                MAMC Pedigree
              </div>
            </div>

            {/* Floating Tag 2: • Certified Clinic */}
            <div className="absolute left-[-12px] bottom-[25%] pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Certified Clinic
              </div>
            </div>

            {/* Floating Tag 3: • Modern Equipment */}
            <div className="absolute right-[-10px] bottom-[35%] pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 hover:scale-105 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                Modern Equipment
              </div>
            </div>

          </div>

        </div>

        {/* Right Side: Clean White Background with 2x2 Stats Grid */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          
          {/* Top Pill Tag */}
          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
            <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
            <span className="text-[#1E5BF9]">&#123; ADVANTAGES &#125;</span>
          </div>

          {/* 2x2 Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Stat 1 */}
            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                12+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Years of surgical experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Dedicated ophthalmic clinical practice since 2014, with residency at MAMC New Delhi, elevating diagnostic precision and surgical outcomes.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                6+
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Sub-Specialty domains
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                From micro-incision cataract surgery to functional oculoplasty, dry eye tear rehabilitation, and pediatric eye screenings.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                98%
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Satisfied patients
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Documented positive patient feedback based on empathetic consultations, clear communication, and rapid visual recovery.
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="text-5xl sm:text-6xl font-extrabold text-[#1E5BF9] font-heading tracking-tight leading-none">
                99%
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-3">
                Diagnostic accuracy
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Backed by authentic Goldmann applanation tonometry, 40x slit-lamp biomicroscopy, and computerized objective refraction.
              </p>
            </div>

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

      </div>

      {/* Statement Quote Banner (Matches haidigi.com underneath Advantages) */}
      <div className="mt-16 sm:mt-24 text-center px-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-slate-950 max-w-4xl mx-auto">
          Medicine <span className="text-slate-400 font-bold">starts with</span> science,{" "}
          <span className="text-slate-400 font-bold">but true healing</span>{" "}
          <span className="relative inline-block text-slate-950">
            begins with trust
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1E5BF9]/40 rounded-full" />
          </span>
        </h3>
      </div>

    </section>
  );
}
