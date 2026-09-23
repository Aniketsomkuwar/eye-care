"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  date: string;
  rating: number;
  treatment: string;
  image: string;
  quote: string;
  avatarColor: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vinod Sahare",
    location: "Dharampeth, Nagpur",
    date: "18.08.2026",
    rating: 5,
    treatment: "Micro-Incision Cataract Surgery (Foldable IOL)",
    image: "/images/clinic-consultation.jpg",
    quote:
      "The precision and surgical technology here are outstanding. My cataract recovery was so smooth and I was back to clear vision within 24 hours. Dr. Ruchita explained every single step with such reassuring care.",
    avatarColor: "from-blue-500 to-indigo-600",
    initials: "VS",
  },
  {
    name: "Sunita Deshmukh",
    location: "Wardha Road, Nagpur",
    date: "24.07.2026",
    rating: 5,
    treatment: "Functional Ptosis & Eyelid Reconstruction",
    image: "/images/clinic-consultation.jpg",
    quote:
      "My drooping eyelid was obstructing my upper vision for two years. Dr. Ruchita's MAMC surgical pedigree really shows. The symmetry is immaculate and the delicate incision healed with zero noticeable mark.",
    avatarColor: "from-rose-500 to-pink-600",
    initials: "SD",
  },
  {
    name: "Kunal Mehra",
    location: "IT Park, Nagpur",
    date: "04.09.2026",
    rating: 5,
    treatment: "Computer Vision Syndrome & Dry Eye Therapy",
    image: "/images/clinic-consultation.jpg",
    quote:
      "Best ophthalmic diagnostic exam in Nagpur. No rushed two-minute visit; Dr. Ruchita spent 30 minutes evaluating my tear film breakup time and explained screen ergonomics and lubricating protocols thoroughly.",
    avatarColor: "from-emerald-500 to-teal-600",
    initials: "KM",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="patient-reviews" className="relative px-4 sm:px-8 lg:px-12 py-16 sm:py-24 w-full max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Giant Faint Watermark Text in Background (Matches haidigi.com) */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none z-0 px-2 sm:px-8 opacity-40">
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Review
        </span>
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Patient
        </span>
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight">
            What our
            <br />
            patients say
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#1E5BF9]" />
          <span>&#123; REVIEW &#125;</span>
        </div>
      </div>

      {/* 3D Floating Review Card (Matches haidigi.com) */}
      <div className="relative z-10 max-w-xl mx-auto">
        
        {/* Layered Card Drop Shadow (haidigi perspective effect) */}
        <div className="absolute -inset-2 sm:-inset-3 bg-[#1E5BF9]/10 rounded-[36px] sm:rounded-[44px] -rotate-1 transform scale-98 pointer-events-none" />

        {/* Main Card */}
        <div className="relative bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-100 shadow-[0_25px_60px_-15px_rgba(30,91,249,0.15)] flex flex-col justify-between transition-all">
          
          {/* Card Top: Patient Info & Rating */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full bg-gradient-to-tr ${current.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}
              >
                {current.initials}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-tight">
                  {current.name}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-[11px] text-slate-400 font-medium ml-1">
                    {current.location}
                  </span>
                </div>
              </div>
            </div>

            <span className="text-xs font-medium text-slate-400 tabular-nums">
              {current.date}
            </span>
          </div>

          {/* Procedure Tag */}
          <div className="mb-4">
            <span className="text-[11px] font-semibold text-[#1E5BF9] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {current.treatment}
            </span>
          </div>

          {/* Center Image */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden mb-6 shadow-sm border border-slate-100">
            <Image
              src={current.image}
              alt={`Consultation for ${current.name}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>

          {/* Review Quote */}
          <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-8">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Card Bottom: Brand Rule, Indicator Dots & Next Arrow Button */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              JYOTI EYE CARE
            </span>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-6 bg-[#1E5BF9]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="w-11 h-11 rounded-full bg-[#1E5BF9] hover:bg-[#1647C9] text-white flex items-center justify-center transition-all shadow-[0_4px_15px_rgba(30,91,249,0.35)] hover:scale-105 active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
