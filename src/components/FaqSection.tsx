"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring your current spectacles, any previous ophthalmic prescriptions, and a list of ongoing medications (especially for diabetes or hypertension). If dilated fundus examination is planned, bringing a relative to escort you is advised.",
  },
  {
    question: "What are your OPD consultation visiting hours?",
    answer:
      "Dr. Ruchita Sontakke conducts in-clinic diagnostic evaluations Monday to Saturday from 6:30 PM to 9:30 PM. Morning hours are dedicated to advanced microsurgical operating room procedures.",
  },
  {
    question: "How quick is recovery after cataract surgery?",
    answer:
      "With micro-incision phacoemulsification and sutureless MSICS, visual rehabilitation begins within 24 to 48 hours. Patients can comfortably resume reading and routine indoor activities within a few days.",
  },
  {
    question: "What is Oculoplasty and who needs it?",
    answer:
      "Oculoplasty is the specialized surgical sub-discipline dealing with functional and aesthetic disorders of the eyelids, tear drainage system, and periocular skin. Ideal for drooping eyelids (ptosis), inward-turning lashes (entropion), and cosmetic eyelid reconstruction.",
  },
  {
    question: "Do you treat Computer Vision Syndrome and dry eyes?",
    answer:
      "Yes. We conduct complete ocular surface evaluations including tear film breakup time (TBUT) and provide customized lubricating formulations alongside digital ergonomic guidance for screen users.",
  },
];

export default function FaqSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = faqs[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % faqs.length);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-8 lg:px-12 py-16 sm:py-24 w-full max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Giant Faint Watermark Text in Background (Matches haidigi.com) */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none z-0 px-2 sm:px-8 opacity-35">
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Answers
        </span>
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Questions
        </span>
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            Questions
            <br />
            and answers
          </h2>
        </div>

        <div className="flex items-center gap-6 self-start md:self-end">
          <div className="text-left md:text-right">
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              If you have any other questions, please let us know.
            </p>
            <Link
              href="#contact"
              className="text-xs sm:text-sm font-semibold text-[#1E5BF9] underline underline-offset-4 hover:text-[#1546C7] transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#1E5BF9]" />
            <span>&#123; FAQ &#125;</span>
          </div>
        </div>
      </div>

      {/* Floating FAQ Card (Matches haidigi.com) */}
      <div className="relative z-10 max-w-xl mx-auto">
        
        {/* Layered Drop Shadow */}
        <div className="absolute -inset-2 sm:-inset-3 bg-[#1E5BF9]/8 rounded-[36px] sm:rounded-[44px] rotate-1 transform scale-98 pointer-events-none" />

        {/* Main Card */}
        <div className="relative bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-slate-100 shadow-[0_25px_60px_-15px_rgba(30,91,249,0.12)] min-h-[300px] flex flex-col justify-between transition-all">
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight leading-snug mb-4">
              {current.question}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {current.answer}
            </p>
          </div>

          {/* Bottom Strip: Brand Rule, Indicator Dots & Next Arrow Button */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              JYOTI EYE CARE
            </span>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {faqs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to question ${idx + 1}`}
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
              aria-label="Next Question"
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
