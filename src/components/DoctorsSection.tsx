"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, Award, GraduationCap, Building2, CheckCircle2, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function DoctorsSection() {
  return (
    <section id="doctor" className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto">

      {/* Top Appointment Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center mb-10 sm:mb-14"
      >
        <Link
          href="#book-appointment"
          className="group inline-flex items-center gap-3 bg-[#1E5BF9] hover:bg-[#1647C9] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full shadow-[0_8px_25px_rgba(30,91,249,0.32)] transition-[background-color,transform,box-shadow] transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Make an appointment</span>
          <span className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <UserPlus className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>

      {/* Main Single Doctor Profile Card */}
      <div className="bg-white rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 border border-slate-100 shadow-[0_15px_50px_-10px_rgba(30,91,249,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Doctor Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Doctor Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 mb-5">
                <Award className="w-4 h-4 text-[#1E5BF9]" />
                <span className="text-xs font-bold text-[#1E5BF9] tracking-wider uppercase">
                  Lead Cataract & Oculoplastic Surgeon
                </span>
              </div>

              {/* Doctor Name & Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-slate-950 font-heading tracking-tight leading-[1.15] mb-3">
                Dr. Ruchita Sontakke
              </h2>
              <p className="text-base sm:text-lg text-[#1E5BF9] font-bold mb-5 font-heading">
                MBBS (IGGMC) • MS Ophthalmology (MAMC, New Delhi) • DNB • Ex-SR MAMC
              </p>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                Trained at India&apos;s premier ophthalmic center — <strong>Maulana Azad Medical College (MAMC)</strong> and <strong>Guru Nanak Eye Centre, New Delhi</strong>. Dr. Ruchita completed rigorous surgical residency and senior residency in high-volume micro-incision cataract surgery and reconstructive oculoplasty, bringing world-class surgical precision and ethical patient-first care to Nagpur.
              </p>

              {/* Credential Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0 text-[#1E5BF9]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">MS Ophthalmology</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Maulana Azad Medical College (MAMC), New Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0 text-[#1E5BF9]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Ex-Senior Resident</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Guru Nanak Eye Centre & MAMC, New Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0 text-[#1E5BF9]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">DNB Board Certified</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">National Board of Examinations (NBE), Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 flex items-center justify-center flex-shrink-0 text-[#1E5BF9]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">OPD Schedule</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Mon – Sat: 6:30 PM – 9:30 PM (Evening OPD)</p>
                  </div>
                </div>
              </div>

              {/* Specialization Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Micro-Incision Phacoemulsification
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Premium Toric & Multifocal IOLs
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Ptosis & Eyelid Reconstruction
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Computer Vision & Dry Eye Therapy
                </span>
              </div>

              {/* Online Patient Education & Instagram Highlight */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50/70 via-purple-50/40 to-blue-50/60 border border-rose-100/90 shadow-[0_4px_20px_rgba(225,48,108,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                        Continuous Eye Health Education
                      </h4>
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-100/80 px-2 py-0.5 rounded-full">
                        @eyecarewith_rs
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Dr. Ruchita is constantly posting educational online content — sharing verified tips on screen strain prevention, eye wellness, and myth-busting videos.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/eyecarewith_rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 px-4 py-2.5 rounded-full shadow-[0_4px_14px_rgba(220,39,67,0.3)] transition-all hover:scale-105 active:scale-95"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="#book-appointment"
                className="px-6 py-3 bg-[#1E5BF9] hover:bg-[#1647C9] text-white text-sm font-semibold rounded-full shadow-[0_4px_15px_rgba(30,91,249,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book OPD Consultation</span>
              </Link>
              <a
                href="https://wa.me/917058236990?text=Hello%20Dr.%20Ruchita,%20I%20would%20like%20to%20consult%20at%20Jyoti%20Eye%20Care."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm font-semibold rounded-full shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://in.linkedin.com/in/ruchita-sontakke-6283a8294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Ruchita Sontakke on LinkedIn"
                title="View LinkedIn Profile"
                className="px-4 py-3 bg-white hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-slate-200 text-sm font-semibold rounded-full shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Featured Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(30,91,249,0.12)] border border-slate-100 max-w-md mx-auto aspect-[4/5]">
              <Image
                src="/images/dr-ruchita-flowers.jpg"
                alt="Dr. Ruchita Sontakke, Chief Surgeon at Jyoti Eye Care Clinic"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Bottom Photo Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                    Consulting In Person
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading leading-tight drop-shadow-sm">
                  Dr. Ruchita Sontakke
                </h3>
                <p className="text-xs text-blue-200 font-medium mt-1 leading-relaxed">
                  Founder & Chief Eye Surgeon, Jyoti Eye Care
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80">
                  <span>Nagpur, Maharashtra</span>
                  <span className="text-amber-300 font-semibold">4.7 ★★★★★ (Google Verified)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
