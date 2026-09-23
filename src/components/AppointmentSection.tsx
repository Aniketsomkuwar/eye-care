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
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          
          <div>
            {/* Top Pill & Brand Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200/60">
                &#123; Book your visit &#125;
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                JYOTI EYE CARE CLINIC
              </span>
            </div>

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
                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center gap-3 bg-[#1E5BF9] hover:bg-[#1647C9] text-white font-bold text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(30,91,249,0.35)] transition-colors cursor-pointer"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <span className="text-xs text-slate-500 font-medium">
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

        {/* Right Side: Royal Blue Panel with Doctor & Floating Tags */}
        <div className="lg:col-span-5 bg-[#1E5BF9] relative flex flex-col justify-end items-center overflow-hidden min-h-[460px] lg:min-h-[560px]">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-400/30 blur-3xl pointer-events-none" />

          {/* Cutout Image of Doctor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[320px] sm:w-[380px] lg:w-[420px] max-w-full origin-bottom translate-y-1"
          >
            <Image
              src="/images/dr-ruchita-inner-border.png"
              alt="Dr. Ruchita Sontakke, Eye Surgeon"
              width={560}
              height={780}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* Floating Tag 1: • EXPERIENCED DOCTORS */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 top-[32%] z-20 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              Experienced Doctors
            </div>
          </motion.div>

          {/* Floating Tag 2: • CERTIFIED CLINIC */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-6 top-[20%] z-20 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              Certified Clinic
            </div>
          </motion.div>

          {/* Floating Tag 3: • MODERN EQUIPMENT */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute right-8 bottom-[20%] z-20 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-slate-100 text-[11px] font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              Modern Equipment
            </div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
