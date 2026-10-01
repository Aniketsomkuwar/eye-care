"use client";
import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Eye,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Calendar,
  Clock,
  Activity,
  Layers,
  ChevronRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface TreatmentItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  procedures: string[];
  clinicalHighlight: string;
  icon: React.ElementType;
}

const treatments: TreatmentItem[] = [
  {
    id: "ptosis",
    badge: "Functional & Aesthetic",
    title: "Ptosis Surgery",
    subtitle: "Droopy Eyelid Repair",
    description:
      "Lifting sagging upper eyelids that obscure your field of vision, causing hooded eyes and compensatory eyebrow strain.",
    procedures: [
      "Levator Muscle Resection",
      "Frontalis Sling Suspension",
      "Aponeurotic Repair",
    ],
    clinicalHighlight: "Symmetrical eyelid elevation & natural crease contouring",
    icon: Eye,
  },
  {
    id: "blepharoplasty",
    badge: "Aesthetic Rejuvenation",
    title: "Blepharoplasty",
    subtitle: "Eyelid Lift & Bag Removal",
    description:
      "Precision excision of excess sagging skin and under-eye fat pads to restore an energetic, youthful, and refreshed gaze.",
    procedures: [
      "Upper Eyelid Lift",
      "Lower Lid Fat Bag Removal",
      "Periocular Skin Tightening",
    ],
    clinicalHighlight: "Concealed incisions hidden inside natural eyelid folds",
    icon: Sparkles,
  },
  {
    id: "dcr",
    badge: "Lacrimal Drainage",
    title: "Tear Duct & DCR",
    subtitle: "Watery Eye Relief",
    description:
      "Permanent relief from persistent eye watering (Epiphora), recurrent eye discharge, and infections caused by blocked drainage ducts.",
    procedures: [
      "Dacryocystorhinostomy (DCR)",
      "Lacrimal Probing & Syringing",
      "Silicone Stent Intubation",
    ],
    clinicalHighlight: "Permanent bypass for clear, unobstructed tear outflow",
    icon: Activity,
  },
  {
    id: "reconstruction",
    badge: "Lid Realignment & Excision",
    title: "Entropion, Ectropion & Cysts",
    subtitle: "Eyelid Reconstruction",
    description:
      "Correction of eyelids turned inwards or outwards to protect the cornea from abrasive eyelashes, plus excision of eyelid lumps and lesions.",
    procedures: [
      "Lateral Tarsal Strip Repair",
      "Retractor Plication",
      "Chalazion & Lid Cyst Excision",
    ],
    clinicalHighlight: "Total corneal protection & anatomical lid alignment",
    icon: Layers,
  },
];

const symptoms = [
  "Drooping upper eyelids blocking upper or peripheral vision",
  "Persistent watery eyes (Epiphora) and sticky discharge",
  "Inward-turning lashes scratching the cornea with redness",
  "Heavy under-eye bags or drooping excess skin folds",
  "Painless visible lumps, chalazions, or non-healing lid nodules",
  "Difficulty closing the eyes completely during sleep",
];

const roadmapSteps = [
  {
    step: "01",
    title: "Diagnostic Evaluation",
    description:
      "High-magnification slit-lamp biomicroscopy, levator function measurement, and tear duct patency testing.",
  },
  {
    step: "02",
    title: "Aesthetic Planning",
    description:
      "Pre-operative eyelid symmetry mapping with customized incision placement hidden along natural crease lines.",
  },
  {
    step: "03",
    title: "Daycare Micro-Procedure",
    description:
      "Minimally invasive surgery under gentle local anesthesia with advanced micro-instrumentation and minimal tissue trauma.",
  },
  {
    step: "04",
    title: "Rapid Recovery & Review",
    description:
      "Post-operative healing guidelines, minimal swelling protocols, and scheduled clinical recovery follow-up.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function OculoplastySection() {
  return (
    <section
      id="oculoplasty"
      className="px-4 sm:px-8 lg:px-12 my-6 sm:my-20 w-full max-w-[1600px] mx-auto"
    >
      {/* Outer Card Wrapper with Subtle Modern Border & Shadow */}
      <div className="bg-gradient-to-b from-[#F9FBFF] via-white to-[#F8FAFC] rounded-[28px] sm:rounded-[44px] p-5 sm:p-10 lg:p-14 border border-blue-100/70 shadow-[0_20px_60px_-15px_rgba(30,91,249,0.07)]">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between items-center lg:items-end text-center lg:text-left gap-4 sm:gap-6 mb-6 sm:mb-14"
        >
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4 mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 text-[#1E5BF9]" />
              <span className="text-xs font-bold text-[#1E5BF9] tracking-wider uppercase">
                Apex Sub-Specialty • Ex-SR MAMC New Delhi
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-slate-950 font-heading tracking-tight leading-[1.14]">
              Advanced Oculoplasty &amp;
              <br />
              <span className="text-[#1E5BF9]">Eyelid Aesthetics</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4 text-center lg:text-left">
              Combining the delicate precision of ophthalmic surgery with facial aesthetic balance. Led by <strong>Dr. Ruchita Sontakke</strong> (Ex-Senior Resident at Maulana Azad Medical College &amp; Guru Nanak Eye Centre, New Delhi), providing comprehensive care for droopy eyelids, watery tear ducts, and cosmetic periocular rejuvenation in Nagpur.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center gap-3">
            <Link
              href="#book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1E5BF9] hover:bg-[#1647C9] text-white text-sm font-semibold rounded-full shadow-[0_4px_15px_rgba(30,91,249,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </motion.div>

        {/* 4-Card Treatments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-16"
        >
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <motion.div
                key={treatment.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 border border-slate-200/80 hover:border-blue-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(30,91,249,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-[#1E5BF9] text-[#1E5BF9] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-[#1E5BF9] bg-slate-100/80 group-hover:bg-blue-50 px-2.5 py-1 rounded-full transition-colors border border-transparent group-hover:border-blue-100">
                      {treatment.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-950 font-heading leading-tight group-hover:text-[#1E5BF9] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1E5BF9] mt-0.5 mb-3">
                    {treatment.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {treatment.description}
                  </p>

                  {/* Procedures List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Common Techniques
                    </span>
                    {treatment.procedures.map((proc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="leading-snug">{proc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Highlight Strip */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-[28px] text-[11px] text-slate-600 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#1E5BF9] flex-shrink-0" />
                  <span className="font-medium leading-tight">{treatment.clinicalHighlight}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Symptoms You Should Not Ignore Banner (Matches ASG Inspiration) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] sm:rounded-[36px] p-5 sm:p-8 border border-slate-200/80 shadow-xs mb-6 sm:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-slate-100 mb-4 sm:mb-6">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-heading">
                  Symptoms You Should Not Ignore
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Key indicators that call for a clinical evaluation by an oculoplastic specialist
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full self-start lg:self-auto">
              Clinical Checklist
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1E5BF9] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{symptom}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step-by-Step Patient Care Journey (ASG Flow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-[#1E5BF9] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Care Pathway
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading mt-3">
              Your Step-by-Step Oculoplasty Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From in-depth diagnostic consultation to comfortable daycare recovery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-[#1E5BF9] font-heading">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#1E5BF9]">
                  <span>Step {idx + 1} of 4</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Trust & Action Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-[#0B2568] to-slate-950 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
              Experienced Periocular Care
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading leading-snug">
              Concerned about eyelid drooping or continuous eye watering?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Consult Dr. Ruchita Sontakke in Gopal Nagar, Nagpur for an evidence-based diagnosis and scar-concealed treatment plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href="#book-appointment"
              className="px-6 py-3.5 bg-[#1E5BF9] hover:bg-[#1647C9] text-white text-xs sm:text-sm font-bold rounded-full shadow-[0_4px_15px_rgba(30,91,249,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Evaluation</span>
            </Link>
            <a
              href="https://wa.me/917058236990?text=Hello%20Dr.%20Ruchita,%20I%20would%20like%20to%20inquire%20about%20an%20Oculoplasty%20consultation%20at%20Jyoti%20Eye%20Care."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
