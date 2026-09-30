"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Eye,
  ShieldCheck,
  Sparkles,
  Activity,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  image: string;
  icon: React.ElementType;
  aspectClass?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "ptosis-case",
    title: "Ptosis Surgery (Drooping Eyelid Repair)",
    category: "Ptosis Correction",
    tag: "Before & After",
    description:
      "Complete surgical elevation of severe right-eye ptosis restoring clear visual axis, pupil clearance, and natural upper eyelid crease symmetry.",
    image: "/images/surgical-case-ptosis.jpg",
    icon: Eye,
    aspectClass: "aspect-[9/16]",
  },
  {
    id: "eyelid-mass-case",
    title: "Extensive Eyelid Mass & Tumor Excision",
    category: "Tumor & Cyst Removal",
    tag: "Before & After",
    description:
      "Complete surgical resection of an extensive right upper eyelid tumor with reconstructive eyelid margin alignment and full functional closure.",
    image: "/images/surgical-case-eyelid-mass.jpg",
    icon: ShieldCheck,
    aspectClass: "aspect-[9/16]",
  },
  {
    id: "eyelid-cyst-case",
    title: "Upper Eyelid Cyst & Dermoid Removal",
    category: "Periocular Aesthetics",
    tag: "Pre & Post",
    description:
      "Multi-angle excision of prominent upper eyelid cyst with scar-free healing hidden along the natural eyebrow and eyelid contour.",
    image: "/images/surgical-case-eyelid-cyst.jpg",
    icon: Sparkles,
    aspectClass: "aspect-[9/16]",
  },
  {
    id: "trauma-repair-case",
    title: "Full-Thickness Eyelid Trauma & Tear Repair",
    category: "Trauma Reconstruction",
    tag: "Before & After",
    description:
      "Emergency micro-surgical repair of severe lower lid margin laceration and avulsion, fully restoring lid continuity and tear drainage.",
    image: "/images/surgical-case-trauma-repair.jpg",
    icon: Activity,
    aspectClass: "aspect-[9/16]",
  },
  {
    id: "prosthetic-eye-case",
    title: "Custom Artificial Eye for Facial Cosmesis",
    category: "Socket Reconstruction",
    tag: "Before & After",
    description:
      "Custom-crafted ocular prosthesis restoring natural facial balance, eyelid contour, and cosmetic symmetry matching the fellow eye.",
    image: "/images/surgical-case-prosthetic-eye.jpg",
    icon: Eye,
    aspectClass: "aspect-[9/16]",
  },
  {
    id: "conference-speaker",
    title: "Faculty Speaker at ISCKRS 2022 National Meet",
    category: "Academic Pedigree",
    tag: "Scientific Meet",
    description:
      "Dr. Ruchita Sontakke presenting scientific findings on corneal biometry, premium IOL calculations, and surgical precision before national ophthalmologists in New Delhi.",
    image: "/images/doctor-conference-speaker.jpg",
    icon: Award,
    aspectClass: "aspect-[9/16]",
  },
];

export default function ClinicalShowcaseSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <Eye className="w-4 h-4 text-[#1E5BF9]" />
            <span className="text-xs font-bold text-[#1E5BF9] tracking-wider uppercase">
              Documented Clinical Evidence
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            Surgical excellence
            <br className="hidden sm:inline" /> in action
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed font-normal">
          Authentic clinical cases and documented patient recoveries performed by <strong>Dr. Ruchita Sontakke</strong> — showcasing ptosis repair, eyelid tumor excision, trauma reconstruction, and ocular cosmesis.
        </p>
      </motion.div>

      {/* Grid of Real Evidence Cards (Full Image Visibility) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {showcaseItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(30,91,249,0.1)] transition-all flex flex-col justify-between"
            >
              {/* Photo Stage: Clean Dark Stage with object-contain so 100% of the image is visible */}
              <div
                onClick={() =>
                  setSelectedImage({
                    src: item.image,
                    title: item.title,
                    category: item.category,
                  })
                }
                className="relative w-full aspect-[9/16] max-h-[500px] bg-slate-950 flex items-center justify-center overflow-hidden cursor-zoom-in group/img"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain w-full h-full group-hover/img:scale-[1.02] transition-transform duration-500"
                  priority={index < 2}
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wide shadow-sm border border-slate-100">
                    <Icon className="w-3 h-3 text-[#1E5BF9]" />
                    {item.category}
                  </span>
                  <span className="bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Interactive Click-to-Zoom Cue */}
                <div className="absolute bottom-3 right-3 z-10 opacity-80 group-hover/img:opacity-100 transition-opacity bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 sm:p-7 bg-white flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-950 font-heading tracking-tight leading-snug group-hover:text-[#1E5BF9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 text-[11px]">Jyoti Eye Care Archive</span>
                  <Link
                    href="#book-appointment"
                    className="inline-flex items-center gap-1 text-[#1E5BF9] hover:text-[#1647C9] group/link transition-colors"
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

      {/* Lightbox Modal for 100% Full-Size Inspection */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center"
            >
              {/* Top Bar with Title and Close Button */}
              <div className="w-full flex items-center justify-between text-white pb-3 px-2">
                <div>
                  <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold truncate max-w-lg">
                    {selectedImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Close full view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Fully Visible Image */}
              <div className="relative w-full h-[78vh] flex items-center justify-center bg-black/60 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <p className="text-xs text-slate-400 mt-2 text-center">
                Click outside or press anywhere to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
