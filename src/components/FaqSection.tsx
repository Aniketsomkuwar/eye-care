"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    number: "01",
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring your current spectacles, any previous ophthalmic prescriptions, and a list of ongoing medications (especially for diabetes or hypertension). If dilated fundus examination is planned, bringing a relative to escort you is advised.",
  },
  {
    number: "02",
    question: "What are your OPD consultation visiting hours?",
    answer:
      "Dr. Ruchita Sontakke conducts in-clinic diagnostic evaluations Monday to Saturday from 6:30 PM to 9:30 PM. Morning hours are dedicated to advanced microsurgical operating room procedures.",
  },
  {
    number: "03",
    question: "How quick is recovery after cataract surgery?",
    answer:
      "With micro-incision phacoemulsification and sutureless MSICS, visual rehabilitation begins within 24 to 48 hours. Patients can comfortably resume reading and routine indoor activities within a few days.",
  },
  {
    number: "04",
    question: "What is Oculoplasty and who needs it?",
    answer:
      "Oculoplasty is the specialized surgical sub-discipline dealing with functional and aesthetic disorders of the eyelids, tear drainage system, and periocular skin. Ideal for drooping eyelids (ptosis), inward-turning lashes (entropion), and cosmetic eyelid reconstruction.",
  },
  {
    number: "05",
    question: "Do you treat Computer Vision Syndrome and dry eyes?",
    answer:
      "Yes. We conduct complete ocular surface evaluations including tear film breakup time (TBUT) and provide customized lubricating formulations alongside digital ergonomic guidance for screen users.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative px-4 sm:px-8 lg:px-12 py-16 sm:py-24 w-full max-w-[1600px] mx-auto overflow-hidden">

      {/* Giant Faint Watermark Text in Background */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none z-0 px-2 sm:px-8 opacity-35">
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Answers
        </span>
        <span className="text-6xl sm:text-8xl lg:text-[11rem] font-extrabold font-heading text-blue-100 tracking-tighter">
          Questions
        </span>
      </div>

      {/* Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
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
              href="#book-appointment"
              className="text-xs sm:text-sm font-semibold text-[#1E5BF9] underline underline-offset-4 hover:text-[#1546C7] transition-colors"
            >
              Contact clinic desk
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scan-Friendly Accordion Stack */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`rounded-[24px] sm:rounded-[28px] border transition-all duration-300 overflow-hidden bg-white ${
                isOpen
                  ? "border-blue-200 shadow-[0_12px_35px_rgba(30,91,249,0.08)] ring-1 ring-blue-100"
                  : "border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <span className={`text-base sm:text-lg font-extrabold font-heading transition-colors ${
                    isOpen ? "text-[#1E5BF9]" : "text-slate-400"
                  }`}>
                    {faq.number}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading tracking-tight leading-snug">
                    {faq.question}
                  </h3>
                </div>

                <div className={`w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all ${
                  isOpen
                    ? "bg-[#1E5BF9] text-white rotate-180 shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100/80 mt-1">
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
