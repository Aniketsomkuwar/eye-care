"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  badge?: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Cataract Surgery",
    category: "Surgical",
    description: "Micro-incision Phacoemulsification, MSICS & premium IOL implants.",
  },
  {
    number: "02",
    title: "Oculoplasty",
    category: "Sub-Specialty",
    description: "Ptosis correction, cosmetic eyelid reconstruction & lacrimal care.",
    badge: "Ex-SR MAMC",
  },
  {
    number: "03",
    title: "Comprehensive Care",
    category: "Preventive",
    description: "Gold-standard Goldmann tonometry, dilated slit-lamp exams & refraction.",
  },
  {
    number: "04",
    title: "Dry Eye & CVS",
    category: "Surface Health",
    description: "Tear film rehabilitation & Computer Vision Syndrome treatment protocols.",
  },
  {
    number: "05",
    title: "Glaucoma & Diabetes",
    category: "Sight Preservation",
    description: "Early glaucoma detection, IOP charting & diabetic retinopathy screening.",
  },
  {
    number: "06",
    title: "Pediatric Screening",
    category: "Child Vision",
    description: "Amblyopia (lazy eye) prevention, squint evaluation & child refraction.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto">
      
      {/* Section Header (Matches haidigi.com) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14"
      >
        {/* Left: Heading with Pill Badge */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight">
              Our medical
              <br className="hidden sm:inline" /> services
            </h2>
            <span className="self-end mb-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
              &#123; What you get &#125;
            </span>
          </div>
        </div>

        {/* Right: Subtitle & See All Services Link */}
        <div className="lg:max-w-md flex flex-col items-start lg:items-end text-left lg:text-right">
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            We provide a full range of ophthalmic services, from precision diagnostic consultations to advanced microsurgical procedures.
          </p>
          <Link
            href="#book-appointment"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1E5BF9] hover:text-[#1647C9] mt-3 transition-colors"
          >
            <span>See all services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Services Grid (Matches haidigi.com 4-column + wide card layout) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        
        {/* Top 4 Cards (01 to 04) */}
        {services.slice(0, 4).map((service) => (
          <motion.div
            key={service.number}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative bg-white hover:bg-[#FAFBFD] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-slate-200/70 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(30,91,249,0.06)] transition-all flex flex-col justify-between min-h-[260px]"
          >
            {/* Top Number & Optional Badge */}
            <div className="flex items-start justify-between">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-200/80 font-heading leading-none select-none group-hover:text-blue-200 transition-colors">
                {service.number}
              </span>
              {service.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E5BF9] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Service Title */}
            <div className="my-auto pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight leading-snug group-hover:text-[#1E5BF9] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Action Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold">
              <Link
                href="#book-appointment"
                className="text-slate-700 hover:text-[#1E5BF9] flex items-center gap-1 transition-colors"
              >
                <span>Make an appointment</span>
              </Link>
              <span className="text-slate-400 font-medium">In-Clinic</span>
            </div>
          </motion.div>
        ))}

        {/* Bottom Row: Card 05, Card 06, and Span-2 Featured Banner */}
        {services.slice(4, 6).map((service) => (
          <motion.div
            key={service.number}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative bg-white hover:bg-[#FAFBFD] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-slate-200/70 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(30,91,249,0.06)] transition-all flex flex-col justify-between min-h-[260px]"
          >
            {/* Top Number */}
            <div className="flex items-start justify-between">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-200/80 font-heading leading-none select-none group-hover:text-blue-200 transition-colors">
                {service.number}
              </span>
            </div>

            {/* Service Title */}
            <div className="my-auto pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight leading-snug group-hover:text-[#1E5BF9] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom Action Strip */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold">
              <Link
                href="#book-appointment"
                className="text-slate-700 hover:text-[#1E5BF9] flex items-center gap-1 transition-colors"
              >
                <span>Make an appointment</span>
              </Link>
              <span className="text-slate-400 font-medium">In-Clinic</span>
            </div>
          </motion.div>
        ))}

        {/* Featured Wide Photo Card (Spans 2 columns on desktop) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="sm:col-span-2 relative rounded-[28px] sm:rounded-[32px] overflow-hidden min-h-[260px] shadow-[0_10px_35px_rgba(0,0,0,0.06)] group border border-slate-200/80"
        >
          <Image
            src="/images/doctor-ot-surgery.jpg"
            alt="Dr. Ruchita Sontakke performing microsurgery in the operating theatre"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
          
          {/* Floating Pill Badge (Matches haidigi.com) */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <span className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 shadow-lg border border-slate-100">
              Dr. Ruchita in Surgical OT • Advanced Microsurgery
            </span>
            <Link
              href="#doctor"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#1E5BF9] flex items-center justify-center transition-all shadow-md hover:scale-110"
              aria-label="Meet Dr. Ruchita Sontakke"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
