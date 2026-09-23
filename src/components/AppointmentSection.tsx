"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function AppointmentSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Cataract Surgery");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Direct to WhatsApp with pre-filled message
    const text = `Hello Jyoti Eye Care, I would like to book an appointment.%0A%0A*Name:* ${encodeURIComponent(
      name
    )}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Date:* ${encodeURIComponent(
      date || "Earliest available"
    )}%0A*Service:* ${encodeURIComponent(
      service
    )}%0A*OPD Slot:* Evening 6:30 PM - 9:30 PM`;

    window.open(`https://wa.me/918830383320?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="book-appointment"
      className="px-4 sm:px-8 lg:px-12 my-12 sm:my-20 w-full max-w-[1600px] mx-auto"
    >
      {/* Big Split Appointment Card (Matches haidigi.com) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] sm:rounded-[44px] overflow-hidden bg-white border border-slate-200/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12"
      >

        {/* Left Side: Booking Form */}
        <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-between">

          <div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 font-heading tracking-tight leading-[1.12] mb-8">
              Are you ready to make
              <br />
              an appointment?
            </h2>

            {/* Form */}
            {submitted ? (
              <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center my-6">
                <CheckCircle2 className="w-12 h-12 text-[#1E5BF9] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Reservation Initiated!
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                  Our clinic desk has received your request. We will confirm your evening OPD slot (6:30 PM - 9:30 PM) shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-semibold text-[#1E5BF9] underline underline-offset-4"
                >
                  Book another consultation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="patient-name"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Your name *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-slate-900 text-sm font-medium px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#1E5BF9] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Phone number *
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="+91 94221 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-slate-900 text-sm font-medium px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#1E5BF9] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Input */}
                  <div>
                    <label
                      htmlFor="appointment-date"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Preferred date
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-slate-800 text-sm font-medium px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#1E5BF9] focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <label
                      htmlFor="service-select"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Service required
                    </label>
                    <select
                      id="service-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] focus:bg-white text-slate-800 text-sm font-medium px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#1E5BF9] focus:ring-2 focus:ring-blue-100 outline-none appearance-none transition-all cursor-pointer"
                    >
                      <option value="Cataract Surgery">Cataract Surgery (Phaco / MSICS)</option>
                      <option value="Oculoplasty & Eyelids">Oculoplasty &amp; Eyelid Surgery</option>
                      <option value="Comprehensive Eye Exam">Comprehensive Eye Checkup</option>
                      <option value="Dry Eye & Screen Fatigue">Dry Eye / Screen Strain</option>
                      <option value="Glaucoma & Diabetic Clearance">Glaucoma / Diabetic Screening</option>
                      <option value="Pediatric Eye Screening">Pediatric Eye Screening</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                </div>

                {/* Submit Row: Button + Guarantee Text */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-[#1E5BF9] hover:bg-[#1647C9] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(30,91,249,0.35)] transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                    Guaranteed response within <strong className="text-slate-900 font-bold">15 minutes</strong>
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* OPD Note at Bottom of Form */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap items-center gap-4">
            <span className="font-semibold text-slate-700">OPD Consultation Hours:</span>
            <span>Mon - Sat: 6:30 PM - 9:30 PM (Mornings reserved for surgical OT)</span>
          </div>

        </div>

        {/* Right Side: Bespoke Clinical Consultation Suite & OPD Assurance Stage */}
        <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden min-h-[440px] sm:min-h-[500px] lg:min-h-[600px] p-6 sm:p-10 lg:p-12 text-white">

          {/* Authentic Clinic Consultation Photo Background */}
          <Image
            src="/images/clinic-consultation.jpg"
            alt="Dr. Ruchita Sontakke in clinic consultation at Jyoti Eye Care"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
          {/* Deep Navy/Blue Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E20] via-[#070E20]/80 to-[#1E5BF9]/40" />

          {/* Top Stage Capsule */}
          <div className="relative z-10 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase text-white border border-white/30 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Evening OPD Active
            </span>
            <span className="text-[11px] font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Gopal Nagar, Nagpur
            </span>
          </div>

          {/* Center Stage: What to Expect Feature Box */}
          <div className="relative z-10 my-auto py-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-snug">
              Direct consultation with Dr. Ruchita Sontakke
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-2.5 leading-relaxed font-normal">
              Every consultation includes comprehensive anterior segment examination, high-magnification slit-lamp biomicroscopy, and honest surgical guidance.
            </p>

            {/* Quick Consultation Assurances */}
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-white/95 font-medium bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Thorough 30-min evaluation — never a rushed 2-minute visit</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/95 font-medium bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct senior surgeon evaluation (MAMC New Delhi pedigree)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/95 font-medium bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Instant confirmation to WhatsApp &amp; priority scheduling</span>
              </div>
            </div>
          </div>

          {/* Bottom OPD Timings Pill */}
          <div className="relative z-10 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-300 block text-[10px] uppercase font-semibold tracking-wider">Consultation Schedule</span>
              <span className="text-white font-bold text-sm">Mon - Sat: 6:30 PM - 9:30 PM</span>
            </div>
            <a
              href="tel:+918830383320"
              className="inline-flex items-center gap-1.5 bg-white text-[#1E5BF9] hover:bg-blue-50 px-3.5 py-2 rounded-full font-bold text-xs shadow-md transition-transform hover:scale-105"
            >
              <span>Call Helpline</span>
            </a>
          </div>

        </div>

      </motion.div>

    </section>
  );
}
