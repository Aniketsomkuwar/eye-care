"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, Eye, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ElementType;
  span?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "conference",
    title: "Faculty Speaker at ISCKRS 2022 National Meet",
    category: "Academic Pedigree",
    description:
      "Dr. Ruchita Sontakke presenting scientific findings on corneal biometry and premium IOL calculations before national ophthalmologists in New Delhi.",
    image: "/images/doctor-conference-speaker.jpg",
    icon: Award,
    span: "lg:col-span-6",
  },
  {
    id: "surgery-ot",
    title: "Modular Surgical Suite & Advanced Phaco OT",
    category: "Surgical Technology",
    description:
      "Equipped with Alcon phacoemulsification systems and high-magnification ophthalmic operating microscopes for sutureless cataract procedures.",
    image: "/images/doctor-ot-phaco.jpg",
    icon: Activity,
    span: "lg:col-span-6",
  },
  {
    id: "community-camp",
    title: "Community Outreach & Rural Vision Screenings",
    category: "Ethical Mission",
    description:
      "Extending ethical eye healthcare to rural and underserved elderly patients across Maharashtra through diagnostic field camps.",
    image: "/images/doctor-community-camp.jpg",
    icon: HeartHandshake,
    span: "lg:col-span-6",
  },
  {
    id: "oculoplasty-case",
    title: "Delicate Oculoplastic Reconstruction Outcomes",
    category: "Verified Results",
    description:
      "Documented photographic evidence of ptosis correction, eyelid tumor excision, and periocular reconstructive surgeries restoring full vision.",
    image: "/images/case-oculoplasty-angles.jpg",
    icon: Eye,
    span: "lg:col-span-6",
  },
];

export default function ClinicalShowcaseSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-12 my-12 sm:my-24 w-full max-w-[1600px] mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div>
          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-4">
            <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
            <span>REAL CLINICAL EVIDENCE</span>
            <span className="w-8 h-[1px] bg-slate-200" aria-hidden="true" />
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
              Surgical excellence
              <br className="hidden sm:inline" /> in action
            </h2>

          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed font-normal">
          Beyond textbook claims: authentic operating room environments, national faculty academic lectures, and verified surgical patient recoveries.
        </p>
      </motion.div>

      {/* Grid of Real Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
        {showcaseItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`${item.span || "lg:col-span-6"} group relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-white border border-slate-200/70 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(30,91,249,0.1)] transition-all flex flex-col justify-between`}
            >
              {/* Photo Stage */}
              <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-slate-900 uppercase tracking-wide shadow-md border border-slate-100">
                    <Icon className="w-3.5 h-3.5 text-[#1E5BF9]" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 sm:p-8 bg-white flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-heading tracking-tight leading-snug group-hover:text-[#1E5BF9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[11px] sm:text-xs">Jyoti Eye Care Clinical Archive</span>
                  <Link
                    href="#book-appointment"
                    className="inline-flex items-center gap-1 text-[#1E5BF9] hover:text-[#1647C9] group/link transition-colors self-start sm:self-auto"
                  >
                    <span>Consult Dr. Ruchita</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
